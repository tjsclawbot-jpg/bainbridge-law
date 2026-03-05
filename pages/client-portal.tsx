'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ClientPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Demo: any email/password works
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setEmail('')
    setPassword('')
  }

  // Sample client data
  const clientData = {
    name: 'Sarah Mitchell',
    email: 'sarah.mitchell@example.com',
    company: 'Mitchell Real Estate Ventures',
    phone: '(202) 555-0147',
    caseStatus: 'Active',
    caseStartDate: '2025-11-15',
    matterNumber: 'MRV-2025-001'
  }

  const cases = [
    {
      id: 'MRV-2025-001',
      title: 'Commercial Office Building Acquisition',
      status: 'In Progress',
      statusColor: 'bg-blue-100 text-blue-800',
      progress: 65,
      description: 'Purchase and lease negotiations for 15,000 sq ft office complex in Rosslyn',
      startDate: '2025-11-15',
      estimatedClose: '2026-02-28',
      nextMilestone: 'Title clearance review - Due Feb 10'
    }
  ]

  const documents = [
    { id: 1, name: 'Purchase Agreement - Final Draft.pdf', type: 'Contract', date: '2026-02-28', size: '2.4 MB' },
    { id: 2, name: 'Title Report - Preliminary.pdf', type: 'Legal', date: '2026-02-25', size: '1.8 MB' },
    { id: 3, name: 'Due Diligence Checklist.pdf', type: 'Checklist', date: '2026-02-20', size: '856 KB' },
    { id: 4, name: 'Environmental Phase 1 Report.pdf', type: 'Report', date: '2026-02-18', size: '3.2 MB' },
    { id: 5, name: 'Lease Analysis Summary.pdf', type: 'Analysis', date: '2026-02-15', size: '1.1 MB' }
  ]

  const timeline = [
    { phase: 'Initial Consultation', status: '✓ Complete', date: 'Nov 15, 2025' },
    { phase: 'Due Diligence', status: '✓ Complete', date: 'Dec 20, 2025' },
    { phase: 'Negotiation & Drafting', status: '→ In Progress', date: 'Jan 15 - Feb 15' },
    { phase: 'Title Clearance', status: 'Pending', date: 'Feb 10 - Feb 25' },
    { phase: 'Final Review & Closing', status: 'Pending', date: 'Feb 26 - Feb 28' }
  ]

  if (!isLoggedIn) {
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
              Back to Main Site
            </Link>
          </div>
        </nav>

        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Client Portal</h2>
                <p className="text-slate-600">Secure access to your case information</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-slate-600 hover:text-slate-900"
                    >
                      {showPassword ? '🙈' : '👁️'}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-center text-sm text-slate-600">
                  <span className="font-medium">Demo Mode:</span> Use any email and password to log in
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

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
          <div className="flex items-center gap-6">
            <Link href="/demo" className="text-slate-300 hover:text-amber-400 font-medium transition-colors">
              Back to Demo
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-2">Welcome, {clientData.name}</h2>
          <p className="text-slate-600">{clientData.company}</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p className="text-sm text-slate-600 mb-1">Active Cases</p>
            <p className="text-3xl font-bold text-slate-900">1</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p className="text-sm text-slate-600 mb-1">Progress</p>
            <p className="text-3xl font-bold text-amber-600">65%</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p className="text-sm text-slate-600 mb-1">Documents</p>
            <p className="text-3xl font-bold text-slate-900">{documents.length}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p className="text-sm text-slate-600 mb-1">Est. Closing</p>
            <p className="text-lg font-bold text-slate-900">Feb 28, 2026</p>
          </div>
        </div>

        {/* Cases Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Your Cases</h3>
          {cases.map((case_) => (
            <div key={case_.id} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-slate-900">{case_.title}</h4>
                  <p className="text-sm text-slate-600 mt-1">{case_.description}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${case_.statusColor}`}>
                  {case_.status}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">Progress</span>
                  <span className="text-sm font-bold text-slate-900">{case_.progress}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-amber-500 to-amber-600 h-3 rounded-full transition-all"
                    style={{ width: `${case_.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Case Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-slate-600 mb-1">Case Number</p>
                  <p className="font-semibold text-slate-900">{case_.id}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-1">Start Date</p>
                  <p className="font-semibold text-slate-900">{case_.startDate}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-1">Est. Closing</p>
                  <p className="font-semibold text-slate-900">{case_.estimatedClose}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-1">Next Milestone</p>
                  <p className="font-semibold text-slate-900 text-sm">{case_.nextMilestone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Case Timeline</h3>
          <div className="space-y-4">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full ${item.status.includes('✓') ? 'bg-green-500' : item.status.includes('→') ? 'bg-amber-500' : 'bg-slate-300'}`}></div>
                  {idx < timeline.length - 1 && <div className="w-1 h-12 bg-slate-200 mt-2"></div>}
                </div>
                <div className="pt-1">
                  <p className="font-semibold text-slate-900">{item.phase}</p>
                  <p className={`text-sm ${item.status.includes('✓') ? 'text-green-600' : item.status.includes('→') ? 'text-amber-600' : 'text-slate-600'}`}>
                    {item.status}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documents */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Case Documents</h3>
          <div className="space-y-3">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all">
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">{doc.name}</p>
                  <p className="text-xs text-slate-600 mt-1">{doc.type} • {doc.date} • {doc.size}</p>
                </div>
                <button className="px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors">
                  Download
                </button>
              </div>
            ))}
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
