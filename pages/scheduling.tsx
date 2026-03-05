'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Scheduling() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [step, setStep] = useState<'calendar' | 'time' | 'details' | 'confirmation'>('calendar')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  })
  const [confirmed, setConfirmed] = useState(false)

  // Generate next 30 days
  const today = new Date()
  const dates = Array.from({ length: 30 }, (_, i) => {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    return date
  })

  // Available times (9 AM - 5 PM, 1 hour slots)
  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ]

  // Mock: Some slots already booked
  const bookedSlots: { [key: string]: string[] } = {
    [new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]]: ['9:00 AM', '2:00 PM'],
    [new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]]: ['10:00 AM', '1:00 PM', '3:00 PM'],
  }

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date.toISOString().split('T')[0])
    setSelectedTime(null)
    setStep('time')
  }

  const isTimeBooked = (dateStr: string, time: string) => {
    return bookedSlots[dateStr]?.includes(time) || false
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setStep('details')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleConfirm = () => {
    setConfirmed(true)
    setStep('confirmation')
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + 'T00:00:00')
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
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
          <Link href="/demo" className="text-slate-300 hover:text-amber-400 font-medium transition-colors">
            Back to Demo
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-2">Schedule Your Consultation</h2>
          <p className="text-slate-600">Book a 60-minute consultation with our principal attorney</p>
        </div>

        {/* Step Indicator */}
        <div className="mb-12 flex justify-between items-center">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${formData.name ? 'bg-green-500 text-white' : 'bg-amber-500 text-slate-900'}`}>
              1
            </div>
            <div className="ml-3">
              <p className="font-semibold text-slate-900">Date</p>
              <p className="text-sm text-slate-600">Select date</p>
            </div>
          </div>
          <div className={`flex-1 h-1 mx-4 ${step !== 'calendar' ? 'bg-green-500' : 'bg-slate-300'}`}></div>
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step === 'time' || (step === 'details' && selectedTime) ? 'bg-amber-500 text-slate-900' : step === 'confirmation' ? 'bg-green-500 text-white' : 'bg-slate-300 text-slate-700'}`}>
              2
            </div>
            <div className="ml-3">
              <p className="font-semibold text-slate-900">Time</p>
              <p className="text-sm text-slate-600">Select time</p>
            </div>
          </div>
          <div className={`flex-1 h-1 mx-4 ${step === 'details' || step === 'confirmation' ? 'bg-green-500' : 'bg-slate-300'}`}></div>
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step === 'details' || step === 'confirmation' ? step === 'confirmation' ? 'bg-green-500 text-white' : 'bg-amber-500 text-slate-900' : 'bg-slate-300 text-slate-700'}`}>
              3
            </div>
            <div className="ml-3">
              <p className="font-semibold text-slate-900">Details</p>
              <p className="text-sm text-slate-600">Your info</p>
            </div>
          </div>
        </div>

        {confirmed && (
          <div className="mb-8 p-6 bg-green-50 border border-green-300 rounded-2xl">
            <p className="text-green-900 font-semibold">✓ Consultation Scheduled!</p>
            <p className="text-green-800 text-sm mt-2">Confirmation email has been sent to {formData.email}. We look forward to speaking with you.</p>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          {/* Step 1: Calendar */}
          {step === 'calendar' && (
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Select a Date</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {dates.map((date) => {
                  const dateStr = date.toISOString().split('T')[0]
                  const isSelected = selectedDate === dateStr
                  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' })
                  const dayNum = date.getDate()

                  return (
                    <button
                      key={dateStr}
                      onClick={() => handleDateSelect(date)}
                      className={`p-4 rounded-lg border-2 transition-all text-center ${
                        isSelected
                          ? 'bg-amber-500 border-amber-600 text-slate-900 shadow-lg scale-105'
                          : 'bg-white border-slate-200 text-slate-900 hover:border-amber-400'
                      }`}
                    >
                      <p className="font-semibold">{dayOfWeek}</p>
                      <p className="text-2xl font-bold">{dayNum}</p>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Step 2: Time Selection */}
          {step === 'time' && selectedDate && (
            <div>
              <button
                onClick={() => setStep('calendar')}
                className="mb-6 text-slate-600 hover:text-slate-900 font-medium flex items-center gap-2"
              >
                ← Change date
              </button>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Select a Time</h3>
              <p className="text-slate-600 mb-6">{formatDate(selectedDate)}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {availableTimes.map((time) => {
                  const isBooked = isTimeBooked(selectedDate, time)
                  const isSelected = selectedTime === time

                  return (
                    <button
                      key={time}
                      onClick={() => !isBooked && handleTimeSelect(time)}
                      disabled={isBooked}
                      className={`p-4 rounded-lg border-2 transition-all font-semibold ${
                        isSelected
                          ? 'bg-amber-500 border-amber-600 text-slate-900 shadow-lg'
                          : isBooked
                          ? 'bg-slate-100 border-slate-300 text-slate-400 cursor-not-allowed'
                          : 'bg-white border-slate-200 text-slate-900 hover:border-amber-400'
                      }`}
                    >
                      {time}
                      {isBooked && <span className="block text-xs mt-1">Booked</span>}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Step 3: Contact Details */}
          {step === 'details' && selectedDate && selectedTime && (
            <div>
              <button
                onClick={() => setStep('time')}
                className="mb-6 text-slate-600 hover:text-slate-900 font-medium flex items-center gap-2"
              >
                ← Change time
              </button>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Your Information</h3>

              {/* Summary Box */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-amber-900">
                  <span className="font-semibold">Scheduled:</span> {formatDate(selectedDate)} at {selectedTime}
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                      placeholder="(202) 555-0147"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Questions or Special Requests</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                    placeholder="Any specific topics you'd like to discuss?"
                  ></textarea>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold">60-minute consultation</span> - No charge for initial consultation
                  </p>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep('time')}
                    className="flex-1 px-6 py-3 bg-slate-200 text-slate-900 font-bold rounded-lg hover:bg-slate-300 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleConfirm}
                    className="flex-1 px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Confirm Consultation
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 'confirmation' && (
            <div className="text-center">
              <div className="text-6xl mb-4">✓</div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">Consultation Confirmed!</h3>
              <p className="text-slate-600 mb-8">Thank you for scheduling with us</p>

              <div className="bg-slate-50 rounded-lg p-6 mb-8 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Date & Time</p>
                    <p className="font-bold text-slate-900">{formatDate(selectedDate!)} at {selectedTime}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Confirmation Sent To</p>
                    <p className="font-bold text-slate-900">{formData.email}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-left">
                  <span className="text-green-600">✓</span>
                  <p className="text-slate-700">Confirmation email sent with calendar invite</p>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <span className="text-green-600">✓</span>
                  <p className="text-slate-700">We'll call you at {formData.phone} at the scheduled time</p>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <span className="text-green-600">✓</span>
                  <p className="text-slate-700">No charge for initial 60-minute consultation</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/demo"
                  className="flex-1 px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Back to Demo
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 px-6 py-3 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Legend */}
        {step === 'time' && (
          <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-lg">
            <p className="text-sm text-slate-700"><span className="font-semibold">Green slots:</span> Available</p>
            <p className="text-sm text-slate-700"><span className="font-semibold">Gray slots:</span> Already booked</p>
          </div>
        )}
      </div>

      <footer className="bg-slate-950 text-slate-400 py-8 border-t border-amber-600/30 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2026 Bainbridge Law. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
