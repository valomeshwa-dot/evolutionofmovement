"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="bg-white py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-eom-blue mb-12">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-eom-blue uppercase tracking-tight mb-8">Terms & Conditions</h1>
        <div className="prose prose-lg text-gray-600 font-medium">
          <p>
            By using this website, you agree to our services and payment policies.
          </p>
        </div>
      </div>
    </div>
  )
}
