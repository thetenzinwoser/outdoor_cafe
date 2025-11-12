import { NextResponse } from 'next/server';

export async function GET() {
  const menuData = {
    location: "North Park",
    address: "3257 W Bryn Mawr Ave, Chicago, IL 60659",
    phone: "+17735396078",
    hours: {
      "Every day": "8:00 AM - 9:00 PM"
    },
    menu: [
      {
        category: "Coffee and More",
        items: [
          "Coffee", "Iced Coffee", "Espresso", "Americano", "Cortado",
          "Cappuccino", "Hot Cocoa", "Vietnamese Iced Black Coffee",
          "Vietnamese Iced Milk Coffee (Cà Phê Sữa Đá)",
          "Vietnamese Drip Coffee (Cà Phê Phin)"
        ],
        subsections: [
          {
            prefix: "Latte",
            items: ["Caramel", "Chai", "Matcha", "Mocha", "Raspberry Mocha", "Taro"]
          },
          {
            prefix: "Frappe",
            items: ["Caramel", "Matcha", "Mocha", "Mint"]
          }
        ]
      },
      {
        category: "Specialty Drinks",
        items: [
          "Vietnamese Iced Milk Coffee (Cà Phê Sữa Đá)", "Matcha Latte",
          "Strawberry Matcha Latte", "Passion Fruit Green Tea",
          "Strawberry Hibiscus Tea", "Signature Milk Tea",
          "Brown Sugar Milk Tea", "Choco Tiger Milk Tea", "Honey Ginger Tea"
        ]
      },
      {
        category: "Matcha Specialty",
        items: [
          "Matcha Latte", "Mango Matcha Latte", "Strawberry Matcha Latte",
          "Matcha Milk Tea", "Mango Matcha Smoothie", "Matcha Smoothie",
          "Matcha Frappe", "Matcha Milkshake", "Matcha Cold Foam"
        ]
      },
      {
        category: "Tea and More",
        items: [
          "Honey Ginger", "Citron (Yuja)", "Mango Green", "Passion Fruit Green",
          "Strawberry Hibiscus", "Strawberry Green", "Peach Black",
          "Jasmine Green", "Peppermint", "Hibiscus", "Madame Butterfly",
          "Black", "Earl Grey"
        ]
      },
      {
        category: "Milk Tea (Hot or Iced)",
        items: [
          "Brown Sugar", "Chai", "Choco Tiger", "Classic", "Coffee",
          "Coconut", "Earl Grey", "Honeydew", "Jasmine", "Matcha",
          "Signature", "Strawberry", "Taro", "Thai"
        ]
      },
      {
        category: "Smoothies",
        note: "Choose up to two flavors",
        items: [
          "Mango", "Strawberry", "Avocado", "Banana", "Kiwi", "Pineapple",
          "Peach", "Espresso", "Cookies & Cream", "Watermelon", "Matcha",
          "Milk Tea", "Taro", "Coconut", "Honeydew", "Red Bean",
          "Chocolate", "Vanilla"
        ]
      },
      {
        category: "Milkshakes",
        items: [
          "Banana", "Choco Espresso", "Chocolate", "Chocolate Banana",
          "Cookies and Cream", "Mango", "Matcha Green Tea", "Vanilla",
          "Strawberry", "Mint Chip"
        ]
      },
      {
        category: "Breakfast Sandwiches",
        items: [
          "Egg and Cheese", "Egg, Ham and Cheese", "Lox",
          "Nutella Banana Crunch"
        ],
        subsections: [
          {
            prefix: "Toasted Bagel",
            items: ["Plain", "Everything"]
          }
        ]
      },
      {
        category: "Banh Mi",
        items: [
          "Classic Ham and Pork Pâté", "Veggie Tofu", "Roasted Chicken",
          "Grilled Pork Sausage"
        ]
      },
      {
        category: "Panini",
        items: [
          "Grilled Cheese", "Hazelnut Heaven", "Cheddar Ham",
          "Turkey Provolone"
        ]
      },
      {
        category: "Other Food",
        items: [
          "Chicken Nuggets", "French Fries", "Mozzarella Sticks",
          "Egg Rolls"
        ]
      },
      {
        category: "Pastries",
        items: [
          "Croissants", "Muffins", "Cookies", "Brownies"
        ]
      }
    ]
  };

  return NextResponse.json(menuData);
}
