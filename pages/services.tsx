import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: '⚖️',
      title: 'Criminal Defense',
      description: 'Expert representation for clients facing criminal charges. We handle everything from misdemeanors to felonies.',
      details: [
        'DUI/DWI defense',
        'Drug offenses',
        'White-collar crimes',
        'Violent crime defense'
      ]
    },
    {
      icon: '📋',
      title: 'Civil Litigation',
      description: 'Comprehensive representation in civil disputes and litigation matters.',
      details: [
        'Contract disputes',
        'Personal injury',
        'Business litigation',
        'Employment law'
      ]
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Law',
      description: 'Compassionate guidance through sensitive family matters.',
      details: [
        'Divorce & separation',
        'Child custody',
        'Adoption',
        'Spousal support'
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
            <Link href="/" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">
              About
            </Link>
            <Link href="/services" className="text-slate-300 hover:text-amber-400 transition-colors font-medium text-amber-400 border-b-2 border-amber-400">
              Services
            </Link>
            <Link href="/contact" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Legal Services</h2>
        <p className="text-slate-600 text-lg mb-12">Specialized legal expertise across multiple practice areas</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Consultation Available</h3>
          <p className="text-slate-700 mb-6">
            Not sure which service you need? Our experienced attorneys can assess your situation and recommend the best course of action. Contact us today to schedule a confidential consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-2 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors"
          >
            Schedule Consultation
          </Link>
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
