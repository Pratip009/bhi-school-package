"use client";
import type { FormData } from "@/lib/types";

interface Props {
  data: FormData;
  onChange: (field: keyof FormData, value: string | boolean) => void;
}

const DAYS = [
  { key: "ita_daysSun" as keyof FormData, label: "Sun" },
  { key: "ita_daysMon" as keyof FormData, label: "Mon" },
  { key: "ita_daysTues" as keyof FormData, label: "Tues" },
  { key: "ita_daysWed" as keyof FormData, label: "Wed" },
  { key: "ita_daysThurs" as keyof FormData, label: "Thurs" },
  { key: "ita_daysFri" as keyof FormData, label: "Fri" },
  { key: "ita_daysSat" as keyof FormData, label: "Sat" },
];

const g2: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2,1fr)",
  gap: "1rem",
};
const g3: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "1rem",
};
const mt: React.CSSProperties = { marginTop: "1rem" };

export default function FormITA({ data, onChange }: Props) {
  return (
    <div>
      <div className="form-section">
        <h3 className="section-title">Customer Information</h3>
        <div style={g3}>
          <div>
            <label className="form-label">Last Name</label>
            <input
              className="form-input"
              placeholder="Last name"
              value={data.ita_customerLastName}
              onChange={(e) => onChange("ita_customerLastName", e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">First Name</label>
            <input
              className="form-input"
              placeholder="First name"
              value={data.ita_customerFirstName}
              onChange={(e) =>
                onChange("ita_customerFirstName", e.target.value)
              }
            />
          </div>
          <div>
            <label className="form-label">NJ#</label>
            <input
              className="form-input"
              placeholder="NJ number"
              value={data.ita_njNumber}
              onChange={(e) => onChange("ita_njNumber", e.target.value)}
            />
          </div>
        </div>
        <div style={{ ...g2, ...mt }}>
          <div>
            <label className="form-label">Email Address</label>
            <input
              className="form-input"
              type="email"
              placeholder="email@example.com"
              value={data.ita_email}
              onChange={(e) => onChange("ita_email", e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Phone Number</label>
            <input
              className="form-input"
              placeholder="(555) 000-0000"
              value={data.ita_phone}
              onChange={(e) => onChange("ita_phone", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3 className="section-title">Provider Information</h3>
        <div>
          <label className="form-label">Course</label>
          <input
            className="form-input"
            placeholder="Course name"
            value={data.ita_course}
            onChange={(e) => onChange("ita_course", e.target.value)}
          />
        </div>
        <div style={mt}>
          <label className="form-label">Credential</label>
          <input
            className="form-input"
            placeholder="Credential earned"
            value={data.ita_credential}
            onChange={(e) => onChange("ita_credential", e.target.value)}
          />
        </div>
        <div style={{ ...g2, ...mt }}>
          <div>
            <label className="form-label">Length of Training (Weeks)</label>
            <input
              className="form-input"
              placeholder="# Weeks"
              value={data.ita_trainingWeeks}
              onChange={(e) => onChange("ita_trainingWeeks", e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Length of Training (Hours)</label>
            <input
              className="form-input"
              placeholder="# Hours"
              value={data.ita_trainingHours}
              onChange={(e) => onChange("ita_trainingHours", e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Training Start Date</label>
            <input
              className="form-input"
              type="date"
              value={data.ita_trainingStartDate}
              onChange={(e) =>
                onChange("ita_trainingStartDate", e.target.value)
              }
            />
          </div>
          <div>
            <label className="form-label">Training End Date</label>
            <input
              className="form-input"
              type="date"
              value={data.ita_trainingEndDate}
              onChange={(e) => onChange("ita_trainingEndDate", e.target.value)}
            />
          </div>
        </div>
        <div style={mt}>
          <label className="form-label">Days of the Week Training Occurs</label>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginTop: "0.5rem",
            }}
          >
            {DAYS.map(({ key, label }) => (
              <label
                key={key}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={data[key] as boolean}
                  onChange={(e) => onChange(key, e.target.checked)}
                />
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#132d58",
                  }}
                >
                  {label}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div style={{ ...g2, ...mt }}>
          <div>
            <label className="form-label">Training Start Time</label>
            <input
              className="form-input"
              type="time"
              value={data.ita_classStartTime}
              onChange={(e) => onChange("ita_classStartTime", e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Training End Time</label>
            <input
              className="form-input"
              type="time"
              value={data.ita_classEndTime}
              onChange={(e) => onChange("ita_classEndTime", e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Provider Federal ID#</label>
            <input
              className="form-input"
              placeholder="Federal ID"
              value={data.ita_providerFederalId}
              onChange={(e) =>
                onChange("ita_providerFederalId", e.target.value)
              }
            />
          </div>
          <div>
            <label className="form-label">{"Provider's E-mail Address"}</label>
            <input
              className="form-input"
              type="email"
              placeholder="provider@email.com"
              value={data.ita_providerEmail}
              onChange={(e) => onChange("ita_providerEmail", e.target.value)}
            />
          </div>
        </div>
        <div style={mt}>
          <label className="form-label">Eligible Training Provider</label>
          <input
            className="form-input"
            placeholder="Provider name"
            value={data.ita_eligibleTrainingProvider}
            onChange={(e) =>
              onChange("ita_eligibleTrainingProvider", e.target.value)
            }
          />
        </div>
        <div style={mt}>
          <label className="form-label">Training Address Site</label>
          <input
            className="form-input"
            placeholder="Full address"
            value={data.ita_trainingAddressSite}
            onChange={(e) =>
              onChange("ita_trainingAddressSite", e.target.value)
            }
          />
        </div>
        <div style={{ ...g2, ...mt }}>
          <div>
            <label className="form-label">Contact Person</label>
            <input
              className="form-input"
              placeholder="Contact name"
              value={data.ita_contactPerson}
              onChange={(e) => onChange("ita_contactPerson", e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Contact Phone#</label>
            <input
              className="form-input"
              placeholder="(555) 000-0000"
              value={data.ita_contactPhone}
              onChange={(e) => onChange("ita_contactPhone", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3 className="section-title">Hudson County One Stop Information</h3>
        <div style={g2}>
          <div>
            <label className="form-label">BHI One Stop Center Contact</label>
            <input
              className="form-input"
              placeholder="Contact name"
              value={data.ita_bhiContactPerson}
              onChange={(e) => onChange("ita_bhiContactPerson", e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Phone#</label>
            <input
              className="form-input"
              placeholder="(555) 000-0000"
              value={data.ita_bhiPhone}
              onChange={(e) => onChange("ita_bhiPhone", e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Title</label>
            <input
              className="form-input"
              placeholder="Title"
              value={data.ita_bhiTitle}
              onChange={(e) => onChange("ita_bhiTitle", e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Email Address</label>
            <input
              className="form-input"
              type="email"
              placeholder="bhi@email.com"
              value={data.ita_bhiEmail}
              onChange={(e) => onChange("ita_bhiEmail", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3 className="section-title">Funding &amp; Signatures</h3>
        <div>
          <label className="form-label">
            Total Amount of Funding Required ($)
          </label>
          <input
            className="form-input"
            placeholder="0.00"
            value={data.ita_totalFunding}
            onChange={(e) => onChange("ita_totalFunding", e.target.value)}
          />
        </div>
        <div style={{ ...g2, ...mt }}>
          <div>
            <label className="form-label">Training Provider Rep – Name</label>
            <input
              className="form-input"
              placeholder="Full name"
              value={data.ita_providerRepName}
              onChange={(e) => onChange("ita_providerRepName", e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Training Provider Rep – Title</label>
            <input
              className="form-input"
              placeholder="Title"
              value={data.ita_providerRepTitle}
              onChange={(e) => onChange("ita_providerRepTitle", e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Training Provider Rep – Date</label>
            <input
              className="form-input"
              type="date"
              value={data.ita_providerRepDate}
              onChange={(e) => onChange("ita_providerRepDate", e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">BHI Authorized Rep – Date</label>
            <input
              className="form-input"
              type="date"
              value={data.ita_bhiRepDate}
              onChange={(e) => onChange("ita_bhiRepDate", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
