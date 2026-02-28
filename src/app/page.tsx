'use client'
import { useState } from 'react'
import type { FormData } from '@/lib/types'
import { defaultFormData } from '@/lib/types'
import { exportToExcel } from '@/lib/exportExcel'
import FormITA from '@/components/FormITA'
import FormVendor from '@/components/FormVendor'
import FormSchoolVisit from '@/components/FormSchoolVisit'
import FormProviderSelection from '@/components/FormProviderSelection'

const STEPS = [
  { id: 1, title: 'ITA Program Description', subtitle: 'Individual Training Account' },
  { id: 2, title: 'Vendor Form', subtitle: 'BHI One-Stop Career Center' },
  { id: 3, title: 'School Visit Checklist', subtitle: 'Contact & Visit Record' },
  { id: 4, title: 'Provider Selection', subtitle: 'Training Provider Form' },
]

export default function Home() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(defaultFormData)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleExport = () => {
    exportToExcel(formData)
    setSubmitted(true)
  }

  const handleReset = () => {
    setFormData(defaultFormData)
    setStep(1)
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '28rem' }}>
          <div style={{
            width: '5rem', height: '5rem', background: '#dcfce7', borderRadius: '9999px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem'
          }}>
            <svg style={{ width: '2.5rem', height: '2.5rem' }} fill="none" viewBox="0 0 24 24" stroke="#16a34a">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0e2244', marginBottom: '0.5rem' }}>Forms Exported!</h2>
          <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
            Your Excel file has been downloaded with all 4 form sheets. Check your downloads folder.
          </p>
          <button onClick={handleReset} className="btn-primary">
            Start New Submission
          </button>
        </div>
      </div>
    )
  }

  const currentStep = STEPS.find(s => s.id === step)!
  const progress = (step / STEPS.length) * 100

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)' }}>
      {/* Header */}
      <header style={{ background: '#0e2244', color: 'white', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '1.25rem 1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '3rem', height: '3rem', background: '#f0b429', borderRadius: '9999px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#091830', fontWeight: 800, fontSize: '1rem', flexShrink: 0
          }}>BHI</div>
          <div>
            <h1 style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '0.03em', lineHeight: 1.2, margin: 0 }}>
             Bright Horizon Institute
            </h1>
            <p style={{ fontSize: '0.7rem', color: '#bfdbfe', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0.2rem 0 0' }}>
              Individual Training Account — Program Forms
            </p>
          </div>
        </div>
      </header>

      {/* Progress bar */}
      <div style={{ height: '4px', background: '#e5e7eb' }}>
        <div style={{ height: '100%', background: '#f0b429', width: `${progress}%`, transition: 'width 0.5s ease' }} />
      </div>

      <main style={{ maxWidth: '56rem', margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Step indicators */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
          {STEPS.map((s, idx) => (
            <div key={s.id} style={{ display: 'flex', alignItems: 'center' }}>
              <button
                onClick={() => setStep(s.id)}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem', background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem' }}
              >
                <div className="step-indicator" style={{
                  background: step === s.id ? '#132d58' : step > s.id ? '#22c55e' : '#e5e7eb',
                  color: step === s.id || step > s.id ? 'white' : '#6b7280',
                  boxShadow: step === s.id ? '0 0 0 4px rgba(26,58,110,0.15)' : 'none',
                }}>
                  {step > s.id ? (
                    <svg style={{ width: '1rem', height: '1rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : s.id}
                </div>
                <span style={{
                  fontSize: '0.65rem', fontWeight: 700, textAlign: 'center', maxWidth: '5.5rem',
                  lineHeight: 1.3, color: step === s.id ? '#132d58' : '#9ca3af',
                }}>
                  {s.title}
                </span>
              </button>
              {idx < STEPS.length - 1 && (
                <div style={{
                  width: '3rem', height: '2px', margin: '0 0.25rem', marginBottom: '1.2rem',
                  background: step > s.id ? '#86efac' : '#e5e7eb',
                  transition: 'background 0.3s',
                  flexShrink: 0,
                }} />
              )}
            </div>
          ))}
        </div>

        {/* Form header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#e09a10', marginBottom: '0.25rem' }}>
            Form {step} of {STEPS.length}
          </p>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#091830', margin: '0 0 0.2rem' }}>{currentStep.title}</h2>
          <p style={{ fontSize: '0.85rem', color: '#6b7280', margin: 0 }}>{currentStep.subtitle}</p>
        </div>

        {/* Form content */}
        <div>
          {step === 1 && <FormITA data={formData} onChange={handleChange} />}
          {step === 2 && <FormVendor data={formData} onChange={handleChange} />}
          {step === 3 && <FormSchoolVisit data={formData} onChange={handleChange} />}
          {step === 4 && <FormProviderSelection data={formData} onChange={handleChange} />}
        </div>

        {/* Navigation */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #e5e7eb'
        }}>
          <button
            onClick={() => setStep(s => Math.max(1, s - 1))}
            disabled={step === 1}
            className="btn-secondary"
          >
            ← Previous
          </button>

          <span style={{ fontSize: '0.7rem', color: '#9ca3af', fontFamily: 'monospace' }}>
            {step} / {STEPS.length}
          </span>

          {step < STEPS.length ? (
            <button onClick={() => setStep(s => s + 1)} className="btn-primary">
              Next →
            </button>
          ) : (
            <button onClick={handleExport} className="btn-gold">
              <svg style={{ width: '1rem', height: '1rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export to Excel
            </button>
          )}
        </div>
      </main>
    </div>
  )
}
