import * as XLSX from "xlsx";
import type { FormData } from "./types";

function boolToYesNo(val: boolean): string {
  return val ? "Yes" : "No";
}

export function exportToExcel(data: FormData): void {
  const wb = XLSX.utils.book_new();

  // ──────────────── Sheet 1: ITA Program Description ────────────────────
  const itaRows = [
    ["ITA PROGRAM DESCRIPTION FOR INDIVIDUAL TRAINING ACCOUNT", ""],
    ["", ""],
    ["CUSTOMER INFORMATION", ""],
    ["Last Name", data.ita_customerLastName],
    ["First Name", data.ita_customerFirstName],
    ["NJ#", data.ita_njNumber],
    ["Email Address", data.ita_email],
    ["Phone Number", data.ita_phone],
    ["", ""],
    ["PROVIDER INFORMATION", ""],
    ["Course", data.ita_course],
    ["Credential", data.ita_credential],
    ["Length of Training (Weeks)", data.ita_trainingWeeks],
    ["Length of Training (Hours)", data.ita_trainingHours],
    ["Training Start Date", data.ita_trainingStartDate],
    ["Training End Date", data.ita_trainingEndDate],
    ["Sunday", boolToYesNo(data.ita_daysSun)],
    ["Monday", boolToYesNo(data.ita_daysMon)],
    ["Tuesday", boolToYesNo(data.ita_daysTues)],
    ["Wednesday", boolToYesNo(data.ita_daysWed)],
    ["Thursday", boolToYesNo(data.ita_daysThurs)],
    ["Friday", boolToYesNo(data.ita_daysFri)],
    ["Saturday", boolToYesNo(data.ita_daysSat)],
    ["Class Start Time", data.ita_classStartTime],
    ["Class End Time", data.ita_classEndTime],
    ["Provider Federal ID#", data.ita_providerFederalId],
    ["Provider's Email Address", data.ita_providerEmail],
    ["Eligible Training Provider", data.ita_eligibleTrainingProvider],
    ["Training Address Site", data.ita_trainingAddressSite],
    ["Contact Person", data.ita_contactPerson],
    ["Contact Phone", data.ita_contactPhone],
    ["", ""],
    ["HUDSON COUNTY ONE STOP INFORMATION", ""],
    ["BHI One Stop Center Contact", data.ita_bhiContactPerson],
    ["BHI Phone", data.ita_bhiPhone],
    ["BHI Title", data.ita_bhiTitle],
    ["BHI Email Address", data.ita_bhiEmail],
    ["", ""],
    ["FUNDING", ""],
    ["Total Amount of Funding Required ($)", data.ita_totalFunding],
    ["", ""],
    ["SIGNATURES", ""],
    ["Training Provider Rep Name", data.ita_providerRepName],
    ["Training Provider Rep Title", data.ita_providerRepTitle],
    ["Training Provider Rep Date", data.ita_providerRepDate],
    ["BHI Authorized Rep Date", data.ita_bhiRepDate],
  ];
  const ws1 = XLSX.utils.aoa_to_sheet(itaRows);
  ws1["!cols"] = [{ wch: 36 }, { wch: 40 }];
  XLSX.utils.book_append_sheet(wb, ws1, "1. ITA Program Description");

  // ──────────────── Sheet 2: Vendor Form ───────────────────────────────
  const vendorRows = [
    ["BHI ONE-STOP CAREER CENTER – VENDOR FORM", ""],
    ["", ""],
    ["Name", data.vf_name],
    ["NJ#", data.vf_njNumber],
    ["Vendor", data.vf_vendor],
    ["Last 4 of SS#", data.vf_last4SS],
    ["Course", data.vf_course],
    ["Credential", data.vf_credential],
    ["", ""],
    ["VENDOR INITIALS (Prior Agreements)", ""],
    ["1. Forward eligibility info to TDS/Case Manager", data.vf_initials1],
    [
      "2. Forward timesheets & progress reports every 2 weeks",
      data.vf_initials2,
    ],
    [
      "3. Forward final timesheets, progress report, credential & invoice",
      data.vf_initials3,
    ],
    ["4. No student starts until contract is executed", data.vf_initials4],
    ["5. Placement forwarded to follow-up specialist", data.vf_initials5],
    ["6. Assist in follow-up for at least 6 months", data.vf_initials6],
    ["", ""],
    ["SIGNATURES", ""],
    ["Signature/Title", data.vf_signatureTitle],
    ["Signature Date", data.vf_signatureDate],
    ["Career Advisor Date", data.vf_careerAdvisorDate],
  ];
  const ws2 = XLSX.utils.aoa_to_sheet(vendorRows);
  ws2["!cols"] = [{ wch: 52 }, { wch: 30 }];
  XLSX.utils.book_append_sheet(wb, ws2, "2. Vendor Form");

  // ──────────────── Sheet 3: School Visit Checklist ────────────────────
  const schoolRows = [
    ["SCHOOL VISIT / CONTACT CHECKLIST", ""],
    ["", ""],
    ["Name of School", data.sv_nameOfSchool],
    ["Date of Contact", data.sv_dateOfContact],
    ["Training Course", data.sv_trainingCourse],
    ["Website Address", data.sv_websiteAddress],
    ["Expected Credential", data.sv_expectedCredential],
    ["Date of Visit by You", data.sv_dateOfVisit],
    ["Phone Number", data.sv_phoneNumber],
    ["School Representative", data.sv_schoolRepresentative],
    ["", ""],
    ["1. Prerequisite skills/equipment needed?", ""],
    ["  Yes", boolToYesNo(data.sv_prerequisiteYes)],
    ["  No", boolToYesNo(data.sv_prerequisiteNo)],
    ["  Description", data.sv_prerequisiteDesc],
    ["", ""],
    ["2. Admission Requirements", ""],
    ["  High School", boolToYesNo(data.sv_admissionHighSchool)],
    ["  Diploma", boolToYesNo(data.sv_admissionDiploma)],
    ["  GED", boolToYesNo(data.sv_admissionGED)],
    ["  Other", boolToYesNo(data.sv_admissionOther)],
    ["  Other (specify)", data.sv_admissionOtherText],
    ["3. Course Length (Hours)", data.sv_courseHours],
    ["3. Course Length (Months)", data.sv_courseMonths],
    ["3. Course Length (Weeks)", data.sv_courseWeeks],
    ["4. Daily Schedule From", data.sv_scheduleFrom],
    ["4. Daily Schedule To", data.sv_scheduleTo],
    ["4. AM or PM", data.sv_scheduleAmPm],
    ["5. Schedule will change – Yes", boolToYesNo(data.sv_scheduleChangeYes)],
    ["5. Schedule will change – No", boolToYesNo(data.sv_scheduleChangeNo)],
    ["5. New Schedule", data.sv_newSchedule],
    ["6. Internship/Work Study – Yes", boolToYesNo(data.sv_internshipYes)],
    ["6. Internship/Work Study – No", boolToYesNo(data.sv_internshipNo)],
    ["6. Internship Duration", data.sv_internshipDuration],
    ["7. Equipment – Same", boolToYesNo(data.sv_equipmentSame)],
    [
      "7. Equipment – Nearly the Same",
      boolToYesNo(data.sv_equipmentNearlySame),
    ],
    ["7. Equipment – Different", boolToYesNo(data.sv_equipmentDifferent)],
    [
      "8. Practice on Equipment After Class – Yes",
      boolToYesNo(data.sv_practiceYes),
    ],
    [
      "8. Practice on Equipment After Class – No",
      boolToYesNo(data.sv_practiceNo),
    ],
    ["9. School Placement Assistance Process", data.sv_placementAssistance],
    [
      "10. How Will They Assist With Finding Employment",
      data.sv_employmentAssistance,
    ],
  ];
  const ws3 = XLSX.utils.aoa_to_sheet(schoolRows);
  ws3["!cols"] = [{ wch: 46 }, { wch: 40 }];
  XLSX.utils.book_append_sheet(wb, ws3, "3. School Visit Checklist");

  // ──────────────── Sheet 4: Training Provider Selection ───────────────
  const tpRows = [
    ["TRAINING PROVIDER SELECTION FORM", ""],
    ["", ""],
    ["SELECTED PROVIDER INFORMATION", ""],
    ["Provider Name", data.tp_providerName],
    ["Provider Address", data.tp_providerAddress],
    ["Training Program", data.tp_trainingProgram],
    ["Credential Attained", data.tp_credentialAttained],
    ["", ""],
    ["SELECTION JUSTIFICATION", ""],
    ["Proximity to my home", boolToYesNo(data.tp_justifyProximity)],
    [
      "Training duration coincides with UI benefits (incl. ABT)",
      boolToYesNo(data.tp_justifyUIDuration),
    ],
    [
      "Frequency of training program start dates",
      boolToYesNo(data.tp_justifyFrequency),
    ],
    [
      "Training course content meets my occupational needs",
      boolToYesNo(data.tp_justifyOccupational),
    ],
    [
      "Family care needs can be satisfied during training",
      boolToYesNo(data.tp_justifyFamilyCare),
    ],
    ["Provider placement record", boolToYesNo(data.tp_justifyPlacementRecord)],
    ["Other", boolToYesNo(data.tp_justifyOther)],
    ["", ""],
    ["OTHER PROVIDER VISITED / CONTACTED", ""],
    ["Number of Other Providers Contacted", data.tp_otherProvidersCount],
    ["Training Provider Name", data.tp_otherProviderName],
    ["Training Provider's Representative", data.tp_otherProviderRep],
    ["Date of Visit", data.tp_otherProviderDateVisit],
    ["Time of Visit", data.tp_otherProviderTimeVisit],
    ["", ""],
    ["CUSTOMER", ""],
    ["Customer Name", data.tp_customerName],
    ["Customer Signature", data.tp_customerSignature],
    ["TDS Date", data.tp_tdsDate],
  ];
  const ws4 = XLSX.utils.aoa_to_sheet(tpRows);
  ws4["!cols"] = [{ wch: 52 }, { wch: 36 }];
  XLSX.utils.book_append_sheet(wb, ws4, "4. Provider Selection");

  // Style header rows bold
  for (const ws of [ws1, ws2, ws3, ws4]) {
    const range = XLSX.utils.decode_range(ws["!ref"] || "A1");
    for (let R = range.s.r; R <= range.e.r; ++R) {
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const addr = XLSX.utils.encode_cell({ r: R, c: C });
        if (!ws[addr]) continue;
        if (!ws[addr].s) ws[addr].s = {};
      }
    }
  }

  const customerName =
    `${data.ita_customerLastName}_${data.ita_customerFirstName}`.replace(
      /\s+/g,
      "_",
    ) || "submission";
  const fileName = `BHI_Training_Forms_${customerName}_${new Date().toISOString().slice(0, 10)}.xlsx`;
  XLSX.writeFile(wb, fileName);
}
