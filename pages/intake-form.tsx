'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function IntakeForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    // Step 2: Matter Details
    matterType: '',
    description: '',
    urgency: '',
    // Step 3: Property Details
    propertyAddress: '',
    propertyType: '',
    transactionValue: '',
    // Step 4: Additional
    prevAttorney: '',
    timeline: '',
    confidentialInfo: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setCurrentStep(1)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        matterType: '',
        description: '',
        urgency: '',
        propertyAddress: '',
        propertyType: '',
        transactionValue: '',
        prevAttorney: '',
        timeline: '',
        confidentialInfo: ''
      })
      setSubmitted(false)
    }, 3000)
  }

  const steps = [
    { number: 1, title: 'Your Information', description: 'Contact details' },
    { number: 2, title: 'Matter Details', description: 'Case description' },
    { number: 3, title: 'Property Information', description: 'Transaction details' },
    { number: 4, title: 'Additional Details', description: 'Final questions' }
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
          <Link href="/demo" className="text-slate-300 hover:text-amber-400 font-medium transition-colors">
            Back to Demo
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-2">Client Intake Form</h2>
          <p className="text-slate-600">Tell us about your legal matter. This information helps us understand your needs and provide better service.</p>
        </div>

        {/* Step Indicator */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            {steps.map((step, idx) => (
              <div key={step.number} className="flex items-center flex-1">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                    step.number === currentStep
                      ? 'bg-amber-500 text-slate-900 shadow-lg scale-110'
                      : step.number < currentStep
                      ? 'bg-green-500 text-white'
                      : 'bg-slate-300 text-slate-700'
                  }`}
                >
                  {step.number < currentStep ? '✓' : step.number}
                </div>
                {idx < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 transition-all ${
                      step.number < currentStep ? 'bg-green-500' : 'bg-slate-300'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900">{steps[currentStep - 1].title}</h3>
            <p className="text-slate-600 mt-1">{steps[currentStep - 1].description}</p>
          </div>
        </div>

        {submitted && (
          <div className="mb-8 p-6 bg-green-50 border border-green-300 rounded-2xl">
            <p className="text-green-900 font-semibold">✓ Intake form submitted successfully!</p>
            <p className="text-green-800 text-sm mt-2">We'll review your information and contact you within 24 hours to schedule a consultation.</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                  placeholder="john@example.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                    placeholder="(202) 555-0147"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company/Entity Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                    placeholder="Your Company, Inc."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Matter Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Type of Legal Matter *</label>
                <select
                  name="matterType"
                  value={formData.matterType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  <option value="">Select a matter type</option>
                  <option value="commercial-purchase">Commercial Real Estate Purchase</option>
                  <option value="commercial-sale">Commercial Real Estate Sale</option>
                  <option value="lease-negotiation">Lease Negotiation</option>
                  <option value="title-escrow">Title & Escrow</option>
                  <option value="refinance">Refinancing</option>
                  <option value="dispute">Commercial Dispute/Litigation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Describe Your Matter *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                  placeholder="Please provide details about your legal matter..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Urgency Level *</label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  <option value="">Select urgency</option>
                  <option value="routine">Routine - No deadline</option>
                  <option value="moderate">Moderate - Few weeks</option>
                  <option value="urgent">Urgent - Days/weeks</option>
                  <option value="critical">Critical - Immediate</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 3: Property Information */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Property Address</label>
                <input
                  type="text"
                  name="propertyAddress"
                  value={formData.propertyAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                  placeholder="123 Business Park Drive, Washington, DC"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Property Type</label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  <option value="">Select property type</option>
                  <option value="office">Office Building</option>
                  <option value="retail">Retail Space</option>
                  <option value="industrial">Industrial/Warehouse</option>
                  <option value="mixed-use">Mixed-Use</option>
                  <option value="apartment">Apartment/Residential</option>
                  <option value="land">Land</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Estimated Transaction Value</label>
                <input
                  type="text"
                  name="transactionValue"
                  value={formData.transactionValue}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                  placeholder="$1,500,000"
                />
              </div>
            </div>
          )}

          {/* Step 4: Additional Details */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Do you currently have legal representation?</label>
                <select
                  name="prevAttorney"
                  value={formData.prevAttorney}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="undecided">Undecided</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Timeline for Resolution</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  <option value="">Select timeline</option>
                  <option value="flexible">Flexible - No specific deadline</option>
                  <option value="30days">30 days</option>
                  <option value="60days">60 days</option>
                  <option value="90days">90 days</option>
                  <option value="asap">ASAP</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Is there any confidential information we should know?</label>
                <textarea
                  name="confidentialInfo"
                  value={formData.confidentialInfo}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                  placeholder="Optional..."
                ></textarea>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-900">
                  <span className="font-semibold">Privacy Note:</span> All information provided is confidential and protected by attorney-client privilege.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between items-center">
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="px-6 py-3 bg-slate-200 text-slate-900 font-bold rounded-lg hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              ← Back
            </button>

            <div className="text-sm text-slate-600">
              Step {currentStep} of 4
            </div>

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
              >
                Next →
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors"
              >
                Submit Form
              </button>
            )}
          </div>
        </form>
      </div>

      <footer className="bg-slate-950 text-slate-400 py-8 border-t border-amber-600/30 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2026 Bainbridge Law. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
