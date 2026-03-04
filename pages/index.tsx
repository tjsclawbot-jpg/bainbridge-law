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
          <h2 className="text-5xl font-bold mb-4">Professional Legal Services</h2>
          <p className="text-xl text-slate-300 mb-8">Dedicated to protecting your rights and interests</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 shadow-lg hover:shadow-amber-500/50 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">⚖️</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Criminal Defense</h4>
              <p className="text-slate-600">Expert representation in criminal matters</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">📋</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Civil Litigation</h4>
              <p className="text-slate-600">Comprehensive civil legal solutions</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Family Law</h4>
              <p className="text-slate-600">Compassionate family law representation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 border-t-4 border-amber-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Discuss Your Case?</h3>
          <p className="text-slate-300 mb-8">Contact us today for a confidential consultation</p>
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
