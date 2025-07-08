"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/images/wholegreen-logo.png" alt="WholeGreen" className="h-8 w-auto" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-500 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
                  Ana Sayfa
                </Link>
                <Link
                  href="/products"
                  className="text-gray-500 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Ürünler
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-900 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  İletişim
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">İletişime Geçin</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">WholeGreen İletişim</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sürdürülebilir kentsel tarım çözümlerimiz hakkında daha fazla bilgi edinmeye hazır mısınız? Sorularınız,
            danışmanlık ve özel yetiştirme çözümleri için buradayız.
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
                  <CardTitle className="text-2xl text-gray-900">Bize Mesaj Gönderin</CardTitle>
                  <p className="text-gray-600">Aşağıdaki formu doldurun, 24 saat içinde size geri döneceğiz.</p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Mesaj Gönderildi!</h3>
                      <p className="text-gray-600">
                        Bizimle iletişime geçtiğiniz için teşekkür ederiz. 24 saat içinde size geri döneceğiz.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Ad Soyad *</Label>
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
                          <Label htmlFor="email">E-posta Adresi *</Label>
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
                          <Label htmlFor="phone">Telefon Numarası</Label>
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
                          <Label htmlFor="company">Şirket/Restoran</Label>
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
                        <Label htmlFor="message">Mesaj *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="mt-1"
                          placeholder="Kentsel tarıma olan ilginiz, sürdürülebilirlik soruları veya sahip olduğunuz herhangi bir soru hakkında bize anlatın..."
                        />
                      </div>

                      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <Send className="w-4 h-4 mr-2" />
                        Mesaj Gönder
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
                  <CardTitle className="text-xl text-gray-900">İletişim Bilgileri</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Telefon</h3>
                      <p className="text-gray-600">+90 (212) 123-4567</p>
                      <p className="text-sm text-gray-500">Danışmanlık için müsait</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@wholegreentarim.com</p>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What is urban agriculture?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Urban agriculture involves growing food in cities using innovative techniques like vertical farming,
                  hydroponics, and controlled environment agriculture to maximize efficiency and sustainability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What are the benefits of vertical farming?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Vertical farming uses 95% less water, requires no pesticides, produces year-round harvests, and can
                  grow food in urban areas without soil or weather dependencies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How sustainable are your methods?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our methods focus on sustainability through water conservation, renewable energy use, minimal
                  transportation needs, and zero agricultural runoff or soil degradation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer consulting services?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! We provide consulting for urban agriculture projects, vertical farming setup, sustainability
                  planning, and modern agricultural technology implementation.
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
                <span className="text-gray-300">+90 (212) 123-4567</span>
              </div>
              <div className="flex space-x-4 mt-2">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">info@wholegreentarim.com</span>
              </div>
              <div className="flex space-x-4 mt-2">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">Ayazağa Mah. Şehit Naci Canan Tuncer Sk. No: 35/1A, Sarıyer / İstanbul</span>
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
