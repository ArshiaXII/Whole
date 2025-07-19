"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, Clock, Leaf, ChefHat, AlertTriangle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const content = {
  tr: {
    backToProducts: "Ürünlere Dön",
    productName: "Kapya Çiçeği",
    tagline: "Keskin & Renkli",
    scientificName: "Tropaeolum majus",
    rating: "4.6",
    harvestTime: "45-60 gün",
    organic: "Organik",
    keySpecs: "Temel Özellikler",
    flavor: "Lezzet",
    flavorDesc: "Keskin ve baharatlı lezzet",
    color: "Renk",
    colorDesc: "Canlı kırmızı, turuncu ve sarı renkler",
    usage: "Kullanım",
    usageDesc: "Salata, ana yemek süsleme ve soslar için ideal",
    nutritionalValue: "Besin Değeri (% Günlük Değer)",
    vitaminC: "C vitamini: 25%",
    vitaminE: "E vitamini: 15%",
    folate: "Folat: 8%",
    benefits: "Faydaları",
    benefit1: "Bağışıklık sistemini güçlendirir",
    benefit2: "Doğal antibiyotik özellik gösterir",
    benefit3: "Antioksidan açısından zengin",
    chefTips: "Şef Tavsiyeleri",
    tip1: "Salatalarda son anda ekleyerek taze lezzet ve renk katın",
    tip2: "Ana yemeklerin üzerine serpiştirildiğinde görsel şölen yaratır",
    tip3: "Soslar ve vinaigrette'lerde ezilerek baharatlı not ekler",
    criticalNote: "Kritik Uyarı",
    warning: "Besin değerleri, 100 g ürün başına USDA Ulusal Besin Veritabanı'nda yer alan ortalama içerikler baz alınarak, FDA'nın günlük alım referans değerlerine (%) göre hesaplanmıştır. Ürünler arasında hafif farklılıklar olabilir.",
    flavorProfile: "Lezzet Profili",
    pairings: "Eşleştirmeler",
    pairing1: "Yeşil salatalar",
    pairing2: "Et yemekleri",
    pairing3: "Peynir tabakları",
    pairing4: "Baharatlı soslar"
  },
  en: {
    backToProducts: "Back to Products",
    productName: "Nasturtium",
    tagline: "Peppery & Colorful",
    scientificName: "Tropaeolum majus",
    rating: "4.6",
    harvestTime: "45-60 days",
    organic: "Organic",
    keySpecs: "Key Specifications",
    flavor: "Flavor",
    flavorDesc: "Sharp and spicy flavor",
    color: "Color",
    colorDesc: "Vibrant red, orange and yellow colors",
    usage: "Usage",
    usageDesc: "Ideal for salads, main dish garnish and sauces",
    nutritionalValue: "Nutritional Value (% Daily Value)",
    vitaminC: "Vitamin C: 25%",
    vitaminE: "Vitamin E: 15%",
    folate: "Folate: 8%",
    benefits: "Benefits",
    benefit1: "Strengthens immune system",
    benefit2: "Shows natural antibiotic properties",
    benefit3: "Rich in antioxidants",
    chefTips: "Chef Tips",
    tip1: "Add fresh flavor and color by adding to salads at the last moment",
    tip2: "Creates a visual feast when sprinkled on main dishes",
    tip3: "Adds spicy notes when crushed in sauces and vinaigrettes",
    criticalNote: "Critical Note",
    warning: "Nutritional values are calculated based on average contents in the USDA National Nutrient Database per 100g of product, according to FDA daily intake reference values (%). There may be slight differences between products.",
    flavorProfile: "Flavor Profile",
    pairings: "Pairings",
    pairing1: "Green salads",
    pairing2: "Meat dishes",
    pairing3: "Cheese platters",
    pairing4: "Spicy sauces"
  }
}

export default function KapyaCicegiPage() {
  const [language, setLanguage] = useState<'en' | 'tr'>('tr')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tr' : 'en')
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-red-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/products" className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">{t.backToProducts}</span>
            </Link>
            
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-medium"
            >
              {language === 'en' ? 'TR' : 'EN'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/nasturtium-hero.jpg"
                  alt={t.productName}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-orbitron">
                  {t.productName}
                </h1>
                <p className="text-xl text-red-600 font-medium mb-4">{t.tagline}</p>
                <p className="text-sm text-gray-500 italic">{t.scientificName}</p>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{t.rating}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>{t.harvestTime}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Leaf className="w-5 h-5" />
                  <span>{t.organic}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-red-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{t.flavor}</h3>
                  <p className="text-sm text-gray-600">{t.flavorDesc}</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-red-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{t.color}</h3>
                  <p className="text-sm text-gray-600">{t.colorDesc}</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-red-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{t.usage}</h3>
                  <p className="text-sm text-gray-600">{t.usageDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Nutritional Value */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-orbitron">{t.nutritionalValue}</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">{t.vitaminC}</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{width: '25%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">{t.vitaminE}</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{width: '15%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">{t.folate}</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{width: '8%'}}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Critical Warning */}
              <Card className="border-amber-200 bg-amber-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-amber-800 mb-2">{t.criticalNote}</h3>
                      <p className="text-sm text-amber-700 leading-relaxed">{t.warning}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Benefits */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-orbitron">{t.benefits}</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t.benefit1}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t.benefit2}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t.benefit3}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Chef Tips */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <ChefHat className="w-6 h-6 text-red-600" />
                    <h2 className="text-2xl font-bold text-gray-900 font-orbitron">{t.chefTips}</h2>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t.tip1}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t.tip2}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t.tip3}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Flavor Profile */}
      <section className="py-12 bg-gradient-to-br from-red-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-orbitron">{t.flavorProfile}</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{t.pairings}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Badge variant="secondary" className="p-3 text-center justify-center bg-red-100 text-red-800">
                    {t.pairing1}
                  </Badge>
                  <Badge variant="secondary" className="p-3 text-center justify-center bg-red-100 text-red-800">
                    {t.pairing2}
                  </Badge>
                  <Badge variant="secondary" className="p-3 text-center justify-center bg-red-100 text-red-800">
                    {t.pairing3}
                  </Badge>
                  <Badge variant="secondary" className="p-3 text-center justify-center bg-red-100 text-red-800">
                    {t.pairing4}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
