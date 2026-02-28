'use client'
import type { FormData } from '@/lib/types'

interface Props {
  data: FormData
  onChange: (field: keyof FormData, value: string | boolean) => void
}

const g2: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1rem' }
const g3: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }
const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginTop: '0.5rem' }
const chkLabel: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.875rem' }

function Q({ num, text, children }: { num: number; text: string; children?: React.ReactNode }) {
  return (
    <div style={{ paddingBottom: '1.25rem', borderBottom: '1px solid #f3f4f6' }}>
      <p style={{ fontWeight: 700, fontSize: '0.875rem', color: '#0e2244', marginBottom: '0.5rem' }}>
        {num}. {text}
      </p>
      {children}
    </div>
  )
}

export default function FormSchoolVisit({ data, onChange }: Props) {
  return (
    <div>
      <div style={{ background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: '0.375rem', padding: '0.75rem', fontSize: '0.75rem', color: '#92400e', lineHeight: 1.6, marginBottom: '1.5rem' }}>
        Each student is responsible for completing, signing and dating this form. Data must be obtained through your communication or visitation with the school or provider, <strong>but they are not to complete the form for you.</strong> You are required to visit and/or contact three (3) schools before making your final selection.
      </div>

      <div className="form-section">
        <h3 className="section-title">School / Contact Information</h3>
        <div style={g2}>
          <div><label className="form-label">Name of School</label><input className="form-input" placeholder="School name" value={data.sv_nameOfSchool} onChange={e => onChange('sv_nameOfSchool', e.target.value)} /></div>
          <div><label className="form-label">Date of Contact</label><input className="form-input" type="date" value={data.sv_dateOfContact} onChange={e => onChange('sv_dateOfContact', e.target.value)} /></div>
          <div><label className="form-label">Training Course</label><input className="form-input" placeholder="Course name" value={data.sv_trainingCourse} onChange={e => onChange('sv_trainingCourse', e.target.value)} /></div>
          <div><label className="form-label">Website Address</label><input className="form-input" placeholder="https://" value={data.sv_websiteAddress} onChange={e => onChange('sv_websiteAddress', e.target.value)} /></div>
          <div><label className="form-label">Expected Credential</label><input className="form-input" placeholder="Credential type" value={data.sv_expectedCredential} onChange={e => onChange('sv_expectedCredential', e.target.value)} /></div>
          <div><label className="form-label">Date of Visit by You</label><input className="form-input" type="date" value={data.sv_dateOfVisit} onChange={e => onChange('sv_dateOfVisit', e.target.value)} /></div>
          <div><label className="form-label">Phone Number</label><input className="form-input" placeholder="(555) 000-0000" value={data.sv_phoneNumber} onChange={e => onChange('sv_phoneNumber', e.target.value)} /></div>
          <div><label className="form-label">School Representative</label><input className="form-input" placeholder="Representative name" value={data.sv_schoolRepresentative} onChange={e => onChange('sv_schoolRepresentative', e.target.value)} /></div>
        </div>
      </div>

      <div className="form-section" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <h3 className="section-title">Checklist Questions</h3>

        <Q num={1} text="Are there any prerequisite skills or equipment needed before starting the course?">
          <div style={row}>
            <label style={chkLabel}><input type="checkbox" className="form-checkbox" checked={data.sv_prerequisiteYes} onChange={e => onChange('sv_prerequisiteYes', e.target.checked)} /> Yes</label>
            <label style={chkLabel}><input type="checkbox" className="form-checkbox" checked={data.sv_prerequisiteNo} onChange={e => onChange('sv_prerequisiteNo', e.target.checked)} /> No</label>
          </div>
          <div style={{ marginTop: '0.5rem' }}><label className="form-label">If yes, describe:</label><input className="form-input" placeholder="Describe prerequisites..." value={data.sv_prerequisiteDesc} onChange={e => onChange('sv_prerequisiteDesc', e.target.value)} /></div>
        </Q>

        <Q num={2} text="What are the admission requirements?">
          <div style={row}>
            <label style={chkLabel}><input type="checkbox" className="form-checkbox" checked={data.sv_admissionHighSchool} onChange={e => onChange('sv_admissionHighSchool', e.target.checked)} /> High School</label>
            <label style={chkLabel}><input type="checkbox" className="form-checkbox" checked={data.sv_admissionDiploma} onChange={e => onChange('sv_admissionDiploma', e.target.checked)} /> Diploma</label>
            <label style={chkLabel}><input type="checkbox" className="form-checkbox" checked={data.sv_admissionGED} onChange={e => onChange('sv_admissionGED', e.target.checked)} /> GED</label>
            <label style={chkLabel}><input type="checkbox" className="form-checkbox" checked={data.sv_admissionOther} onChange={e => onChange('sv_admissionOther', e.target.checked)} /> Other</label>
          </div>
          {data.sv_admissionOther && <div style={{ marginTop: '0.5rem' }}><input className="form-input" placeholder="Specify other requirement..." value={data.sv_admissionOtherText} onChange={e => onChange('sv_admissionOtherText', e.target.value)} /></div>}
        </Q>

        <Q num={3} text="How long is the course?">
          <div style={{ ...g3, marginTop: '0.5rem' }}>
            <div><label className="form-label">Hours</label><input className="form-input" placeholder="# Hours" value={data.sv_courseHours} onChange={e => onChange('sv_courseHours', e.target.value)} /></div>
            <div><label className="form-label">Months</label><input className="form-input" placeholder="# Months" value={data.sv_courseMonths} onChange={e => onChange('sv_courseMonths', e.target.value)} /></div>
            <div><label className="form-label">Weeks</label><input className="form-input" placeholder="# Weeks" value={data.sv_courseWeeks} onChange={e => onChange('sv_courseWeeks', e.target.value)} /></div>
          </div>
        </Q>

        <Q num={4} text="What is the daily class schedule?">
          <div style={{ ...g3, marginTop: '0.5rem' }}>
            <div><label className="form-label">From</label><input className="form-input" placeholder="Start time" value={data.sv_scheduleFrom} onChange={e => onChange('sv_scheduleFrom', e.target.value)} /></div>
            <div><label className="form-label">To</label><input className="form-input" placeholder="End time" value={data.sv_scheduleTo} onChange={e => onChange('sv_scheduleTo', e.target.value)} /></div>
            <div><label className="form-label">AM or PM</label>
              <select className="form-input" value={data.sv_scheduleAmPm} onChange={e => onChange('sv_scheduleAmPm', e.target.value)}>
                <option value="">Select...</option>
                <option>AM</option><option>PM</option><option>AM/PM</option>
              </select>
            </div>
          </div>
        </Q>

        <Q num={5} text="Will the schedule change during the course?">
          <div style={row}>
            <label style={chkLabel}><input type="checkbox" className="form-checkbox" checked={data.sv_scheduleChangeYes} onChange={e => onChange('sv_scheduleChangeYes', e.target.checked)} /> Yes</label>
            <label style={chkLabel}><input type="checkbox" className="form-checkbox" checked={data.sv_scheduleChangeNo} onChange={e => onChange('sv_scheduleChangeNo', e.target.checked)} /> No (day, evening, other)</label>
          </div>
          <div style={{ marginTop: '0.5rem' }}><label className="form-label">If yes, when and what will the new schedule be?</label><input className="form-input" placeholder="Describe new schedule..." value={data.sv_newSchedule} onChange={e => onChange('sv_newSchedule', e.target.value)} /></div>
        </Q>

        <Q num={6} text="Does this course offer an internship or work study program?">
          <div style={row}>
            <label style={chkLabel}><input type="checkbox" className="form-checkbox" checked={data.sv_internshipYes} onChange={e => onChange('sv_internshipYes', e.target.checked)} /> Yes</label>
            <label style={chkLabel}><input type="checkbox" className="form-checkbox" checked={data.sv_internshipNo} onChange={e => onChange('sv_internshipNo', e.target.checked)} /> No</label>
          </div>
          <div style={{ marginTop: '0.5rem' }}><label className="form-label">If yes, how long does it last?</label><input className="form-input" placeholder="Duration..." value={data.sv_internshipDuration} onChange={e => onChange('sv_internshipDuration', e.target.value)} /></div>
        </Q>

        <Q num={7} text="Is the equipment the same or nearly the same as the equipment you will use on the job?">
          <div style={row}>
            <label style={chkLabel}><input type="checkbox" className="form-checkbox" checked={data.sv_equipmentSame} onChange={e => onChange('sv_equipmentSame', e.target.checked)} /> Same</label>
            <label style={chkLabel}><input type="checkbox" className="form-checkbox" checked={data.sv_equipmentNearlySame} onChange={e => onChange('sv_equipmentNearlySame', e.target.checked)} /> Nearly the same</label>
            <label style={chkLabel}><input type="checkbox" className="form-checkbox" checked={data.sv_equipmentDifferent} onChange={e => onChange('sv_equipmentDifferent', e.target.checked)} /> Different</label>
          </div>
        </Q>

        <Q num={8} text="Will you be able to practice on the equipment after classes?">
          <div style={row}>
            <label style={chkLabel}><input type="checkbox" className="form-checkbox" checked={data.sv_practiceYes} onChange={e => onChange('sv_practiceYes', e.target.checked)} /> Yes</label>
            <label style={chkLabel}><input type="checkbox" className="form-checkbox" checked={data.sv_practiceNo} onChange={e => onChange('sv_practiceNo', e.target.checked)} /> No</label>
          </div>
        </Q>

        <Q num={9} text="Describe the school's placement assistance process (provide leads, have a placement unit, etc.)">
          <textarea className="form-input" rows={3} placeholder="Describe placement process..." value={data.sv_placementAssistance} onChange={e => onChange('sv_placementAssistance', e.target.value)} style={{ marginTop: '0.25rem' }} />
        </Q>

        <Q num={10} text="How will they assist you with finding employment?">
          <textarea className="form-input" rows={3} placeholder="Describe employment assistance..." value={data.sv_employmentAssistance} onChange={e => onChange('sv_employmentAssistance', e.target.value)} style={{ marginTop: '0.25rem' }} />
        </Q>
      </div>
    </div>
  )
}
