"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface ProductData {
  id: string
  name: string
  scientificName: string
  heroImage: string
  plateImage: string
  criticalNote: string
  specifications: {
    optimumHasat: string
    rafOmru: string
    kalori: string
    besinDegeri: string
    besinSiniflandirmasi: string
    renkStabilitesi: string
  }
  goldenRules: string[]
  flavorPairings: {
    vegan: string[]
    meatFish: string[]
    desserts: string[]
  }
}



interface ProductDetailTemplateProps {
  productData: ProductData
}

const ProductDetailTemplate: React.FC<ProductDetailTemplateProps> = ({ productData }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
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
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-500 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors font-orbitron">
                  Ana Sayfa
                </Link>
                <Link
                  href="/products"
                  className="text-green-600 bg-green-50 px-3 py-2 rounded-md text-sm font-medium font-orbitron"
                >
                  Ürünler
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-500 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors font-orbitron"
                >
                  İletişim
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600">WHOLEGREEN</Link>
            <span>></span>
            <Link href="/products" className="hover:text-green-600">MİKROYEŞİLLER</Link>
            <span>></span>
            <span className="text-gray-900 font-medium">{productData.name.toUpperCase()}</span>
          </div>
        </div>
      </div>

      {/* Product Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="font-orbitron text-5xl font-bold text-gray-900 mb-4">{productData.name}</h1>
          <p className="text-xl text-gray-600 italic">{productData.scientificName}</p>
        </div>



        {/* Main Content Area - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Critical Chef's Note */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <h3 className="font-orbitron text-lg font-bold text-blue-900 mb-3">KRİTİK ŞEF NOTU</h3>
              <p className="text-blue-800 leading-relaxed">{productData.criticalNote}</p>
            </div>

            {/* Technical Data Table */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Optimum Hasat</td>
                      <td className="px-6 py-4 text-gray-700">{productData.specifications.optimumHasat}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Raf Ömrü</td>
                      <td className="px-6 py-4 text-gray-700">{productData.specifications.rafOmru}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Kalori</td>
                      <td className="px-6 py-4 text-gray-700">{productData.specifications.kalori}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Besin Değeri</td>
                      <td className="px-6 py-4 text-gray-700">{productData.specifications.besinDegeri}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Besin Sınıflandırması</td>
                      <td className="px-6 py-4 text-gray-700">{productData.specifications.besinSiniflandirmasi}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Renk Stabilitesi</td>
                      <td className="px-6 py-4 text-gray-700">{productData.specifications.renkStabilitesi}</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Primary Product Image */}
          <div className="flex justify-center">
            <div className="relative w-96 h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={productData.heroImage}
                alt={productData.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Secondary Content Area - Full Width Image */}
        <div className="w-full mb-16">
          <div className="relative w-full h-96 overflow-hidden shadow-lg">
            <Image
              src={productData.plateImage}
              alt={`${productData.name} Plated`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Two-Column Text Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column - Golden Rules for Chefs */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="font-orbitron text-2xl font-bold text-gray-900 mb-6">ŞEFLER İÇİN ALTIN KURALLAR</h3>
              <ul className="space-y-3">
                {productData.goldenRules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700 leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Right Column - Flavor Pairings */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="font-orbitron text-2xl font-bold text-gray-900 mb-6">LEZZET EŞLEŞMELERİ</h3>

              <div className="space-y-6">
                {/* Vegan Icons */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Vegan ikonları:</h4>
                  <ul className="space-y-2">
                    {productData.flavorPairings.vegan.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Meat and Fish */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Et ve Balık:</h4>
                  <ul className="space-y-2">
                    {productData.flavorPairings.meatFish.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Desserts */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Tatlılar:</h4>
                  <ul className="space-y-2">
                    {productData.flavorPairings.desserts.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailTemplate
