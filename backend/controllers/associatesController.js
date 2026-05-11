import Associates from "../models/associates.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create
export const createAssociates = async (req, res) => {
  try {
    const { name, location, type, website, displayOrder } = req.body;

    let logo = "";
    if (req.files?.logo) {
      logo = req.files.logo[0].filename;
    }

    // Details: JSON string se parse karo
    let details = [];
    if (req.body.details) {
      try {
        details = JSON.parse(req.body.details);
      } catch {
        details = [];
      }
    }

    // Documents: name aur file dono match karo by index
    let documents = [];
    if (req.files?.documents) {
      const documentNames = Array.isArray(req.body.documentNames)
        ? req.body.documentNames
        : req.body.documentNames
        ? [req.body.documentNames]
        : [];

      documents = req.files.documents.map((file, index) => ({
        name: documentNames[index] || file.originalname,
        file: file.filename,
      }));
    }

    const newAssociates = new Associates({
      name,
      location,
      type,
      website,
      logo,
      displayOrder: displayOrder ? parseInt(displayOrder) : 0,
      details,
      documents,
    });

    await newAssociates.save();

    res.status(201).json({
      message: "Associates created successfully",
      data: newAssociates,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all associates
export const getAllAssociates = async (req, res) => {
  try {
    // Sort by displayOrder first (ascending), then by createdAt (newest first for same order)
    const associates = await Associates.find()
      .sort({ displayOrder: 1, createdAt: -1 });
    
    res.status(200).json({
      success: true,
      data: associates,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};


// Get single associate by ID
export const getAssociateById = async (req, res) => {
  try {
    const { id } = req.params;
    const associate = await Associates.findById(id);

    if (!associate) {
      return res.status(404).json({ message: "Associate not found" });
    }

    res.status(200).json({
      success: true,
      data: associate,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update associate
export const updateAssociate = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location, type, website, displayOrder } = req.body;

    const existingAssociate = await Associates.findById(id);
    if (!existingAssociate) {
      return res.status(404).json({ message: "Associate not found" });
    }

    // Logo handle
    let logo = existingAssociate.logo;
    if (req.files?.logo) {
      if (existingAssociate.logo) {
        const oldLogoPath = path.join(__dirname, "../uploads", existingAssociate.logo);
        if (fs.existsSync(oldLogoPath)) fs.unlinkSync(oldLogoPath);
      }
      logo = req.files.logo[0].filename;
    }

    // Details update
    let details = existingAssociate.details;
    if (req.body.details) {
      try {
        details = JSON.parse(req.body.details);
      } catch {
        details = existingAssociate.details;
      }
    }

    // Naye documents existing mein append karo
    let documents = existingAssociate.documents;
    if (req.files?.documents && req.files.documents.length > 0) {
      const documentNames = Array.isArray(req.body.documentNames)
        ? req.body.documentNames
        : req.body.documentNames
        ? [req.body.documentNames]
        : [];

      const newDocuments = req.files.documents.map((file, index) => ({
        name: documentNames[index] || file.originalname,
        file: file.filename,
      }));

      documents = [...documents, ...newDocuments];
    }

    const updatedAssociate = await Associates.findByIdAndUpdate(
      id,
      { 
        name, 
        location, 
        type, 
        website, 
        logo, 
        displayOrder: displayOrder ? parseInt(displayOrder) : existingAssociate.displayOrder,
        details, 
        documents 
      },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      message: "Associate updated successfully",
      data: updatedAssociate,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete single document by docIndex
export const deleteDocument = async (req, res) => {
  try {
    const { id, docIndex } = req.params;
    const associate = await Associates.findById(id);

    if (!associate) {
      return res.status(404).json({ message: "Associate not found" });
    }

    const docToDelete = associate.documents[docIndex];
    if (docToDelete?.file) {
      const docPath = path.join(__dirname, "../uploads", docToDelete.file);
      if (fs.existsSync(docPath)) fs.unlinkSync(docPath);
    }

    associate.documents.splice(docIndex, 1);
    await associate.save();

    res.status(200).json({
      message: "Document deleted successfully",
      data: associate,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete associate completely
export const deleteAssociate = async (req, res) => {
  try {
    const { id } = req.params;
    const associate = await Associates.findById(id);

    if (!associate) {
      return res.status(404).json({ message: "Associate not found" });
    }

    if (associate.logo) {
      const logoPath = path.join(__dirname, "../uploads", associate.logo);
      if (fs.existsSync(logoPath)) fs.unlinkSync(logoPath);
    }

    // Ab documents objects hain — file property se path lena hai
    associate.documents.forEach((doc) => {
      if (doc?.file) {
        const docPath = path.join(__dirname, "../uploads", doc.file);
        if (fs.existsSync(docPath)) fs.unlinkSync(docPath);
      }
    });

    await Associates.findByIdAndDelete(id);

    res.status(200).json({ message: "Associate deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};


export const reorderAssociates = async (req, res) => {
  try {
    const { orders } = req.body; // orders should be [{ id: "associateId", displayOrder: 1 }, ...]
    
    const updatePromises = orders.map(order => 
      Associates.findByIdAndUpdate(order.id, { displayOrder: order.displayOrder })
    );
    
    await Promise.all(updatePromises);
    
    const updatedAssociates = await Associates.find().sort({ displayOrder: 1, createdAt: -1 });
    
    res.status(200).json({
      success: true,
      message: "Order updated successfully",
      data: updatedAssociates,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};