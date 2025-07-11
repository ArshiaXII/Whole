"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Leaf, Microscope, Sprout, Rocket, TrendingUp, ChefHat, Beaker, Globe, Star, Languages } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import LoadingScreen from "@/components/loading-screen"

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
      welcome: "Welcome to WHOLEGREEN",
      mission: "Our mission is to demonstrate that modern urban agriculture is possible and to ensure everyone has access to fresh food based on the core principles of sustainability, hygiene, and quality.",
      description: "We aim to increase efficiency and use natural resources optimally through vertical farming technologies. Our purpose is to bring the food of the future to the city today and offer people a healthier life."
    },
    services: {
      title: "Our Services",
      subtitle: "What Exactly We Do?",
      description: "We provide comprehensive agricultural technology solutions",
      microgreen: {
        title: "Microgreen Production",
        description: "Advanced cultivation systems for premium microgreens"
      },
      indoor: {
        title: "Indoor Agriculture",
        description: "Controlled environment farming solutions"
      },
      space: {
        title: "Space Agriculture",
        description: "Extraterrestrial farming technologies"
      },
      precision: {
        title: "Precision Farming",
        description: "IoT-enabled monitoring systems"
      },
      hydroponics: {
        title: "Hydroponics Systems",
        description: "Soil-free growing technology"
      },
      consulting: {
        title: "Agricultural Consulting",
        description: "Expert technical consultation"
      }
    },
    stats: {
      clients: "Happy Clients",
      systems: "Systems Installed",
      plants: "Plants Grown",
      experience: "Years of Exp",
      specialists: "Specialists",
      awards: "Tech Awards"
    },
    products: {
      title: "Our Products",
      subtitle: "Premium Microgreens",
      description: "Discover our range of premium microgreen varieties, each with unique flavor profiles and nutritional benefits"
    },

    about: {
      title: "Our Vision",
      subtitle: "Whole Green Tarım A.Ş.",
      tagline: "Redesigning Agriculture",
      description: "We're not improving agriculture, we're completely redesigning it. In a world where traditional methods are no longer sustainable, we aim to make nature-protecting, high-nutritional, and accessible food possible for everyone.",
      features: [
        "We're changing not just production methods, but how people view food",
        "Future agriculture is based on intelligence, not soil",
        "Real change starts not just by leaving the old behind, but by questioning why it was wrong",
        "A healthier future is possible with smarter agriculture"
      ],
      goal: "We prove that producing more nutrition with fewer resources is possible. We're building a sustainable agriculture model that reduces water consumption and carbon footprint by 95%, doesn't exploit nature, and prioritizes human health.",
      priority: "Using smart agricultural technologies, we utilize water, energy, and space most efficiently; ensuring plants are harvested and consumed when their nutritional values are at their peak. We aim to be pioneers of a healthier and more conscious future by changing not just production, but eating habits.",
      mission: {
        title: "Our Mission",
        content: "As WholeGreen, we're here to make nutrition most efficient for everyone. By harmonizing technology and nature, we're building tomorrow's food systems today."
      }
    },
    cta: {
      title: "Ready to Transform Your Agriculture?",
      description: "Contact us today to learn how our advanced agricultural technologies can revolutionize your farming operations",
      button: "Get Started Today"
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
      welcome: "WHOLEGREEN'e Hoş Geldiniz",
      mission: "Misyonumuz, modern kentsel tarımın mümkün olduğunu göstermek ve sürdürülebilirlik, hijyen ve kalite temel ilkeleri doğrultusunda herkesin taze gıdaya erişimini sağlamaktır.",
      description: "Dikey tarım teknolojileri aracılığıyla verimliliği artırmayı ve doğal kaynakları optimal şekilde kullanmayı hedefliyoruz. Amacımız, geleceğin gıdasını bugün şehre getirmek ve insanlara daha sağlıklı bir yaşam sunmaktır."
    },
    services: {
      title: "Hizmetlerimiz",
      subtitle: "Tam Olarak Ne Yapıyoruz?",
      description: "Kapsamlı tarımsal teknoloji çözümleri sunuyoruz",
      microgreen: {
        title: "Mikroyeşil Üretimi",
        description: "Premium mikroyeşiller için gelişmiş yetiştirme sistemleri"
      },
      indoor: {
        title: "İç Mekan Tarımı",
        description: "Kontrollü ortam tarım çözümleri"
      },
      space: {
        title: "Uzay Tarımı",
        description: "Dünya dışı tarım teknolojileri"
      },
      precision: {
        title: "Hassas Tarım",
        description: "IoT destekli izleme sistemleri"
      },
      hydroponics: {
        title: "Hidroponik Sistemler",
        description: "Topraksız yetiştirme teknolojisi"
      },
      consulting: {
        title: "Tarımsal Danışmanlık",
        description: "Uzman teknik danışmanlık"
      }
    },
    stats: {
      clients: "Mutlu Müşteri",
      systems: "Kurulan Sistem",
      plants: "Yetiştirilen Bitki",
      experience: "Yıl Deneyim",
      specialists: "Uzman",
      awards: "Teknoloji Ödülü"
    },
    products: {
      title: "Ürünlerimiz",
      subtitle: "Premium Mikroyeşiller",
      description: "Her biri benzersiz lezzet profilleri ve beslenme faydaları olan premium mikroyeşil çeşitlerimizi keşfedin"
    },

    about: {
      title: "Vizyonumuz",
      subtitle: "Whole Green Tarım A.Ş.",
      tagline: "Tarımı Yeniden Tasarlıyoruz",
      description: "Tarımı geliştirmiyoruz, tamamen yeniden tasarlıyoruz. Geleneksel yöntemlerin artık sürdürülebilir olmadığı bu dünyada, doğayı koruyan, besin değeri yüksek ve erişilebilir gıdayı herkes için mümkün kılmayı hedefliyoruz.",
      features: [
        "Sadece üretim biçimini değil, insanların gıdaya bakışını da değiştiriyoruz",
        "Geleceğin tarımı, toprağa değil, zekâya dayanıyor",
        "Gerçek değişim, sadece eskiyi geride bırakmakla değil, onun neden yanlış olduğunu sorgulamakla başlar",
        "Daha sağlıklı bir gelecek, daha akıllı bir tarımla mümkün"
      ],
      goal: "Daha az kaynakla, daha fazla besin üretmenin mümkün olduğunu kanıtlıyoruz. Su tüketimini ve karbon ayak izini %95 azaltan, doğayı sömürmeyen ve insan sağlığını önceliklendiren sürdürülebilir bir tarım modeli inşa ediyoruz.",
      priority: "Akıllı tarım teknolojileriyle suyu, enerjiyi ve alanı en verimli şekilde kullanıyor; bitkilerin besin değerlerinin zirvede olduğu zamanda hasat edip tüketilmesini sağlıyoruz. Sadece üretimi değil, beslenme alışkanlıklarını da değiştirerek, daha sağlıklı ve bilinçli bir geleceğin öncüsü olmayı hedefliyoruz.",
      mission: {
        title: "Misyonumuz",
        content: "WholeGreen olarak, beslenmeyi herkes için en verimli hâle getirmek için buradayız. Teknoloji ve doğayı harmanlayarak, geleceğin gıda sistemlerini bugünden inşa ediyoruz."
      }
    },
    cta: {
      title: "Tarımınızı Dönüştürmeye Hazır mısınız?",
      description: "Gelişmiş tarım teknolojilerimizin tarım operasyonlarınızı nasıl devrim niteliğinde değiştirebileceğini öğrenmek için bugün bizimle iletişime geçin",
      button: "Hemen Başlayın"
    }
  }
}

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [language, setLanguage] = useState<'en' | 'tr'>('tr') // Default to Turkish

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tr' : 'en')
  }

  const t = content[language]

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />
  }

  return (
    <div className="min-h-screen animate-[fadeIn_1s_ease-out]">
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
              <Link href="/" className="text-green-400 hover:text-green-300 transition-colors font-montserrat font-medium">
                {t.nav.home}
              </Link>
              <Link href="/products" className="text-white hover:text-green-400 transition-colors font-montserrat font-medium">
                {t.nav.products}
              </Link>
              <Link href="#about" className="text-white hover:text-green-400 transition-colors font-montserrat font-medium">
                {t.nav.about}
              </Link>
              <Link href="#services" className="text-white hover:text-green-400 transition-colors font-montserrat font-medium">
                {t.nav.services}
              </Link>

              <Link href="/contact" className="text-white hover:text-green-400 transition-colors font-montserrat font-medium">
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">


        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {/* Animated Logo */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto mb-6 animate-[logoEntrance_2s_cubic-bezier(0.68,-0.55,0.265,1.55)]">
              <Image
                src="/images/pyramid-logo.svg"
                alt="WHOLEGREEN Logo"
                width={128}
                height={128}
                className="w-full h-full drop-shadow-2xl animate-[logoGlow_3s_ease-in-out_infinite_alternate]"
              />
            </div>

            {/* Animated Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 border-2 border-white/20 rounded-full animate-[ring1_4s_ease-out_infinite]"></div>
              <div className="absolute w-52 h-52 border-2 border-white/10 rounded-full animate-[ring2_4s_ease-out_infinite_0.5s]"></div>
              <div className="absolute w-64 h-64 border-2 border-white/5 rounded-full animate-[ring3_4s_ease-out_infinite_1s]"></div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/30 rounded-full animate-[particle_8s_ease-in-out_infinite]"
                  style={{
                    left: `${20 + i * 8}%`,
                    top: `${30 + (i % 4) * 15}%`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          <div className="mb-6 animate-[slideUp_1.5s_ease-out_1s_both]">
            <Image src="/images/wholegreen-logo.png" alt="WHOLEGREEN" width={400} height={80} className="mx-auto" />
          </div>
          <p className="montserrat-roman-extralight-hero text-black drop-shadow-lg animate-[slideUp_1.5s_ease-out_1.5s_both]">
            Gelecek Şehirde Filizleniyor
          </p>
          <p className="montserrat-roman-extralight-text text-green-300 mt-4 drop-shadow-md animate-[slideUp_1.5s_ease-out_2s_both]">
            Sürdürülebilir Kentsel Tarım
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/welcome-section.png"
                alt="Agricultural Scientist"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-green-600 font-semibold text-lg mb-2">{t.hero.welcome}</h3>
                <h2 className="montserrat-roman-extralight-heading text-gray-900 mb-4">
                  {t.hero.mission}
                </h2>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {t.hero.description}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Microscope className="w-8 h-8 text-green-600" />
                  <span className="text-gray-700">Microgreen Production</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sprout className="w-8 h-8 text-green-600" />
                  <span className="text-gray-700">Indoor Agriculture</span>
                </div>
                <div className="flex items-center gap-3">
                  <Rocket className="w-8 h-8 text-green-600" />
                  <span className="text-gray-700">Space Agriculture</span>
                </div>
                <div className="flex items-center gap-3">
                  <Beaker className="w-8 h-8 text-green-600" />
                  <span className="text-gray-700">Precision Farming</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-green-600 font-semibold text-lg mb-2">{t.about.title}</h3>
            <h2 className="montserrat-roman-extralight-heading text-gray-900 mb-4">{t.about.subtitle}</h2>
            <p className="montserrat-roman-extralight-text text-green-600 mb-8">{t.about.tagline}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {t.about.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {t.about.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {t.about.goal}
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  {t.about.priority}
                </p>
              </div>
            </div>

            {/* Right Column - Mission */}
            <div>
              <Card className="border-0 shadow-xl bg-white">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Leaf className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-orbitron">{t.about.mission.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t.about.mission.content}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-green-600 font-semibold text-lg mb-2">{t.services.title}</h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-orbitron">{t.services.subtitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.services.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-green-400 to-emerald-500 text-white hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Microscope className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 font-orbitron">{t.services.microgreen.title}</h3>
                <p className="text-green-100">{t.services.microgreen.description}</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-400 to-cyan-500 text-white hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Sprout className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 font-orbitron">{t.services.indoor.title}</h3>
                <p className="text-blue-100">{t.services.indoor.description}</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-400 to-pink-500 text-white hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Rocket className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 font-orbitron">{t.services.space.title}</h3>
                <p className="text-purple-100">{t.services.space.description}</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-400 to-red-500 text-white hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 font-orbitron">{t.services.precision.title}</h3>
                <p className="text-orange-100">{t.services.precision.description}</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-400 to-green-500 text-white hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Beaker className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 font-orbitron">{t.services.hydroponics.title}</h3>
                <p className="text-teal-100">{t.services.hydroponics.description}</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-400 to-purple-500 text-white hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Globe className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 font-orbitron">{t.services.consulting.title}</h3>
                <p className="text-indigo-100">{t.services.consulting.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <Image
            src="/images/stats-section.png"
            alt="Agricultural Statistics Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">150</div>
              <div className="text-gray-300">{t.stats.clients}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">2.5K</div>
              <div className="text-gray-300">{t.stats.systems}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">50M</div>
              <div className="text-gray-300">{t.stats.plants}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">12</div>
              <div className="text-gray-300">{t.stats.experience}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">25</div>
              <div className="text-gray-300">{t.stats.specialists}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">18</div>
              <div className="text-gray-300">{t.stats.awards}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-green-600 font-semibold text-lg mb-2">{t.products.title}</h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-orbitron">{t.products.subtitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.products.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="hover:shadow-xl transition-all duration-300 border-purple-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Perilla</h3>
                <p className="text-gray-600 text-sm mb-4">Anason aromalı premium mikrofiliz</p>
                <Badge className="bg-purple-100 text-purple-800">Premium Kalite</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-green-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sprout className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Daikon Radish</h3>
                <p className="text-gray-600 text-sm mb-4">Japon mutfağının vazgeçilmezi</p>
                <Badge className="bg-green-100 text-green-800">Organik</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-red-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Amaranth</h3>
                <p className="text-gray-600 text-sm mb-4">Çarpıcı kırmızı renk</p>
                <Badge className="bg-red-100 text-red-800">Antik Süpergıda</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-orange-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Red Radish</h3>
                <p className="text-gray-600 text-sm mb-4">Keskin biberimsi tat</p>
                <Badge className="bg-orange-100 text-orange-800">Yüksek Vitamin</Badge>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
              >
                Tüm Ürünleri Görüntüle
              </Button>
            </Link>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 font-orbitron">{t.cta.title}</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            {t.cta.description}
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              {t.cta.button}
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/images/pyramid-logo.svg" alt="WHOLEGREEN" width={32} height={32} />
                <Image
                  src="/images/wholegreen-logo.png"
                  alt="WHOLEGREEN"
                  width={120}
                  height={24}
                  className="h-6 w-auto"
                />
              </div>
              <p className="text-gray-400">Premium microgreen technologies for a sustainable future</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Microgreen Production</li>
                <li>Indoor Agriculture</li>
                <li>Space Agriculture</li>
                <li>Precision Farming</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Perilla</li>
                <li>Daikon Radish</li>
                <li>Amaranth</li>
                <li>Red Radish</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@wholegreen.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Innovation Drive</li>
                <li>Tech Valley, CA 94000</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="text-center text-gray-400">
            <p>&copy; 2024 WHOLEGREEN. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes logoEntrance {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          50% { transform: scale(1.1) rotate(-90deg); opacity: 0.8; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        @keyframes logoGlow {
          0% { filter: drop-shadow(0 0 10px rgba(34, 197, 94, 0.3)); }
          100% { filter: drop-shadow(0 0 20px rgba(34, 197, 94, 0.6)); }
        }
        
        @keyframes ring1 {
          0% { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(1.2); opacity: 0; }
        }
        
        @keyframes ring2 {
          0% { transform: scale(0.8); opacity: 0.6; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        
        @keyframes ring3 {
          0% { transform: scale(0.8); opacity: 0.4; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        
        @keyframes slideUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes particle {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          25% { transform: translateY(-15px) rotate(90deg); opacity: 0.8; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.6; }
          75% { transform: translateY(-15px) rotate(270deg); opacity: 0.9; }
        }
      `}</style>
    </div>
  )
}
