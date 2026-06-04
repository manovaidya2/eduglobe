// import React, { useState } from "react";
// import { ArrowRight } from "lucide-react";
// import axiosInstance from "../../api/axiosInstance";

// const EXIMPE_SDK_URL = "https://cdn.eximpe.com/sdk/eximpe-sdk-1.1.0.min.js";

// function loadEximpeSdk() {
//   return new Promise((resolve, reject) => {
//     if (window.Eximpe) {
//       resolve(window.Eximpe);
//       return;
//     }

//     const existingScript = document.querySelector(
//       `script[src="${EXIMPE_SDK_URL}"]`
//     );

//     if (existingScript) {
//       existingScript.onload = () => resolve(window.Eximpe);
//       existingScript.onerror = () => reject(new Error("EximPe SDK load failed"));
//       return;
//     }

//     const script = document.createElement("script");
//     script.src = EXIMPE_SDK_URL;
//     script.async = true;
//     script.crossOrigin = "anonymous";

//     script.onload = () => {
//       if (window.Eximpe) {
//         resolve(window.Eximpe);
//       } else {
//         reject(new Error("EximPe SDK loaded but Eximpe object not found"));
//       }
//     };

//     script.onerror = () => {
//       reject(new Error("EximPe SDK load failed"));
//     };

//     document.body.appendChild(script);
//   });
// }

// export default function PaymentStep() {
//   const [amount, setAmount] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handlePayment = async () => {
//     if (!amount || Number(amount) <= 0) {
//       alert("Please enter valid amount");
//       return;
//     }

//     setLoading(true);

//     try {
//       const { data } = await axiosInstance.post("/eximpe/create-payment", {
//         amount: Number(amount),
//         name: "EduGlobe Customer",
//         email: "business@eduglobe.ae",
//         phone: "9999999999",
//       });

//       console.log("Payment Response:", data);

//       if (!data.success || !data.session_id) {
//         alert(data.message || "Session ID not received");
//         return;
//       }

//       const Eximpe = await loadEximpeSdk();

//    const eximpe = new Eximpe({
//   mode: "production",
// });

//       await eximpe.checkout({
//         paymentSessionId: data.session_id,
//       });
//     } catch (error) {
//       console.error("Payment Error:", error);

//       alert(
//         error?.response?.data?.message ||
//           error?.message ||
//           "Payment creation failed"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="bg-[#fafafa] py-16 px-4">
//       <div className="mx-auto max-w-[800px] text-center">
//         <span className="inline-flex rounded-full bg-[#fff3e8] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#d99a00]">
//           STEP 1 OF 2
//         </span>

//         <h2 className="mt-4 font-serif text-[42px] font-bold text-[#07162d]">
//           Proceed With Official Payment
//         </h2>

//         <p className="mt-2 text-[15px] text-[#667085]">
//           Securely continue with your payment for certification, consultancy,
//           testing, and institutional services.
//         </p>

//         <div className="mx-auto mt-5 h-[3px] w-[48px] rounded-full bg-[#d9a300]" />

//         <div className="mt-10 rounded-[14px] border border-[#e4e4e4] bg-white p-8 shadow-sm">
//           <div className="rounded-[10px] border border-[#ececec] bg-[#fafafa] p-7">
//             <h3 className="font-serif text-[26px] font-bold text-[#07162d]">
//               Continue Secure Payment
//             </h3>

//             <p className="mt-3 text-[15px] leading-7 text-[#667085]">
//               Enter amount and continue securely.
//             </p>

//             <input
//               type="number"
//               min="1"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               placeholder="Enter amount e.g. 500"
//               className="mt-6 h-[52px] w-full rounded-md border border-[#ddd] px-4 text-[16px] outline-none focus:border-[#df1010]"
//             />
//           </div>

//           <button
//             onClick={handlePayment}
//             disabled={loading}
//             className="mt-8 flex h-[55px] w-full items-center justify-center gap-3 rounded-md bg-[#df1010] text-[16px] font-semibold text-white shadow-md duration-300 hover:bg-[#c50d0d] disabled:opacity-50"
//           >
//             {loading ? "Please wait..." : "Proceed to Payment"}
//             <ArrowRight size={18} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }



import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import axiosInstance from "../../api/axiosInstance";

const EXIMPE_SDK_URL = "https://cdn.eximpe.com/sdk/eximpe-sdk-1.1.0.min.js";

function loadEximpeSdk() {
  return new Promise((resolve, reject) => {
    if (window.Eximpe) {
      resolve(window.Eximpe);
      return;
    }

    const existingScript = document.querySelector(
      `script[src="${EXIMPE_SDK_URL}"]`
    );

    if (existingScript) {
      existingScript.onload = () => resolve(window.Eximpe);
      existingScript.onerror = () => reject(new Error("EximPe SDK load failed"));
      return;
    }

    const script = document.createElement("script");
    script.src = EXIMPE_SDK_URL;
    script.async = true;
    script.crossOrigin = "anonymous";

    script.onload = () => {
      if (window.Eximpe) resolve(window.Eximpe);
      else reject(new Error("EximPe SDK loaded but Eximpe object not found"));
    };

    script.onerror = () => reject(new Error("EximPe SDK load failed"));

    document.body.appendChild(script);
  });
}

export default function PaymentStep() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    amount: "",
    name: "",
    email: "",
    phone: "",
    country: "India",
    state: "",
    pincode: "",
  });

  const savePendingPayment = (paymentMeta) => {
    if (typeof window !== "undefined" && window.sessionStorage) {
      sessionStorage.setItem("eduglobePendingPayment", JSON.stringify(paymentMeta));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === "phone"
          ? value.replace(/\D/g, "").slice(0, 10)
          : name === "pincode"
          ? value.replace(/\D/g, "").slice(0, 6)
          : value,
    }));
  };

  const handlePayment = async () => {
    if (!form.amount || Number(form.amount) <= 0) {
      alert("Please enter valid amount");
      return;
    }

    if (!form.name.trim()) {
      alert("Please enter name");
      return;
    }

    if (!form.email.trim()) {
      alert("Please enter email");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      alert("Please enter valid email");
      return;
    }

    if (form.phone.length !== 10) {
      alert("Please enter valid 10 digit phone number");
      return;
    }

    if (!form.country.trim()) {
      alert("Please enter country");
      return;
    }

    if (!form.state.trim()) {
      alert("Please enter state");
      return;
    }

    if (!/^[1-9][0-9]{5}$/.test(form.pincode)) {
      alert("Please enter valid 6 digit Indian pincode");
      return;
    }

    setLoading(true);

    try {
      const { data } = await axiosInstance.post("/eximpe/create-payment", {
        amount: Number(form.amount),
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone,
        country: form.country.trim(),
        state: form.state.trim(),
        pincode: form.pincode.trim(),
      });

      console.log("Payment Response:", data);

      if (!data.success || !data.session_id) {
        alert(data.message || "Session ID not received");
        return;
      }

      savePendingPayment({
        reference_id: data.reference_id,
        order_id: data.order_id,
        session_id: data.session_id,
        amount: form.amount,
        email: form.email.trim(),
        phone: form.phone,
      });

      const Eximpe = await loadEximpeSdk();

      const eximpe = new Eximpe({
        mode: "production",
      });

      await eximpe.checkout({
        paymentSessionId: data.session_id,
      });
    } catch (error) {
      console.error("Payment Error:", error);

      alert(
        error?.response?.data?.message ||
          error?.message ||
          "Payment creation failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="payment" className="bg-[#fafafa] py-16 px-4">
      <div className="mx-auto max-w-[800px] text-center">
        <span className="inline-flex rounded-full bg-[#fff3e8] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#d99a00]">
          STEP 1 OF 2
        </span>

        <h2 className="mt-4 font-serif text-[42px] font-bold text-[#07162d]">
          Proceed With Official Payment
        </h2>

        <p className="mt-2 text-[15px] text-[#667085]">
          Securely continue with your payment for certification, consultancy,
          testing, and institutional services.
        </p>

        <div className="mx-auto mt-5 h-[3px] w-[48px] rounded-full bg-[#d9a300]" />

        <div className="mt-10 rounded-[14px] border border-[#e4e4e4] bg-white p-8 shadow-sm">
          <div className="rounded-[10px] border border-[#ececec] bg-[#fafafa] p-7">
            <h3 className="font-serif text-[26px] font-bold text-[#07162d]">
              Continue Secure Payment
            </h3>

            <p className="mt-3 text-[15px] leading-7 text-[#667085]">
              Enter your details and continue securely.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 text-left md:grid-cols-2">
              <input
                type="number"
                min="1"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                placeholder="Enter amount e.g. 500"
                className="h-[52px] w-full rounded-md border border-[#ddd] px-4 text-[16px] outline-none focus:border-[#df1010] md:col-span-2"
              />

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="h-[52px] w-full rounded-md border border-[#ddd] px-4 text-[16px] outline-none focus:border-[#df1010]"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="h-[52px] w-full rounded-md border border-[#ddd] px-4 text-[16px] outline-none focus:border-[#df1010]"
              />

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="10 Digit Mobile Number"
                className="h-[52px] w-full rounded-md border border-[#ddd] px-4 text-[16px] outline-none focus:border-[#df1010]"
              />

              <input
                type="text"
                name="country"
                value={form.country}
                onChange={handleChange}
                placeholder="Country"
                className="h-[52px] w-full rounded-md border border-[#ddd] px-4 text-[16px] outline-none focus:border-[#df1010]"
              />

              <input
                type="text"
                name="state"
                value={form.state}
                onChange={handleChange}
                placeholder="State"
                className="h-[52px] w-full rounded-md border border-[#ddd] px-4 text-[16px] outline-none focus:border-[#df1010]"
              />

              <input
                type="text"
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                placeholder="Valid Indian Pincode"
                className="h-[52px] w-full rounded-md border border-[#ddd] px-4 text-[16px] outline-none focus:border-[#df1010]"
              />
            </div>
          </div>

          <button
            onClick={handlePayment}
            disabled={loading}
            className="mt-8 flex h-[55px] w-full items-center justify-center gap-3 rounded-md bg-[#df1010] text-[16px] font-semibold text-white shadow-md duration-300 hover:bg-[#c50d0d] disabled:opacity-50"
          >
            {loading ? "Please wait..." : "Proceed to Payment"}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}