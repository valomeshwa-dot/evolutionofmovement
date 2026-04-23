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
      key: "rzp_test_SgbolHMqpfC3L7",
      amount: 50000, 
      currency: "INR",
      name: "Clinic Name",
      description: "Consultation Fee",
      handler: function (response: any) {
        setIsProcessing(false);
        console.log("Payment ID:", response.razorpay_payment_id);
        window.location.href = "/booking-success";
        if (onSuccess) onSuccess(response);
      },
      prefill: {
        name: "Test User",
        email: "test@test.com",
        contact: "9999999999",
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
      console.error("Razorpay failed to load:", err);
      alert("Payment gateway failed to load.");
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
