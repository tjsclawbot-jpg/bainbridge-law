import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: '🏢',
      title: 'Commercial Real Estate',
      description: 'Complete legal services for commercial property transactions, from acquisition to closing.',
      details: [
        'Purchase and sale agreements',
        'Due diligence and document review',
        'Lease negotiations',
        'Investment property transactions'
      ]
    },
    {
      icon: '📑',
      title: 'Title & Escrow Services',
      description: 'Expert title examination, insurance, and escrow coordination for peace of mind.',
      details: [
        'Title searches and examination',
        'Title insurance policies',
        'Escrow account management',
        'Closing coordination'
      ]
    },
    {
      icon: '🤝',
      title: 'Deal Structuring & Negotiation',
      description: 'Strategic guidance to structure deals effectively and navigate complex negotiations.',
      details: [
        'Entity formation and structuring',
        'Contract negotiation',
        'Terms and conditions optimization',
        'Risk mitigation strategies'
      ]
    },
    {
      icon: '⚖️',
      title: 'Commercial Litigation',
      description: 'Representation in disputes related to commercial real estate and transactions.',
      details: [
        'Contract disputes',
        'Boundary and title disputes',
        'Breach of contract claims',
        'Settlement negotiations'
      ]
    }
  ]

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
            <Link href="/services" className="text-slate-300 hover:text-amber-400 font-medium transition-colors text-amber-400 border-b-2 border-amber-400">
              Services
            </Link>
            <Link href="/contact" className="text-slate-300 hover:text-amber-400 font-medium transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Legal Services</h2>
        <p className="text-slate-600 text-lg mb-12">Specialized expertise in commercial real estate and complex transactions</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="text-slate-700 flex gap-2">
                    <span className="text-amber-600">•</span> {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Let's Discuss Your Transaction</h3>
          <p className="text-slate-700 mb-6">
            Whether you're buying, selling, or refinancing a commercial property, we have the expertise to guide you through every step. Our goal is to ensure smooth transactions and protect your interests throughout the process.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Schedule Consultation
          </Link>
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
