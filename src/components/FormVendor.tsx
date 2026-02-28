"use client";
import type { FormData } from "@/lib/types";

interface Props {
  data: FormData;
  onChange: (field: keyof FormData, value: string | boolean) => void;
}

const VENDOR_ACTIONS = [
  {
    key: "vf_initials1" as keyof FormData,
    label:
      "Review and forward to TDS / Case Manager all information pertaining to customer eligibility for other forms of funding.",
  },
  {
    key: "vf_initials2" as keyof FormData,
    label:
      "Agree to forward completely filled out timesheets, progress reports, problems, a copy of the student's nationally recognized credential and updated resume. Timesheets and progress report must be submitted every two weeks into the BHI One-Stop Career Center.",
  },
  {
    key: "vf_initials3" as keyof FormData,
    label:
      "Agree to forward the final timesheets, progress report, credential along with the invoice to the Talent Development Specialist. NO PAYMENT WILL BE MADE UNLESS BOTH DOCUMENTS ARE PROVIDED THROUGH THIS CHANNEL.",
  },
  {
    key: "vf_initials4" as keyof FormData,
    label:
      "No student is to start classes until a contract has been executed. VENDOR WON'T GET PAID UNLESS YOU HAVE A CON# SIGNED BY AN AUTHORIZED SIGNATURE.",
  },
  {
    key: "vf_initials5" as keyof FormData,
    label:
      "Placement is to be forwarded to follow-up specialist. Payment will be made upon verification through this channel only.",
  },
  {
    key: "vf_initials6" as keyof FormData,
    label:
      "Assist in the follow-up for a period of no less than six months and assist in securing employment information.",
  },
];

const g2: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2,1fr)",
  gap: "1rem",
};
const mt: React.CSSProperties = { marginTop: "1rem" };

export default function FormVendor({ data, onChange }: Props) {
  return (
    <div>
      <div className="form-section">
        <h3 className="section-title">Vendor Basic Information</h3>
        <div style={g2}>
          <div>
            <label className="form-label">Name</label>
            <input
              className="form-input"
              placeholder="Full name"
              value={data.vf_name}
              onChange={(e) => onChange("vf_name", e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">NJ#</label>
            <input
              className="form-input"
              placeholder="NJ number"
              value={data.vf_njNumber}
              onChange={(e) => onChange("vf_njNumber", e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Vendor</label>
            <input
              className="form-input"
              placeholder="Vendor name"
              value={data.vf_vendor}
              onChange={(e) => onChange("vf_vendor", e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Last 4 of SS#</label>
            <input
              className="form-input"
              placeholder="XXXX"
              maxLength={4}
              value={data.vf_last4SS}
              onChange={(e) => onChange("vf_last4SS", e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Course</label>
            <input
              className="form-input"
              placeholder="Course name"
              value={data.vf_course}
              onChange={(e) => onChange("vf_course", e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Credential</label>
            <input
              className="form-input"
              placeholder="Credential"
              value={data.vf_credential}
              onChange={(e) => onChange("vf_credential", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3 className="section-title">
          Vendor Agreement – Prior to Student Attending
        </h3>
        <p
          style={{
            fontSize: "0.75rem",
            color: "#6b7280",
            marginBottom: "1rem",
            fontStyle: "italic",
          }}
        >
          This document must be completed by the Talent Development Specialist
          and Vendor, attached to the contract and signed by both parties before
          any contract commitment will be signed by BHI One-Stop Career Center.
        </p>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          {VENDOR_ACTIONS.map((action, idx) => (
            <div
              key={action.key}
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
                border: "1px solid #f3f4f6",
                borderRadius: "0.25rem",
                padding: "0.75rem",
                background: "#f9fafb",
              }}
            >
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontSize: "0.825rem",
                    color: "#374151",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: "#132d58" }}>{idx + 1}. </strong>
                  {action.label}
                </p>
              </div>
              <div style={{ flexShrink: 0, textAlign: "center" }}>
                <label className="form-label" style={{ textAlign: "center" }}>
                  Initials
                </label>
                <input
                  className="form-input"
                  style={{
                    width: "5rem",
                    textAlign: "center",
                    fontFamily: "monospace",
                    letterSpacing: "0.1em",
                  }}
                  placeholder="___"
                  maxLength={5}
                  value={data[action.key] as string}
                  onChange={(e) => onChange(action.key, e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="form-section">
        <h3 className="section-title">Signatures</h3>
        <div style={g2}>
          <div style={{ gridColumn: "span 1" }}>
            <label className="form-label">Signature / Title</label>
            <input
              className="form-input"
              placeholder="Name and title"
              value={data.vf_signatureTitle}
              onChange={(e) => onChange("vf_signatureTitle", e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Date</label>
            <input
              className="form-input"
              type="date"
              value={data.vf_signatureDate}
              onChange={(e) => onChange("vf_signatureDate", e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">
              Career Advisor Signature (Name)
            </label>
            <input
              className="form-input"
              placeholder="Career advisor name"
              value={data.vf_careerAdvisorDate}
              onChange={(e) => onChange("vf_careerAdvisorDate", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
