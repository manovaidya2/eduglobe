import React from "react";
import { XCircle } from "lucide-react";

export default function PaymentFailed() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f7f7] px-4">

      <div className="bg-white rounded-xl p-10 shadow-lg text-center max-w-md w-full">

        <XCircle
          size={70}
          className="mx-auto text-red-500"
        />

        <h1 className="mt-5 text-3xl font-bold">
          Payment Failed
        </h1>

        <p className="mt-3 text-gray-600">
          Your payment could not be completed.
        </p>

        <a
          href="/payment"
          className="mt-8 inline-block bg-red-600 px-6 py-3 rounded-lg text-white"
        >
          Try Again
        </a>

      </div>
    </div>
  );
}