"use client"

import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { useAuth } from "@/context/AuthContext"

// DIRECT CLIENT INITIALIZATION
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Booking {
  id: string
  service: string
  status: string
  payment_status: string
  created_at: string
  email: string
}

export default function ProfilePage() {
  const { user, loading } = useAuth()
  const [bookings, setBookings] = useState<Booking[]>([])

  useEffect(() => {
    const fetchBookings = async () => {
      if (!user) return;

      console.log("USER:", user);

      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .eq("email", user.email)
        .order("created_at", { ascending: false });

      console.log("BOOKINGS:", data);

      if (data) {
        setBookings(data);
      }
    };

    if (user) {
      fetchBookings();
    }
  }, [user]);

  if (loading) {
    return <div className="p-10 text-center font-medium text-gray-500">Loading...</div>
  }

  if (!user) {
    return <div className="p-10 text-center font-medium text-gray-500">Please login to view your profile.</div>
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="space-y-10">
        
        {/* Dashboard Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Dashboard</h1>
          <p className="text-gray-500 mt-1 font-medium">
            Manage your bookings and sessions
          </p>
        </div>

        {/* Stats Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Total Bookings</p>
            <h2 className="text-3xl font-bold text-gray-900">{bookings.length}</h2>
          </div>

          <span className="text-xs px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 font-bold uppercase tracking-wider">
            Active User
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-10"></div>

        {/* Bookings Section */}
        <div>
          <div className="flex items-center gap-3">
            <div className="w-1 h-5 bg-blue-600 rounded-full"></div>
            <h2 className="text-lg font-semibold text-gray-900">
              Your Bookings
            </h2>
          </div>

          <div className="mt-6 space-y-4">
            {bookings.length > 0 ? (
              bookings.map((b, i) => (
                <div key={i} className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 capitalize">{b.service}</h3>
                      <p className="text-sm text-gray-500 mt-1">{b.email}</p>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      b.payment_status === "paid" 
                        ? "bg-green-100 text-green-700" 
                        : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {b.payment_status === "paid" ? "Paid" : b.payment_status}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20 border-2 border-dashed border-gray-200 rounded-3xl bg-white">
                <p className="text-gray-500 font-medium text-lg">No bookings found</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
