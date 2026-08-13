export const normalizeProductId = (value = '') => {
  const normalized = String(value || '').trim();

  if (!normalized) return normalized;

  const productMatch = normalized.match(/^product-(\d+)$/i);
  if (productMatch) return `prod-${productMatch[1]}`;

  const legacyMatch = normalized.match(/^prod-(\d+)$/i);
  if (legacyMatch) return `prod-${legacyMatch[1]}`;

  return normalized;
};

export const toProductRouteId = (value = '') => {
  const normalized = normalizeProductId(value);
  const match = normalized.match(/^prod-(\d+)$/i);
  return match ? `product-${match[1]}` : normalized;
};

export const products = [
  {
    id: "prod-1",
    name: "Floral Summer One-Piece Dress",
    category: "dresses",
    categoryName: "One-Piece Dresses",
    price: 1499,
    oldPrice: 1999,
    discount: "25% OFF",
    rating: 4.8,
    reviewsCount: 34,
    isNew: true,
    isBestSeller: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Pink", "Beige", "White"],
    colorHex: ["#F4DCD9", "#F5F0EB", "#FFFFFF"],
    image: "/images/dress_collection.png",
    gallery: [
      "/images/dress_collection.png",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Breathable pure cotton floral print maxi dress featuring soft pastel hues, romantic flared tiering, and a comfortable relaxed fit tailored for warm summer days.",
    fabric: "100% Premium Pure Cotton",
    fit: "Relaxed Fit / A-Line",
    pattern: "Botanical Floral Print",
    occasion: "Casual Outings, Day Parties, Summer Festive",
    work: "Gentle Hand Block Print & Mirror Neck Accent",
    care: "Gentle hand wash in cold water or dry clean."
  },
  {
    id: "prod-2",
    name: "Printed Cotton Kurti & Palazzo Set",
    category: "kurtis",
    categoryName: "Kurtis",
    price: 899,
    oldPrice: 1299,
    discount: "30% OFF",
    rating: 4.7,
    reviewsCount: 52,
    isNew: true,
    isBestSeller: true,
    sizes: ["M", "L", "XL", "XXL", "3XL"],
    colors: ["Blue", "Beige", "Green"],
    colorHex: ["#A3C1AD", "#F5F0EB", "#7B9E87"],
    image: "/images/kurti_collection.png",
    gallery: [
      "/images/kurti_collection.png",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Chic straight-cut printed kurti paired with wide-leg palazzo pants. Features intricate neck threadwork and lightweight breathable cotton feel.",
    fabric: "Soft Breathable Slub Cotton",
    fit: "Regular Straight Fit",
    pattern: "Traditional Bandhani / Floral Hybrid",
    occasion: "Daily Wear, Workwear, Casual Gathering",
    work: "Gota Patti & Subtle Neck Embroidery",
    care: "Machine wash with like colors."
  },
  {
    id: "prod-3",
    name: "Elegant Zari Woven Silk Saree",
    category: "sarees",
    categoryName: "Sarees",
    price: 1799,
    oldPrice: 2499,
    discount: "28% OFF",
    rating: 4.9,
    reviewsCount: 88,
    isNew: true,
    isBestSeller: true,
    sizes: ["Free Size"],
    colors: ["Pink", "Maroon", "Gold"],
    colorHex: ["#E8C5C8", "#5C0632", "#D4AF37"],
    image: "/images/saree_collection.png",
    gallery: [
      "/images/saree_collection.png",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Classic Indian silk saree styled with intricate woven golden zari motifs along the border and pallu. Includes matching unstitched blouse fabric.",
    fabric: "Soft Art Silk with Gold Weave",
    fit: "5.5 Meters Saree + 0.8 Meter Blouse Piece",
    pattern: "Traditional Royal Brocade Pattern",
    occasion: "Festive Celebrations, Weddings, Pujas",
    work: "Woven Zari Work",
    care: "Dry clean recommended."
  },
  {
    id: "prod-4",
    name: "Floral Contemporary Co-ord Set",
    category: "coords",
    categoryName: "Co-ord Sets",
    price: 1699,
    oldPrice: 2199,
    discount: "22% OFF",
    rating: 4.6,
    reviewsCount: 29,
    isNew: true,
    isBestSeller: false,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Pink", "Multicolor"],
    colorHex: ["#F5F0EB", "#F4DCD9", "#9B6B82"],
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Modern fusion two-piece matching set with front-open collar tunic and straight trousers. Offers effortlessness with high-street fashion appeal.",
    fabric: "Premium Cotton Rayon Blend",
    fit: "Smart Fit Tunic + Tapered Pants",
    pattern: "Contemporary Printed Abstract",
    occasion: "Brunch, Travel, Office Festive Days",
    work: "Fabric Buttons & Cuff Accents",
    care: "Gentle machine wash."
  },
  {
    id: "prod-5",
    name: "Embroidered Festive 3-Piece Salwar Suit",
    category: "suits",
    categoryName: "Suits & Salwar Sets",
    price: 2299,
    oldPrice: 2999,
    discount: "23% OFF",
    rating: 4.9,
    reviewsCount: 61,
    isNew: false,
    isBestSeller: true,
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    colors: ["Maroon", "Beige", "Green"],
    colorHex: ["#4A154B", "#F5F0EB", "#2E5A44"],
    image: "/images/suit_collection.png",
    gallery: [
      "/images/suit_collection.png"
    ],
    description: "Complete 3-piece designer suit ensemble consisting of embroidered kurti, matching salwar/pants, and an ornate organza woven dupatta.",
    fabric: "Chanderi Cotton Silk with Chiffon Dupatta",
    fit: "Tailored Straight Fit",
    pattern: "Intricate Floral Neck & Border Threadwork",
    occasion: "Family Gatherings, Festive Parties",
    work: "Zari, Resham & Sequence Threadwork",
    care: "Dry clean only."
  },
  {
    id: "prod-6",
    name: "Royal Velvet & Gold Thread Lehenga",
    category: "lehengas",
    categoryName: "Lehengas",
    price: 8999,
    oldPrice: 11999,
    discount: "25% OFF",
    rating: 5.0,
    reviewsCount: 41,
    isNew: true,
    isBestSeller: true,
    sizes: ["S", "M", "L", "XL", "Free Size"],
    colors: ["Maroon", "Red", "Gold"],
    colorHex: ["#4A154B", "#8B0000", "#D4AF37"],
    image: "/images/lehenga_collection.png",
    gallery: [
      "/images/lehenga_collection.png"
    ],
    description: "Regal festive lehenga set boasting deep velvet choli, voluminous flared skirt adorned with royal dori needlework, and net embellished dupatta.",
    fabric: "Micro Velvet Skirt & Blouse, Soft Net Dupatta",
    fit: "Semi-stitched Skirt up to 42 inch waist",
    pattern: "Royal Heritage Kalidar Motif",
    occasion: "Bridal, Reception, Heavy Festive Occasions",
    work: "Dori Embroidery, Zardozi & Sequins",
    care: "Specialist dry clean only."
  },
  {
    id: "prod-7",
    name: "Cotton Daily Wear Printed Short Kurti",
    category: "kurtis",
    categoryName: "Kurtis",
    price: 699,
    oldPrice: 999,
    discount: "30% OFF",
    rating: 4.5,
    reviewsCount: 19,
    isNew: true,
    isBestSeller: false,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Yellow", "White", "Pink"],
    colorHex: ["#E6C200", "#FFFFFF", "#F4DCD9"],
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Breathable short hip-length kurti designed to pair effortlessly with jeans, leggings, or palazzos for everyday comfort.",
    fabric: "100% Light Cotton",
    fit: "Regular Short Fit",
    pattern: "Jaipuri Screen Print",
    occasion: "Daily College, Work, Casual Outings",
    work: "Mandarin Collar & Wooden Buttons",
    care: "Regular hand wash."
  },
  {
    id: "prod-8",
    name: "Festive Embroidered Sharara Suit Set",
    category: "shararas",
    categoryName: "Sharara Sets",
    price: 3499,
    oldPrice: 4299,
    discount: "18% OFF",
    rating: 4.8,
    reviewsCount: 38,
    isNew: false,
    isBestSeller: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Green", "Yellow", "Beige"],
    colorHex: ["#2E5A44", "#D4AF37", "#F5F0EB"],
    image: "https://images.unsplash.com/photo-1610030469668-9861807a936e?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1610030469668-9861807a936e?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Stunning flared tier sharara set featuring short embroidered peplum kurti, multi-tiered flared pants, and sheer bordered dupatta.",
    fabric: "Georgette with Soft Cotton Lining",
    fit: "Flared Tier Fit",
    pattern: "Sequin Embroidered Chevron",
    occasion: "Sangeet, Eid, Festive Celebrations",
    work: "Gota Patti & Mirror Sequins",
    care: "Dry clean."
  },
  {
    id: "prod-9",
    name: "Plus Size Elegant Floral Anarkali Suit",
    category: "plus-size",
    categoryName: "Plus Size",
    price: 1899,
    oldPrice: 2499,
    discount: "24% OFF",
    rating: 4.9,
    reviewsCount: 47,
    isNew: true,
    isBestSeller: true,
    sizes: ["XL", "XXL", "3XL", "4XL"],
    colors: ["Pink", "Maroon", "Blue"],
    colorHex: ["#F4DCD9", "#5C0632", "#4A6B82"],
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Specially tailored for extended sizes from XL to 4XL. Graceful flowing flare Anarkali silhouette engineered for maximum comfort and style.",
    fabric: "Premium Rayon Flex Fabric",
    fit: "Comfort Flare Anarkali Cut",
    pattern: "Allover Floral Digital Print",
    occasion: "Occasion Wear, Festive Dinners",
    work: "Lace Trimming along Border & Cuffs",
    care: "Hand wash or gentle machine cycle."
  },
  {
    id: "prod-10",
    name: "Exclusive Jacquard Silk Dupatta",
    category: "dupattas",
    categoryName: "Exclusive Dupattas",
    price: 799,
    oldPrice: 1099,
    discount: "27% OFF",
    rating: 4.7,
    reviewsCount: 22,
    isNew: false,
    isBestSeller: false,
    sizes: ["Free Size"],
    colors: ["Gold", "Maroon", "Beige"],
    colorHex: ["#D4AF37", "#4A154B", "#F5F0EB"],
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Rich Banarasi jacquard woven dupatta featuring gold tassels and royal border. Elevates plain kurtis and suits instantly.",
    fabric: "Banarasi Art Silk",
    fit: "2.4 Meters Length x 36 Inches Width",
    pattern: "Traditional Golden Weave",
    occasion: "Festive Accent",
    work: "Tassel Trim & Golden Zari",
    care: "Dry clean only."
  },
  {
    id: "prod-11",
    name: "Padded Readymade Silk Blouse",
    category: "blouses",
    categoryName: "Readymade Blouses",
    price: 1199,
    oldPrice: 1599,
    discount: "25% OFF",
    rating: 4.8,
    reviewsCount: 31,
    isNew: true,
    isBestSeller: false,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gold", "Black", "Maroon"],
    colorHex: ["#D4AF37", "#111111", "#4A154B"],
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Ready-to-wear padded blouse in raw silk with boat neck design and inner margin margins up to 2 inches for easy alteration.",
    fabric: "Raw Silk with Soft Cotton Inner Lining",
    fit: "Back-hook Padded Fit",
    pattern: "Solid brocade texture",
    occasion: "Saree Pairing, Festive Parties",
    work: "Dori tie-back with Latkan",
    care: "Dry clean recommended."
  },
  {
    id: "prod-12",
    name: "Unstitched Pure Chanderi Suit Material",
    category: "unstitched",
    categoryName: "Unstitched Suit Material",
    price: 1899,
    oldPrice: 2399,
    discount: "20% OFF",
    rating: 4.9,
    reviewsCount: 16,
    isNew: true,
    isBestSeller: false,
    sizes: ["Free Size"],
    colors: ["Beige", "Yellow", "Pink"],
    colorHex: ["#F5F0EB", "#E6C200", "#F4DCD9"],
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Unstitched dress material set including 2.5m Chanderi top, 2.5m Santoon bottom lining fabric, and embroidered Nazmeen dupatta.",
    fabric: "Chanderi Silk Top, Cotton Bottom, Nazmeen Dupatta",
    fit: "Customizable up to 52 inch chest",
    pattern: "Subtle Threadwork Bootis",
    occasion: "Bespoke Boutique Tailoring",
    work: "Resham Thread & Gota Border",
    care: "Dry clean."
  }
];
