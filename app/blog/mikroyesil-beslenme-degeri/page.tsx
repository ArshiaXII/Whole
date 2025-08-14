"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Share2, Heart } from "lucide-react"
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
    tr: "Mikroyeşillerin Beslenme Değeri ve Sağlık Faydaları",
    en: "Nutritional Value and Health Benefits of Microgreens"
  },
  content: {
    tr: `
      <p>Mikroyeşiller, küçük boyutlarına rağmen büyük beslenme değerleri taşıyan süper gıdalardır. Bu genç bitkiler, olgun hallerine göre çok daha yoğun vitamin, mineral ve antioksidan içeriğine sahiptirler.</p>

      <h2>Mikroyeşillerin Beslenme Profili</h2>
      <p>Araştırmalar, mikroyeşillerin olgun yapraklarına göre 4-40 kat daha fazla besleyici madde içerdiğini göstermektedir. Bu yoğunluk, bitkilerin büyüme aşamasında tüm enerjilerini yaprak gelişimine odaklamasından kaynaklanır.</p>

      <h3>Vitamin İçeriği</h3>
      <ul>
        <li><strong>Vitamin C:</strong> Bağışıklık sistemini güçlendirir, kolajen üretimini destekler</li>
        <li><strong>Vitamin E:</strong> Güçlü antioksidan, hücre zarlarını korur</li>
        <li><strong>Vitamin K:</strong> Kemik sağlığı ve kan pıhtılaşması için kritik</li>
        <li><strong>Beta-karoten (Vitamin A):</strong> Göz sağlığı ve bağışıklık sistemi</li>
        <li><strong>Folat:</strong> DNA sentezi ve hücre bölünmesi için gerekli</li>
      </ul>

      <h3>Mineral İçeriği</h3>
      <ul>
        <li><strong>Demir:</strong> Oksijen taşınması ve enerji metabolizması</li>
        <li><strong>Potasyum:</strong> Kalp sağlığı ve kan basıncı kontrolü</li>
        <li><strong>Kalsiyum:</strong> Kemik ve diş sağlığı</li>
        <li><strong>Magnezyum:</strong> Kas ve sinir fonksiyonları</li>
        <li><strong>Çinko:</strong> Bağışıklık sistemi ve yara iyileşmesi</li>
      </ul>

      <h2>Antioksidan Gücü</h2>
      <p>Mikroyeşiller, serbest radikallerle savaşan güçlü antioksidanlar açısından zengindir:</p>
      
      <h3>Polifenoller</h3>
      <p>Kalp hastalıkları ve kanser riskini azaltan doğal bileşikler.</p>

      <h3>Karotenoidler</h3>
      <p>Göz sağlığını koruyan ve yaşlanma karşıtı etkilere sahip pigmentler.</p>

      <h3>Flavonoidler</h3>
      <p>İltihap karşıtı ve nöroprotektif özelliklere sahip bileşikler.</p>

      <h2>Çeşitlere Göre Beslenme Değerleri</h2>
      
      <h3>Turp Mikroyeşilleri</h3>
      <ul>
        <li>Vitamin C: Günlük ihtiyacın %25'i</li>
        <li>Vitamin E: Günlük ihtiyacın %15'i</li>
        <li>Folat: Günlük ihtiyacın %8'i</li>
        <li>Özel bileşik: Sülfürafan (kanser koruyucu)</li>
      </ul>

      <h3>Bezelye Mikroyeşilleri</h3>
      <ul>
        <li>Protein: 100g'da 3g</li>
        <li>Vitamin A: Günlük ihtiyacın %35'i</li>
        <li>Vitamin C: Günlük ihtiyacın %20'si</li>
        <li>Lif: Sindirim sağlığını destekler</li>
      </ul>

      <h3>Brokoli Mikroyeşilleri</h3>
      <ul>
        <li>Sülfürafan: Güçlü detoks desteği</li>
        <li>Vitamin K: Günlük ihtiyacın %50'si</li>
        <li>Kalsiyum: Kemik sağlığı için</li>
        <li>İndol-3-karbinol: Hormon dengeleyici</li>
      </ul>

      <h2>Sağlık Faydaları</h2>
      
      <h3>1. Bağışıklık Sistemi Desteği</h3>
      <p>Yüksek vitamin C ve antioksidan içeriği, bağışıklık sistemini güçlendirir ve hastalıklara karşı direnci artırır.</p>

      <h3>2. Kalp Sağlığı</h3>
      <p>Potasyum, magnezyum ve antioksidanlar kalp sağlığını destekler, kan basıncını düzenler.</p>

      <h3>3. Detoksifikasyon</h3>
      <p>Sülfürafan ve diğer detoks bileşikleri, vücudun zararlı maddeleri atmasına yardımcı olur.</p>

      <h3>4. Yaşlanma Karşıtı Etkiler</h3>
      <p>Güçlü antioksidanlar, hücresel hasarı önler ve yaşlanma sürecini yavaşlatır.</p>

      <h3>5. Sindirim Sağlığı</h3>
      <p>Lif içeriği ve enzimler, sağlıklı sindirim sistemini destekler.</p>

      <h3>6. Göz Sağlığı</h3>
      <p>Beta-karoten ve lutein, göz sağlığını korur ve yaşa bağlı göz hastalıklarını önler.</p>

      <h2>Günlük Diyete Dahil Etme</h2>
      
      <h3>Önerilen Porsiyon</h3>
      <p>Günde 25-50 gram mikroyeşil tüketimi, önemli beslenme faydaları sağlar.</p>

      <h3>Tüketim Şekilleri</h3>
      <ul>
        <li>Salatalarda çiğ olarak</li>
        <li>Smoothie'lerde</li>
        <li>Sandviç ve wrap'lerde</li>
        <li>Çorba ve ana yemeklerde garnitür olarak</li>
        <li>Omlet ve yumurta yemeklerinde</li>
      </ul>

      <h3>Saklama İpuçları</h3>
      <ul>
        <li>Buzdolabında 3-7 gün saklanabilir</li>
        <li>Nemli kağıt havlu ile sarın</li>
        <li>Hava geçirgen kaplarda muhafaza edin</li>
        <li>Yıkamadan önce saklamayın</li>
      </ul>

      <h2>Bilimsel Araştırmalar</h2>
      <p>Journal of Agricultural and Food Chemistry'de yayınlanan araştırmalar, mikroyeşillerin:</p>
      <ul>
        <li>Kolesterol seviyelerini düşürdüğünü</li>
        <li>İnsulin direncini azalttığını</li>
        <li>İltihap belirteçlerini düşürdüğünü</li>
        <li>Kanser hücresi büyümesini engellediğini</li>
      </ul>
      <p>göstermektedir.</p>

      <h2>Sonuç</h2>
      <p>Mikroyeşiller, küçük boyutlarına rağmen büyük beslenme değerleri sunan süper gıdalardır. Günlük diyetinize dahil ederek, vitamin, mineral ve antioksidan alımınızı önemli ölçüde artırabilir, genel sağlığınızı destekleyebilirsiniz. Doğal, taze ve besleyici bu küçük mucizeler, sağlıklı yaşamın vazgeçilmez parçalarından biridir.</p>
    `,
    en: `
      <p>Microgreens are superfoods that carry great nutritional values despite their small size. These young plants have much more concentrated vitamin, mineral and antioxidant content compared to their mature forms.</p>

      <h2>Nutritional Profile of Microgreens</h2>
      <p>Research shows that microgreens contain 4-40 times more nutrients than mature leaves. This concentration comes from plants focusing all their energy on leaf development during the growth phase.</p>

      <h3>Vitamin Content</h3>
      <ul>
        <li><strong>Vitamin C:</strong> Strengthens immune system, supports collagen production</li>
        <li><strong>Vitamin E:</strong> Powerful antioxidant, protects cell membranes</li>
        <li><strong>Vitamin K:</strong> Critical for bone health and blood clotting</li>
        <li><strong>Beta-carotene (Vitamin A):</strong> Eye health and immune system</li>
        <li><strong>Folate:</strong> Necessary for DNA synthesis and cell division</li>
      </ul>

      <h3>Mineral Content</h3>
      <ul>
        <li><strong>Iron:</strong> Oxygen transport and energy metabolism</li>
        <li><strong>Potassium:</strong> Heart health and blood pressure control</li>
        <li><strong>Calcium:</strong> Bone and dental health</li>
        <li><strong>Magnesium:</strong> Muscle and nerve functions</li>
        <li><strong>Zinc:</strong> Immune system and wound healing</li>
      </ul>

      <h2>Antioxidant Power</h2>
      <p>Microgreens are rich in powerful antioxidants that fight free radicals:</p>
      
      <h3>Polyphenols</h3>
      <p>Natural compounds that reduce the risk of heart disease and cancer.</p>

      <h3>Carotenoids</h3>
      <p>Pigments that protect eye health and have anti-aging effects.</p>

      <h3>Flavonoids</h3>
      <p>Compounds with anti-inflammatory and neuroprotective properties.</p>

      <h2>Nutritional Values by Varieties</h2>
      
      <h3>Radish Microgreens</h3>
      <ul>
        <li>Vitamin C: 25% of daily needs</li>
        <li>Vitamin E: 15% of daily needs</li>
        <li>Folate: 8% of daily needs</li>
        <li>Special compound: Sulforaphane (cancer protective)</li>
      </ul>

      <h3>Pea Microgreens</h3>
      <ul>
        <li>Protein: 3g per 100g</li>
        <li>Vitamin A: 35% of daily needs</li>
        <li>Vitamin C: 20% of daily needs</li>
        <li>Fiber: Supports digestive health</li>
      </ul>

      <h3>Broccoli Microgreens</h3>
      <ul>
        <li>Sulforaphane: Powerful detox support</li>
        <li>Vitamin K: 50% of daily needs</li>
        <li>Calcium: For bone health</li>
        <li>Indole-3-carbinol: Hormone balancer</li>
      </ul>

      <h2>Health Benefits</h2>
      
      <h3>1. Immune System Support</h3>
      <p>High vitamin C and antioxidant content strengthens the immune system and increases resistance to diseases.</p>

      <h3>2. Heart Health</h3>
      <p>Potassium, magnesium and antioxidants support heart health and regulate blood pressure.</p>

      <h3>3. Detoxification</h3>
      <p>Sulforaphane and other detox compounds help the body eliminate harmful substances.</p>

      <h3>4. Anti-Aging Effects</h3>
      <p>Powerful antioxidants prevent cellular damage and slow down the aging process.</p>

      <h3>5. Digestive Health</h3>
      <p>Fiber content and enzymes support a healthy digestive system.</p>

      <h3>6. Eye Health</h3>
      <p>Beta-carotene and lutein protect eye health and prevent age-related eye diseases.</p>

      <h2>Including in Daily Diet</h2>
      
      <h3>Recommended Portion</h3>
      <p>Consuming 25-50 grams of microgreens daily provides significant nutritional benefits.</p>

      <h3>Consumption Methods</h3>
      <ul>
        <li>Raw in salads</li>
        <li>In smoothies</li>
        <li>In sandwiches and wraps</li>
        <li>As garnish in soups and main dishes</li>
        <li>In omelets and egg dishes</li>
      </ul>

      <h3>Storage Tips</h3>
      <ul>
        <li>Can be stored in refrigerator for 3-7 days</li>
        <li>Wrap with damp paper towel</li>
        <li>Store in breathable containers</li>
        <li>Don't wash before storing</li>
      </ul>

      <h2>Scientific Research</h2>
      <p>Research published in the Journal of Agricultural and Food Chemistry shows that microgreens:</p>
      <ul>
        <li>Lower cholesterol levels</li>
        <li>Reduce insulin resistance</li>
        <li>Lower inflammation markers</li>
        <li>Inhibit cancer cell growth</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Microgreens are superfoods that offer great nutritional values despite their small size. By including them in your daily diet, you can significantly increase your vitamin, mineral and antioxidant intake and support your overall health. These natural, fresh and nutritious little miracles are one of the indispensable parts of healthy living.</p>
    `
  },
  author: "Dyt. Elif Kaya",
  date: "2024-01-05",
  readTime: "6 dk",
  category: {
    tr: "Beslenme",
    en: "Nutrition"
  },
  image: "/images/blog/microgreens-nutrition.jpg"
}

export default function MicrogreensNutritionPage() {
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
            <Badge className="bg-orange-600 text-white mb-4">
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
