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
//     const {
//       amount,
//       name,
//       email,
//       phone,
//       country,
//       state,
//       pincode,
//     } = req.body;

//     if (!amount || Number(amount) <= 0) {
//       return res.status(400).json({
//         success: false,
//         message: "Valid amount required",
//       });
//     }

//     if (!name || !name.trim()) {
//       return res.status(400).json({
//         success: false,
//         message: "Name required",
//       });
//     }

//     if (!email || !email.trim()) {
//       return res.status(400).json({
//         success: false,
//         message: "Email required",
//       });
//     }

//     if (!/^\S+@\S+\.\S+$/.test(email)) {
//       return res.status(400).json({
//         success: false,
//         message: "Valid email required",
//       });
//     }

//     const onlyDigits = String(phone || "").replace(/\D/g, "");

//     if (onlyDigits.length !== 10) {
//       return res.status(400).json({
//         success: false,
//         message: "Valid 10 digit phone number required",
//       });
//     }

//     if (!country || !country.trim()) {
//       return res.status(400).json({
//         success: false,
//         message: "Country required",
//       });
//     }

//     if (!state || !state.trim()) {
//       return res.status(400).json({
//         success: false,
//         message: "State required",
//       });
//     }

//     if (!/^[1-9][0-9]{5}$/.test(String(pincode || ""))) {
//       return res.status(400).json({
//         success: false,
//         message: "Valid Indian pincode required",
//       });
//     }

//     const finalPhone = `+91${onlyDigits}`;

//     const payload = {
//       amount: Number(amount).toFixed(2),
//       currency: "INR",
//       reference_id: `EDUGLOBE-${Date.now()}`,
//       return_url: process.env.PAYMENT_SUCCESS_URL,
//       collection_mode: "hosted_payment",
//       mop_type: "upi",

//       buyer: {
//         name: name.trim(),
//         email: email.trim(),
//         phone: finalPhone,
//         address: {
//           line_1: "EduGlobe Services FZ LLC",
//           city: state.trim(),
//           state: state.trim(),
//           country: country.trim(),
//           postal_code: String(pincode).trim(),
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
import Payment from "../models/Payment.js";

const router = express.Router();

const eximpeHeaders = () => ({
  "Content-Type": "application/json",
  "X-API-Version": process.env.EXIMPE_API_VERSION || "2.0.0",
  "X-Client-ID": process.env.EXIMPE_CLIENT_ID,
  "X-Client-Secret": process.env.EXIMPE_CLIENT_SECRET,
});

const normalizeStatus = (value) => {
  if (!value) return "";
  return String(value).trim().toUpperCase();
};

const isSuccessEvent = (eventType, paymentStatus, extendedStatus) => {
  const event = normalizeStatus(eventType);
  const status = normalizeStatus(paymentStatus);
  const ext = normalizeStatus(extendedStatus);
  return ["PAYMENT_SUCCESSFUL", "CAPTURED", "SUCCESS", "VERIFIED"].includes(event) ||
         ["CAPTURED", "SUCCESS", "PAYMENT_SUCCESSFUL"].includes(status) ||
         ["SUCCESS", "PAYMENT_SUCCESSFUL"].includes(ext);
};

const isFailedEvent = (eventType, paymentStatus, extendedStatus) => {
  const event = normalizeStatus(eventType);
  const status = normalizeStatus(paymentStatus);
  const ext = normalizeStatus(extendedStatus);
  return ["PAYMENT_FAILED", "FAILED"].includes(event) ||
         ["FAILED", "PAYMENT_FAILED"].includes(status) ||
         ["FAILED"].includes(ext);
};

router.post("/create-payment", async (req, res) => {
  try {
    const { amount, name, email, phone, country, state, pincode } = req.body;

    if (!amount || Number(amount) <= 0) {
      return res.status(400).json({ success: false, message: "Valid amount required" });
    }

    if (!name?.trim()) {
      return res.status(400).json({ success: false, message: "Name required" });
    }

    if (!email?.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ success: false, message: "Valid email required" });
    }

    const onlyDigits = String(phone || "").replace(/\D/g, "");

    if (!/^[6-9][0-9]{9}$/.test(onlyDigits)) {
      return res.status(400).json({
        success: false,
        message: "Valid Indian mobile number required",
      });
    }

    if (!country?.trim()) {
      return res.status(400).json({ success: false, message: "Country required" });
    }

    if (!state?.trim()) {
      return res.status(400).json({ success: false, message: "State required" });
    }

    if (!/^[1-9][0-9]{5}$/.test(String(pincode || ""))) {
      return res.status(400).json({
        success: false,
        message: "Valid Indian pincode required",
      });
    }

    const finalPhone = `+91${onlyDigits}`;
    const referenceId = `EDUGLOBE-${Date.now()}`;

    const payload = {
      amount: Number(amount).toFixed(2),
      currency: "INR",
      reference_id: referenceId,
      return_url: `${process.env.PAYMENT_SUCCESS_URL}?ref=${referenceId}`,
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
        description: "Certification, consultancy, testing and institutional services",
        type_of_goods: "service",
      },

      invoice: {
        number: `INV-${Date.now()}`,
        date: new Date().toISOString().split("T")[0],
      },
    };

    const response = await fetch(`${process.env.EXIMPE_BASE_URL}/pg/orders/`, {
      method: "POST",
      headers: eximpeHeaders(),
      body: JSON.stringify(payload),
    });

    const rawText = await response.text();

    let data;
    try {
      data = JSON.parse(rawText);
    } catch {
      return res.status(500).json({
        success: false,
        message: "EximPe returned HTML/non-JSON response",
        status: response.status,
        raw: rawText.slice(0, 700),
      });
    }

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        message: data?.error?.message || data?.message || "EximPe order creation failed",
        error: data,
      });
    }

    const sessionId = data?.data?.session_id;
    const orderId = data?.data?.order_id;

    await Payment.create({
      reference_id: referenceId,
      order_id: orderId,
      session_id: sessionId,

      amount: Number(amount),
      currency: "INR",

      name: name.trim(),
      email: email.trim(),
      phone: finalPhone,
      country: country.trim(),
      state: state.trim(),
      pincode: String(pincode).trim(),

      status: "PENDING",
      order_response: data,
    });

    return res.json({
      success: true,
      session_id: sessionId,
      order_id: orderId,
      reference_id: referenceId,
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

// router.post(
//   "/webhook",
//   express.urlencoded({ extended: true }),
//   express.json(),
//   async (req, res) => {
//     try {
//       console.log("EximPe Webhook Headers:", req.headers);
//       console.log("EximPe Webhook Body:", JSON.stringify(req.body, null, 2));

//       const webhook = req.body;
//       const paymentData = webhook?.data || {};
//       const orderId = paymentData?.order_id;

//       if (!orderId) {
//         return res.status(200).json({
//           success: true,
//           message: "Webhook received but order_id missing",
//         });
//       }

//       const updatedPayment = await Payment.findOneAndUpdate(
//         { order_id: orderId },
//         {
//           status: webhook?.event_type || paymentData?.extended_status || paymentData?.status,
//           payment_status: paymentData?.status,
//           payment_id: paymentData?.payment_id,
//           mop_type: paymentData?.mop_type,
//           bank_ref_num: paymentData?.bank_ref_num,
//           utr: paymentData?.utr,
//           payment_completed_at: paymentData?.payment_completed_at,
//           webhook_payload: webhook,
//         },
//         { new: true }
//       );

//       console.log("Updated Payment:", updatedPayment);

//       return res.status(200).json({
//         success: true,
//         message: "Webhook received",
//         updated: !!updatedPayment,
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

router.post(
  "/webhook",
  express.urlencoded({ extended: true }),
  express.json(),
  async (req, res) => {
    try {
      console.log("EximPe Webhook Body:", JSON.stringify(req.body, null, 2));

      const webhook = req.body;
      const paymentData = webhook?.data || {};
      const orderId = paymentData?.order_id || webhook?.order_id || webhook?.data?.order_id;

      if (!orderId) {
        return res.status(200).json({
          success: true,
          message: "Webhook received but order_id missing",
        });
      }

      const eventType = webhook?.event_type;
      const paymentStatus = paymentData?.status;
      const extendedStatus = paymentData?.extended_status;
      const verificationStatus = paymentData?.verification_status;

      let finalStatus = "PENDING";

      if (isSuccessEvent(eventType, paymentStatus, extendedStatus)) {
        finalStatus = "SUCCESS";
      } else if (isFailedEvent(eventType, paymentStatus, extendedStatus)) {
        finalStatus = "FAILED";
      } else if (
        normalizeStatus(eventType) === "VERIFICATION_NEEDED" &&
        normalizeStatus(verificationStatus) === "VERIFIED"
      ) {
        finalStatus = "VERIFIED";
      } else {
        finalStatus = normalizeStatus(eventType) || normalizeStatus(paymentStatus) || "PENDING";
      }

      const updateData = {
        status: finalStatus,
        payment_status:
          normalizeStatus(paymentStatus) || normalizeStatus(extendedStatus) || normalizeStatus(verificationStatus) || normalizeStatus(eventType),
        payment_id: paymentData?.payment_id || null,
        mop_type: paymentData?.mop_type || null,
        bank_ref_num: paymentData?.bank_ref_num || null,
        utr: paymentData?.utr || null,
        payment_completed_at: paymentData?.payment_completed_at || null,
        webhook_payload: webhook,
      };

      const updatedPayment = await Payment.findOneAndUpdate(
        { order_id: orderId },
        updateData,
        { new: true }
      );

      console.log("Webhook orderId:", orderId);
      console.log("Webhook finalStatus:", finalStatus);
      console.log("Updated Payment:", updatedPayment);

      return res.status(200).json({
        success: true,
        message: "Webhook received",
        updated: !!updatedPayment,
        order_id: orderId,
        status: finalStatus,
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



router.get("/payments", async (req, res) => {
  try {
    const payments = await Payment.find().sort({ createdAt: -1 });

    return res.json({
      success: true,
      count: payments.length,
      data: payments,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.get("/payments/:orderId", async (req, res) => {
  try {
    const payment = await Payment.findOne({
      order_id: req.params.orderId,
    });

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found",
      });
    }

    return res.json({
      success: true,
      data: payment,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.get("/payments/reference/:referenceId", async (req, res) => {
  try {
    const payment = await Payment.findOne({
      reference_id: req.params.referenceId,
    });

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found by reference id",
      });
    }

    return res.json({
      success: true,
      data: payment,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;