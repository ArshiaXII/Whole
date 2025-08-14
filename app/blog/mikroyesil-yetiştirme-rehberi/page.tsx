"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Share2, Heart, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const content = {
  tr: {
    backToBlog: "Blog'a Dön",
    sharePost: "Paylaş",
    likePost: "Beğen",
    relatedPosts: "İlgili Yazılar",
    readMore: "Devamını Oku"
  },
  en: {
    backToBlog: "Back to Blog",
    sharePost: "Share",
    likePost: "Like",
    relatedPosts: "Related Posts",
    readMore: "Read More"
  }
}

const blogPost = {
  title: {
    tr: "Evde Mikroyeşil Yetiştirme: Başlangıç Rehberi",
    en: "Growing Microgreens at Home: A Beginner's Guide"
  },
  content: {
    tr: `
      <p>Mikroyeşiller, son yıllarda popülaritesi artan, besleyici değeri yüksek ve yetiştirmesi kolay bitkilerdir. Evde mikroyeşil yetiştirmek, sağlıklı beslenmenize katkıda bulunmanın yanı sıra, hobiniz de olabilir.</p>

      <h2>Mikroyeşil Nedir?</h2>
      <p>Mikroyeşiller, çeşitli sebze, ot ve tahıl tohumlarının çimlenme aşamasından sonra, ilk gerçek yaprakları çıkmadan önce hasat edilen genç bitkilerdir. Boyları genellikle 2.5-7.5 cm arasında değişir ve yoğun lezzet ile besleyici değerlere sahiptirler.</p>

      <h2>Gerekli Malzemeler</h2>
      <ul>
        <li>Kaliteli mikroyeşil tohumları</li>
        <li>Sığ yetiştirme kapları (plastik veya metal)</li>
        <li>Yetiştirme ortamı (toprak, kağıt havlu veya özel matlar)</li>
        <li>Sprey şişesi</li>
        <li>Şeffaf kapak veya plastik örtü</li>
        <li>LED büyütme lambası (isteğe bağlı)</li>
      </ul>

      <h2>Adım Adım Yetiştirme Süreci</h2>
      
      <h3>1. Tohum Hazırlığı</h3>
      <p>Büyük tohumları (bezelye, ayçiçeği gibi) 8-12 saat suda bekletin. Küçük tohumlar için bu işlem gerekli değildir.</p>

      <h3>2. Yetiştirme Kabının Hazırlanması</h3>
      <p>Kabınızın altına drenaj delikleri açın. Yetiştirme ortamınızı 1-2 cm kalınlığında serin.</p>

      <h3>3. Ekim</h3>
      <p>Tohumları yetiştirme ortamının üzerine eşit şekilde dağıtın. Tohumlar birbirine değebilir ancak üst üste binmemelidir.</p>

      <h3>4. İlk Sulama</h3>
      <p>Tohumları sprey şişesi ile nazikçe nemlendirin. Aşırı sulama yapmayın.</p>

      <h3>5. Karanlık Dönem</h3>
      <p>İlk 2-4 gün boyunca tohumları karanlık bir yerde tutun. Bu süreçte günde 1-2 kez nemlendirin.</p>

      <h3>6. Işığa Çıkarma</h3>
      <p>Çimlendikten sonra mikroyeşilleri dolaylı güneş ışığına veya LED lambaya maruz bırakın.</p>

      <h3>7. Hasat</h3>
      <p>7-14 gün sonra, ilk gerçek yapraklar çıkmadan önce hasat edin. Temiz bir makasla kök seviyesinin üzerinden kesin.</p>

      <h2>Popüler Mikroyeşil Çeşitleri</h2>
      <ul>
        <li><strong>Turp:</strong> Hafif acı, çıtır doku</li>
        <li><strong>Bezelye:</strong> Tatlı, çıtır</li>
        <li><strong>Ayçiçeği:</strong> Fındık tadı, çıtır</li>
        <li><strong>Brokoli:</strong> Hafif acı, besleyici</li>
        <li><strong>Roka:</strong> Baharatlı, keskin</li>
      </ul>

      <h2>Bakım İpuçları</h2>
      <ul>
        <li>Aşırı sulamadan kaçının - küf oluşumuna neden olabilir</li>
        <li>Havalandırmayı sağlayın</li>
        <li>Temiz araçlar kullanın</li>
        <li>Uygun sıcaklığı koruyun (18-24°C)</li>
        <li>Hasat sonrası buzdolabında 3-7 gün saklanabilir</li>
      </ul>

      <h2>Sonuç</h2>
      <p>Evde mikroyeşil yetiştirmek, minimal alan ve malzeme ile maksimum beslenme değeri elde etmenin harika bir yoludur. Bu rehberi takip ederek, kısa sürede kendi taze mikroyeşillerinizi üretebilir ve mutfağınızda kullanabilirsiniz.</p>
    `,
    en: `
      <p>Microgreens are plants that have gained popularity in recent years, with high nutritional value and easy to grow. Growing microgreens at home can contribute to your healthy nutrition and can also be your hobby.</p>

      <h2>What are Microgreens?</h2>
      <p>Microgreens are young plants harvested from various vegetable, herb and grain seeds after the germination stage, before the first true leaves emerge. They usually range from 2.5-7.5 cm in height and have intense flavor and nutritional values.</p>

      <h2>Required Materials</h2>
      <ul>
        <li>Quality microgreen seeds</li>
        <li>Shallow growing containers (plastic or metal)</li>
        <li>Growing medium (soil, paper towels or special mats)</li>
        <li>Spray bottle</li>
        <li>Transparent cover or plastic wrap</li>
        <li>LED grow light (optional)</li>
      </ul>

      <h2>Step-by-Step Growing Process</h2>
      
      <h3>1. Seed Preparation</h3>
      <p>Soak large seeds (peas, sunflower, etc.) in water for 8-12 hours. This process is not necessary for small seeds.</p>

      <h3>2. Preparing the Growing Container</h3>
      <p>Make drainage holes in the bottom of your container. Spread your growing medium 1-2 cm thick.</p>

      <h3>3. Sowing</h3>
      <p>Distribute seeds evenly over the growing medium. Seeds can touch each other but should not overlap.</p>

      <h3>4. Initial Watering</h3>
      <p>Gently moisten the seeds with a spray bottle. Do not overwater.</p>

      <h3>5. Dark Period</h3>
      <p>Keep seeds in a dark place for the first 2-4 days. Moisten 1-2 times daily during this process.</p>

      <h3>6. Exposing to Light</h3>
      <p>After germination, expose microgreens to indirect sunlight or LED light.</p>

      <h3>7. Harvest</h3>
      <p>After 7-14 days, harvest before the first true leaves emerge. Cut above root level with clean scissors.</p>

      <h2>Popular Microgreen Varieties</h2>
      <ul>
        <li><strong>Radish:</strong> Slightly spicy, crispy texture</li>
        <li><strong>Pea:</strong> Sweet, crispy</li>
        <li><strong>Sunflower:</strong> Nutty flavor, crispy</li>
        <li><strong>Broccoli:</strong> Slightly bitter, nutritious</li>
        <li><strong>Arugula:</strong> Spicy, sharp</li>
      </ul>

      <h2>Care Tips</h2>
      <ul>
        <li>Avoid overwatering - can cause mold formation</li>
        <li>Ensure ventilation</li>
        <li>Use clean tools</li>
        <li>Maintain appropriate temperature (18-24°C)</li>
        <li>Can be stored in refrigerator for 3-7 days after harvest</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Growing microgreens at home is a great way to achieve maximum nutritional value with minimal space and materials. By following this guide, you can quickly produce your own fresh microgreens and use them in your kitchen.</p>
    `
  },
  author: "WholeGreen Ekibi",
  date: "2024-01-15",
  readTime: "5 dk",
  category: {
    tr: "Yetiştirme Rehberi",
    en: "Growing Guide"
  },
  image: "/images/blog/microgreens-growing-guide.jpg"
}

export default function MicrogreensGuidePage() {
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
            <Badge className="bg-green-600 text-white mb-4">
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
