"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Send, CheckCircle, Languages, Menu, X } from "lucide-react"
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
    hero: {
      badge: "Get in Touch",
      title: "WholeGreen Contact",
      description: "Ready to learn more about our sustainable urban agriculture solutions? We're here for your questions, consulting, and custom growing solutions."
    },
    form: {
      title: "Send us a Message",
      description: "Fill out the form below and we'll get back to you as soon as possible.",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      company: "Company Name",
      message: "Message",
      submit: "Send Message",
      success: "Thank you for your message! We'll get back to you soon.",
      required: "*"
    },
    contact: {
      title: "Contact Information",
      phone: "Phone",
      email: "Email",
      address: "Address",
      phoneDesc: "Available for consultation",
      emailDesc: "We respond within 24 hours"
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: {
        question: "What is urban agriculture?",
        answer: "Urban agriculture involves growing food in cities using innovative techniques like vertical farming, hydroponics, and controlled environment agriculture to maximize efficiency and sustainability."
      },
      q2: {
        question: "What are the benefits of vertical farming?",
        answer: "Vertical farming uses 95% less water, requires no pesticides, produces year-round harvests, and can grow food in urban areas without soil or weather dependencies."
      },
      q3: {
        question: "How sustainable are your methods?",
        answer: "Our methods focus on sustainability through water conservation, renewable energy use, minimal transportation needs, and zero agricultural runoff or soil degradation."
      },
      q4: {
        question: "Do you offer consulting services?",
        answer: "Yes! We provide consulting for urban agriculture projects, vertical farming setup, sustainability planning, and modern agricultural technology implementation."
      }
    }
  },
  tr: {
    nav: {
      home: "ANA SAYFA",
      products: "ÜRÜNLER",
      about: "HAKKIMIZDA",
      services: "HİZMETLER",
      contacts: "İLETİŞİM"
    },
    hero: {
      badge: "İletişime Geçin",
      title: "WholeGreen İletişim",
      description: "Sürdürülebilir kentsel tarım çözümlerimiz hakkında daha fazla bilgi edinmeye hazır mısınız? Sorularınız, danışmanlık ve özel yetiştirme çözümleri için buradayız."
    },
    form: {
      title: "Bize Mesaj Gönderin",
      description: "Aşağıdaki formu doldurun, en kısa sürede size geri dönelim.",
      name: "Ad Soyad",
      email: "E-posta Adresi",
      phone: "Telefon Numarası",
      company: "Şirket Adı",
      message: "Mesaj",
      submit: "Mesaj Gönder",
      success: "Mesajınız için teşekkürler! En kısa sürede size geri döneceğiz.",
      required: "*"
    },
    contact: {
      title: "İletişim Bilgileri",
      phone: "Telefon",
      email: "Email",
      address: "Adres",
      phoneDesc: "Danışmanlık için müsait",
      emailDesc: "24 saat içinde yanıtlıyoruz"
    },
    faq: {
      title: "Sıkça Sorulan Sorular",
      q1: {
        question: "Kentsel tarım nedir?",
        answer: "Kentsel tarım, verimliliği ve sürdürülebilirliği maksimize etmek için dikey tarım, hidroponik ve kontrollü çevre tarımı gibi yenilikçi teknikler kullanarak şehirlerde gıda yetiştirmeyi içerir."
      },
      q2: {
        question: "Dikey tarımın faydaları nelerdir?",
        answer: "Dikey tarım %95 daha az su kullanır, pestisit gerektirmez, yıl boyunca hasat üretir ve toprak veya hava durumu bağımlılığı olmadan kentsel alanlarda gıda yetiştirebilir."
      },
      q3: {
        question: "Yöntemleriniz ne kadar sürdürülebilir?",
        answer: "Yöntemlerimiz su tasarrufu, yenilenebilir enerji kullanımı, minimum nakliye ihtiyaçları ve sıfır tarımsal akış veya toprak bozulması yoluyla sürdürülebilirliğe odaklanır."
      },
      q4: {
        question: "Danışmanlık hizmetleri sunuyor musunuz?",
        answer: "Evet! Kentsel tarım projeleri, dikey tarım kurulumu, sürdürülebilirlik planlaması ve modern tarım teknolojisi uygulaması için danışmanlık sağlıyoruz."
      }
    }
  }
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [language, setLanguage] = useState<'en' | 'tr'>('tr') // Default to Turkish
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tr' : 'en')
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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
              <Link href="/products" className="text-white hover:text-green-400 transition-colors font-montserrat font-medium">
                {t.nav.products}
              </Link>
              <Link href="/" className="text-white hover:text-green-400 transition-colors font-montserrat font-medium">
                {t.nav.about}
              </Link>
              <Link href="/" className="text-white hover:text-green-400 transition-colors font-montserrat font-medium">
                {t.nav.services}
              </Link>
              <Link href="/contact" className="text-green-400 hover:text-green-300 transition-colors font-montserrat font-medium">
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
                className="block text-white hover:text-green-400 transition-colors font-montserrat font-medium py-2"
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
                className="block text-green-400 hover:text-green-300 transition-colors font-montserrat font-medium py-2"
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
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">{t.hero.badge}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.hero.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.hero.description}
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">{t.form.title}</CardTitle>
                  <p className="text-gray-600">{t.form.description}</p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{language === 'tr' ? 'Mesaj Gönderildi!' : 'Message Sent!'}</h3>
                      <p className="text-gray-600">
                        {t.form.success}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">{t.form.name} {t.form.required}</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">{t.form.email} {t.form.required}</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">{t.form.phone}</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company">{t.form.company}</Label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">{t.form.message} {t.form.required}</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="mt-1"
                          placeholder={language === 'tr' ? "Kentsel tarıma olan ilginiz, sürdürülebilirlik soruları veya sahip olduğunuz herhangi bir soru hakkında bize anlatın..." : "Tell us about your interest in urban agriculture, sustainability questions, or any questions you may have..."}
                        />
                      </div>

                      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <Send className="w-4 h-4 mr-2" />
                        {t.form.submit}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{t.contact.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{t.contact.phone}</h3>
                      <p className="text-gray-600">+90 532 476 2628</p>
                      <p className="text-sm text-gray-500">{t.contact.phoneDesc}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{t.contact.email}</h3>
                      <p className="text-gray-600">emir@wholegreen.co</p>
                      <p className="text-sm text-gray-500">{t.contact.emailDesc}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{t.contact.address}</h3>
                      <p className="text-gray-600">
                        Ayazağa Mah. Şehit Naci Canan Tuncer Sk. No: 35/1A
                        <br />
                        Sarıyer / İstanbul
                        <br />
                        Türkiye
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>


            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t.faq.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t.faq.q1.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t.faq.q1.answer}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t.faq.q2.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t.faq.q2.answer}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t.faq.q3.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t.faq.q3.answer}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t.faq.q4.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t.faq.q4.answer}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <img
                src="/images/wholegreen-logo.png"
                alt="WholeGreen"
                className="h-8 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-gray-300 mb-4">
                Pioneering sustainable urban agriculture in Turkey. Bringing modern farming technologies to cities
                for a healthier, more sustainable future.
              </p>
              <div className="flex space-x-4">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">+90 532 476 2628</span>
              </div>
              <div className="flex space-x-4 mt-2">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">emir@wholegreen.co</span>
              </div>
              <div className="flex space-x-4 mt-2">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">Ayazağa Mah. Şehit Naci Canan Tuncer Sk. No: 35/1A, Sarıyer / İstanbul</span>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.youtube.com/@WholeGreen_co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/whole.green.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-pink-500 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/people/WholeGreen/61573020185944/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-500 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/whole-green-tarim/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-green-400">
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-300 hover:text-green-400">
                    Ürünler
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-green-400">
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Ürünler</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/products/perilla" className="text-gray-300 hover:text-green-400">
                    Perilla
                  </Link>
                </li>
                <li>
                  <Link href="/products/daikon-radish" className="text-gray-300 hover:text-green-400">
                    Daikon Radish
                  </Link>
                </li>
                <li>
                  <Link href="/products/amaranth" className="text-gray-300 hover:text-green-400">
                    Amaranth
                  </Link>
                </li>
                <li>
                  <Link href="/products/red-radish" className="text-gray-300 hover:text-green-400">
                    Red Radish
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 WholeGreen. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
