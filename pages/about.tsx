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
            <Link href="/" className="text-slate-300 hover:text-amber-400 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-amber-400 font-medium transition-colors text-amber-400 border-b-2 border-amber-400">
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

      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-8">About Bainbridge Law</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              At Bainbridge Law, we specialize in commercial real estate transactions and provide comprehensive legal solutions for buyers, sellers, lenders, and their agents. We understand that commercial deals are complex, and our mission is to guide you through every step with clarity, transparency, and expert counsel.
            </p>
            <p className="text-slate-700 leading-relaxed">
              We believe in attorney-led service, personalized attention, and a problem-solving approach that puts your interests first.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">What Sets Us Apart</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span className="text-slate-700">Specialized commercial real estate expertise</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span className="text-slate-700">Transparent, clear communication</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span className="text-slate-700">Attorney-led service on every transaction</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span className="text-slate-700">Problem-solving focus</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span className="text-slate-700">Personalized, client-focused approach</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Team</h3>
          <p className="text-slate-700 mb-4">
            Our team of experienced commercial real estate attorneys brings deep expertise in complex transactions, title work, escrow coordination, and deal structuring. We stay current with industry developments and employ proven strategies to achieve the best possible outcomes for our clients.
          </p>
          <p className="text-slate-700">
            Whether you're navigating your first commercial acquisition or a complex multi-million dollar transaction, we're here to ensure your success.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Commitment</h3>
          <p className="text-slate-700">
            We are committed to providing informed guidance, ensuring you're comfortable throughout the process, and giving you confidence when closing on your transaction. Your success is our success.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 border-t border-amber-600/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2026 Bainbridge Law. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
