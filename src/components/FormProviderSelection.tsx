'use client'
import type { FormData } from '@/lib/types'

interface Props {
  data: FormData
  onChange: (field: keyof FormData, value: string | boolean) => void
}

const JUSTIFICATIONS = [
  { key: 'tp_justifyProximity' as keyof FormData, label: 'Proximity to my home' },
  { key: 'tp_justifyUIDuration' as keyof FormData, label: 'Training duration coincides with UI benefits, including ABT.' },
  { key: 'tp_justifyFrequency' as keyof FormData, label: 'Frequency of training program start dates.' },
  { key: 'tp_justifyOccupational' as keyof FormData, label: 'Training course content meets my occupational needs.' },
  { key: 'tp_justifyFamilyCare' as keyof FormData, label: 'Family care needs can be satisfied during training more easily.' },
  { key: 'tp_justifyPlacementRecord' as keyof FormData, label: 'Provider placement record.' },
  { key: 'tp_justifyOther' as keyof FormData, label: 'Other.' },
]

const g2: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1rem' }
const mt: React.CSSProperties = { marginTop: '1rem' }

export default function FormProviderSelection({ data, onChange }: Props) {
  return (
    <div>
      <div className="form-section">
        <h3 className="section-title">Selected Training Provider Information</h3>
        <div><label className="form-label">Name</label><input className="form-input" placeholder="Provider name" value={data.tp_providerName} onChange={e => onChange('tp_providerName', e.target.value)} /></div>
        <div style={mt}><label className="form-label">Address</label><input className="form-input" placeholder="Full address" value={data.tp_providerAddress} onChange={e => onChange('tp_providerAddress', e.target.value)} /></div>
        <div style={mt}><label className="form-label">Training Program</label><input className="form-input" placeholder="Program name" value={data.tp_trainingProgram} onChange={e => onChange('tp_trainingProgram', e.target.value)} /></div>
        <div style={mt}><label className="form-label">Credential Attained</label><input className="form-input" placeholder="Credential" value={data.tp_credentialAttained} onChange={e => onChange('tp_credentialAttained', e.target.value)} /></div>
      </div>

      <div className="form-section">
        <h3 className="section-title">Selection Justification</h3>
        <p style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '1rem', fontStyle: 'italic' }}>
          Please specify why you selected the above training (check as appropriate):
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {JUSTIFICATIONS.map(({ key, label }) => (
            <label key={key} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', cursor: 'pointer' }}>
              <input type="checkbox" className="form-checkbox" style={{ marginTop: '0.1rem' }}
                checked={data[key] as boolean} onChange={e => onChange(key, e.target.checked)} />
              <span style={{ fontSize: '0.875rem', color: '#374151', lineHeight: 1.5 }}>{label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="form-section">
        <h3 className="section-title">Other Training Provider(s) Visited / Contacted</h3>
        <div>
          <label className="form-label">I visited / contacted __ other training provider(s)</label>
          <input className="form-input" placeholder="Number of providers" value={data.tp_otherProvidersCount} onChange={e => onChange('tp_otherProvidersCount', e.target.value)} />
        </div>
        <div style={{ ...g2, ...mt }}>
          <div><label className="form-label">{"Training Provider's Name"}</label><input className="form-input" placeholder="Provider name" value={data.tp_otherProviderName} onChange={e => onChange('tp_otherProviderName', e.target.value)} /></div>
          <div><label className="form-label">{"Training Provider's Representative"}</label><input className="form-input" placeholder="Rep name" value={data.tp_otherProviderRep} onChange={e => onChange('tp_otherProviderRep', e.target.value)} /></div>
          <div><label className="form-label">Date of Visit</label><input className="form-input" type="date" value={data.tp_otherProviderDateVisit} onChange={e => onChange('tp_otherProviderDateVisit', e.target.value)} /></div>
          <div><label className="form-label">Time of Visit</label><input className="form-input" type="time" value={data.tp_otherProviderTimeVisit} onChange={e => onChange('tp_otherProviderTimeVisit', e.target.value)} /></div>
        </div>
      </div>

      <div className="form-section">
        <h3 className="section-title">Customer &amp; TDS Signatures</h3>
        <div style={g2}>
          <div><label className="form-label">{"Customer's Name"}</label><input className="form-input" placeholder="Full name" value={data.tp_customerName} onChange={e => onChange('tp_customerName', e.target.value)} /></div>
          <div><label className="form-label">{"Customer's Signature (type full name)"}</label><input className="form-input" placeholder="Type full name as signature" value={data.tp_customerSignature} onChange={e => onChange('tp_customerSignature', e.target.value)} /></div>
          <div><label className="form-label">Talent Development Specialist – Date</label><input className="form-input" type="date" value={data.tp_tdsDate} onChange={e => onChange('tp_tdsDate', e.target.value)} /></div>
        </div>
      </div>
    </div>
  )
}
