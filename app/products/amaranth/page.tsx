"use client"

import ProductDetailTemplate from "@/components/ProductDetailTemplate"

// Amaranth Product Data
const amaranthData = {
  id: "amaranth",
  name: "Amaranth",
  scientificName: "Amaranthus spp.",
  heroImage: "/images/products/amaranth-growing.jpg",
  plateImage: "/images/products/amaranth-plate.jpg",
  criticalNote: "Amaranth mikroyeşilleri 'antik' süpergıda olarak bilinen amaranth bitkisinin filizleri (4-6°C) sıcaklık aralığında saklanır. Tatlığa yakın dokunuş sıcaklığı sağlar.",
  specifications: {
    optimumHasat: "10-14 gün (90-100mm)",
    rafOmru: "6 gün (2-5°C)",
    kalori: "30 kcal/100g",
    besinDegeri: "Demir, Kalsiyum, Magnezyum, Vitamin C, Vitamin K, Folat",
    besinSiniflandirmasi: "Çok zengin/25 adet/50 gram",
    renkStabilitesi: "Yüksek - magenta renk korunur"
  },
  goldenRules: [
    "Vegan beslenme için ideal protein kaynağı",
    "Salata karışımlarına renk ve lezzet katar",
    "Smoothie kaselerine görsel etki sağlar",
    "Sıcak yemeklerin üzerine servis öncesi eklenir",
    "Soğuk çorbaların garnitürü olarak kullanılır",
    "Buzdolabında 2-5°C'de saklanır",
    "Açıldıktan sonra 6 gün içinde tüketilir",
    "Kullanım anında yıkanır",
    "Fazla nem mikroyeşillerin bozulmasına neden olur",
    "Hava geçirgen ambalajda saklanır"
  ],
  flavorPairings: {
    vegan: [
      "Avokado ve quinoa salataları",
      "Chia tohumu ve kenevir tohumu",
      "Badem ve ceviz karışımları",
      "Antik tahıl karışımları"
    ],
    meatFish: [
      "Dana bonfile ve kuzu pirzola",
      "Tavuk göğsü ve hindi fileto",
      "Somon ve levrek",
      "Karides ve deniz ürünleri"
    ],
    desserts: [
      "Bitter çikolata ile mükemmel uyum",
      "Panna cotta ve mousse garnitürü",
      "Meyve salatalarında renk kontrastı",
      "Dondurma sunumlarında görsel etki"
    ]
  }
}

export default function AmaranthPage() {
  return <ProductDetailTemplate productData={amaranthData} />
}
