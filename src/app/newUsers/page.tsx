"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface ShippingInfo {
  firstName: string;
  lastName: string;
  phone: string;
  company?: string;
  country: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  userType: string;
  email: string;
}

interface BillingInfo {
  firstName: string;
  lastName: string;
  phone: string;
  company?: string;
  country: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  userType: string;
  sameAsShipping: boolean;
}

interface VerificationInfo {
  isVerified: boolean;
  phoneNumber?: string;
}

interface CartItem {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  image: string;
  quantity: number;
  price: number;
}

interface OrderTotal {
  subtotal: number;
  shipping: number;
  taxes: number;
  total: number;
}

interface PaymentInfo {
  paymentMethod: string;
  cardData?: {
    cardNumber: string;
    cardholderName: string;
    expirationDate: string;
    securityCode: string;
    cardType?: string;
  };
}

interface UserData {
  sessionId: string;
  customerInfo: CustomerInfo;
  shippingInfo: ShippingInfo;
  billingInfo: BillingInfo;
  verification: VerificationInfo;
  cartItems?: CartItem[];
  orderTotal?: OrderTotal;
  paymentInfo?: PaymentInfo;
  orderNumber?: string;
  buyInOneClick?: boolean;
  isOrderCreatedInBackend?: boolean;
  termsAccepted: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function NewUsersPage() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api-2/redisStore", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "debugGetAll",
          sessionId: "debug",
        }),
      });
      const result = await response.json();
      setUsers(result.users || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (sessionId: string, userName: string) => {
    // Confirm before deleting
    if (!confirm(`Are you sure you want to delete ${userName}?`)) {
      return;
    }

    try {
      const response = await fetch(`/api-2/redisStore?sessionId=${sessionId}`, {
        method: "DELETE",
      });
      const result = await response.json();

      if (result.success) {
        // Update local state to remove the user
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user.sessionId !== sessionId)
        );
        alert("User deleted successfully!");
      } else {
        alert("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Error deleting user");
    }
  };

  const deleteAllUsers = async () => {
    // Confirm before deleting all
    if (
      !confirm(
        `Are you sure you want to delete ALL ${users.length} users? This cannot be undone!`
      )
    ) {
      return;
    }

    try {
      const response = await fetch(
        `/api-2/redisStore?deleteAll=true&sessionId=temp`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();

      if (result.success) {
        setUsers([]);
        alert("All users deleted successfully!");
      } else {
        alert("Failed to delete all users");
      }
    } catch (error) {
      console.error("Error deleting all users:", error);
      alert("Error deleting all users");
    }
  };

  const filteredUsers = users.filter((user) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      user.customerInfo?.email?.toLowerCase().includes(searchLower) ||
      user.customerInfo?.firstName?.toLowerCase().includes(searchLower) ||
      user.customerInfo?.lastName?.toLowerCase().includes(searchLower) ||
      user.customerInfo?.phone?.includes(searchTerm) ||
      user.shippingInfo?.city?.toLowerCase().includes(searchLower)
    );
  }); // Already sorted newest first from Redis

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-[#091B33] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ fontFamily: "Audiowide, sans-serif" }}
            >
              New Users Checkout Data
            </h1>
            <p className="text-gray-400 font-exo2">
              Total Users:{" "}
              <span className="text-[#00A3FF] font-bold">{users.length}</span>
            </p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button
              onClick={fetchUsers}
              className="bg-[#00A3FF] hover:bg-[#0088CC] px-6 py-3 rounded-lg font-exo2 font-semibold transition-all duration-200 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Refresh
            </button>
            {users.length > 0 && (
              <button
                onClick={deleteAllUsers}
                className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-exo2 font-semibold transition-all duration-200 flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Delete All
              </button>
            )}
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name, email, phone, or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#02305A] border border-[#484848] text-white rounded-lg px-4 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-[#00A3FF] font-exo2"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#00A3FF]"></div>
          </div>
        )}

        {/* Empty State */}
        {!loading && users.length === 0 && (
          <div className="bg-[#02305A] rounded-lg p-12 text-center">
            <svg
              className="w-24 h-24 mx-auto mb-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <h3 className="text-xl font-bold mb-2 font-exo2">No Users Yet</h3>
            <p className="text-gray-400 font-exo2">
              Users will appear here after they complete the checkout process
            </p>
          </div>
        )}

        {/* Users Grid */}
        {!loading && filteredUsers.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.map((user, index) => (
              <div
                key={user.sessionId || index}
                className="bg-[#02305A] rounded-lg p-6 hover:shadow-lg hover:shadow-[#00A3FF]/20 transition-all duration-300 border border-transparent hover:border-[#00A3FF] relative"
              >
                {/* Delete Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteUser(
                      user.sessionId,
                      `${user.customerInfo?.firstName} ${user.customerInfo?.lastName}`
                    );
                  }}
                  className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors z-10 bg-[#091B33] rounded-full p-1.5 hover:bg-red-500/20"
                  title="Delete user"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* User Header */}
                <div
                  className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-700 cursor-pointer"
                  onClick={() => setSelectedUser(user)}
                >
                  <div className="w-12 h-12 bg-[#00A3FF] rounded-full flex items-center justify-center text-xl font-bold">
                    {user.customerInfo?.firstName?.[0]?.toUpperCase() || "?"}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg font-exo2">
                      {user.customerInfo?.firstName}{" "}
                      {user.customerInfo?.lastName}
                    </h3>
                    <p className="text-sm text-gray-400 font-exo2">
                      {formatDate(user.createdAt)}
                    </p>
                  </div>
                </div>

                {/* User Info */}
                <div
                  className="space-y-3 cursor-pointer"
                  onClick={() => setSelectedUser(user)}
                >
                  <div className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-[#00A3FF] mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm text-gray-300 font-exo2 break-all">
                      {user.customerInfo?.email}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-[#00A3FF] flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-sm text-gray-300 font-exo2">
                      {user.customerInfo?.phone}
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-[#00A3FF] mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-sm text-gray-300 font-exo2">
                      {user.shippingInfo?.city}, {user.shippingInfo?.state}
                    </span>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {/* Order Status Badge */}
                    {user.isOrderCreatedInBackend === false ? (
                      <span className="inline-flex items-center gap-1 bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-exo2 font-bold">
                        ❌ Order Failed
                      </span>
                    ) : user.isOrderCreatedInBackend === true ? (
                      <span className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-exo2 font-bold">
                        ✅ Order Success
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 bg-gray-500/20 text-gray-400 px-3 py-1 rounded-full text-xs font-exo2">
                        ⏳ Pending
                      </span>
                    )}

                    {/* Verification Badge */}
                    {user.verification?.isVerified ? (
                      <span className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-exo2">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Verified
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-exo2">
                        Not Verified
                      </span>
                    )}

                    {user.buyInOneClick && (
                      <span className="inline-flex items-center gap-1 bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-exo2">
                        🚀 One-Click
                      </span>
                    )}

                    {user.orderTotal && (
                      <span className="inline-flex items-center gap-1 bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-exo2">
                        💰 ${user.orderTotal.total.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Click to view more */}
                <div
                  className="mt-4 pt-4 border-t border-gray-700 text-center cursor-pointer"
                  onClick={() => setSelectedUser(user)}
                >
                  <span className="text-xs text-[#00A3FF] font-exo2">
                    Click to view full details →
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Search Results */}
        {!loading && users.length > 0 && filteredUsers.length === 0 && (
          <div className="bg-[#02305A] rounded-lg p-12 text-center">
            <p className="text-gray-400 font-exo2">
              No users found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>

      {/* User Details Modal */}
      {selectedUser && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedUser(null)}
        >
          <div
            className="bg-[#02305A] rounded-lg max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#02305A] border-b border-gray-700 p-6 flex items-center justify-between z-10">
              <h2 className="text-2xl font-bold font-exo2">User Details</h2>
              <button
                onClick={() => setSelectedUser(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Customer Info */}
              <div className="bg-[#091B33] rounded-lg p-4">
                <h3 className="text-lg font-bold mb-4 text-[#00A3FF] font-exo2">
                  Customer Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400 font-exo2">First Name</p>
                    <p className="font-semibold font-exo2">
                      {selectedUser.customerInfo?.firstName}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 font-exo2">Last Name</p>
                    <p className="font-semibold font-exo2">
                      {selectedUser.customerInfo?.lastName}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 font-exo2">Email</p>
                    <p className="font-semibold font-exo2 break-all">
                      {selectedUser.customerInfo?.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 font-exo2">Phone</p>
                    <p className="font-semibold font-exo2">
                      {selectedUser.customerInfo?.phone}
                    </p>
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="bg-[#091B33] rounded-lg p-4">
                <h3 className="text-lg font-bold mb-4 text-[#00A3FF] font-exo2">
                  Shipping Address
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="md:col-span-2">
                    <p className="text-gray-400 font-exo2">Address</p>
                    <p className="font-semibold font-exo2">
                      {selectedUser.shippingInfo?.address}
                    </p>
                    {selectedUser.shippingInfo?.apartment && (
                      <p className="font-semibold font-exo2">
                        {selectedUser.shippingInfo?.apartment}
                      </p>
                    )}
                  </div>
                  <div>
                    <p className="text-gray-400 font-exo2">City</p>
                    <p className="font-semibold font-exo2">
                      {selectedUser.shippingInfo?.city}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 font-exo2">State</p>
                    <p className="font-semibold font-exo2">
                      {selectedUser.shippingInfo?.state}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 font-exo2">ZIP Code</p>
                    <p className="font-semibold font-exo2">
                      {selectedUser.shippingInfo?.zipCode}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 font-exo2">Country</p>
                    <p className="font-semibold font-exo2">
                      {selectedUser.shippingInfo?.country}
                    </p>
                  </div>
                  {selectedUser.shippingInfo?.company && (
                    <div className="md:col-span-2">
                      <p className="text-gray-400 font-exo2">Company</p>
                      <p className="font-semibold font-exo2">
                        {selectedUser.shippingInfo?.company}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Billing Info */}
              <div className="bg-[#091B33] rounded-lg p-4">
                <h3 className="text-lg font-bold mb-4 text-[#00A3FF] font-exo2">
                  Billing Address
                </h3>
                {selectedUser.billingInfo?.sameAsShipping ? (
                  <p className="text-gray-400 italic font-exo2">
                    Same as shipping address
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="md:col-span-2">
                      <p className="text-gray-400 font-exo2">Address</p>
                      <p className="font-semibold font-exo2">
                        {selectedUser.billingInfo?.address}
                      </p>
                      {selectedUser.billingInfo?.apartment && (
                        <p className="font-semibold font-exo2">
                          {selectedUser.billingInfo?.apartment}
                        </p>
                      )}
                    </div>
                    <div>
                      <p className="text-gray-400 font-exo2">City</p>
                      <p className="font-semibold font-exo2">
                        {selectedUser.billingInfo?.city}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 font-exo2">State</p>
                      <p className="font-semibold font-exo2">
                        {selectedUser.billingInfo?.state}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 font-exo2">ZIP Code</p>
                      <p className="font-semibold font-exo2">
                        {selectedUser.billingInfo?.zipCode}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 font-exo2">Country</p>
                      <p className="font-semibold font-exo2">
                        {selectedUser.billingInfo?.country}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Cart Items */}
              {selectedUser.cartItems && selectedUser.cartItems.length > 0 && (
                <div className="bg-[#091B33] rounded-lg p-4">
                  <h3 className="text-lg font-bold mb-4 text-[#00A3FF] font-exo2">
                    Cart Items ({selectedUser.cartItems.length})
                  </h3>
                  <div className="space-y-3">
                    {selectedUser.cartItems.map((item, index) => (
                      <div
                        key={item.id || index}
                        className="bg-[#02305A] rounded-lg p-3 flex items-center gap-4"
                      >
                        <Image
                          src={item.image || "/catalog/Engine 1.png"}
                          alt={item.title}
                          width={60}
                          height={60}
                          className="rounded object-cover"
                        />
                        <div className="flex-1">
                          <p className="font-semibold font-exo2 text-sm">
                            {item.title}
                          </p>
                          <p className="text-gray-400 font-exo2 text-xs">
                            {item.subtitle}
                          </p>
                          <p className="text-gray-400 font-exo2 text-xs mt-1">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-[#00A3FF] font-exo2">
                            ${item.price.toFixed(2)}
                          </p>
                          {item.quantity > 1 && (
                            <p className="text-xs text-gray-400 font-exo2">
                              ${(item.price * item.quantity).toFixed(2)} total
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Total */}
                  {selectedUser.orderTotal && (
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400 font-exo2">
                            Subtotal:
                          </span>
                          <span className="font-semibold font-exo2">
                            ${selectedUser.orderTotal.subtotal.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400 font-exo2">
                            Shipping:
                          </span>
                          <span className="font-semibold font-exo2">
                            {selectedUser.orderTotal.shipping === 0
                              ? "Free"
                              : `$${selectedUser.orderTotal.shipping.toFixed(
                                  2
                                )}`}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400 font-exo2">
                            Taxes:
                          </span>
                          <span className="font-semibold font-exo2">
                            ${selectedUser.orderTotal.taxes.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-gray-700">
                          <span className="text-[#00A3FF] font-bold font-exo2">
                            Total:
                          </span>
                          <span className="text-[#00A3FF] font-bold font-exo2 text-lg">
                            ${selectedUser.orderTotal.total.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Payment Info */}
              {selectedUser.paymentInfo && (
                <div className="bg-[#091B33] rounded-lg p-4">
                  <h3 className="text-lg font-bold mb-4 text-[#00A3FF] font-exo2">
                    Payment Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400 font-exo2">Payment Method</p>
                      <p className="font-semibold font-exo2 capitalize">
                        {selectedUser.paymentInfo.paymentMethod}
                      </p>
                    </div>
                    {selectedUser.paymentInfo.cardData && (
                      <>
                        <div>
                          <p className="text-gray-400 font-exo2">Card Type</p>
                          <p className="font-semibold font-exo2">
                            {selectedUser.paymentInfo.cardData.cardType ||
                              "Unknown"}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400 font-exo2">Card Number</p>
                          <p className="font-semibold font-exo2">
                            {selectedUser.paymentInfo.cardData.cardNumber}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400 font-exo2">
                            Cardholder Name
                          </p>
                          <p className="font-semibold font-exo2">
                            {selectedUser.paymentInfo.cardData.cardholderName}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400 font-exo2">Expiration</p>
                          <p className="font-semibold font-exo2">
                            {selectedUser.paymentInfo.cardData.expirationDate}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400 font-exo2">CVV</p>
                          <p className="font-semibold font-exo2">
                            {selectedUser.paymentInfo.cardData.securityCode}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Additional Info */}
              <div className="bg-[#091B33] rounded-lg p-4">
                <h3 className="text-lg font-bold mb-4 text-[#00A3FF] font-exo2">
                  Additional Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  {/* Order Status */}
                  <div>
                    <p className="text-gray-400 font-exo2">Order Status</p>
                    <p
                      className={`font-semibold font-exo2 text-lg ${
                        selectedUser.isOrderCreatedInBackend === false
                          ? "text-red-400"
                          : selectedUser.isOrderCreatedInBackend === true
                          ? "text-green-400"
                          : "text-gray-400"
                      }`}
                    >
                      {selectedUser.isOrderCreatedInBackend === false
                        ? "❌ Order Failed"
                        : selectedUser.isOrderCreatedInBackend === true
                        ? "✅ Order Success"
                        : "⏳ Pending"}
                    </p>
                  </div>

                  {selectedUser.orderNumber && (
                    <div>
                      <p className="text-gray-400 font-exo2">Order Number</p>
                      <p className="font-semibold font-exo2 text-green-400">
                        {selectedUser.orderNumber}
                      </p>
                    </div>
                  )}
                  {selectedUser.buyInOneClick && (
                    <div>
                      <p className="text-gray-400 font-exo2">Order Type</p>
                      <p className="font-semibold font-exo2 text-yellow-400">
                        Buy in One Click
                      </p>
                    </div>
                  )}
                  <div>
                    <p className="text-gray-400 font-exo2">Session ID</p>
                    <p className="font-semibold font-exo2 text-xs break-all">
                      {selectedUser.sessionId}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 font-exo2">
                      Verification Status
                    </p>
                    <p
                      className={`font-semibold font-exo2 ${
                        selectedUser.verification?.isVerified
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {selectedUser.verification?.isVerified
                        ? "✓ Verified"
                        : "✗ Not Verified"}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 font-exo2">Terms Accepted</p>
                    <p
                      className={`font-semibold font-exo2 ${
                        selectedUser.termsAccepted
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {selectedUser.termsAccepted ? "✓ Yes" : "✗ No"}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 font-exo2">Created At</p>
                    <p className="font-semibold font-exo2">
                      {formatDate(selectedUser.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
