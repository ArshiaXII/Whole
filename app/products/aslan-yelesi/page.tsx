"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, Clock, Leaf, ChefHat, AlertTriangle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const content = {
  tr: {
    backToProducts: "Ürünlere Dön",
    productName: "Aslan Yelesi",
    tagline: "Eşsiz & Besleyici",
    scientificName: "Hericium erinaceus",
    rating: "4.7",
    harvestTime: "14-18 gün",
    organic: "Organik",
    flavor: "Lezzet",
    flavorDesc: "Deniz ürünü benzeri, yumuşak ve lifli doku",
    color: "Renk",
    colorDesc: "Beyaz, sarkık dikenli yapı",
    usage: "Kullanım",
    usageDesc: "Biftek alternatifi, çorba, tıbbi çay",
    nutritionalValue: "Besin Değeri (% Günlük Değer)",
    hericenones: "Hericenones: 65%",
    potassium: "Potasyum: 20%",
    protein: "Protein: 25%",
    benefits: "Faydaları",
    benefit1: "Bilişsel fonksiyonları destekler ve hafızayı güçlendirir",
    benefit2: "Sinir hücrelerinin yenilenmesini teşvik eder",
    benefit3: "Doğal nörotrofik faktörler içerir",
    chefTips: "Şef Tavsiyeleri",
    tip1: "Kalın dilimler halinde keserek biftek gibi marine edin",
    tip2: "Yüksek ateşte kızartarak dış yüzeyde karamelizasyon sağlayın",
    tip3: "Tereyağı ve taze otlarla sote ederek lezzet katın",
    tip4: "Çorbalarda umami derinliği için uzun süre kaynatın",
    criticalNote: "Kritik Uyarı",
    warning: "Aslan yelesi mantarı mutlaka pişirilmelidir. Çiğ tüketim sindirim sorunlarına yol açabilir. Ayrıca ilk kez tüketenler küçük porsiyonlarla başlamalıdır.",
    flavorProfile: "Lezzet Profili",
    pairings: "Eşleştirmeler",
    pairing1: "Tereyağı sosları",
    pairing2: "Deniz ürünleri",
    pairing3: "Beyaz şaraplar",
    pairing4: "Taze otlar"
  },
  en: {
    backToProducts: "Back to Products",
    productName: "Lion's Mane",
    tagline: "Unique & Nutritious",
    scientificName: "Hericium erinaceus",
    rating: "4.7",
    harvestTime: "14-18 days",
    organic: "Organic",
    flavor: "Flavor",
    flavorDesc: "Seafood-like, tender and fibrous texture",
    color: "Color",
    colorDesc: "White, cascading spiny structure",
    usage: "Usage",
    usageDesc: "Steak alternative, soup, medicinal tea",
    nutritionalValue: "Nutritional Value (% Daily Value)",
    hericenones: "Hericenones: 65%",
    potassium: "Potassium: 20%",
    protein: "Protein: 25%",
    benefits: "Benefits",
    benefit1: "Supports cognitive functions and strengthens memory",
    benefit2: "Promotes nerve cell regeneration",
    benefit3: "Contains natural neurotrophic factors",
    chefTips: "Chef Tips",
    tip1: "Cut into thick slices and marinate like steak",
    tip2: "Sear on high heat to achieve caramelization on the surface",
    tip3: "Sauté with butter and fresh herbs for added flavor",
    tip4: "Simmer long in soups for umami depth",
    criticalNote: "Critical Note",
    warning: "Lion's mane mushroom must be cooked. Raw consumption can cause digestive issues. First-time consumers should start with small portions.",
    flavorProfile: "Flavor Profile",
    pairings: "Pairings",
    pairing1: "Butter sauces",
    pairing2: "Seafood",
    pairing3: "White wines",
    pairing4: "Fresh herbs"
  }
}

export default function AslanYelesiPage() {
  const [language, setLanguage] = useState<'en' | 'tr'>('tr')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tr' : 'en')
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-stone-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/products" className="flex items-center gap-2 text-stone-600 hover:text-stone-800 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">{t.backToProducts}</span>
            </Link>
            
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-stone-100 text-stone-700 rounded-lg hover:bg-stone-200 transition-colors font-medium"
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
                    src="/images/products/lion-mane-hero.jpg"
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
                    src="/images/products/lion-mane-lifestyle.jpg"
                    alt={`${t.productName} - Lifestyle`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/products/lion-mane-packaging.jpg"
                    alt={`${t.productName} - Packaging`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/products/lion-mane-close-up.jpg"
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
                <p className="text-xl text-stone-600 font-medium mb-4">{t.tagline}</p>
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
                <div className="bg-white p-4 rounded-xl border border-stone-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{t.flavor}</h3>
                  <p className="text-sm text-gray-600">{t.flavorDesc}</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{t.color}</h3>
                  <p className="text-sm text-gray-600">{t.colorDesc}</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200">
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
                      <span className="text-gray-700">{t.hericenones}</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-stone-500 h-2 rounded-full" style={{width: '65%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">{t.protein}</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-gray-600 h-2 rounded-full" style={{width: '25%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">{t.potassium}</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-stone-600 h-2 rounded-full" style={{width: '20%'}}></div>
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
                      <div className="w-2 h-2 bg-stone-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t.benefit1}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-stone-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t.benefit2}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-stone-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t.benefit3}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Chef Tips */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <ChefHat className="w-6 h-6 text-stone-600" />
                    <h2 className="text-2xl font-bold text-gray-900 font-orbitron">{t.chefTips}</h2>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-stone-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t.tip1}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-stone-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t.tip2}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-stone-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t.tip3}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-stone-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t.tip4}</span>
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
                src="/images/products/lion-mane-growing.jpg"
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
                src="/images/products/lion-mane-harvest.jpg"
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
                src="/images/products/lion-mane-steak.jpg"
                alt={`${t.productName} - Steak Style`}
                width={300}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">{language === 'tr' ? 'Biftek Tarzı' : 'Steak Style'}</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/products/lion-mane-dish.jpg"
                alt={`${t.productName} - Gourmet Dish`}
                width={300}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">{language === 'tr' ? 'Gurme Yemek' : 'Gourmet Dish'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flavor Profile */}
      <section className="py-12 bg-gradient-to-br from-stone-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-orbitron">{t.flavorProfile}</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{t.pairings}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Badge variant="secondary" className="p-3 text-center justify-center bg-stone-100 text-stone-800">
                    {t.pairing1}
                  </Badge>
                  <Badge variant="secondary" className="p-3 text-center justify-center bg-stone-100 text-stone-800">
                    {t.pairing2}
                  </Badge>
                  <Badge variant="secondary" className="p-3 text-center justify-center bg-stone-100 text-stone-800">
                    {t.pairing3}
                  </Badge>
                  <Badge variant="secondary" className="p-3 text-center justify-center bg-stone-100 text-stone-800">
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
