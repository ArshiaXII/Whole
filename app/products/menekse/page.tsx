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
    productName: "Menekşe",
    tagline: "Hafif Tatlı & Çiçeksi",
    scientificName: "Viola tricolor",
    rating: "4.5",
    harvestTime: "60-75 gün",
    organic: "Organik",
    keySpecs: "Temel Özellikler",
    flavor: "Lezzet",
    flavorDesc: "Hafif tatlı ve çiçeksi",
    color: "Renk",
    colorDesc: "Mor, beyaz ve sarı karışımlı",
    usage: "Kullanım",
    usageDesc: "Tatlı süsleme, kokteyl kenarı, salata",
    nutritionalValue: "Besin Değeri (% Günlük Değer)",
    vitaminC: "C vitamini: 12%",
    benefits: "Faydaları",
    benefit1: "Serbest radikal hasarını azaltır",
    benefit2: "Cilt sağlığını destekler", 
    benefit3: "Hafif rahatlatıcı etki",
    chefTips: "Şef Tavsiyeleri",
    tip1: "Şeffaf jöle veya pudinglerde nazikçe yerleştirerek zarif sunum yapın",
    tip2: "Kokteyllerde buz küplerine dondurarak dekor amaçlı kullanın",
    criticalNote: "Kritik Uyarı",
    warning: "Besin değerleri, 100 g ürün başına USDA Ulusal Besin Veritabanı'nda yer alan ortalama içerikler baz alınarak, FDA'nın günlük alım referans değerlerine (%) göre hesaplanmıştır. Ürünler arasında hafif farklılıklar olabilir.",
    flavorProfile: "Lezzet Profili",
    pairings: "Eşleştirmeler",
    pairing1: "Vanilya bazlı tatlılar",
    pairing2: "Beyaz çikolata",
    pairing3: "Limonlu içecekler",
    pairing4: "Hafif peynirler"
  },
  en: {
    backToProducts: "Back to Products",
    productName: "Viola",
    tagline: "Sweet & Floral",
    scientificName: "Viola tricolor",
    rating: "4.5",
    harvestTime: "60-75 days",
    organic: "Organic",
    keySpecs: "Key Specifications",
    flavor: "Flavor",
    flavorDesc: "Mild sweet and floral",
    color: "Color",
    colorDesc: "Purple, white and yellow mixed",
    usage: "Usage",
    usageDesc: "Dessert decoration, cocktail garnish, salads",
    nutritionalValue: "Nutritional Value (% Daily Value)",
    vitaminC: "Vitamin C: 12%",
    benefits: "Benefits",
    benefit1: "Reduces free radical damage",
    benefit2: "Supports skin health",
    benefit3: "Mild relaxing effect",
    chefTips: "Chef Tips",
    tip1: "Gently place in transparent jellies or puddings for elegant presentation",
    tip2: "Freeze in ice cubes for decorative cocktail use",
    criticalNote: "Critical Note",
    warning: "Nutritional values are calculated based on average contents in the USDA National Nutrient Database per 100g of product, according to FDA daily intake reference values (%). There may be slight differences between products.",
    flavorProfile: "Flavor Profile",
    pairings: "Pairings",
    pairing1: "Vanilla-based desserts",
    pairing2: "White chocolate",
    pairing3: "Lemon beverages",
    pairing4: "Light cheeses"
  }
}

export default function MeneksePage() {
  const [language, setLanguage] = useState<'en' | 'tr'>('tr')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tr' : 'en')
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-purple-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/products" className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">{t.backToProducts}</span>
            </Link>
            
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors font-medium"
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
            {/* Product Images Gallery */}
            <div className="space-y-4">
              {/* Main Hero Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/products/viola-hero.jpg"
                    alt={t.productName}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Secondary Images Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/products/viola-lifestyle.jpg"
                    alt={`${t.productName} - Lifestyle`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/products/viola-packaging.jpg"
                    alt={`${t.productName} - Packaging`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/products/viola-close-up.jpg"
                    alt={`${t.productName} - Close Up`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-orbitron">
                  {t.productName}
                </h1>
                <p className="text-xl text-purple-600 font-medium mb-4">{t.tagline}</p>
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
                <div className="bg-white p-4 rounded-xl border border-purple-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{t.flavor}</h3>
                  <p className="text-sm text-gray-600">{t.flavorDesc}</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-purple-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{t.color}</h3>
                  <p className="text-sm text-gray-600">{t.colorDesc}</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-purple-200">
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
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '12%'}}></div>
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
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t.benefit1}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t.benefit2}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t.benefit3}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Chef Tips */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <ChefHat className="w-6 h-6 text-purple-600" />
                    <h2 className="text-2xl font-bold text-gray-900 font-orbitron">{t.chefTips}</h2>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t.tip1}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t.tip2}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-orbitron">{language === 'tr' ? 'Ürün Galerisi' : 'Product Gallery'}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/products/viola-field.jpg"
                alt={`${t.productName} - Field`}
                width={300}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">{language === 'tr' ? 'Tarla Görünümü' : 'Field View'}</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/products/viola-harvest.jpg"
                alt={`${t.productName} - Harvest`}
                width={300}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">{language === 'tr' ? 'Hasat Anı' : 'Harvest Time'}</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/products/viola-plating.jpg"
                alt={`${t.productName} - Plating`}
                width={300}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">{language === 'tr' ? 'Sunum' : 'Plating'}</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/products/viola-dessert.jpg"
                alt={`${t.productName} - Dessert`}
                width={300}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">{language === 'tr' ? 'Tatlı Süsleme' : 'Dessert Garnish'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flavor Profile */}
      <section className="py-12 bg-gradient-to-br from-purple-50 to-violet-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-orbitron">{t.flavorProfile}</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{t.pairings}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Badge variant="secondary" className="p-3 text-center justify-center bg-purple-100 text-purple-800">
                    {t.pairing1}
                  </Badge>
                  <Badge variant="secondary" className="p-3 text-center justify-center bg-purple-100 text-purple-800">
                    {t.pairing2}
                  </Badge>
                  <Badge variant="secondary" className="p-3 text-center justify-center bg-purple-100 text-purple-800">
                    {t.pairing3}
                  </Badge>
                  <Badge variant="secondary" className="p-3 text-center justify-center bg-purple-100 text-purple-800">
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
