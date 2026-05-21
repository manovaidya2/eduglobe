import React from "react";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f7f7] px-4">
      <div className="bg-white rounded-xl p-10 shadow-lg text-center max-w-md w-full">

        <CheckCircle
          size={70}
          className="mx-auto text-green-500"
        />

        <h1 className="mt-5 text-3xl font-bold">
          Payment Successful
        </h1>

        <p className="mt-3 text-gray-600">
          Thank you. Your payment has been completed successfully.
        </p>

        <a
          href="/"
          className="mt-8 inline-block bg-green-600 px-6 py-3 rounded-lg text-white"
        >
          Go Home
        </a>

      </div>
    </div>
  );
}