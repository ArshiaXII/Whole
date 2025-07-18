"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X, Languages } from "lucide-react"

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

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 pt-20">
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
