import Link from 'next/link'

export default function Demo() {
  const features = [
    {
      title: 'Client Portal',
      icon: '🔐',
      description: 'Secure login for clients to view case information, documents, and progress',
      features: [
        'Login with demo credentials (any email/password)',
        'View active cases with progress tracking',
        'Access case timelines and milestones',
        'Download project documents',
        'Real-time case status updates'
      ],
      cta: 'Explore Client Portal',
      link: '/client-portal'
    },
    {
      title: 'Intake Form',
      icon: '📝',
      description: 'Multi-step intake form to collect client information before consultation',
      features: [
        '4-step guided form (no overwhelming))',
        'Step 1: Personal contact information',
        'Step 2: Matter details & urgency level',
        'Step 3: Property/transaction information',
        'Step 4: Additional details & confidentiality notes',
        'Progress indicator & back/next navigation'
      ],
      cta: 'Try Intake Form',
      link: '/intake-form'
    },
    {
      title: 'Appointment Scheduling',
      icon: '📅',
      description: 'Calendar-based appointment booking with real-time availability',
      features: [
        'View next 30 days of availability',
        'See booked slots (grayed out)',
        'Select date, then available time slots',
        'Enter contact information',
        'Automatic confirmation email',
        'No setup required for calendly integration'
      ],
      cta: 'Book Appointment',
      link: '/scheduling'
    }
  ]

  return (
    <>
      <nav className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-amber-600/30 sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-slate-900 font-bold text-lg">
              B
            </div>
            <h1 className="text-xl font-bold text-white">Bainbridge Law</h1>
          </Link>
          <Link href="/" className="text-slate-300 hover:text-amber-400 font-medium transition-colors">
            Back to Main
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">Feature Demonstrations</h1>
          <p className="text-xl text-slate-600">Explore three powerful features built for the Bainbridge Law client experience</p>
        </div>

        {/* Features Grid */}
        <div className="space-y-8 mb-16">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg transition-all">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left: Content */}
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl">{feature.icon}</span>
                    <h2 className="text-3xl font-bold text-slate-900">{feature.title}</h2>
                  </div>

                  <p className="text-slate-600 text-lg mb-6">{feature.description}</p>

                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-slate-900">Key Features:</h4>
                    <ul className="space-y-2">
                      {feature.features.map((f, i) => (
                        <li key={i} className="flex gap-3 text-slate-700">
                          <span className="text-amber-500 font-bold">✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={feature.link}
                    className="inline-block px-8 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    {feature.cta} →
                  </Link>
                </div>

                {/* Right: Visual Preview */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200 flex items-center justify-center min-h-80">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{feature.icon}</div>
                    <p className="text-slate-600 font-medium">Click to try →</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* User Flow Documentation */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 p-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">User Flows & Documentation</h2>

          <div className="space-y-8">
            {/* Client Portal Flow */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Client Portal User Flow</h3>
              <div className="space-y-4 bg-white rounded-lg p-6 border border-slate-200">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Client visits portal</h4>
                    <p className="text-slate-600">Navigates to /client-portal</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Login</h4>
                    <p className="text-slate-600">Enter email and password (demo: any credentials work)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">View Dashboard</h4>
                    <p className="text-slate-600">See active cases, progress %, documents, and timeline</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Download Documents</h4>
                    <p className="text-slate-600">Access case-related PDFs and documents</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">✓</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Logout</h4>
                    <p className="text-slate-600">Securely end session</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Intake Form Flow */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Intake Form User Flow</h3>
              <div className="space-y-4 bg-white rounded-lg p-6 border border-slate-200">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">View Form Instructions</h4>
                    <p className="text-slate-600">See 4-step process with progress indicator</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Step 1: Personal Information</h4>
                    <p className="text-slate-600">Enter name, email, phone, company (optional)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Step 2: Matter Details</h4>
                    <p className="text-slate-600">Select matter type, describe issue, set urgency level</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Step 3: Property Information</h4>
                    <p className="text-slate-600">Add property address, type, transaction value</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Step 4: Additional Details</h4>
                    <p className="text-slate-600">Existing attorney?, timeline, confidential notes</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">✓</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Submit & Confirmation</h4>
                    <p className="text-slate-600">Form sent, client sees success message</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scheduling Flow */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Appointment Scheduling User Flow</h3>
              <div className="space-y-4 bg-white rounded-lg p-6 border border-slate-200">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">View Calendar</h4>
                    <p className="text-slate-600">See next 30 days of available dates</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Select Date</h4>
                    <p className="text-slate-600">Click on preferred date (green = available)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Select Time</h4>
                    <p className="text-slate-600">Choose from 9am-5pm slots (gray = booked)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Enter Details</h4>
                    <p className="text-slate-600">Add name, email, phone, questions/notes</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Confirm Booking</h4>
                    <p className="text-slate-600">Review details, click confirm</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">✓</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Confirmation Email</h4>
                    <p className="text-slate-600">Automatic calendar invite sent to client email</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Notes */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Technical Implementation Notes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-slate-900 mb-4">Client Portal</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>✓ Built with Next.js/React</li>
                <li>✓ Demo login (any credentials)</li>
                <li>✓ Sample client data hard-coded</li>
                <li>✓ Production: Connect to Supabase</li>
                <li>✓ RLS (row-level security) for safety</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-4">Intake Form</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>✓ 4-step guided form</li>
                <li>✓ Progress indicator</li>
                <li>✓ Form validation on submit</li>
                <li>✓ Production: Send to Supabase</li>
                <li>✓ Auto-email to admin + client</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-4">Scheduling</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>✓ Calendar picker (30 days)</li>
                <li>✓ Time slot availability</li>
                <li>✓ Mock booked slots (demo)</li>
                <li>✓ Production: Calendly API or custom</li>
                <li>✓ Auto-confirmation email</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-4">Production Roadmap</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>✓ Supabase for database</li>
                <li>✓ Auth0 or Clerk for login</li>
                <li>✓ Resend for email service</li>
                <li>✓ Calendly or custom booking</li>
                <li>✓ Document upload/storage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-slate-950 text-slate-400 py-8 border-t border-amber-600/30 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2026 Bainbridge Law. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
