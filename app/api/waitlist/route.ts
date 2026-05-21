import Waitlist from "@/backend/model/Waitlist.model";
import { connect_db } from "@/lib/connect_db";
import { NextResponse } from "next/server";
import dns from "dns/promises";

// 1. GET Handler (With optional City filtering)
export async function GET(request: Request) {
  try {
    await connect_db();

    // Extract search parameters from the URL (e.g., /api/waitlist?city=London)
    const { searchParams } = new URL(request.url);
    const city = searchParams.get("city");

    const query: any = {};
    if (city) {
      query.city = { $regex: new RegExp(city, "i") };
    }

    // Fetch the data sorted by the newest entries first
    const subscribers = await Waitlist.find(query).sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, data: subscribers },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch waitlist entries" },
      { status: 500 },
    );
  }
}

// Common temporary burner email providers to filter out junk signups
const BANNED_DOMAINS = [
  "mailinator.com",
  "trashmail.com",
  "yopmail.com",
  "tempmail.com",
  "10minutemail.com",
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullname, email, phone, city, postcode } = body;

    // 1. Basic structural validation fallback
    if (!fullname || !email || !phone || !city || !postcode) {
      return NextResponse.json(
        { error: "All profile fields are required." },
        { status: 400 },
      );
    }

    const existingSubscriber = await Waitlist.findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json(
        { error: "This email is already on the waitlist." },
        { status: 400 },
      );
    }

    const emailParts = email.split("@");
    if (emailParts.length !== 2) {
      return NextResponse.json(
        { error: "Invalid email format structural standard." },
        { status: 400 },
      );
    }

    const domain = emailParts[1].toLowerCase();

    // 3. Prevent temporary burner accounts
    if (BANNED_DOMAINS.includes(domain)) {
      return NextResponse.json(
        { error: "Disposable email addresses are not permitted." },
        { status: 400 },
      );
    }

    try {
      const mxRecords = await dns.resolveMx(domain);

      if (!mxRecords || mxRecords.length === 0) {
        return NextResponse.json(
          { error: "This email domain is unable to receive incoming mail." },
          { status: 400 },
        );
      }
    } catch (dnsError) {
      return NextResponse.json(
        {
          error: "This email domain does not exist or is completely inactive.",
        },
        { status: 400 },
      );
    }

    const newSubscriber = await Waitlist.create({
      fullname,
      email,
      phone,
      postcode,
      city,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Successfully joined the waitlist!",
        data: newSubscriber,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Critical internal registration error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 },
    );
  }
}

// export async function POST(request: Request) {
//   try {
//     await connect_db();

//     const body = await request.json();
//     const { fullname, email, phone, postcode, city } = body;

//     if (!fullname || !email || !phone || !postcode || !city) {
//       return NextResponse.json(
//         { success: false, error: "All fields are required" },
//         { status: 400 },
//       );
//     }

//     const existingSubscriber = await Waitlist.findOne({ email });
//     if (existingSubscriber) {
//       return NextResponse.json(
//         { success: false, error: "This email is already on the waitlist." },
//         { status: 400 },
//       );
//     }

//     const newSubscriber = await Waitlist.create({
//       fullname,
//       email,
//       phone,
//       postcode,
//       city,
//     });

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Successfully joined the waitlist!",
//         data: newSubscriber,
//       },
//       { status: 201 },
//     );
//   } catch (error: any) {
//     if (error.code === 11000) {
//       return NextResponse.json(
//         { success: false, error: "This email is already on the waitlist." },
//         { status: 400 },
//       );
//     }

//     return NextResponse.json(
//       { success: false, error: "Something went wrong on the server." },
//       { status: 500 },
//     );
//   }
// }
