"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Star,
  Clock,
  ChefHat,
  Utensils,
  Sparkles,
  Thermometer,
  CheckCircle,
  AlertTriangle,
  Droplets
} from "lucide-react"

// Product data with enhanced structure for Z-pattern layout
const productData = {
  id: "amaranth",
  name: "Amaranth",
  turkishName: "Amarant",
  tagline: "Vibrant & Earthy",
  scientificName: "Amaranthus spp.",
  heroImage: "/images/hero-microgreens.jpg",
  packagingImage: "/images/hero-microgreens.jpg",
  lifestyleImage: "/images/hero-microgreens.jpg",
  rawIngredientImage: "/images/hero-microgreens.jpg",

  // Key Product Specs
  specs: {
    optimalHarvest: "12 days (9-10cm)",
    shelfLife: "6 days (2-5°C)",
    calories: "30 kcal/100g",
    nutritionalValue: "Iron, Calcium, Magnesium, Vitamin C, K",
    waterConsumption: "0.45L / 100g production"
  },

  // Chef's Golden Rules
  chefRules: [
    "Serve chilled - temperature affects flavor",
    "Protect from light to maintain color stability",
    "Use fresh for maximum nutritional value",
    "Rinse gently - leaves are delicate",
    "Pat dry before service - low water resistance"
  ],

  // Critical Chef's Note
  criticalNote: "Color Preservation: Amaranth microgreens are known as 'ancient' superfood sprouts. Store at (4-6°C) temperature range. Provides near-sweet touch temperature. Magenta color fades under direct light.",

  // Flavor Pairings
  flavorPairings: {
    dairy: ["Goat Cheese", "Greek Yogurt", "Cream Cheese", "Ricotta"],
    fish: ["White Fish", "Seafood", "Salmon", "Sea Bass"],
    citrus: ["Orange", "Lemon", "Grapefruit", "Lime"]
  },

  // Taste Profile
  tasteProfile: {
    start: "Mild, slightly sweet",
    middle: "Earthy, mineral notes",
    finish: "Clean, refreshing aftertaste"
  }
}

export default function AmaranthPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState('tr')

  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative h-screen">
        {/* Hero Background */}
        <div className="absolute inset-0">
          <Image
            src={productData.heroImage}
            alt={productData.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-orbitron">
            {language === 'tr' ? productData.turkishName : productData.name}
            <span className="block text-2xl md:text-3xl mt-4 font-light text-red-300 font-montserrat">
              {productData.tagline}
            </span>
          </h1>

          <div className="flex items-center justify-center gap-6 mb-8 text-lg">
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">4.7/5</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              10-14 days
            </div>
          </div>

          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
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
                      <span className="text-red-600 font-bold">{productData.specs.optimalHarvest}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-semibold text-gray-700">Shelf Life:</span>
                      <span className="text-red-600 font-bold">{productData.specs.shelfLife}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-semibold text-gray-700">Calories:</span>
                      <span className="text-red-600 font-bold">{productData.specs.calories}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-semibold text-gray-700">Nutritional Value:</span>
                      <span className="text-red-600 font-bold">{productData.specs.nutritionalValue}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-semibold text-gray-700">Water Consumption:</span>
                      <span className="text-red-600 font-bold">{productData.specs.waterConsumption}</span>
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
                  alt="Amaranth Packaging"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Premium Packaging</p>
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
                  alt="Amaranth Lifestyle"
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
                          <ChefHat className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-lg">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Critical Chef's Note */}
              <div>
                <Card className="border-2 border-red-200 bg-red-50">
                  <CardContent className="p-8">
                    <div className="flex items-start mb-4">
                      <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                      <h3 className="text-xl font-bold text-red-800">Critical Chef's Note</h3>
                    </div>
                    <p className="text-red-700 leading-relaxed text-lg font-medium">
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
                    <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center">
                      <Droplets className="w-5 h-5 mr-2" />
                      Dairy Pairings
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {productData.flavorPairings.dairy.map((item, index) => (
                        <Badge key={index} variant="outline" className="border-red-200 text-red-700">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Fish Pairings */}
                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center">
                      <Utensils className="w-5 h-5 mr-2" />
                      Fish Pairings
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {productData.flavorPairings.fish.map((item, index) => (
                        <Badge key={index} variant="outline" className="border-red-200 text-red-700">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Citrus Pairings */}
                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Citrus Pairings
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {productData.flavorPairings.citrus.map((item, index) => (
                        <Badge key={index} variant="outline" className="border-red-200 text-red-700">
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

              <Card className="border-0 shadow-xl bg-gradient-to-br from-red-50 to-pink-100">
                <CardContent className="p-8">
                  <div className="space-y-8">
                    {/* Start */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Thermometer className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-red-700 mb-2">Start</h3>
                      <p className="text-gray-700">{productData.tasteProfile.start}</p>
                    </div>

                    {/* Arrow Down */}
                    <div className="flex justify-center">
                      <ArrowLeft className="w-6 h-6 text-red-400 rotate-90" />
                    </div>

                    {/* Middle */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-red-600 mb-2">Middle</h3>
                      <p className="text-gray-700">{productData.tasteProfile.middle}</p>
                    </div>

                    {/* Arrow Down */}
                    <div className="flex justify-center">
                      <ArrowLeft className="w-6 h-6 text-red-400 rotate-90" />
                    </div>

                    {/* Finish */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-red-500 mb-2">Finish</h3>
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
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">
            Amarant Deneyimi Yaşamaya Hazır mısınız?
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed">
            Profesyonel mutfaklar için özel yetiştirme gereksinimlerinizi görüşmek üzere bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 hover:shadow-lg transition-all">
              <Link href="/contact" className="flex items-center">
                İletişime Geçin
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 transition-all">
              <Link href="/products" className="flex items-center">
                Diğer Ürünleri Görüntüle
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
