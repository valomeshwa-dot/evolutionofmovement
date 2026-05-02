import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Incoming Request:", body);

    const { name, email, phone, service } = body;

    // Validate request body
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, phone, and service are required." },
        { status: 400 }
      );
    }

    // Initialize Supabase Client
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error("Supabase environment variables are missing.");
      return NextResponse.json(
        { error: "Internal Server Error: Database configuration is missing." },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Insert into "bookings" table with ONLY specified fields
    // Ensure status defaults to "pending"
    // No user_id or payment_status required
    const { data, error } = await supabase
      .from("bookings")
      .insert([
        {
          name: name.trim(),
          email: email.toLowerCase().trim(),
          phone: phone.trim(),
          service: service,
          status: "pending"
        },
      ])
      .select();

    if (error) {
      console.error("SUPABASE ERROR:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { 
          error: `Supabase Error: ${error.message}`,
          details: error 
        },
        { status: 500 }
      );
    }

    console.log("Success Response:", data);

    return NextResponse.json({ 
      success: true, 
      message: "Booking saved successfully",
      data 
    }, { status: 200 });

  } catch (err: any) {
    console.error("Unexpected API Error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again.", details: err.message },
      { status: 500 }
    );
  }
}
