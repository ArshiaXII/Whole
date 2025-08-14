"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Eye, EyeOff, Mail, Lock, ArrowRight, Leaf } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

const content = {
  tr: {
    title: "Giriş Yap",
    subtitle: "WholeGreen hesabınıza giriş yapın",
    email: "E-posta",
    password: "Şifre",
    emailPlaceholder: "ornek@email.com",
    passwordPlaceholder: "Şifrenizi girin",
    rememberMe: "Beni hatırla",
    forgotPassword: "Şifremi unuttum",
    loginButton: "Giriş Yap",
    noAccount: "Hesabınız yok mu?",
    signUp: "Kayıt Ol",
    orContinueWith: "veya şununla devam edin",
    googleLogin: "Google ile Giriş",
    features: {
      title: "WholeGreen'e Katılın",
      subtitle: "Sürdürülebilir tarımın geleceğine ortak olun",
      feature1: "Özel içeriklere erişim",
      feature2: "Yetiştirme rehberleri",
      feature3: "Uzman tavsiyeleri",
      feature4: "Topluluk desteği"
    }
  },
  en: {
    title: "Sign In",
    subtitle: "Sign in to your WholeGreen account",
    email: "Email",
    password: "Password",
    emailPlaceholder: "example@email.com",
    passwordPlaceholder: "Enter your password",
    rememberMe: "Remember me",
    forgotPassword: "Forgot password",
    loginButton: "Sign In",
    noAccount: "Don't have an account?",
    signUp: "Sign Up",
    orContinueWith: "or continue with",
    googleLogin: "Sign in with Google",
    features: {
      title: "Join WholeGreen",
      subtitle: "Be part of the future of sustainable agriculture",
      feature1: "Access to exclusive content",
      feature2: "Growing guides",
      feature3: "Expert advice",
      feature4: "Community support"
    }
  }
}

export default function LoginPage() {
  const [language, setLanguage] = useState<'en' | 'tr'>('tr')
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tr' : 'en')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', { email, password, rememberMe })
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Side - Features */}
        <div className="hidden lg:block space-y-8">
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <div className="w-12 h-12">
                <Image
                  src="/images/pyramid-logo.svg"
                  alt="WHOLEGREEN"
                  width={48}
                  height={48}
                  className="w-full h-full"
                />
              </div>
              <Image
                src="/images/wholegreen-logo.png"
                alt="WHOLEGREEN"
                width={150}
                height={30}
                className="h-8 w-auto"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 font-orbitron">
              {t.features.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t.features.subtitle}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Leaf className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{t.features.feature1}</h3>
                <p className="text-gray-600 text-sm">Premium içerikler ve özel rehberler</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Leaf className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{t.features.feature2}</h3>
                <p className="text-gray-600 text-sm">Adım adım yetiştirme kılavuzları</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Leaf className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{t.features.feature3}</h3>
                <p className="text-gray-600 text-sm">Uzmanlardan özel tavsiyeler</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Leaf className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{t.features.feature4}</h3>
                <p className="text-gray-600 text-sm">Aktif topluluk ve destek</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto">
          <Card className="shadow-2xl border-0">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-between items-center mb-4">
                <div></div>
                <button
                  onClick={toggleLanguage}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-sm font-medium"
                >
                  {language === 'en' ? 'TR' : 'EN'}
                </button>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 font-orbitron">
                {t.title}
              </CardTitle>
              <p className="text-gray-600 mt-2">{t.subtitle}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">{t.email}</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder={t.emailPlaceholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">{t.password}</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder={t.passwordPlaceholder}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={setRememberMe}
                    />
                    <Label htmlFor="remember" className="text-sm text-gray-600">
                      {t.rememberMe}
                    </Label>
                  </div>
                  <Link href="/forgot-password" className="text-sm text-green-600 hover:text-green-700">
                    {t.forgotPassword}
                  </Link>
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                  {t.loginButton}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">{t.orContinueWith}</span>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                {t.googleLogin}
              </Button>

              <div className="text-center">
                <span className="text-gray-600">{t.noAccount} </span>
                <Link href="/register" className="text-green-600 hover:text-green-700 font-medium">
                  {t.signUp}
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
