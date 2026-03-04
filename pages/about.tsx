import Link from 'next/link'

export default function About() {
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
            <Link href="/" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-amber-400 transition-colors font-medium text-amber-400 border-b-2 border-amber-400">
              About
            </Link>
            <Link href="/services" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">
              Services
            </Link>
            <Link href="/contact" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-8">About Bainbridge Law</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              At Bainbridge Law, we are committed to providing exceptional legal representation and counsel to our clients. With years of experience in criminal defense, civil litigation, and family law, we understand the complexities of the legal system and are dedicated to protecting our clients' rights.
            </p>
            <p className="text-slate-700 leading-relaxed">
              We believe every client deserves personalized attention and a strategic approach to their legal matters.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Choose Us</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span className="text-slate-700">Experienced legal team</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span className="text-slate-700">Personalized client care</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span className="text-slate-700">Strategic legal solutions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span className="text-slate-700">Transparent communication</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span className="text-slate-700">Proven track record</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Team</h3>
          <p className="text-slate-700 mb-6">
            Our team of dedicated legal professionals brings decades of combined experience to every case. We stay current with legal developments and employ cutting-edge strategies to achieve the best possible outcomes for our clients.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2026 Bainbridge Law. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
