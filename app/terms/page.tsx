import Link from 'next/link';
import { FileText } from 'lucide-react'; // "Document icon" equivalent in lucide is FileText or File

export const metadata = {
  title: 'Terms & Conditions | EOM - Evolution of Movement',
  description: 'Terms and conditions for using EOM - Evolution of Movement services.',
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24">
      {/* 1. HERO SECTION */}
      <section className="text-center pt-24 pb-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <span className="inline-block py-1 px-4 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold tracking-wider mb-6">
            Legal Information
          </span>
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 shadow-sm">
            <FileText size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* 2. CONTENT SECTION */}
      <main className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-10 mt-10 space-y-8 text-slate-700 leading-relaxed">
          
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-slate-900">TERMS & CONDITIONS</h2>
            <p className="text-lg font-medium text-slate-600 mt-2">EOM – Evolution of Movement</p>
          </div>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">1. Introduction</h3>
            <p className="mb-2">Welcome to EOM – Evolution of Movement.</p>
            <p>By accessing our website, booking services, or enrolling in our programs, you agree to comply with and be bound by these Terms & Conditions.</p>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">2. Services Offered</h3>
            <p className="mb-4">EOM provides professional services including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4 marker:text-blue-500">
              <li>Sports & therapeutic massage</li>
              <li>Physiotherapy services</li>
              <li>Strength & conditioning training</li>
              <li>Rehabilitation programs</li>
              <li>Wellness and recovery sessions</li>
            </ul>
            <p>All services are subject to availability and may be modified or discontinued without prior notice.</p>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">3. Eligibility</h3>
            <p className="mb-2">Clients and users must be at least 18 years of age to avail services independently.</p>
            <p className="mb-2">Minors must be accompanied by a parent/guardian.</p>
            <p>All information provided must be accurate and complete.</p>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">4. Bookings & Payments</h3>
            <p className="mb-2">All appointments must be booked in advance through our official channels.</p>
            <p className="mb-2">Payments may be required in full or partial (advance) to confirm bookings.</p>
            <p className="mb-2">We accept payments via cash, UPI, bank transfer, Card or other approved methods.</p>
            <p>Prices are subject to change without prior notice.</p>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">5. Cancellation & Refund Policy</h3>
            <p className="mb-4 font-medium text-slate-800">For Services:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
              <li>Cancellations made less than 24 hours before the appointment may be non-refundable.</li>
              <li>Late arrival may result in reduced session time without price reduction.</li>
              <li>No-shows will be charged the full session fee.</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">6. Health & Medical Disclaimer</h3>
            <p className="mb-2">Clients must disclose all medical conditions, injuries, allergies, or ongoing treatments prior to services.</p>
            <p className="mb-2">Our services (massage, physiotherapy, strength training) are not a substitute for medical diagnosis or treatment by a licensed physician.</p>
            <p>The Company shall not be held liable for any injury, complication, or adverse reaction resulting from undisclosed conditions.</p>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">7. Physiotherapy & Training Consent</h3>
            <p className="mb-2">By opting for physiotherapy or strength & conditioning programs, you acknowledge and accept the inherent physical risks involved.</p>
            <p className="mb-2">You agree to follow therapist/trainer instructions at all times.</p>
            <p>EOM is not responsible for injuries caused due to negligence or non-compliance.</p>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">8. Professional Conduct & Client Behavior</h3>
            <p className="mb-2">Clients are expected to maintain respectful and appropriate behavior at all times.</p>
            <p className="mb-2">Any form of misconduct, harassment, or inappropriate behavior will result in immediate termination of services without refund.</p>
            <p>The Company reserves the right to refuse service to anyone.</p>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">9. Limitation of Liability</h3>
            <p className="mb-2">EOM shall not be liable for any indirect, incidental, or consequential damages arising from the use of services.</p>
            <p>All services are undertaken at the client’s own risk.</p>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">10. Privacy</h3>
            <p className="mb-2">User data and personal information are handled in accordance with our Privacy Policy.</p>
            <p>We are committed to protecting your confidentiality.</p>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">11. Packages & Memberships</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 font-bold">•</span>
                <span>Packages once purchased are non-refundable</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 font-bold">•</span>
                <span>Validity must be adhered to</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 font-bold">•</span>
                <span>Extensions may be granted only in exceptional cases</span>
              </li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">12. Medical Exceptions</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 font-bold">•</span>
                <span>Refunds (partial/full) may be considered only with valid medical proof</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 font-bold">•</span>
                <span>Decision remains at management discretion</span>
              </li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">13. Governing Law</h3>
            <p className="mb-2">These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India.</p>
            <p>Any disputes shall be subject to the jurisdiction of courts in Mumbai, Maharashtra.</p>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">14. Amendments</h3>
            <p className="mb-2">EOM reserves the right to update or modify these Terms & Conditions at any time without prior notice.</p>
            <p>Continued use of services constitutes acceptance of revised terms</p>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">15. Acceptance</h3>
            <p>By using our website or services, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.</p>
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
