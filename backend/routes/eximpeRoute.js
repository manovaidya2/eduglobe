// import express from "express";

// const router = express.Router();

// const eximpeHeaders = () => ({
//   "Content-Type": "application/json",
//   "X-API-Version": process.env.EXIMPE_API_VERSION || "2.0.0",
//   "X-Client-ID": process.env.EXIMPE_CLIENT_ID,
//   "X-Client-Secret": process.env.EXIMPE_CLIENT_SECRET,
// });

// router.post("/create-payment", async (req, res) => {
//   try {
//     const { amount, name, email, phone } = req.body;

//     if (!amount || Number(amount) <= 0) {
//       return res.status(400).json({
//         success: false,
//         message: "Valid amount required",
//       });
//     }

//     const onlyDigits = String(phone || "").replace(/\D/g, "");

//     const finalPhone =
//       onlyDigits.length === 10
//         ? `+91${onlyDigits}`
//         : onlyDigits.length === 12 && onlyDigits.startsWith("91")
//         ? `+${onlyDigits}`
//         : "+919999999999";

//     const payload = {
//       amount: Number(amount).toFixed(2),
//       currency: "INR",
//       reference_id: `EDUGLOBE-${Date.now()}`,
//       return_url: process.env.PAYMENT_SUCCESS_URL,
//       collection_mode: "hosted_payment",
//       mop_type: "upi",

//       buyer: {
//         name: name?.trim() || "EduGlobe Customer",
//         email: email?.trim() || "business@eduglobe.ae",
//         phone: finalPhone,
//         address: {
//           line_1: "EduGlobe Services FZ LLC",
//           city: "Mumbai",
//           state: "Maharashtra",
//           postal_code: "400001",
//         },
//       },

//       product: {
//         name: "EduGlobe Service Payment",
//         description:
//           "Certification, consultancy, testing and institutional services",
//         type_of_goods: "service",
//       },

//       invoice: {
//         number: `INV-${Date.now()}`,
//         date: new Date().toISOString().split("T")[0],
//       },
//     };

//     const url = `${process.env.EXIMPE_BASE_URL}/pg/orders/`;

//     console.log("EximPe URL:", url);
//     console.log("EximPe Payload:", JSON.stringify(payload, null, 2));

//     const response = await fetch(url, {
//       method: "POST",
//       headers: eximpeHeaders(),
//       body: JSON.stringify(payload),
//     });

//     const rawText = await response.text();

//     console.log("EximPe Status:", response.status);
//     console.log("EximPe Raw Response:", rawText);

//     let data;

//     try {
//       data = JSON.parse(rawText);
//     } catch (error) {
//       return res.status(500).json({
//         success: false,
//         message:
//           "EximPe returned HTML/non-JSON response. Production Base URL ya live API access issue hai.",
//         status: response.status,
//         raw: rawText.slice(0, 700),
//       });
//     }

//     if (!response.ok) {
//       return res.status(response.status).json({
//         success: false,
//         message:
//           data?.error?.message ||
//           data?.errors?.[0]?.detail ||
//           data?.message ||
//           "EximPe order creation failed",
//         error: data,
//       });
//     }

//     return res.json({
//       success: true,
//       session_id: data?.data?.session_id,
//       order_id: data?.data?.order_id,
//       payment_url:
//         data?.data?.payment_url ||
//         data?.data?.checkout_url ||
//         data?.data?.redirect_url,
//       message: data?.message || "Payment order created",
//       data,
//     });
//   } catch (error) {
//     console.error("Create payment error:", error);

//     return res.status(500).json({
//       success: false,
//       message: error.message || "Internal server error",
//     });
//   }
// });

// router.post(
//   "/webhook",
//   express.urlencoded({ extended: true }),
//   express.json(),
//   async (req, res) => {
//     try {
//       console.log("EximPe Webhook Headers:", req.headers);
//       console.log("EximPe Webhook Body:", req.body);

//       return res.status(200).json({
//         success: true,
//         message: "Webhook received",
//       });
//     } catch (error) {
//       console.error("Webhook error:", error);

//       return res.status(500).json({
//         success: false,
//         message: "Webhook failed",
//       });
//     }
//   }
// );

// export default router;




import express from "express";

const router = express.Router();

const eximpeHeaders = () => ({
  "Content-Type": "application/json",
  "X-API-Version": process.env.EXIMPE_API_VERSION || "2.0.0",
  "X-Client-ID": process.env.EXIMPE_CLIENT_ID,
  "X-Client-Secret": process.env.EXIMPE_CLIENT_SECRET,
});

router.post("/create-payment", async (req, res) => {
  try {
    const {
      amount,
      name,
      email,
      phone,
      country,
      state,
      pincode,
    } = req.body;

    if (!amount || Number(amount) <= 0) {
      return res.status(400).json({
        success: false,
        message: "Valid amount required",
      });
    }

    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: "Name required",
      });
    }

    if (!email || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: "Email required",
      });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Valid email required",
      });
    }

    const onlyDigits = String(phone || "").replace(/\D/g, "");

    if (onlyDigits.length !== 10) {
      return res.status(400).json({
        success: false,
        message: "Valid 10 digit phone number required",
      });
    }

    if (!country || !country.trim()) {
      return res.status(400).json({
        success: false,
        message: "Country required",
      });
    }

    if (!state || !state.trim()) {
      return res.status(400).json({
        success: false,
        message: "State required",
      });
    }

    if (!/^[1-9][0-9]{5}$/.test(String(pincode || ""))) {
      return res.status(400).json({
        success: false,
        message: "Valid Indian pincode required",
      });
    }

    const finalPhone = `+91${onlyDigits}`;

    const payload = {
      amount: Number(amount).toFixed(2),
      currency: "INR",
      reference_id: `EDUGLOBE-${Date.now()}`,
      return_url: process.env.PAYMENT_SUCCESS_URL,
      collection_mode: "hosted_payment",
      mop_type: "upi",

      buyer: {
        name: name.trim(),
        email: email.trim(),
        phone: finalPhone,
        address: {
          line_1: "EduGlobe Services FZ LLC",
          city: state.trim(),
          state: state.trim(),
          country: country.trim(),
          postal_code: String(pincode).trim(),
        },
      },

      product: {
        name: "EduGlobe Service Payment",
        description:
          "Certification, consultancy, testing and institutional services",
        type_of_goods: "service",
      },

      invoice: {
        number: `INV-${Date.now()}`,
        date: new Date().toISOString().split("T")[0],
      },
    };

    const url = `${process.env.EXIMPE_BASE_URL}/pg/orders/`;

    console.log("EximPe URL:", url);
    console.log("EximPe Payload:", JSON.stringify(payload, null, 2));

    const response = await fetch(url, {
      method: "POST",
      headers: eximpeHeaders(),
      body: JSON.stringify(payload),
    });

    const rawText = await response.text();

    console.log("EximPe Status:", response.status);
    console.log("EximPe Raw Response:", rawText);

    let data;

    try {
      data = JSON.parse(rawText);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          "EximPe returned HTML/non-JSON response. Production Base URL ya live API access issue hai.",
        status: response.status,
        raw: rawText.slice(0, 700),
      });
    }

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        message:
          data?.error?.message ||
          data?.errors?.[0]?.detail ||
          data?.message ||
          "EximPe order creation failed",
        error: data,
      });
    }

    return res.json({
      success: true,
      session_id: data?.data?.session_id,
      order_id: data?.data?.order_id,
      payment_url:
        data?.data?.payment_url ||
        data?.data?.checkout_url ||
        data?.data?.redirect_url,
      message: data?.message || "Payment order created",
      data,
    });
  } catch (error) {
    console.error("Create payment error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
});

router.post(
  "/webhook",
  express.urlencoded({ extended: true }),
  express.json(),
  async (req, res) => {
    try {
      console.log("EximPe Webhook Headers:", req.headers);
      console.log("EximPe Webhook Body:", req.body);

      return res.status(200).json({
        success: true,
        message: "Webhook received",
      });
    } catch (error) {
      console.error("Webhook error:", error);

      return res.status(500).json({
        success: false,
        message: "Webhook failed",
      });
    }
  }
);

export default router;