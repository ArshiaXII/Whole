"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight, Search, Tag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const content = {
  tr: {
    title: "Blog",
    subtitle: "Kentsel Tarım ve Sürdürülebilir Gıda Üretimi Hakkında",
    searchPlaceholder: "Blog yazılarında ara...",
    readMore: "Devamını Oku",
    categories: "Kategoriler",
    allCategories: "Tüm Kategoriler",
    recentPosts: "Son Yazılar"
  },
  en: {
    title: "Blog",
    subtitle: "About Urban Agriculture and Sustainable Food Production",
    searchPlaceholder: "Search blog posts...",
    readMore: "Read More",
    categories: "Categories",
    allCategories: "All Categories",
    recentPosts: "Recent Posts"
  }
}

const blogPosts = [
  {
    id: "mikroyesil-yetiştirme-rehberi",
    title: {
      tr: "Evde Mikroyeşil Yetiştirme: Başlangıç Rehberi",
      en: "Growing Microgreens at Home: A Beginner's Guide"
    },
    excerpt: {
      tr: "Evde mikroyeşil yetiştirmenin temel adımları, gerekli malzemeler ve ipuçları. Sağlıklı beslenme için kendi mikroyeşillerinizi üretin.",
      en: "Essential steps for growing microgreens at home, required materials and tips. Grow your own microgreens for healthy nutrition."
    },
    image: "/images/blog/microgreens-growing-guide.jpg",
    category: {
      tr: "Yetiştirme Rehberi",
      en: "Growing Guide"
    },
    author: "WholeGreen Ekibi",
    date: "2024-01-15",
    readTime: "5 dk",
    tags: ["mikroyeşil", "evde yetiştirme", "sağlıklı beslenme"]
  },
  {
    id: "dikey-tarim-gelecegi",
    title: {
      tr: "Dikey Tarım: Gıda Üretiminin Geleceği",
      en: "Vertical Farming: The Future of Food Production"
    },
    excerpt: {
      tr: "Dikey tarımın avantajları, teknolojik yenilikleri ve sürdürülebilir gıda üretimindeki rolü. Şehirlerde tarımın geleceği.",
      en: "Advantages of vertical farming, technological innovations and its role in sustainable food production. The future of agriculture in cities."
    },
    image: "/images/blog/vertical-farming-future.jpg",
    category: {
      tr: "Teknoloji",
      en: "Technology"
    },
    author: "Dr. Ahmet Yılmaz",
    date: "2024-01-10",
    readTime: "8 dk",
    tags: ["dikey tarım", "teknoloji", "sürdürülebilirlik"]
  },
  {
    id: "mikroyesil-beslenme-degeri",
    title: {
      tr: "Mikroyeşillerin Beslenme Değeri ve Sağlık Faydaları",
      en: "Nutritional Value and Health Benefits of Microgreens"
    },
    excerpt: {
      tr: "Mikroyeşillerin vitamin, mineral ve antioksidan içeriği. Sağlık üzerindeki etkileri ve günlük diyete nasıl dahil edilir.",
      en: "Vitamin, mineral and antioxidant content of microgreens. Their effects on health and how to include them in daily diet."
    },
    image: "/images/blog/microgreens-nutrition.jpg",
    category: {
      tr: "Beslenme",
      en: "Nutrition"
    },
    author: "Dyt. Elif Kaya",
    date: "2024-01-05",
    readTime: "6 dk",
    tags: ["beslenme", "sağlık", "vitaminler"]
  },
  {
    id: "hidroponik-sistem-kurulumu",
    title: {
      tr: "Hidroponik Sistem Kurulumu: Adım Adım Kılavuz",
      en: "Hydroponic System Setup: Step-by-Step Guide"
    },
    excerpt: {
      tr: "Evde hidroponik sistem kurmanın detaylı rehberi. Gerekli ekipmanlar, kurulum aşamaları ve bakım ipuçları.",
      en: "Detailed guide to setting up a hydroponic system at home. Required equipment, installation steps and maintenance tips."
    },
    image: "/images/blog/hydroponic-setup.jpg",
    category: {
      tr: "Hidroponik",
      en: "Hydroponics"
    },
    author: "Mühendis Can Özkan",
    date: "2023-12-28",
    readTime: "10 dk",
    tags: ["hidroponik", "sistem kurulumu", "DIY"]
  },
  {
    id: "organik-tarim-avantajlari",
    title: {
      tr: "Organik Tarımın Çevre ve İnsan Sağlığına Faydaları",
      en: "Benefits of Organic Farming for Environment and Human Health"
    },
    excerpt: {
      tr: "Organik tarım yöntemlerinin çevresel etkileri, toprak sağlığına katkıları ve üretilen gıdaların kalitesi.",
      en: "Environmental impacts of organic farming methods, contributions to soil health and quality of produced food."
    },
    image: "/images/blog/organic-farming-benefits.jpg",
    category: {
      tr: "Organik Tarım",
      en: "Organic Farming"
    },
    author: "Prof. Dr. Zeynep Demir",
    date: "2023-12-20",
    readTime: "7 dk",
    tags: ["organik", "çevre", "sürdürülebilirlik"]
  },
  {
    id: "kentsel-tarim-trendleri",
    title: {
      tr: "2024 Kentsel Tarım Trendleri ve Yenilikler",
      en: "2024 Urban Agriculture Trends and Innovations"
    },
    excerpt: {
      tr: "Kentsel tarımda öne çıkan yeni teknolojiler, akıllı tarım uygulamaları ve gelecek projeksiyonları.",
      en: "Emerging technologies in urban agriculture, smart farming applications and future projections."
    },
    image: "/images/blog/urban-farming-trends.jpg",
    category: {
      tr: "Trendler",
      en: "Trends"
    },
    author: "WholeGreen Araştırma",
    date: "2023-12-15",
    readTime: "9 dk",
    tags: ["kentsel tarım", "trendler", "yenilik"]
  }
]

const categories = [
  { tr: "Yetiştirme Rehberi", en: "Growing Guide" },
  { tr: "Teknoloji", en: "Technology" },
  { tr: "Beslenme", en: "Nutrition" },
  { tr: "Hidroponik", en: "Hydroponics" },
  { tr: "Organik Tarım", en: "Organic Farming" },
  { tr: "Trendler", en: "Trends" }
]

export default function BlogPage() {
  const [language, setLanguage] = useState<'en' | 'tr'>('tr')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tr' : 'en')
  }

  const t = content[language]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt[language].toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === '' || post.category[language] === selectedCategory
    return matchesSearch && matchesCategory
  })

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
                {language === 'tr' ? 'Ana Sayfa' : 'Home'}
              </Link>
              <Link href="/products" className="text-white hover:text-green-400 transition-colors font-montserrat font-medium">
                {language === 'tr' ? 'Ürünler' : 'Products'}
              </Link>
              <Link href="/blog" className="text-green-400 hover:text-green-300 transition-colors font-montserrat font-medium">
                {language === 'tr' ? 'Blog' : 'Blog'}
              </Link>
              <Link href="/contact" className="text-white hover:text-green-400 transition-colors font-montserrat font-medium">
                {language === 'tr' ? 'İletişim' : 'Contact'}
              </Link>
              <Link href="/login" className="text-white hover:text-green-400 transition-colors font-montserrat font-medium">
                {language === 'tr' ? 'Giriş' : 'Login'}
              </Link>
            </div>
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              {language === 'en' ? 'TR' : 'EN'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-orbitron">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedCategory === '' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('')}
                size="sm"
              >
                {t.allCategories}
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.en}
                  variant={selectedCategory === category[language] ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category[language])}
                  size="sm"
                >
                  {category[language]}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title[language]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 text-white">
                      {post.category[language]}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US')}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {post.title[language]}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt[language]}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                        {t.readMore}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
