import { NextResponse } from 'next/server';

export async function GET() {
  const locationsData = {
    locations: [
      {
        id: "north-park",
        name: "Outdoor Café - North Park",
        address: {
          street: "3257 W Bryn Mawr Ave",
          city: "Chicago",
          state: "IL",
          zip: "60659",
          country: "US"
        },
        phone: "+17735396078",
        phoneDisplay: "(773) 539-6078",
        hours: {
          "Every day": "8:00 AM - 9:00 PM"
        },
        features: [
          "Dine-in", "Takeout", "Online Ordering", "WiFi",
          "Student-friendly", "Study Space"
        ],
        orderingUrl: "https://www.chowbus.com/shop/6f0c0f44-9832-4f5e-a26f-fb9e07f36fe4/68b3fdff-7c64-4dcb-94cc-61090e313cb7/fb16d88b-f71f-43d5-9d64-95c1c33ec30f",
        googleMapsUrl: "https://www.google.com/maps/place/outdoor+cafe+north+park/data=!4m2!3m1!1s0x880fce0eed63124d:0x6c842134eef7872f?sa=X&ved=1t:242&ictx=111",
        cuisine: ["Vietnamese", "Coffee", "Café"]
      },
      {
        id: "evanston",
        name: "Outdoor Café - Evanston",
        address: {
          street: "2012 Central St",
          city: "Evanston",
          state: "IL",
          zip: "60201",
          country: "US"
        },
        phone: "+18474250022",
        phoneDisplay: "(847) 425-0022",
        hours: {
          "Sunday-Thursday": "7:00 AM - 7:00 PM",
          "Friday-Saturday": "7:00 AM - 9:00 PM"
        },
        features: [
          "Dine-in", "Takeout", "Online Ordering", "WiFi",
          "Student-friendly", "Study Space", "Spring Rolls"
        ],
        orderingUrl: "https://www.chowbus.com/shop/6f0c0f44-9832-4f5e-a26f-fb9e07f36fe4/68b3fdff-7c64-4dcb-94cc-61090e313cb7/9f29abe3-f1e2-433e-a8a5-afccca4a94bd",
        googleMapsUrl: "https://www.google.com/maps/place/Outdoor+Cafe+Evanston/@42.064056,-87.7015144,20.3z/data=!4m6!3m5!1s0x880fc50067d51eb1:0xaa75178daaec4088!8m2!3d42.0641884!4d-87.7015385!16s%2Fg%2F11xmh2cff6?entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D",
        cuisine: ["Vietnamese", "Coffee", "Café"]
      }
    ]
  };

  return NextResponse.json(locationsData);
}
