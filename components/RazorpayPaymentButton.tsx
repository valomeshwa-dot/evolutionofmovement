'use client';

import { useState } from 'react';
import Script from 'next/script';
import { Loader2, CreditCard } from 'lucide-react';

interface RazorpayButtonProps {
  amount: number;
  currency?: string;
  name?: string;
  description?: string;
  onSuccess?: (response: any) => void;
  className?: string;
  buttonText?: string;
}

export function RazorpayPaymentButton({
  amount,
  currency = "INR",
  name = "EOM Studio",
  description = "Session Booking",
  onSuccess,
  className = "",
  buttonText = "Pay Now"
}: RazorpayButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    if (isProcessing) return;
    setIsProcessing(true);

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: 50000, 
      currency: "INR",
      name: "EOM Fitness",
      description: "Session Booking",
      handler: function (response: any) {
        setIsProcessing(false);

        // window.location.href = "/booking-success";
        if (onSuccess) onSuccess(response);
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      theme: {
        color: "#10b981", 
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
        }
      }
    };

    try {
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err) {

      alert("Error: Payment gateway failed to load.");
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      <button
        onClick={handlePayment}
        disabled={isProcessing}
        className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all disabled:opacity-70 ${className}`}
      >
        {isProcessing ? (
          <Loader2 className="animate-spin" size={20} />
        ) : (
          <CreditCard size={20} />
        )}
        {isProcessing ? "Processing..." : buttonText}
      </button>
    </>
  );
}
