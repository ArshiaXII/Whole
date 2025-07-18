"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Leaf,
  Users,
  Target,
  Award,
  Menu,
  X,
  Languages
} from "lucide-react"

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState('tr')

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr')
  }

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/wholegreen-logo.png"
                alt="WholeGreen Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                {language === 'tr' ? 'Ana Sayfa' : 'Home'}
              </Link>
              <Link href="/about" className="text-green-600 font-medium">
                {language === 'tr' ? 'Hakkımızda' : 'About'}
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                {language === 'tr' ? 'Ürünler' : 'Products'}
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                {language === 'tr' ? 'İletişim' : 'Contact'}
              </Link>
              
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors"
              >
                <Languages className="w-4 h-4" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {language === 'tr' ? 'Ana Sayfa' : 'Home'}
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-green-600 bg-green-50 rounded-md font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {language === 'tr' ? 'Hakkımızda' : 'About'}
              </Link>
              <Link
                href="/products"
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {language === 'tr' ? 'Ürünler' : 'Products'}
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {language === 'tr' ? 'İletişim' : 'Contact'}
              </Link>
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md w-full text-left"
              >
                <Languages className="w-4 h-4" />
                <span className="font-medium">{language === 'tr' ? 'English' : 'Türkçe'}</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 mt-16">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-microgreens.jpg"
            alt="About WholeGreen"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-orbitron">
            {language === 'tr' ? 'Hakkımızda' : 'About Us'}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            {language === 'tr' 
              ? 'Modern kentsel tarım ile geleceğin gıdasını şehirlere getiriyoruz'
              : 'Bringing the future of food to cities through modern urban agriculture'
            }
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-orbitron">
                {language === 'tr' ? 'Misyonumuz' : 'Our Mission'}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {language === 'tr'
                  ? 'Whole Green Tarım A.Ş. olarak, modern kentsel tarım teknolojileri ile sürdürülebilir, hijyenik ve kaliteli mikroyeşil üretimi yapıyoruz. Dikey tarım teknolojileri kullanarak geleceğin gıdasını şehirlere getiriyor, daha sağlıklı yaşam için çözümler sunuyoruz.'
                  : 'As Whole Green Tarım A.Ş., we produce sustainable, hygienic and quality microgreens using modern urban agriculture technologies. We bring the future food to cities using vertical farming technologies and offer solutions for healthier living.'
                }
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Leaf className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">
                      {language === 'tr' ? 'Sürdürülebilir' : 'Sustainable'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {language === 'tr' ? '%95 daha az su' : '95% less water'}
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Award className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">
                      {language === 'tr' ? 'Kaliteli' : 'Quality'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {language === 'tr' ? 'Premium ürünler' : 'Premium products'}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div>
              <Image
                src="/images/hero-microgreens.jpg"
                alt="WholeGreen Facility"
                width={600}
                height={400}
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">
            {language === 'tr' ? 'Bizimle İletişime Geçin' : 'Get In Touch'}
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            {language === 'tr'
              ? 'Profesyonel mutfaklar için özel çözümlerimizi keşfedin'
              : 'Discover our specialized solutions for professional kitchens'
            }
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 hover:shadow-lg transition-all">
            <Link href="/contact" className="flex items-center">
              {language === 'tr' ? 'İletişime Geçin' : 'Contact Us'}
              <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
