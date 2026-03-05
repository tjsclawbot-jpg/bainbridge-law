'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

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
            <Link href="/contact" className="text-slate-300 hover:text-amber-400 font-medium transition-colors text-amber-400 border-b-2 border-amber-400">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h2>
        <p className="text-slate-600 text-lg mb-12">Let's discuss your commercial real estate transaction</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
            <div className="text-3xl mb-3">📞</div>
            <h3 className="font-bold text-slate-900 mb-2">Phone</h3>
            <p className="text-slate-600">(202) 555-0147</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-bold text-slate-900 mb-2">Email</h3>
            <p className="text-slate-600">hello@bainbridgelaw.com</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-bold text-slate-900 mb-2">Address</h3>
            <p className="text-slate-600">Washington, DC<br/>Maryland & Virginia</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-2xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
          
          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-700 font-medium">Thank you for reaching out! We'll review your inquiry and be in touch shortly.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                placeholder="Your full name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                  placeholder="(202) 555-0147"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
              >
                <option value="">Select a subject</option>
                <option value="purchase">Commercial Purchase</option>
                <option value="sale">Commercial Sale</option>
                <option value="refinance">Refinancing</option>
                <option value="lease">Lease Negotiation</option>
                <option value="title">Title & Escrow</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                placeholder="Tell us about your transaction..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
            >
              Send Message
            </button>
          </form>
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
