// Centralized product data for both product grid and product details pages

export const products = [
  {
    id: 1,
    title: "Open Top Plastic Drums",
    desc: "Strong, reusable drums with removable lids for powders, pastes.",
    img: "/products/product-1.png",
    details: {
      description: "Our Open Top Plastic Drums are designed for industries that require safe storage, easy filling, and convenient emptying of solids, semi-solids, and liquids. Built with High Molecular High-Density Polyethylene (HM-HDPE), these drums are durable, reusable, and resistant to chemicals & UV rays.",
      features: [
        "Wide open mouth for easy filling & discharge",
        "Strong and reusable with long service life",
        "Resistant to chemicals, corrosion, and UV exposure",
        "Lightweight yet impact-resistant",
        "Suitable for reconditioning & multiple uses"
      ],
      sizes: ["120 Liters", "150 Liters", "200 Liters", "210 Liters"],
      images: [
        "/products/product-1.png",
        "/products/product-2.png",
        "/products/product-3.png",
        "/products/product-4.png"
      ]
    }
  },
  {
    id: 2,
    title: "Close Top Plastic Drums",
    desc: "Strong, reusable drums with removable lids for powders, pastes.",
    img: "/products/product-2.png",
    details: {
      description: "Our Close Top Plastic Drums are ideal for secure storage and transport of liquids and semi-liquids. Made from high-quality HDPE, they are robust, leak-proof, and suitable for a wide range of industrial applications.",
      features: [
        "Leak-proof screw cap closure",
        "Durable and impact-resistant",
        "UV and chemical resistant",
        "Stackable design for easy storage",
        "Available in multiple sizes"
      ],
      sizes: ["60 Liters", "120 Liters", "200 Liters"],
      images: [
        "/products/product-2.png",
        "/products/product-1.png",
        "/products/product-3.png"
      ]
    }
  },
  {
    id: 3,
    title: "Jerrycans",
    desc: "Compact, lightweight, and durable jerrycans for household.",
    img: "/products/product-3.png",
    details: {
      description: "Our Jerrycans are designed for easy handling and safe storage of liquids. They are lightweight, durable, and come with secure caps to prevent leakage.",
      features: [
        "Ergonomic handle for easy carrying",
        "Secure screw cap",
        "Stackable and space-saving",
        "Suitable for chemicals, water, and more"
      ],
      sizes: ["5 Liters", "10 Liters", "20 Liters"],
      images: [
        "/products/product-3.png",
        "/products/product-2.png"
      ]
    }
  },
  {
    id: 4,
    title: "Open Top Plastic Drums",
    desc: "Strong, reusable drums with removable lids for powders, pastes.",
    img: "/products/product-4.png",
    details: {
      description: "Our Open Top Plastic Drums are designed for industries that require safe storage, easy filling, and convenient emptying of solids, semi-solids, and liquids. Built with High Molecular High-Density Polyethylene (HM-HDPE), these drums are durable, reusable, and resistant to chemicals & UV rays.",
      features: [
        "Wide open mouth for easy filling & discharge",
        "Strong and reusable with long service life",
        "Resistant to chemicals, corrosion, and UV exposure",
        "Lightweight yet impact-resistant",
        "Suitable for reconditioning & multiple uses"
      ],
      sizes: ["120 Liters", "150 Liters", "200 Liters", "210 Liters"],
      images: [
        "/products/product-4.png",
        "/products/product-1.png"
      ]
    }
  }
  // Add more products as needed
];

export default products;
