// Menu data with dietary and allergen information for AI agent optimization

export interface MenuItem {
  name: string;
  dietary?: string[]; // vegan, vegetarian, gluten-free, dairy-free
  allergens?: string[]; // dairy, gluten, soy, nuts, eggs
  category?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  items: string[] | MenuItem[];
  subsections?: {
    prefix: string;
    items: string[];
  }[];
}

// Common dietary tags for menu items
export const dietaryTags = {
  vegan: ["Smoothies", "Vietnamese Iced Black Coffee", "Tea", "Spring Rolls - Veggie Tofu"],
  vegetarian: ["Smoothies", "Egg and Cheese", "Grilled Cheese", "Mozzarella Sticks", "Veggie Tofu"],
  dairyFree: ["Vietnamese Iced Black Coffee", "Tea", "Spring Rolls", "Banh Mi"],
  glutenFree: ["Smoothies", "Vietnamese Coffee", "Tea", "Spring Rolls"]
};

// Common allergen information
export const allergenInfo = {
  dairy: ["Milk Tea", "Latte", "Frappe", "Milkshake", "Hot Cocoa", "Cappuccino"],
  gluten: ["Banh Mi", "Panini", "Breakfast Sandwiches", "Bagel", "Croissants", "Muffins", "Cookies"],
  soy: ["Tofu items", "Some Vietnamese Coffee preparations"],
  nuts: ["Check with staff for specific items"],
  eggs: ["Egg Rolls", "Breakfast Sandwiches with Egg", "Some Pastries"]
};

export const chicagoMenu: MenuSection[] = [
  {
    id: "coffee-more",
    title: "Coffee and More",
    items: [
      "Coffee",
      "Iced Coffee",
      "Espresso",
      "Americano",
      "Cortado",
      "Cappuccino",
      "Hot Cocoa",
      "Vietnamese Iced Black Coffee",
      "Vietnamese Iced Milk Coffee (Cà Phê Sữa Đá)",
      "Vietnamese Drip Coffee (Cà Phê Phin)"
    ],
    subsections: [
      {
        prefix: "Latte -",
        items: ["Caramel", "Chai", "Matcha", "Mocha", "Raspberry Mocha", "Taro"]
      },
      {
        prefix: "Frappe -",
        items: ["Caramel", "Matcha", "Mocha", "Mint"]
      }
    ]
  },
  {
    id: "specialty-drinks",
    title: "Specialty Drinks",
    items: [
      "Vietnamese Iced Milk Coffee (Cà Phê Sữa Đá)",
      "Matcha Latte",
      "Strawberry Matcha Latte",
      "Passion Fruit Green Tea",
      "Strawberry Hibiscus Tea",
      "Signature Milk Tea",
      "Brown Sugar Milk Tea",
      "Choco Tiger Milk Tea",
      "Honey Ginger Tea"
    ]
  },
  {
    id: "matcha-specialty",
    title: "Matcha Specialty",
    items: [
      "Matcha Latte",
      "Mango Matcha Latte",
      "Strawberry Matcha Latte",
      "Matcha Milk Tea",
      "Mango Matcha Smoothie",
      "Matcha Smoothie",
      "Matcha Frappe",
      "Matcha Milkshake",
      "Matcha Cold Foam"
    ]
  },
  {
    id: "tea-more",
    title: "Tea and More",
    items: [
      "Honey Ginger",
      "Citron (Yuja)",
      "Mango Green",
      "Passion Fruit Green",
      "Strawberry Hibiscus",
      "Strawberry Green",
      "Peach Black",
      "Jasmine Green",
      "Peppermint",
      "Hibiscus",
      "Madame Butterfly",
      "Black",
      "Earl Grey"
    ]
  },
  {
    id: "milk-tea",
    title: "Milk Tea (Hot or Iced)",
    items: [
      "Brown Sugar",
      "Chai",
      "Choco Tiger",
      "Classic",
      "Coffee",
      "Coconut",
      "Earl Grey",
      "Honeydew",
      "Jasmine",
      "Matcha",
      "Signature",
      "Strawberry",
      "Taro",
      "Thai"
    ]
  },
  {
    id: "smoothies",
    title: "Smoothies (Choose up to two flavors)",
    items: [
      "Mango",
      "Strawberry",
      "Avocado",
      "Banana",
      "Kiwi",
      "Pineapple",
      "Peach",
      "Espresso",
      "Cookies & Cream",
      "Watermelon",
      "Matcha",
      "Milk Tea",
      "Taro",
      "Coconut",
      "Honeydew",
      "Red Bean",
      "Chocolate",
      "Vanilla"
    ]
  },
  {
    id: "milkshakes",
    title: "Milkshakes",
    items: [
      "Banana",
      "Choco Espresso",
      "Chocolate",
      "Chocolate Banana",
      "Cookies and Cream",
      "Mango",
      "Matcha Green Tea",
      "Vanilla",
      "Strawberry",
      "Mint Chip"
    ]
  },
  {
    id: "breakfast",
    title: "Breakfast Sandwiches",
    items: [
      "Egg and Cheese",
      "Egg, Ham and Cheese",
      "Lox",
      "Nutella Banana Crunch"
    ],
    subsections: [
      {
        prefix: "Toasted Bagel -",
        items: ["Plain", "Everything"]
      }
    ]
  },
  {
    id: "banh-mi",
    title: "Banh Mi",
    items: [
      "Classic Ham and Pork Pâté",
      "Veggie Tofu",
      "Roasted Chicken",
      "Grilled Pork Sausage"
    ]
  },
  {
    id: "panini",
    title: "Panini",
    items: [
      "Grilled Cheese",
      "Hazelnut Heaven",
      "Cheddar Ham",
      "Turkey Provolone"
    ]
  },
  {
    id: "other-food",
    title: "Other Food",
    items: [
      "Chicken Nuggets",
      "French Fries",
      "Mozzarella Sticks",
      "Egg Rolls"
    ]
  },
  {
    id: "pastries",
    title: "Pastries",
    items: [
      "Croissants",
      "Muffins",
      "Cookies",
      "Brownies"
    ]
  }
];

export const evanstonMenu: MenuSection[] = [
  ...chicagoMenu.filter(section => section.id !== "milkshakes"),
  {
    id: "spring-rolls",
    title: "Spring Rolls",
    items: [
      "Veggie Tofu",
      "Shrimp",
      "Grilled Pork Sausage",
      "Sampler"
    ]
  }
].sort((a, b) => {
  const order = ["coffee-more", "specialty-drinks", "matcha-specialty", "tea-more", "milk-tea", "smoothies", "breakfast", "banh-mi", "spring-rolls", "panini", "other-food", "pastries"];
  return order.indexOf(a.id) - order.indexOf(b.id);
});
