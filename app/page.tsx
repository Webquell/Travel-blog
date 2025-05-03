import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Youtube, User, ShoppingCart } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-light">
            <Image src="/logo.png" alt="Logo" width={120} height={40} className="h-10 w-auto" />
          </Link>

          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link href="/store" className="text-gray-700 hover:text-gray-900">
                Store <span className="text-xs">▼</span>
              </Link>
              <Link href="/gear" className="text-gray-700 hover:text-gray-900">
                My Gear
              </Link>
              <Link href="/follow" className="text-gray-700 hover:text-gray-900">
                Follow
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link href="https://instagram.com" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-700 hover:text-gray-900" />
              </Link>
              <Link href="https://facebook.com" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-700 hover:text-gray-900" />
              </Link>
              <Link href="https://youtube.com" aria-label="YouTube">
                <Youtube className="h-5 w-5 text-gray-700 hover:text-gray-900" />
              </Link>
              <Link href="/account" aria-label="Account">
                <User className="h-5 w-5 text-gray-700 hover:text-gray-900" />
              </Link>
              <Link href="/cart" aria-label="Shopping Cart">
                <ShoppingCart className="h-5 w-5 text-gray-700 hover:text-gray-900" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/img/bg1.jpg"
          alt="Photographer in snowy landscape"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* Nature Is My Church Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <Image src="/trees-icon.png" alt="Trees" width={120} height={40} className="mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8">NATURE IS MY CHURCH</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
            I find silence and serenity in myself when I spend time in nature and feel its authenticity. When the
            blizzard is raging, when the rain and the wind make animals and people seek shelter, or when night descends
            over the forest.
          </p>
        </div>
      </section>

      <section className="relative h-screen">
        <Image
          src="/img/bg2.jpg"
          alt="Polar bear on ice"
          fill
          className="object-cover"
        />
      </section>

      {/* My Craft Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <Image src="/birds-icon.png" alt="Birds" width={120} height={40} className="mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8">MY CRAFT</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
            Waiting patiently for hours, days and even months to capture that one special moment. Often I walk home
            empty handed but sometimes I am lucky...
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
            I love to see these moments come to life as photos printed on high quality paper. Have a look at some of my
            greatest memories from nature.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Calendars */}
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vN5nzSHD1SSVuIyzF9I9RSPneq9TCd.png"
                  alt="2025 Calendar with deer"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">2025 CALENDARS</h3>
              <p className="text-gray-600 mb-6">
                You can choose between 2 calendars - each with different photos. A wall calendar and a table calendar.
              </p>

            </div>

            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vN5nzSHD1SSVuIyzF9I9RSPneq9TCd.png"
                  alt="2025 Calendar with deer"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">2025 CALENDARS</h3>
              <p className="text-gray-600 mb-6">
                You can choose between 2 calendars - each with different photos. A wall calendar and a table calendar.
              </p>

            </div>

            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vN5nzSHD1SSVuIyzF9I9RSPneq9TCd.png"
                  alt="2025 Calendar with deer"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">2025 CALENDARS</h3>
              <p className="text-gray-600 mb-6">
                You can choose between 2 calendars - each with different photos. A wall calendar and a table calendar.
              </p>

            </div>




          </div>
        </div>
      </section>

      {/* Full Width Image - Forest */}
      <section className="relative h-screen">
        <Image
          src="/img/bg3.jpg"
          alt="Photographer in forest with sunlight"
          fill
          className="object-cover"
        />
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <Image src="/img/bg4.svg" alt="Feather" width={80} height={40} className="mx-auto mb-8" />

          <div className="section-divider"></div>

          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-2">SEE YOU OUT THERE</h2>
          <p className="text-gray-600 mb-8">all the best</p>

          <Image src="/img/bg5.svg" alt="Signature" width={160} height={60} className="mx-auto mb-16" />

          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <Link href="/terms" className="text-gray-600 hover:text-gray-900">
              Terms of Service
            </Link>
            <Link href="/shipping" className="text-gray-600 hover:text-gray-900">
              Shipping Policy
            </Link>
            <Link href="/refund" className="text-gray-600 hover:text-gray-900">
              Refund Policy
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/legal" className="text-gray-600 hover:text-gray-900">
              Legal Notice
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>

          <p className="text-gray-500 text-sm">© 2025 Webquell</p>
        </div>
      </footer>
    </main>
  )
}
