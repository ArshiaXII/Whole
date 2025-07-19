"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Leaf, Star, Clock, Sparkles, Languages, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Language content
const content = {
  en: {
    nav: {
      home: "HOME",
      products: "PRODUCTS",
      about: "ABOUT US",
      services: "SERVICES",
      contacts: "CONTACTS"
    },
    title: "Product Catalog",
    subtitle: "Microgreens Collection",
    description: "Discover our carefully curated selection of microgreens, each variety chosen for exceptional flavor, nutritional value, and culinary versatility."
  },
  tr: {
    nav: {
      home: "ANA SAYFA",
      products: "ÜRÜNLER",
      about: "HAKKIMIZDA",
      services: "HİZMETLER",
      contacts: "İLETİŞİM"
    },
    title: "Ürün Kataloğumuz",
    subtitle: "Mikroyeşil Koleksiyonu",
    description: "Özenle seçilmiş mikroyeşil koleksiyonumuzu keşfedin, her çeşit olağanüstü lezzet, beslenme değeri ve mutfak çok yönlülüğü için seçilmiştir."
  }
}

const getProductCategories = (language: 'en' | 'tr') => [
  {
    id: "microgreens",
    name: "Mikroyeşiller",
    nameEn: "Microgreens",
    description: "Özenle seçilmiş mikroyeşil koleksiyonumuz",
    descriptionEn: "Our carefully selected microgreen collection",
    icon: "🌱",
    color: "from-green-500 to-emerald-600",
    products: [
      {
        id: "daikon-radish",
        name: "Daikon Radish",
        tagline: "Spicy & Crisp",
        scientificName: "Raphanus sativus var. longipinnatus",
        description: "Clean, spicy, and peppery flavor with bright white stems and vibrant green leaves. Perfect for adding a crisp kick to any dish.",
        image: "/images/products/daikon-radish-hero.jpg",
        cardImage: "/images/products/daikon-radish-hero.jpg",
        harvestTime: "7-14 days",
        rating: 4.8,
        features: ["Rich in Vitamin C", "Phosphorus", "Potassium"],
        color: "from-green-500 to-emerald-600",
        textColor: "text-green-600",
      },
      {
        id: "amaranth",
        name: "Amaranth",
        tagline: "Vibrant & Earthy",
        scientificName: "Amaranthus spp.",
        description: "Mild, slightly sweet, and earthy flavor with stunning vivid magenta color throughout leaves and stems.",
        image: "/images/products/amaranth-hero.jpg",
        cardImage: "/images/products/amaranth-hero.jpg",
        harvestTime: "10-14 days",
        rating: 4.7,
        features: ["Packed with Antioxidants", "Vitamin K", "Vitamin E"],
        color: "from-red-500 to-pink-600",
        textColor: "text-red-600",
      },
      {
        id: "red-radish",
        name: "Red Radish",
        tagline: "Bold & Peppery",
        scientificName: "Raphanus sativus",
        description: "Intense and robust peppery flavor with striking reddish-purple stems and green cotyledon leaves.",
        image: "/images/products/red-radish-hero.jpg",
        cardImage: "/images/products/red-radish-hero.jpg",
        harvestTime: "7-12 days",
        rating: 4.8,
        features: ["Vitamins A, B, C, E, K", "Spicy Flavor", "Natural Enzymes"],
        color: "from-red-600 to-rose-700",
        textColor: "text-red-700",
      },
      {
        id: "perilla",
        name: "Perilla",
        tagline: "Aromatic & Unique",
        scientificName: "Perilla frutescens",
        description: "Complex and unique flavor with notes of mint, basil, and anise. Broad, serrated leaves in green and purple varieties.",
        image: "/images/products/perilla-hero.jpg",
        cardImage: "/images/products/perilla-hero.jpg",
        harvestTime: "14-21 days",
        rating: 4.9,
        features: ["Omega-3 Fatty Acids", "Iron", "Calcium"],
        color: "from-purple-500 to-indigo-600",
        textColor: "text-purple-600",
      },
    ]
  },
  {
    id: "edible-flowers",
    name: "Yenilebilir Çiçekler",
    nameEn: "Edible Flowers",
    description: "Lezzet ve görsel güzellik için özel çiçekler",
    descriptionEn: "Special flowers for flavor and visual beauty",
    icon: "🌸",
    color: "from-pink-500 to-rose-600",
    products: [
      {
        id: "menekse",
        name: language === 'tr' ? "Menekşe" : "Viola",
        tagline: language === 'tr' ? "Hafif Tatlı & Çiçeksi" : "Sweet & Floral",
        scientificName: "Viola tricolor",
        description: language === 'tr'
          ? "Hafif tatlı ve çiçeksi lezzet. Mor, beyaz ve sarı karışımlı renkler. Tatlı süsleme, kokteyl kenarı ve salatalarda kullanım."
          : "Delicate sweet and floral flavor. Purple, white and yellow mixed colors. Perfect for dessert decoration, cocktail garnish and salads.",
        image: "/images/products/viola-hero.jpg",
        cardImage: "/images/products/viola-hero.jpg",
        harvestTime: "60-75 days",
        rating: 4.5,
        features: language === 'tr'
          ? ["C Vitamini: 12%", "Antioksidan", "Cilt Sağlığı"]
          : ["Vitamin C: 12%", "Antioxidants", "Skin Health"],
        color: "from-purple-500 to-violet-600",
        textColor: "text-purple-600",
      },
      {
        id: "aynisefa",
        name: language === 'tr' ? "Aynısefa" : "Calendula",
        tagline: language === 'tr' ? "Hafif Acımsı & Baharatlı" : "Slightly Bitter & Spicy",
        scientificName: "Calendula officinalis",
        description: language === 'tr'
          ? "Hafif acımsı, baharatlı notalar. Parlak turuncu ve sarı tonlar. Salata, çay ve krema tatlılarında dekorasyon."
          : "Slightly bitter with spicy notes. Bright orange and yellow tones. Perfect for salads, tea and cream dessert decoration.",
        image: "/images/products/calendula-hero.jpg",
        cardImage: "/images/products/calendula-hero.jpg",
        harvestTime: "50-65 days",
        rating: 4.7,
        features: language === 'tr'
          ? ["A Vitamini: 45%", "C Vitamini: 30%", "Demir: 10%"]
          : ["Vitamin A: 45%", "Vitamin C: 30%", "Iron: 10%"],
        color: "from-yellow-500 to-orange-600",
        textColor: "text-yellow-600",
      },
      {
        id: "kapya-cicegi",
        name: language === 'tr' ? "Kapya Çiçeği" : "Nasturtium",
        tagline: language === 'tr' ? "Keskin & Renkli" : "Peppery & Colorful",
        scientificName: "Tropaeolum majus",
        description: language === 'tr'
          ? "Keskin ve baharatlı lezzet. Canlı kırmızı, turuncu ve sarı renkler. Salata, ana yemek süsleme ve soslar için ideal."
          : "Sharp and spicy flavor. Vibrant red, orange and yellow colors. Ideal for salads, main dish garnish and sauces.",
        image: "/images/products/nasturtium-hero.jpg",
        cardImage: "/images/products/nasturtium-hero.jpg",
        harvestTime: "45-60 days",
        rating: 4.6,
        features: language === 'tr'
          ? ["C Vitamini: 25%", "E Vitamini: 15%", "Folat: 8%"]
          : ["Vitamin C: 25%", "Vitamin E: 15%", "Folate: 8%"],
        color: "from-orange-500 to-red-600",
        textColor: "text-orange-600",
      }
    ]
  },
  {
    id: "mushroom-types",
    name: "Mantar Çeşitleri",
    nameEn: "Mushroom Types",
    description: "Premium kalite özel mantar çeşitleri",
    descriptionEn: "Premium quality specialty mushroom varieties",
    icon: "🍄",
    color: "from-amber-600 to-orange-700",
    products: [
      {
        id: "istiridye-mantari",
        name: language === 'tr' ? "İstiridye Mantarı" : "Oyster Mushroom",
        tagline: language === 'tr' ? "Yumuşak & Lezzetli" : "Delicate & Savory",
        scientificName: "Pleurotus ostreatus",
        description: language === 'tr'
          ? "Yumuşak dokulu, fan şeklinde mantarlar. Hafif tatlı lezzet ve kadifemsi doku. Wok yemekleri ve çorbalar için mükemmel."
          : "Tender, fan-shaped mushrooms with a subtle, slightly sweet flavor and velvety texture. Perfect for stir-fries and soups.",
        image: "/images/products/oyster-mushroom-hero.jpg",
        cardImage: "/images/products/oyster-mushroom-hero.jpg",
        harvestTime: "10-14 days",
        rating: 4.8,
        features: language === 'tr'
          ? ["Yüksek Protein", "B Vitaminleri", "Potasyum"]
          : ["High Protein", "B Vitamins", "Potassium"],
        color: "from-gray-500 to-slate-600",
        textColor: "text-gray-600",
      },
      {
        id: "shiitake-mantari",
        name: language === 'tr' ? "Shiitake Mantarı" : "Shiitake",
        tagline: language === 'tr' ? "Zengin & Umami" : "Rich & Umami",
        scientificName: "Lentinula edodes",
        description: language === 'tr'
          ? "Etli, kahverengi şapkalı mantarlar. Yoğun umami lezzet ve sıkı doku. Hem mutfak hem de tıbbi özellikleri ile değerli."
          : "Meaty, brown caps with intense umami flavor and firm texture. Prized for both culinary and medicinal properties.",
        image: "/images/products/shiitake-hero.jpg",
        cardImage: "/images/products/shiitake-hero.jpg",
        harvestTime: "14-21 days",
        rating: 4.9,
        features: language === 'tr'
          ? ["Bağışıklık Desteği", "Selenyum", "Bakır"]
          : ["Immune Support", "Selenium", "Copper"],
        color: "from-amber-600 to-brown-700",
        textColor: "text-amber-700",
      },
      {
        id: "aslan-yelesi",
        name: language === 'tr' ? "Aslan Yelesi" : "Lion's Mane",
        tagline: language === 'tr' ? "Eşsiz & Besleyici" : "Unique & Nutritious",
        scientificName: "Hericium erinaceus",
        description: language === 'tr'
          ? "Aslan yelesini andıran beyaz, sarkık dikenli mantar. Deniz ürünü benzeri doku ve bilişsel sağlık faydaları."
          : "White, cascading spines resembling a lion's mane. Seafood-like texture with cognitive health benefits.",
        image: "/images/products/lion-mane-hero.jpg",
        cardImage: "/images/products/lion-mane-hero.jpg",
        harvestTime: "14-18 days",
        rating: 4.7,
        features: language === 'tr'
          ? ["Bilişsel Destek", "Sinir Gelişimi", "Antioksidanlar"]
          : ["Cognitive Support", "Nerve Growth", "Antioxidants"],
        color: "from-stone-500 to-gray-600",
        textColor: "text-stone-600",
      }
    ]
  }
]

export default function ProductsPage() {
  const [language, setLanguage] = useState<'en' | 'tr'>('tr') // Default to Turkish
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tr' : 'en')
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev)
  }

  const t = content[language]
  const productCategories = getProductCategories(language)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10">
                <Image
                  src="/images/pyramid-logo.svg"
                  alt="WHOLEGREEN"
                  width={40}
                  height={40}
                  className="w-full h-full"
                />
              </div>
              <Image
                src="/images/wholegreen-logo.png"
                alt="WHOLEGREEN"
                width={120}
                height={24}
                className="h-6 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-green-400 transition-colors font-montserrat font-medium">
                {t.nav.home}
              </Link>
              <Link href="/products" className="text-green-400 hover:text-green-300 transition-colors font-montserrat font-medium">
                {t.nav.products}
              </Link>
              <Link href="/" className="text-white hover:text-green-400 transition-colors font-montserrat font-medium">
                {t.nav.about}
              </Link>
              <Link href="/" className="text-white hover:text-green-400 transition-colors font-montserrat font-medium">
                {t.nav.services}
              </Link>
              <Link href="/contact" className="text-white hover:text-green-400 transition-colors font-montserrat font-medium">
                {t.nav.contacts}
              </Link>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center text-white hover:text-green-400 transition-colors font-montserrat font-medium"
              >
                <Languages className="w-4 h-4 mr-1" />
                {language === 'en' ? 'TR' : 'EN'}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-green-400 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link
                href="/"
                className="block text-white hover:text-green-400 transition-colors font-montserrat font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.home}
              </Link>
              <Link
                href="/products"
                className="block text-green-400 hover:text-green-300 transition-colors font-montserrat font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.products}
              </Link>
              <Link
                href="/"
                className="block text-white hover:text-green-400 transition-colors font-montserrat font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.about}
              </Link>
              <Link
                href="/"
                className="block text-white hover:text-green-400 transition-colors font-montserrat font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.services}
              </Link>
              <Link
                href="/contact"
                className="block text-white hover:text-green-400 transition-colors font-montserrat font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.contacts}
              </Link>
              <button
                onClick={() => {
                  toggleLanguage()
                  setIsMobileMenuOpen(false)
                }}
                className="flex items-center text-white hover:text-green-400 transition-colors font-montserrat font-medium py-2"
              >
                <Languages className="w-4 h-4 mr-2" />
                {language === 'en' ? 'TR' : 'EN'}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 mt-16">
        <div className="absolute inset-0 bg-[url('/images/microgreens-pattern.svg')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6 text-green-600 mr-2" />
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200 text-sm px-4 py-2">
              {t.subtitle}
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight font-orbitron">
            {t.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {productCategories.map((category, categoryIndex) => (
            <div
              key={category.id}
              className={`mb-20 ${categoryIndex > 0 ? 'mt-24' : ''} transform-gpu`}
              style={{
                animationDelay: `${categoryIndex * 200}ms`,
                animation: 'fadeInUp 1s ease-out forwards'
              }}
            >
              {/* Category Header */}
              <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-6 group">
                  <span className="text-5xl mr-4 transform group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-orbitron tracking-tight">
                    {language === 'tr' ? category.name : category.nameEn}
                  </h2>
                </div>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {language === 'tr' ? category.description : category.descriptionEn}
                </p>
                <div className={`w-32 h-1.5 bg-gradient-to-r ${category.color} mx-auto mt-6 rounded-full shadow-lg`}></div>
              </div>

              {/* Products Grid for this category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {category.products.map((product, index) => (
                  <Link key={product.id} href={`/products/${product.id}`}>
                    <Card
                      className="group relative overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-700 ease-out border-0 hover:-translate-y-3 hover:scale-[1.02] transform-gpu will-change-transform cursor-pointer"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: 'fadeInUp 0.8s ease-out forwards'
                      }}
                    >
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={product.cardImage}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

                        {/* Rating Badge */}
                        <div className="absolute top-4 left-4 transform group-hover:scale-110 transition-transform duration-300">
                          <Badge className="bg-white/95 text-gray-900 backdrop-blur-md shadow-lg border-0 px-3 py-1.5 rounded-full">
                            <Star className="w-3 h-3 mr-1.5 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{product.rating}</span>
                          </Badge>
                        </div>

                        {/* Product Name Overlay */}
                        <div className="absolute bottom-4 left-4 text-white transform group-hover:translate-y-[-4px] transition-transform duration-500">
                          <h3 className="text-xl font-bold mb-1 font-orbitron drop-shadow-lg">{product.name}</h3>
                          <p className="text-green-200 font-medium font-orbitron text-sm drop-shadow-md">{product.tagline}</p>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6 space-y-4">
                      <div className="space-y-3">
                        <p className="text-xs text-gray-500 italic font-medium tracking-wide">{product.scientificName}</p>
                        <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">{product.description}</p>
                      </div>

                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center group-hover:text-green-600 transition-colors duration-300">
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="font-medium">{product.harvestTime}</span>
                        </div>
                        <div className="flex items-center group-hover:text-green-600 transition-colors duration-300">
                          <Leaf className="w-4 h-4 mr-2" />
                          <span className="font-medium">Organic</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 font-orbitron text-sm">Key Nutrients:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.features.map((feature, featureIndex) => (
                            <Badge
                              key={featureIndex}
                              variant="secondary"
                              className="text-xs bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors duration-300 px-3 py-1 rounded-full"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>



                    </CardContent>
                  </Card>
                  </Link>
              ))}
            </div>
          </div>
        ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-orbitron">Mutfak Deneyiminizi Yükseltmeye Hazır mısınız?</h2>
          <p className="text-lg sm:text-xl text-green-100 mb-8 leading-relaxed">
            Özel siparişler, toplu tedarik hakkında konuşmak veya premium yetiştirme uygulamalarımız hakkında daha fazla bilgi edinmek için bugün bizimle iletişime geçin.
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 transition-all font-orbitron font-medium">
              <Link href="/" className="flex items-center">
                Ana Sayfaya Dön
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/images/pyramid-logo.svg" alt="WHOLEGREEN" width={32} height={32} />
                <Image
                  src="/images/wholegreen-logo.png"
                  alt="WHOLEGREEN"
                  width={120}
                  height={24}
                  className="h-6 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-4">Modern kentsel tarım ile sürdürülebilir geleceğe</p>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a
                  href="https://www.youtube.com/@WholeGreen_co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/whole.green.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/people/WholeGreen/61573020185944/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/whole-green-tarim/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Hızlı Linkler</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-green-400 transition-colors">Ana Sayfa</Link></li>
                <li><Link href="/products" className="hover:text-green-400 transition-colors">Ürünler</Link></li>
                <li><Link href="/#about" className="hover:text-green-400 transition-colors">Hakkımızda</Link></li>
                <li><Link href="/contact" className="hover:text-green-400 transition-colors">İletişim</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Ürünlerimiz</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/products/perilla" className="hover:text-green-400 transition-colors">Perilla</Link></li>
                <li><Link href="/products/daikon-radish" className="hover:text-green-400 transition-colors">Daikon Radish</Link></li>
                <li><Link href="/products/amaranth" className="hover:text-green-400 transition-colors">Amaranth</Link></li>
                <li><Link href="/products/red-radish" className="hover:text-green-400 transition-colors">Red Radish</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">İletişim</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:emir@wholegreen.co" className="hover:text-green-400 transition-colors">emir@wholegreen.co</a></li>
                <li><a href="tel:+905324762628" className="hover:text-green-400 transition-colors">+90 532 476 2628</a></li>
                <li>AYAZAĞA MAH. ŞEHİT NACİ CANAN TUNCER SK.</li>
                <li>NO: 35 /1A SARIYER/ İSTANBUL</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="text-center text-gray-400">
            <p>&copy; 2024 Whole Green Tarım A.Ş. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
