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
    productName: "İstiridye Mantarı",
    tagline: "Yumuşak & Lezzetli",
    scientificName: "Pleurotus ostreatus",
    rating: "4.8",
    harvestTime: "10-14 gün",
    organic: "Organik",
    keySpecs: "Temel Özellikler",
    flavor: "Lezzet",
    flavorDesc: "Yumuşak, hafif tatlı ve kadifemsi doku",
    color: "Renk",
    colorDesc: "Açık gri ile koyu gri arası tonlar",
    usage: "Kullanım",
    usageDesc: "Wok yemekleri, çorbalar, risotto",
    nutritionalValue: "Besin Değeri (% Günlük Değer)",
    protein: "Protein: 35%",
    vitaminB: "B Vitaminleri: 25%",
    potassium: "Potasyum: 18%",
    benefits: "Faydaları",
    benefit1: "Yüksek protein içeriği ile kas gelişimini destekler",
    benefit2: "B vitaminleri enerji metabolizmasını hızlandırır",
    benefit3: "Düşük kalori, yüksek lif içeriği ile kilo kontrolü sağlar",
    chefTips: "Şef Tavsiyeleri",
    tip1: "Yüksek ateşte hızlıca pişirerek doğal suyunu koruyun",
    tip2: "Wok yemeklerinde son anda ekleyerek çıtır doku elde edin",
    tip3: "Çorbalarda umami lezzet katmak için kaynatma suyuna ekleyin",
    criticalNote: "Kritik Uyarı",
    warning: "İstiridye mantarları çok hassas yapıya sahiptir. Aşırı pişirme sert ve lastik benzeri doku oluşturur. Orta-yüksek ateşte 2-3 dakikadan fazla pişirmeyin.",
    flavorProfile: "Lezzet Profili",
    pairings: "Eşleştirmeler",
    pairing1: "Tereyağı sosları",
    pairing2: "Beyaz şaraplar",
    pairing3: "Taze otlar",
    pairing4: "Deniz ürünleri"
  },
  en: {
    backToProducts: "Back to Products",
    productName: "Oyster Mushroom",
    tagline: "Delicate & Savory",
    scientificName: "Pleurotus ostreatus",
    rating: "4.8",
    harvestTime: "10-14 days",
    organic: "Organic",
    keySpecs: "Key Specifications",
    flavor: "Flavor",
    flavorDesc: "Tender, slightly sweet with velvety texture",
    color: "Color",
    colorDesc: "Light to dark gray tones",
    usage: "Usage",
    usageDesc: "Stir-fries, soups, risotto",
    nutritionalValue: "Nutritional Value (% Daily Value)",
    protein: "Protein: 35%",
    vitaminB: "B Vitamins: 25%",
    potassium: "Potassium: 18%",
    benefits: "Benefits",
    benefit1: "High protein content supports muscle development",
    benefit2: "B vitamins accelerate energy metabolism",
    benefit3: "Low calorie, high fiber content aids weight control",
    chefTips: "Chef Tips",
    tip1: "Cook quickly on high heat to preserve natural moisture",
    tip2: "Add at the last moment in stir-fries for crispy texture",
    tip3: "Add to broth for umami flavor enhancement in soups",
    criticalNote: "Critical Note",
    warning: "Oyster mushrooms have a very delicate structure. Overcooking creates a tough, rubber-like texture. Do not cook for more than 2-3 minutes on medium-high heat.",
    flavorProfile: "Flavor Profile",
    pairings: "Pairings",
    pairing1: "Butter sauces",
    pairing2: "White wines",
    pairing3: "Fresh herbs",
    pairing4: "Seafood"
  }
}

export default function IstiridyeMantariPage() {
  const [language, setLanguage] = useState<'en' | 'tr'>('tr')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tr' : 'en')
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/products" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">{t.backToProducts}</span>
            </Link>
            
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
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
                    src="/images/products/oyster-mushroom-hero.jpg"
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
                    src="/images/products/oyster-mushroom-lifestyle.jpg"
                    alt={`${t.productName} - Lifestyle`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/products/oyster-mushroom-packaging.jpg"
                    alt={`${t.productName} - Packaging`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/products/oyster-mushroom-close-up.jpg"
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
                <p className="text-xl text-gray-600 font-medium mb-4">{t.tagline}</p>
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
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{t.flavor}</h3>
                  <p className="text-sm text-gray-600">{t.flavorDesc}</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{t.color}</h3>
                  <p className="text-sm text-gray-600">{t.colorDesc}</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200">
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
                      <span className="text-gray-700">{t.protein}</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-gray-500 h-2 rounded-full" style={{width: '35%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">{t.vitaminB}</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-slate-500 h-2 rounded-full" style={{width: '25%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">{t.potassium}</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-gray-600 h-2 rounded-full" style={{width: '18%'}}></div>
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
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t.benefit1}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t.benefit2}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t.benefit3}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Chef Tips */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <ChefHat className="w-6 h-6 text-gray-600" />
                    <h2 className="text-2xl font-bold text-gray-900 font-orbitron">{t.chefTips}</h2>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t.tip1}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t.tip2}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t.tip3}</span>
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
                src="/images/products/oyster-mushroom-growing.jpg"
                alt={`${t.productName} - Growing`}
                width={300}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">{language === 'tr' ? 'Yetiştirme' : 'Growing'}</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/products/oyster-mushroom-harvest.jpg"
                alt={`${t.productName} - Harvest`}
                width={300}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">{language === 'tr' ? 'Hasat' : 'Harvest'}</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/products/oyster-mushroom-cooking.jpg"
                alt={`${t.productName} - Cooking`}
                width={300}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">{language === 'tr' ? 'Pişirme' : 'Cooking'}</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/products/oyster-mushroom-dish.jpg"
                alt={`${t.productName} - Dish`}
                width={300}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">{language === 'tr' ? 'Yemek' : 'Dish'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flavor Profile */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-orbitron">{t.flavorProfile}</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{t.pairings}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Badge variant="secondary" className="p-3 text-center justify-center bg-gray-100 text-gray-800">
                    {t.pairing1}
                  </Badge>
                  <Badge variant="secondary" className="p-3 text-center justify-center bg-gray-100 text-gray-800">
                    {t.pairing2}
                  </Badge>
                  <Badge variant="secondary" className="p-3 text-center justify-center bg-gray-100 text-gray-800">
                    {t.pairing3}
                  </Badge>
                  <Badge variant="secondary" className="p-3 text-center justify-center bg-gray-100 text-gray-800">
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
