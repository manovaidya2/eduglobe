import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

export default function AdminPayments() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPayments = async () => {
    try {
      setLoading(true);

      const { data } = await axiosInstance.get(
        "/eximpe/payments"
      );

      if (data.success) {
        setPayments(data.data || []);
      }
    } catch (error) {
      console.error(
        "Fetch payments error:",
        error
      );

      alert(
        error?.response?.data?.message ||
          "Payments fetch failed"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const getStatusClass = (item) => {
    const status =
      item.payment_status || item.status;

    if (
      status === "CAPTURED" ||
      status === "SUCCESS" ||
      status === "PAYMENT_SUCCESSFUL" ||
      status === "VERIFIED"
    ) {
      return "bg-green-100 text-green-700";
    }

    if (
      status === "FAILED" ||
      status === "PAYMENT_FAILED"
    ) {
      return "bg-red-100 text-red-700";
    }

    return "bg-yellow-100 text-yellow-700";
  };

  const getStatusText = (item) => {
    const status =
      item.payment_status || item.status;

    if (
      status === "CAPTURED" ||
      status === "PAYMENT_SUCCESSFUL"
    ) {
      return "SUCCESS";
    }

    if (status === "VERIFIED") {
      return "VERIFIED";
    }

    if (
      status === "FAILED" ||
      status === "PAYMENT_FAILED"
    ) {
      return "FAILED";
    }

    return "PENDING";
  };

  return (
    <section className="min-h-screen bg-[#f6f7fb] px-4 py-8">

      <div className="mx-auto max-w-[1400px]">

        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

          <div>
            <h1 className="text-[30px] font-bold text-[#07162d]">
              Payment Records
            </h1>

            <p className="text-sm text-gray-500">
              EximPe payment orders and webhook status
            </p>
          </div>

          <button
            onClick={fetchPayments}
            className="rounded-md bg-[#df1010] px-5 py-3 text-sm font-semibold text-white hover:bg-[#c50d0d]"
          >
            Refresh
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

          {loading ? (
            <div className="p-10 text-center text-gray-500">

              Loading payments...

            </div>
          ) : payments.length === 0 ? (
            <div className="p-10 text-center text-gray-500">

              No payment records found

            </div>
          ) : (
            <div className="overflow-x-auto">

              <table className="w-full min-w-[1400px] border-collapse text-left">

                <thead className="bg-[#07162d] text-white">

                  <tr>

                    <th className="px-4 py-4">
                      Date
                    </th>

                    <th className="px-4 py-4">
                      Customer
                    </th>

                    <th className="px-4 py-4">
                      Contact
                    </th>

                    <th className="px-4 py-4">
                      Amount
                    </th>

                    <th className="px-4 py-4">
                      Order ID
                    </th>

                    <th className="px-4 py-4">
                      Payment ID
                    </th>

                    <th className="px-4 py-4">
                      Status
                    </th>

                    <th className="px-4 py-4">
                      State
                    </th>

                    <th className="px-4 py-4">
                      Pincode
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {payments.map((item) => (

                    <tr
                      key={item._id}
                      className="border-b hover:bg-gray-50"
                    >

                      <td className="px-4 py-5">

                        {item.createdAt
                          ? new Date(
                              item.createdAt
                            ).toLocaleString()
                          : "-"}

                      </td>

                      <td className="px-4 py-5">

                        <div className="font-semibold">
                          {item.name || "-"}
                        </div>

                        <div className="text-gray-500 text-sm">

                          {item.email || "-"}

                        </div>

                      </td>

                      <td className="px-4 py-5">

                        {item.phone || "-"}

                      </td>

                      <td className="px-4 py-5 font-bold">

                        ₹{item.amount || 0}

                      </td>

                      <td className="px-4 py-5">

                        {item.order_id || "-"}

                      </td>

                      <td className="px-4 py-5">

                        {item.payment_id || "-"}

                      </td>

                      <td className="px-4 py-5">

                        <span
                          className={`rounded-full px-4 py-2 text-xs font-bold ${getStatusClass(
                            item
                          )}`}
                        >
                          {getStatusText(item)}
                        </span>

                      </td>

                      <td className="px-4 py-5">

                        {item.state || "-"}

                      </td>

                      <td className="px-4 py-5">

                        {item.pincode || "-"}

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>
          )}
        </div>
      </div>
    </section>
  );
}