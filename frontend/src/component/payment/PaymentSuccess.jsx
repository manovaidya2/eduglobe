import React, { useEffect, useState } from "react";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { useLocation } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";

const SUCCESS_STATUSES = ["CAPTURED", "SUCCESS", "PAYMENT_SUCCESSFUL", "VERIFIED"];
const FAILURE_STATUSES = ["FAILED", "PAYMENT_FAILED"];

export default function PaymentSuccess() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [payment, setPayment] = useState(null);
  const [error, setError] = useState(null);
  const [statusText, setStatusText] = useState("");
  const [statusType, setStatusType] = useState("pending");

  const normalizeStatus = (value) => {
    if (!value) return "";
    return String(value).trim().toUpperCase();
  };

  const effectiveStatus = (paymentData) => {
    const paymentStatus = normalizeStatus(paymentData?.payment_status);
    const status = normalizeStatus(paymentData?.status);
    const successValues = ["CAPTURED", "SUCCESS", "PAYMENT_SUCCESSFUL", "VERIFIED"];
    const failureValues = ["FAILED", "PAYMENT_FAILED"];

    if (successValues.includes(paymentStatus) || failureValues.includes(paymentStatus)) {
      return paymentStatus;
    }

    if (successValues.includes(status) || failureValues.includes(status)) {
      return status;
    }

    return paymentStatus || status;
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const referenceId = searchParams.get("ref");
    const orderId = searchParams.get("order_id");
    const eximpeStatus = searchParams.get("status");

    let storedPayment = null;
    try {
      storedPayment = JSON.parse(sessionStorage.getItem("eduglobePendingPayment") || "null");
    } catch {
      storedPayment = null;
    }

    const lookupByOrderId = orderId || storedPayment?.order_id;
    const lookupByReferenceId = referenceId || storedPayment?.reference_id;

    const fetchPayment = async () => {
      if (!lookupByOrderId && !lookupByReferenceId) {
        setError("Payment reference missing. Please return to the payment page and try again.");
        setLoading(false);
        return;
      }

      const url = lookupByOrderId
        ? `/eximpe/payments/${lookupByOrderId}`
        : `/eximpe/payments/reference/${lookupByReferenceId}`;

      try {
        const { data } = await axiosInstance.get(url);
        if (!data.success || !data.data) {
          setError(data.message || "Unable to verify payment status.");
          setStatusType("failed");
          setLoading(false);
          return;
        }

        const paymentData = data.data;
        setPayment(paymentData);

        const statusValue = (paymentData.payment_status || paymentData.status || "").toString().toUpperCase();

        if (SUCCESS_STATUSES.includes(statusValue)) {
          setStatusText("Payment completed successfully.");
          setStatusType("success");
        } else if (FAILURE_STATUSES.includes(statusValue)) {
          setStatusText("Payment failed. Please retry.");
          setStatusType("failed");
        } else {
          setStatusText(
            eximpeStatus?.toLowerCase() === "failed" 
              ? "Payment was not completed. Please try again."
              : "Payment is not yet confirmed. Please wait and refresh this page after a few moments."
          );
          setStatusType("pending");
        }
      } catch (err) {
        setError(err?.response?.data?.message || err?.message || "Unable to verify payment status.");
        setStatusType("failed");
      } finally {
        setLoading(false);
      }
    };

    fetchPayment();
  }, [location.search]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f7f7f7] px-4">
        <div className="text-center">
          <Loader2 size={56} className="mx-auto animate-spin text-blue-600" />
          <p className="mt-4 text-gray-600">Verifying payment status...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f7f7f7] px-4">
        <div className="bg-white rounded-xl p-10 shadow-lg text-center max-w-md w-full">
          <XCircle size={70} className="mx-auto text-red-500" />
          <h1 className="mt-5 text-3xl font-bold">Payment Verification Failed</h1>
          <p className="mt-3 text-gray-600">{error}</p>
          <a href="/payment" className="mt-8 inline-block bg-red-600 px-6 py-3 rounded-lg text-white">
            Return to payment
          </a>
        </div>
      </div>
    );
  }

  if (statusType === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f7f7f7] px-4">
        <div className="bg-white rounded-xl p-10 shadow-lg text-center max-w-md w-full">
          <CheckCircle size={70} className="mx-auto text-green-500" />
          <h1 className="mt-5 text-3xl font-bold">Payment Successful</h1>
          <p className="mt-3 text-gray-600">{statusText}</p>
          <a href="/" className="mt-8 inline-block bg-green-600 px-6 py-3 rounded-lg text-white">
            Go Home
          </a>
        </div>
      </div>
    );
  }

  const displayStatus = payment?.payment_status || payment?.status || "PENDING";

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f7f7] px-4">
      <div className="bg-white rounded-xl p-10 shadow-lg text-center max-w-md w-full">
        <XCircle size={70} className="mx-auto text-yellow-500" />
        <h1 className="mt-5 text-3xl font-bold">
          {statusType === "failed" ? "Payment Failed" : "Payment Pending"}
        </h1>
        <p className="mt-3 text-gray-600">{statusText}</p>
        <p className="mt-4 text-sm text-gray-500">Current payment status: {displayStatus}</p>
        <div className="mt-8 flex flex-col gap-3">
          <a href="/payment" className="inline-block bg-red-600 px-6 py-3 rounded-lg text-white">
            Retry Payment
          </a>
          <a href="/" className="inline-block bg-gray-100 px-6 py-3 rounded-lg text-gray-700">
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}