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

const products = [
  {
    id: "daikon-radish",
    name: "Daikon Radish",
    tagline: "Spicy & Crisp",
    scientificName: "Raphanus sativus var. longipinnatus",
    description: "Clean, spicy, and peppery flavor with bright white stems and vibrant green leaves. Perfect for adding a crisp kick to any dish.",
    image: "/images/products/daikon-radish-hero.jpg",
    cardImage: "/images/products/daikon-radish-card.jpg",
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
    cardImage: "/images/products/amaranth-card.jpg",
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
    cardImage: "/images/products/red-radish-card.jpg",
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
    cardImage: "/images/products/perilla-card.jpg",
    harvestTime: "14-21 days",
    rating: 4.9,
    features: ["Omega-3 Fatty Acids", "Iron", "Calcium"],
    color: "from-purple-500 to-indigo-600",
    textColor: "text-purple-600",
  },
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
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 mt-16">
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

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-[3/2] relative">
                    <Image
                      src={product.cardImage}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-900 backdrop-blur-sm">
                        <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                        {product.rating}
                      </Badge>
                    </div>
                    
                    {/* Product Name Overlay */}
                    <div className="absolute bottom-3 left-3 text-white">
                      <h3 className="text-lg font-bold mb-1 font-orbitron">{product.name}</h3>
                      <p className="text-green-200 font-medium font-orbitron text-sm">{product.tagline}</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 italic mb-2">{product.scientificName}</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{product.description}</p>
                  </div>

                  <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {product.harvestTime}
                    </div>
                    <div className="flex items-center">
                      <Leaf className="w-4 h-4 mr-2" />
                      Organic
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 font-orbitron">Key Nutrients:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <Badge 
                          key={featureIndex} 
                          variant="secondary" 
                          className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>



                  <Button
                    className={`w-full bg-gradient-to-r ${product.color} hover:shadow-lg text-white group-hover:shadow-xl transition-all duration-300 font-orbitron font-medium`}
                    size="lg"
                  >
                    <Link href={`/products/${product.id}`} className="flex items-center justify-center w-full">
                      Daha Fazla Bilgi
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-orbitron">Mutfak Deneyiminizi Yükseltmeye Hazır mısınız?</h2>
          <p className="text-lg sm:text-xl text-green-100 mb-8 leading-relaxed">
            Özel siparişler, toplu tedarik hakkında konuşmak veya premium yetiştirme uygulamalarımız hakkında daha fazla bilgi edinmek için bugün bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 hover:shadow-lg transition-all font-orbitron font-medium">
              <Link href="/contact" className="flex items-center">
                İletişime Geçin
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
              <p className="text-gray-400">Modern kentsel tarım ile sürdürülebilir geleceğe</p>
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
