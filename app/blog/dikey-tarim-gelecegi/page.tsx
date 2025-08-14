"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Share2, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const content = {
  tr: {
    backToBlog: "Blog'a Dön",
    sharePost: "Paylaş",
    likePost: "Beğen"
  },
  en: {
    backToBlog: "Back to Blog",
    sharePost: "Share",
    likePost: "Like"
  }
}

const blogPost = {
  title: {
    tr: "Dikey Tarım: Gıda Üretiminin Geleceği",
    en: "Vertical Farming: The Future of Food Production"
  },
  content: {
    tr: `
      <p>Dünya nüfusunun hızla artması ve iklim değişikliğinin tarım üzerindeki olumsuz etkileri, gıda üretiminde yeni yaklaşımları zorunlu kılmaktadır. Dikey tarım, bu zorluklara karşı geliştirilen en umut verici çözümlerden biridir.</p>

      <h2>Dikey Tarım Nedir?</h2>
      <p>Dikey tarım, bitkilerin dikey olarak istiflenmiş katmanlarda, kontrollü çevre koşullarında yetiştirildiği modern tarım yöntemidir. Bu sistem, geleneksel tarımın aksine toprak kullanmaz ve tamamen kapalı ortamlarda gerçekleştirilir.</p>

      <h2>Dikey Tarımın Avantajları</h2>
      
      <h3>1. Su Tasarrufu</h3>
      <p>Dikey tarım sistemleri, geleneksel tarıma göre %95'e varan su tasarrufu sağlar. Kapalı döngü sulama sistemleri sayesinde su israfı minimum düzeyde tutulur.</p>

      <h3>2. Alan Verimliliği</h3>
      <p>Aynı taban alanında, geleneksel tarıma göre 10-20 kat daha fazla ürün elde edilebilir. Bu özellik, özellikle kentsel alanlarda büyük avantaj sağlar.</p>

      <h3>3. Yıl Boyu Üretim</h3>
      <p>Kontrollü çevre koşulları sayesinde mevsim şartlarından bağımsız olarak yıl boyunca üretim yapılabilir.</p>

      <h3>4. Pestisit Kullanımı Yok</h3>
      <p>Kapalı sistem zararlıları dışarıda bıraktığı için pestisit kullanımına gerek kalmaz.</p>

      <h3>5. Taşıma Maliyeti Düşük</h3>
      <p>Şehir merkezlerine yakın konumlarda kurulabildiği için taşıma maliyetleri ve karbon ayak izi azalır.</p>

      <h2>Teknolojik Yenilikler</h2>
      
      <h3>LED Aydınlatma Sistemleri</h3>
      <p>Yeni nesil LED teknolojileri, bitkilerin ihtiyaç duyduğu spesifik ışık spektrumlarını sağlayarak enerji verimliliğini artırır.</p>

      <h3>Yapay Zeka ve Otomasyon</h3>
      <p>AI destekli sistemler, bitkilerin büyüme koşullarını sürekli izleyerek optimum çevre şartlarını sağlar.</p>

      <h3>Hidroponik ve Aeroponik Sistemler</h3>
      <p>Toprak kullanmayan bu sistemler, besin çözeltilerini doğrudan kök sistemine ulaştırarak maksimum verimlilik sağlar.</p>

      <h2>Dikey Tarımda Yetiştirilebilen Ürünler</h2>
      <ul>
        <li><strong>Yapraklı Yeşillikler:</strong> Marul, ıspanak, roka</li>
        <li><strong>Mikroyeşiller:</strong> Turp, bezelye, brokoli filizleri</li>
        <li><strong>Otlar:</strong> Fesleğen, nane, maydanoz</li>
        <li><strong>Küçük Meyveler:</strong> Çilek, kiraz domates</li>
        <li><strong>Mantarlar:</strong> Çeşitli mantar türleri</li>
      </ul>

      <h2>Ekonomik Perspektif</h2>
      <p>Dikey tarım, başlangıç yatırım maliyeti yüksek olsa da, uzun vadede ekonomik avantajlar sağlar:</p>
      <ul>
        <li>Yüksek verimlilik</li>
        <li>Düşük işçilik maliyeti</li>
        <li>Garantili hasat</li>
        <li>Premium ürün fiyatları</li>
        <li>Düşük kayıp oranları</li>
      </ul>

      <h2>Çevresel Etkiler</h2>
      <p>Dikey tarım, sürdürülebilir gıda üretimi açısından önemli çevresel faydalar sunar:</p>
      <ul>
        <li>Karbon ayak izinin azaltılması</li>
        <li>Su kaynaklarının korunması</li>
        <li>Toprak erozyonunun önlenmesi</li>
        <li>Biyoçeşitliliğin korunması</li>
        <li>Kimyasal kullanımının eliminasyonu</li>
      </ul>

      <h2>Geleceğe Bakış</h2>
      <p>Dikey tarım teknolojisi hızla gelişmeye devam ediyor. Önümüzdeki yıllarda:</p>
      <ul>
        <li>Enerji maliyetlerinin düşmesi</li>
        <li>Otomasyon seviyesinin artması</li>
        <li>Yeni ürün çeşitlerinin geliştirilmesi</li>
        <li>Küçük ölçekli sistemlerin yaygınlaşması</li>
      </ul>
      <p>beklenmektedir.</p>

      <h2>Sonuç</h2>
      <p>Dikey tarım, artan dünya nüfusunun gıda ihtiyacını karşılamak için kritik bir teknoloji haline gelmiştir. Sürdürülebilir, verimli ve çevre dostu bu üretim yöntemi, gıda güvenliğimizin geleceği için umut verici bir çözüm sunmaktadır.</p>
    `,
    en: `
      <p>The rapid growth of the world population and the negative effects of climate change on agriculture necessitate new approaches in food production. Vertical farming is one of the most promising solutions developed against these challenges.</p>

      <h2>What is Vertical Farming?</h2>
      <p>Vertical farming is a modern agricultural method where plants are grown in vertically stacked layers under controlled environmental conditions. This system, unlike traditional agriculture, does not use soil and is carried out entirely in closed environments.</p>

      <h2>Advantages of Vertical Farming</h2>
      
      <h3>1. Water Conservation</h3>
      <p>Vertical farming systems provide up to 95% water savings compared to traditional agriculture. Thanks to closed-loop irrigation systems, water waste is kept to a minimum.</p>

      <h3>2. Space Efficiency</h3>
      <p>In the same floor area, 10-20 times more products can be obtained compared to traditional agriculture. This feature provides great advantages especially in urban areas.</p>

      <h3>3. Year-Round Production</h3>
      <p>Thanks to controlled environmental conditions, production can be carried out throughout the year regardless of seasonal conditions.</p>

      <h3>4. No Pesticide Use</h3>
      <p>Since the closed system keeps pests out, there is no need for pesticide use.</p>

      <h3>5. Low Transportation Cost</h3>
      <p>Since it can be established close to city centers, transportation costs and carbon footprint are reduced.</p>

      <h2>Technological Innovations</h2>
      
      <h3>LED Lighting Systems</h3>
      <p>New generation LED technologies increase energy efficiency by providing specific light spectrums that plants need.</p>

      <h3>Artificial Intelligence and Automation</h3>
      <p>AI-supported systems continuously monitor plant growth conditions and provide optimum environmental conditions.</p>

      <h3>Hydroponic and Aeroponic Systems</h3>
      <p>These soilless systems provide maximum efficiency by delivering nutrient solutions directly to the root system.</p>

      <h2>Products That Can Be Grown in Vertical Farming</h2>
      <ul>
        <li><strong>Leafy Greens:</strong> Lettuce, spinach, arugula</li>
        <li><strong>Microgreens:</strong> Radish, pea, broccoli sprouts</li>
        <li><strong>Herbs:</strong> Basil, mint, parsley</li>
        <li><strong>Small Fruits:</strong> Strawberry, cherry tomatoes</li>
        <li><strong>Mushrooms:</strong> Various mushroom types</li>
      </ul>

      <h2>Economic Perspective</h2>
      <p>Although vertical farming has high initial investment costs, it provides economic advantages in the long term:</p>
      <ul>
        <li>High productivity</li>
        <li>Low labor costs</li>
        <li>Guaranteed harvest</li>
        <li>Premium product prices</li>
        <li>Low loss rates</li>
      </ul>

      <h2>Environmental Impacts</h2>
      <p>Vertical farming offers significant environmental benefits in terms of sustainable food production:</p>
      <ul>
        <li>Reducing carbon footprint</li>
        <li>Protecting water resources</li>
        <li>Preventing soil erosion</li>
        <li>Protecting biodiversity</li>
        <li>Eliminating chemical use</li>
      </ul>

      <h2>Future Outlook</h2>
      <p>Vertical farming technology continues to develop rapidly. In the coming years:</p>
      <ul>
        <li>Reduction of energy costs</li>
        <li>Increasing automation level</li>
        <li>Development of new product varieties</li>
        <li>Widespread adoption of small-scale systems</li>
      </ul>
      <p>are expected.</p>

      <h2>Conclusion</h2>
      <p>Vertical farming has become a critical technology to meet the food needs of the growing world population. This sustainable, efficient and environmentally friendly production method offers a promising solution for the future of our food security.</p>
    `
  },
  author: "Dr. Ahmet Yılmaz",
  date: "2024-01-10",
  readTime: "8 dk",
  category: {
    tr: "Teknoloji",
    en: "Technology"
  },
  image: "/images/blog/vertical-farming-future.jpg"
}

export default function VerticalFarmingPage() {
  const [language, setLanguage] = useState<'en' | 'tr'>('tr')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tr' : 'en')
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/blog" className="flex items-center gap-2 text-white hover:text-green-400 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">{t.backToBlog}</span>
            </Link>
            
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              {language === 'en' ? 'TR' : 'EN'}
            </button>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <header className="mb-8">
            <Badge className="bg-blue-600 text-white mb-4">
              {blogPost.category[language]}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-orbitron">
              {blogPost.title[language]}
            </h1>
            <div className="flex items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {blogPost.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(blogPost.date).toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US')}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {blogPost.readTime}
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                {t.sharePost}
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                {t.likePost}
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video mb-8 rounded-xl overflow-hidden">
            <Image
              src={blogPost.image}
              alt={blogPost.title[language]}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:font-orbitron prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: blogPost.content[language] }}
          />
        </div>
      </article>
    </div>
  )
}
