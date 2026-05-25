import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { 
  CreditCard, 
  DollarSign, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  XCircle, 
  RefreshCw, 
  Search,
  Filter,
  Download,
  ChevronLeft,
  ChevronRight,
  Eye,
  ArrowUpDown,
  Users,
  Wallet,
  Calendar,
  AlertCircle
} from "lucide-react";

export default function AdminPayments() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [sortField, setSortField] = useState("createdAt");
  const [sortDirection, setSortDirection] = useState("desc");
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");

  const fetchPayments = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get("/eximpe/payments");
      if (data.success) {
        setPayments(data.data || []);
      }
    } catch (error) {
      console.error("Fetch payments error:", error);
      alert(error?.response?.data?.message || "Payments fetch failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  // Function to check if payment is successful
  const isPaymentSuccessful = (payment) => {
    const status = payment.payment_status || payment.status;
    return status === "CAPTURED" || 
           status === "SUCCESS" || 
           status === "PAYMENT_SUCCESSFUL" || 
           status === "VERIFIED";
  };

  // Function to check if payment is failed
  const isPaymentFailed = (payment) => {
    const status = payment.payment_status || payment.status;
    return status === "FAILED" || status === "PAYMENT_FAILED";
  };

  // Function to check if payment is pending
  const isPaymentPending = (payment) => {
    const status = payment.payment_status || payment.status;
    return !status || 
           (status !== "CAPTURED" && 
            status !== "SUCCESS" && 
            status !== "PAYMENT_SUCCESSFUL" && 
            status !== "VERIFIED" &&
            status !== "FAILED" && 
            status !== "PAYMENT_FAILED");
  };

  // Get successful payments only for revenue calculation
  const successfulPayments = payments.filter(isPaymentSuccessful);
  
  // Calculate statistics (only from successful payments for revenue)
  const stats = {
    totalAmount: successfulPayments.reduce((sum, p) => sum + (p.amount || 0), 0),
    totalPayments: payments.length,
    successfulPayments: successfulPayments.length,
    failedPayments: payments.filter(isPaymentFailed).length,
    pendingPayments: payments.filter(isPaymentPending).length,
    uniqueCustomers: new Set(payments.map(p => p.email)).size
  };

  const successRate = stats.totalPayments > 0 
    ? ((stats.successfulPayments / stats.totalPayments) * 100).toFixed(1)
    : 0;

  const getStatusClass = (item) => {
    if (isPaymentSuccessful(item)) return "success";
    if (isPaymentFailed(item)) return "failed";
    return "pending";
  };

  const getStatusText = (item) => {
    const status = item.payment_status || item.status;
    if (isPaymentSuccessful(item)) return "SUCCESS";
    if (isPaymentFailed(item)) return "FAILED";
    return "PENDING";
  };

  // Filter and sort payments
  const filteredPayments = payments.filter(payment => {
    // Search filter
    const matchesSearch = 
      payment.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.phone?.includes(searchTerm) ||
      payment.order_id?.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Status filter
    let matchesStatus = true;
    if (statusFilter === "success") {
      matchesStatus = isPaymentSuccessful(payment);
    } else if (statusFilter === "failed") {
      matchesStatus = isPaymentFailed(payment);
    } else if (statusFilter === "pending") {
      matchesStatus = isPaymentPending(payment);
    }
    
    return matchesSearch && matchesStatus;
  });

  const sortedPayments = [...filteredPayments].sort((a, b) => {
    let aVal = a[sortField];
    let bVal = b[sortField];
    if (sortField === "createdAt") {
      aVal = new Date(aVal);
      bVal = new Date(bVal);
    }
    if (sortDirection === "asc") {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedPayments.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedPayments.length / itemsPerPage);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const exportToCSV = () => {
    const headers = ["Date", "Customer Name", "Email", "Phone", "Amount", "Order ID", "Payment ID", "Status", "State", "Pincode"];
    const csvData = filteredPayments.map(p => [
      new Date(p.createdAt).toLocaleString(),
      p.name || "-",
      p.email || "-",
      p.phone || "-",
      p.amount || 0,
      p.order_id || "-",
      p.payment_id || "-",
      getStatusText(p),
      p.state || "-",
      p.pincode || "-"
    ]);
    const csvContent = [headers, ...csvData].map(row => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `payments_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const StatCard = ({ title, value, icon: Icon, color, subtitle, trend }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${color} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <span className="text-2xl font-bold text-gray-800">{value}</span>
      </div>
      <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
      {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}
      {trend && <p className="text-xs text-green-600 mt-2">{trend}</p>}
    </div>
  );

  const StatusBadge = ({ status }) => {
    const config = {
      success: { bg: "bg-green-100", text: "text-green-700", dot: "bg-green-500", label: "Success" },
      failed: { bg: "bg-red-100", text: "text-red-700", dot: "bg-red-500", label: "Failed" },
      pending: { bg: "bg-yellow-100", text: "text-yellow-700", dot: "bg-yellow-500", label: "Pending" }
    };
    const style = config[status];
    return (
      <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${style.bg} ${style.text} text-xs font-semibold`}>
        <span className={`w-2 h-2 rounded-full ${style.dot}`}></span>
        {style.label}
      </span>
    );
  };

  // Status filter buttons
  const FilterButton = ({ label, value, count }) => (
    <button
      onClick={() => setStatusFilter(value)}
      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
        statusFilter === value
          ? "bg-blue-600 text-white shadow-md"
          : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
      }`}
    >
      {label} {count !== undefined && `(${count})`}
    </button>
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 px-4 py-8">
      <div className="mx-auto max-w-[1600px]">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Payment Dashboard
              </h1>
              <p className="text-gray-500 mt-2">Manage and track all payment transactions</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={exportToCSV}
                className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
              <button
                onClick={fetchPayments}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                Refresh
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards - Revenue only from successful payments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Total Revenue" 
            value={`₹${stats.totalAmount.toLocaleString()}`} 
            icon={DollarSign} 
            color="bg-gradient-to-br from-emerald-500 to-emerald-600"
            subtitle={`From ${stats.successfulPayments} successful payments`}
            trend="✓ Only successful transactions"
          />
          <StatCard 
            title="Total Payments" 
            value={stats.totalPayments} 
            icon={CreditCard} 
            color="bg-gradient-to-br from-blue-500 to-blue-600"
            subtitle="All transactions"
          />
          <StatCard 
            title="Success Rate" 
            value={`${successRate}%`} 
            icon={TrendingUp} 
            color="bg-gradient-to-br from-green-500 to-green-600"
            subtitle={`${stats.successfulPayments} successful`}
          />
          <StatCard 
            title="Unique Customers" 
            value={stats.uniqueCustomers} 
            icon={Users} 
            color="bg-gradient-to-br from-purple-500 to-purple-600"
          />
        </div>

        {/* Additional Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 text-sm font-medium">Successful Payments</p>
                <p className="text-2xl font-bold text-green-700">{stats.successfulPayments}</p>
                <p className="text-xs text-green-500 mt-1">₹{stats.totalAmount.toLocaleString()} total</p>
              </div>
              <CheckCircle className="w-10 h-10 text-green-500 opacity-50" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl p-4 border border-red-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-600 text-sm font-medium">Failed Payments</p>
                <p className="text-2xl font-bold text-red-700">{stats.failedPayments}</p>
                <p className="text-xs text-red-500 mt-1">Not included in revenue</p>
              </div>
              <XCircle className="w-10 h-10 text-red-500 opacity-50" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-4 border border-yellow-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-600 text-sm font-medium">Pending Payments</p>
                <p className="text-2xl font-bold text-yellow-700">{stats.pendingPayments}</p>
                <p className="text-xs text-yellow-500 mt-1">Awaiting confirmation</p>
              </div>
              <Clock className="w-10 h-10 text-yellow-500 opacity-50" />
            </div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, phone or order ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <FilterButton label="All" value="all" count={payments.length} />
              <FilterButton label="Success" value="success" count={stats.successfulPayments} />
              <FilterButton label="Failed" value="failed" count={stats.failedPayments} />
              <FilterButton label="Pending" value="pending" count={stats.pendingPayments} />
            </div>
          </div>
        </div>

        {/* Payments Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {loading ? (
            <div className="p-16 text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
              <p className="mt-4 text-gray-500">Loading payments...</p>
            </div>
          ) : filteredPayments.length === 0 ? (
            <div className="p-16 text-center">
              <AlertCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No payment records found</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-gray-800 to-gray-900">
                    <tr>
                      {["Date", "Customer", "Contact", "Amount", "Order ID", "Payment ID", "Status", "State", "Pincode"].map((header, idx) => (
                        <th key={idx} className="px-6 py-4 text-left text-white font-semibold text-sm">
                          <button 
                            onClick={() => handleSort(header === "Date" ? "createdAt" : header === "Customer" ? "name" : header.toLowerCase().replace(" ", "_"))}
                            className="flex items-center gap-1 hover:text-gray-300 transition-colors"
                          >
                            {header}
                            <ArrowUpDown className="w-3 h-3" />
                          </button>
                        </th>
                      ))}
                      <th className="px-6 py-4 text-center text-white font-semibold text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {currentItems.map((item) => (
                      <tr key={item._id} className="hover:bg-gray-50 transition-colors duration-150">
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {item.createdAt ? new Date(item.createdAt).toLocaleString() : "-"}
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-semibold text-gray-800">{item.name || "-"}</div>
                          <div className="text-xs text-gray-400">{item.email || "-"}</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.phone || "-"}</td>
                        <td className="px-6 py-4">
                          <span className={`font-bold text-lg ${isPaymentSuccessful(item) ? "text-green-600" : isPaymentFailed(item) ? "text-red-500" : "text-gray-600"}`}>
                            ₹{item.amount || 0}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <code className="text-xs bg-gray-100 px-2 py-1 rounded">{item.order_id || "-"}</code>
                        </td>
                        <td className="px-6 py-4">
                          <code className="text-xs bg-gray-100 px-2 py-1 rounded">{item.payment_id || "-"}</code>
                        </td>
                        <td className="px-6 py-4">
                          <StatusBadge status={getStatusClass(item)} />
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.state || "-"}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.pincode || "-"}</td>
                        <td className="px-6 py-4 text-center">
                          <button 
                            onClick={() => {
                              setSelectedPayment(item);
                              setShowModal(true);
                            }}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            <Eye className="w-4 h-4 text-gray-500" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-gray-50">
                  <p className="text-sm text-gray-600">
                    Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, sortedPayments.length)} of {sortedPayments.length} entries
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="p-2 rounded-lg border border-gray-200 bg-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex gap-1">
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let pageNum;
                        if (totalPages <= 5) {
                          pageNum = i + 1;
                        } else if (currentPage <= 3) {
                          pageNum = i + 1;
                        } else if (currentPage >= totalPages - 2) {
                          pageNum = totalPages - 4 + i;
                        } else {
                          pageNum = currentPage - 2 + i;
                        }
                        return (
                          <button
                            key={pageNum}
                            onClick={() => setCurrentPage(pageNum)}
                            className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                              currentPage === pageNum
                                ? "bg-blue-600 text-white"
                                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                    </div>
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-lg border border-gray-200 bg-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Revenue Summary Card */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Revenue Summary</h3>
              <p className="text-sm text-gray-500 mt-1">Total earnings from successful payments only</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Total Revenue</p>
              <p className="text-3xl font-bold text-green-600">₹{stats.totalAmount.toLocaleString()}</p>
              <p className="text-xs text-gray-400 mt-1">From {stats.successfulPayments} successful transactions</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-blue-100">
            <div className="flex gap-6 text-sm">
              <div>
                <span className="text-gray-500">Average Transaction:</span>
                <span className="ml-2 font-semibold text-gray-700">
                  ₹{stats.successfulPayments > 0 ? Math.round(stats.totalAmount / stats.successfulPayments).toLocaleString() : 0}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Success Rate:</span>
                <span className="ml-2 font-semibold text-green-600">{successRate}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Details Modal */}
      {showModal && selectedPayment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">Payment Details</h2>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <XCircle className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 uppercase font-semibold">Customer Name</label>
                  <p className="text-gray-800 font-medium mt-1">{selectedPayment.name || "-"}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase font-semibold">Email</label>
                  <p className="text-gray-800 font-medium mt-1">{selectedPayment.email || "-"}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase font-semibold">Phone</label>
                  <p className="text-gray-800 font-medium mt-1">{selectedPayment.phone || "-"}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase font-semibold">Amount</label>
                  <p className={`text-2xl font-bold mt-1 ${isPaymentSuccessful(selectedPayment) ? "text-green-600" : isPaymentFailed(selectedPayment) ? "text-red-500" : "text-gray-800"}`}>
                    ₹{selectedPayment.amount || 0}
                  </p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase font-semibold">Order ID</label>
                  <p className="text-gray-800 font-medium mt-1 font-mono text-sm">{selectedPayment.order_id || "-"}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase font-semibold">Payment ID</label>
                  <p className="text-gray-800 font-medium mt-1 font-mono text-sm">{selectedPayment.payment_id || "-"}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase font-semibold">Status</label>
                  <div className="mt-1">
                    <StatusBadge status={getStatusClass(selectedPayment)} />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase font-semibold">Date</label>
                  <p className="text-gray-800 font-medium mt-1">{new Date(selectedPayment.createdAt).toLocaleString()}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase font-semibold">State</label>
                  <p className="text-gray-800 font-medium mt-1">{selectedPayment.state || "-"}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase font-semibold">Pincode</label>
                  <p className="text-gray-800 font-medium mt-1">{selectedPayment.pincode || "-"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}