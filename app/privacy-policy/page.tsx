import Link from 'next/link';
import { Shield } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | EOM - Evolution of Movement',
  description: 'Privacy Policy for using EOM - Evolution of Movement services.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24">
      {/* 1. HERO SECTION */}
      <section className="text-center pt-24 pb-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <span className="inline-block py-1 px-4 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold tracking-wider mb-6">
            Legal Information
          </span>
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 shadow-sm">
            <Shield size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We value your privacy and protect your data.
          </p>
        </div>
      </section>

      {/* 2. CONTENT SECTION */}
      <main className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-10 mt-10 space-y-8 text-slate-700 leading-relaxed">
          
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-slate-900">PRIVACY POLICY</h2>
            <p className="text-lg font-medium text-slate-600 mt-2">EOM – Evolution of Movement</p>
          </div>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">1. Information We Collect</h3>
            <p className="mb-4">We collect user data essential for booking and providing our services, which includes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4 marker:text-blue-500">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">2. How We Use Your Data</h3>
            <p className="mb-4">The information we collect is used strictly for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4 marker:text-blue-500">
              <li>Booking processing and confirmation</li>
              <li>Communication regarding your sessions</li>
              <li>Service improvement and personalization</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">3. Data Protection</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4 marker:text-blue-500">
              <li><strong>Secure storage:</strong> Your personal information is stored securely to prevent unauthorized access.</li>
              <li><strong>No misuse:</strong> We only use your data for the purposes outlined in this policy.</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">4. Third Party Sharing</h3>
            <p>We do NOT share your data with third parties. Your information remains strictly confidential within EOM.</p>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">5. Contact</h3>
            <p>If you have any questions or concerns regarding our Privacy Policy or your data, please contact us for queries.</p>
          </section>

          {/* 5. BOTTOM CTA */}
          <div className="bg-blue-50 rounded-xl p-6 text-center mt-12 border border-blue-100">
            <h4 className="text-xl font-semibold text-slate-900 mb-4">
              Need help or clarification?
            </h4>
            <Link 
              href="/contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 shadow-md"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
