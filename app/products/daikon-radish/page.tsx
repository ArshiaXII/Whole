"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { ArrowLeft, Star, Clock, CheckCircle, Sparkles, ChefHat, Utensils, Menu, X, Languages, AlertTriangle, Thermometer, Droplets } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

// Product data with enhanced structure for Z-pattern layout
const productData = {
  id: "daikon-radish",
  name: "Daikon Radish",
  turkishName: "Beyaz Turp",
  tagline: "Spicy & Crisp",
  scientificName: "Raphanus sativus var. longipinnatus",
  heroImage: "/images/hero-microgreens.jpg",
  packagingImage: "/images/hero-microgreens.jpg",
  lifestyleImage: "/images/hero-microgreens.jpg",
  rawIngredientImage: "/images/hero-microgreens.jpg",

  // Key Product Specs
  specs: {
    optimalHarvest: "12 days (6-10cm)",
    shelfLife: "10 days (2-4°C)",
    calories: "28 kcal/100g",
    nutritionalValue: "Vitamin C, Phosphorus, Potassium",
    waterConsumption: "0.4L / 100g production"
  },

  // Chef's Golden Rules
  chefRules: [
    "Perfect for Asian cuisine applications",
    "Excellent for sushi and sashimi garnish",
    "Add to salads for spicy crunch",
    "Use as finishing touch on soups",
    "Store refrigerated until service"
  ],

  // Critical Chef's Note
  criticalNote: "Temperature Sensitivity: Best served chilled. Loses crispness above 15°C. Ideal serving temperature is 4-8°C. Rinse gently before use to maintain texture.",

  // Flavor Pairings
  flavorPairings: {
    dairy: ["Fresh Mozzarella", "Cream Cheese", "Greek Yogurt", "Feta"],
    fish: ["Salmon", "Tuna", "Sea Bream", "Mackerel"],
    citrus: ["Lemon", "Lime", "Ponzu", "Rice Vinegar"]
  },

  // Taste Profile
  tasteProfile: {
    start: "Clean, mild spice",
    middle: "Crisp, refreshing bite",
    finish: "Subtle peppery warmth"
  }
}

export default function DaikonRadishPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState('tr')

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Matching Main Page Header */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left Side - Logo */}
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

            {/* Right Side - Full Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-green-400 transition-colors font-montserrat font-medium">
                ANA SAYFA
              </Link>
              <Link href="/products" className="text-green-400 hover:text-green-300 transition-colors font-montserrat font-medium">
                ÜRÜNLER
              </Link>
              <Link href="/#about" className="text-white hover:text-green-400 transition-colors font-montserrat font-medium">
                HAKKIMIZDA
              </Link>
              <Link href="/#services" className="text-white hover:text-green-400 transition-colors font-montserrat font-medium">
                HİZMETLER
              </Link>
              <Link href="/contact" className="text-white hover:text-green-400 transition-colors font-montserrat font-medium">
                İLETİŞİM
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
                ANA SAYFA
              </Link>
              <Link
                href="/products"
                className="block text-green-400 hover:text-green-300 transition-colors font-montserrat font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ÜRÜNLER
              </Link>
              <Link
                href="/#about"
                className="block text-white hover:text-green-400 transition-colors font-montserrat font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HAKKIMIZDA
              </Link>
              <Link
                href="/#services"
                className="block text-white hover:text-green-400 transition-colors font-montserrat font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HİZMETLER
              </Link>
              <Link
                href="/contact"
                className="block text-white hover:text-green-400 transition-colors font-montserrat font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                İLETİŞİM
              </Link>

              {/* Mobile Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center text-white hover:text-green-400 transition-colors font-montserrat font-medium py-2"
              >
                <Languages className="w-4 h-4 mr-2" />
                {language === 'en' ? 'TR' : 'EN'}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* 1. Hero Section - Full Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={productData.heroImage}
            alt={`${productData.name} Hero`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Link
            href="/products"
            className="inline-flex items-center text-green-200 hover:text-white mb-8 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Ürünlere Geri Dön
          </Link>

          <div className="mb-6">
            <Badge className="mb-4 bg-green-600 text-white border-green-500 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              {productData.tagline}
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight font-orbitron">
            {productData.name}
            <span className="block text-3xl md:text-4xl font-normal text-green-200 mt-2 italic">
              {productData.scientificName}
            </span>
          </h1>

          <div className="flex items-center justify-center gap-6 mb-8 text-lg">
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">4.8/5</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              7-14 days
            </div>
          </div>

          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
            <Link href="/contact" className="flex items-center">
              Daha Fazla Bilgi
              <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
            </Link>
          </Button>
        </div>
      </section>

      {/* 2. Key Information Section - First Row of Z-Pattern */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Key Product Specs */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-orbitron">
                Key Product Specs
              </h2>

              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-semibold text-gray-700">Optimal Harvest:</span>
                      <span className="text-green-600 font-bold">{productData.specs.optimalHarvest}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-semibold text-gray-700">Shelf Life:</span>
                      <span className="text-green-600 font-bold">{productData.specs.shelfLife}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-semibold text-gray-700">Calories:</span>
                      <span className="text-green-600 font-bold">{productData.specs.calories}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-semibold text-gray-700">Nutritional Value:</span>
                      <span className="text-green-600 font-bold">{productData.specs.nutritionalValue}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-semibold text-gray-700">Water Consumption:</span>
                      <span className="text-green-600 font-bold">{productData.specs.waterConsumption}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Packaging Image */}
            <div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={productData.packagingImage}
                  alt="Daikon Radish Packaging"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Professional Packaging</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Usage & Chef's Notes Section - Second Row of Z-Pattern */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Lifestyle Image */}
            <div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={productData.lifestyleImage}
                  alt="Daikon Radish Lifestyle"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Fresh Ingredients</p>
                </div>
              </div>
            </div>

            {/* Right Side - Chef's Notes */}
            <div className="space-y-8">
              {/* Golden Rules for Chefs */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-orbitron">
                  Golden Rules for Chefs
                </h2>

                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-8">
                    <ul className="space-y-4">
                      {productData.chefRules.map((rule, index) => (
                        <li key={index} className="flex items-start">
                          <ChefHat className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-lg">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Critical Chef's Note */}
              <div>
                <Card className="border-2 border-green-200 bg-green-50">
                  <CardContent className="p-8">
                    <div className="flex items-start mb-4">
                      <AlertTriangle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <h3 className="text-xl font-bold text-green-800">Critical Chef's Note</h3>
                    </div>
                    <p className="text-green-700 leading-relaxed text-lg font-medium">
                      {productData.criticalNote}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Flavor Profile & Pairings Section - Third Row of Z-Pattern */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Flavor Pairings */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-orbitron">
                Flavor Pairings
              </h2>

              <div className="space-y-6">
                {/* Dairy Pairings */}
                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                      <Droplets className="w-5 h-5 mr-2" />
                      Dairy Pairings
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {productData.flavorPairings.dairy.map((item, index) => (
                        <Badge key={index} variant="outline" className="border-green-200 text-green-700">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Fish Pairings */}
                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                      <Utensils className="w-5 h-5 mr-2" />
                      Fish Pairings
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {productData.flavorPairings.fish.map((item, index) => (
                        <Badge key={index} variant="outline" className="border-green-200 text-green-700">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Citrus Pairings */}
                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Citrus Pairings
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {productData.flavorPairings.citrus.map((item, index) => (
                        <Badge key={index} variant="outline" className="border-green-200 text-green-700">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Side - Taste Profile Infographic */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-orbitron text-center">
                Taste Profile
              </h2>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-100">
                <CardContent className="p-8">
                  <div className="space-y-8">
                    {/* Start */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Thermometer className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-green-700 mb-2">Start</h3>
                      <p className="text-gray-700">{productData.tasteProfile.start}</p>
                    </div>

                    {/* Arrow Down */}
                    <div className="flex justify-center">
                      <ArrowLeft className="w-6 h-6 text-green-400 rotate-90" />
                    </div>

                    {/* Middle */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-green-600 mb-2">Middle</h3>
                      <p className="text-gray-700">{productData.tasteProfile.middle}</p>
                    </div>

                    {/* Arrow Down */}
                    <div className="flex justify-center">
                      <ArrowLeft className="w-6 h-6 text-green-400 rotate-90" />
                    </div>

                    {/* Finish */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-green-500 mb-2">Finish</h3>
                      <p className="text-gray-700">{productData.tasteProfile.finish}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">
            Daikon Radish Deneyimi Yaşamaya Hazır mısınız?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Profesyonel mutfaklar için özel yetiştirme gereksinimlerinizi görüşmek üzere bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 hover:shadow-lg transition-all">
              <Link href="/contact" className="flex items-center">
                İletişime Geçin
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 transition-all">
              <Link href="/products" className="flex items-center">
                Diğer Ürünleri Görüntüle
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
