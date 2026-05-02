import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("BODY RECEIVED:", body);

    // Initialize with service role for database access
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Get the user ID from the body if provided, or fallback to email lookup
    const { data, error } = await supabase
      .from("bookings")
      .insert([
        {
          name: body.name,
          email: body.email.toLowerCase().trim(),
          phone: body.phone,
          service: body.service,
          status: "pending",
        },
      ])
      .select();

    if (error) {
      console.error("INSERT ERROR:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("INSERT SUCCESS:", data);

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("SAVE ERROR:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
