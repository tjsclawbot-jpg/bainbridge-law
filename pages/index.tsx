import Link from 'next/link'

export default function Home() {
  return (
    <>
      <nav className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-amber-600/30 sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-slate-900 font-bold text-lg">
              B
            </div>
            <h1 className="text-xl font-bold text-white">Bainbridge Law</h1>
          </div>
          <div className="flex gap-8">
            <Link href="/" className="text-slate-300 hover:text-amber-400 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-amber-400 font-medium transition-colors">
              About
            </Link>
            <Link href="/services" className="text-slate-300 hover:text-amber-400 font-medium transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-slate-300 hover:text-amber-400 font-medium transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-4">Commercial Real Estate Legal Solutions</h2>
          <p className="text-xl text-slate-300 mb-8">Expert guidance for complex property transactions and commercial deals</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 shadow-lg hover:shadow-amber-500/50 transition-all"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🏢</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Commercial Real Estate</h4>
              <p className="text-slate-600">Comprehensive legal services for commercial property transactions and acquisitions</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">📑</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Title & Escrow</h4>
              <p className="text-slate-600">Expert title examination, insurance, and escrow coordination</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Deal Structuring</h4>
              <p className="text-slate-600">Strategic structuring and negotiation for commercial transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Choose Bainbridge Law</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex gap-4 mb-6">
                <div className="text-amber-500 text-2xl">✓</div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Deep Industry Expertise</h4>
                  <p className="text-slate-600">Specialized knowledge in commercial real estate and complex transactions</p>
                </div>
              </div>
              <div className="flex gap-4 mb-6">
                <div className="text-amber-500 text-2xl">✓</div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Transparent Process</h4>
                  <p className="text-slate-600">Clear communication and guidance throughout every transaction</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-amber-500 text-2xl">✓</div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Problem Solving</h4>
                  <p className="text-slate-600">Solutions-oriented approach to complex deal challenges</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-4 mb-6">
                <div className="text-amber-500 text-2xl">✓</div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Attorney-Led Service</h4>
                  <p className="text-slate-600">Direct involvement of experienced attorneys in all matters</p>
                </div>
              </div>
              <div className="flex gap-4 mb-6">
                <div className="text-amber-500 text-2xl">✓</div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Personalized Attention</h4>
                  <p className="text-slate-600">Tailored solutions for your specific transaction needs</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-amber-500 text-2xl">✓</div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Trusted Partnership</h4>
                  <p className="text-slate-600">Long-term relationships with clients and industry professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 border-t-4 border-amber-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Move Forward on Your Deal?</h3>
          <p className="text-slate-300 mb-8">Contact us today for a confidential consultation about your commercial real estate transaction</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 shadow-lg transition-all"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 border-t border-amber-600/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2026 Bainbridge Law. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
