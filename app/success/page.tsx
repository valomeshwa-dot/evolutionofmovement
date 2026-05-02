export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Booking Confirmed 🎉
        </h1>
        <p className="text-gray-600 mb-6">
          Your session has been booked successfully.<br />
          Our team will contact you shortly.
        </p>

        <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Go to Home
        </a>
      </div>
    </div>
  )
}
