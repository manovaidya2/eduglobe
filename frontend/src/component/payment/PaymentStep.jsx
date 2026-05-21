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
      if (window.Eximpe) {
        resolve(window.Eximpe);
      } else {
        reject(new Error("EximPe SDK loaded but Eximpe object not found"));
      }
    };

    script.onerror = () => {
      reject(new Error("EximPe SDK load failed"));
    };

    document.body.appendChild(script);
  });
}

export default function PaymentStep() {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!amount || Number(amount) <= 0) {
      alert("Please enter valid amount");
      return;
    }

    setLoading(true);

    try {
      const { data } = await axiosInstance.post("/eximpe/create-payment", {
        amount: Number(amount),
        name: "EduGlobe Customer",
        email: "business@eduglobe.ae",
        phone: "9999999999",
      });

      console.log("Payment Response:", data);

      if (!data.success || !data.session_id) {
        alert(data.message || "Session ID not received");
        return;
      }

      const Eximpe = await loadEximpeSdk();

      const eximpe = new Eximpe({
        mode: "sandbox",
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
    <section className="bg-[#fafafa] py-16 px-4">
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
              Enter amount and continue securely.
            </p>

            <input
              type="number"
              min="1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount e.g. 500"
              className="mt-6 h-[52px] w-full rounded-md border border-[#ddd] px-4 text-[16px] outline-none focus:border-[#df1010]"
            />
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