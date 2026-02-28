export interface FormData {
  // ── Form 1: ITA Program Description ──────────────────────────────────
  ita_customerLastName: string
  ita_customerFirstName: string
  ita_njNumber: string
  ita_email: string
  ita_phone: string
  ita_course: string
  ita_credential: string
  ita_trainingWeeks: string
  ita_trainingHours: string
  ita_trainingStartDate: string
  ita_trainingEndDate: string
  ita_daysSun: boolean
  ita_daysMon: boolean
  ita_daysTues: boolean
  ita_daysWed: boolean
  ita_daysThurs: boolean
  ita_daysFri: boolean
  ita_daysSat: boolean
  ita_classStartTime: string
  ita_classEndTime: string
  ita_providerFederalId: string
  ita_providerEmail: string
  ita_eligibleTrainingProvider: string
  ita_trainingAddressSite: string
  ita_contactPerson: string
  ita_contactPhone: string
  ita_bhiContactPerson: string
  ita_bhiPhone: string
  ita_bhiTitle: string
  ita_bhiEmail: string
  ita_totalFunding: string
  ita_providerRepName: string
  ita_providerRepTitle: string
  ita_providerRepDate: string
  ita_bhiRepDate: string

  // ── Form 2: Vendor Form ───────────────────────────────────────────────
  vf_name: string
  vf_njNumber: string
  vf_vendor: string
  vf_last4SS: string
  vf_course: string
  vf_credential: string
  vf_initials1: string
  vf_initials2: string
  vf_initials3: string
  vf_initials4: string
  vf_initials5: string
  vf_initials6: string
  vf_signatureTitle: string
  vf_signatureDate: string
  vf_careerAdvisorDate: string

  // ── Form 3: School Visit/Contact Checklist ────────────────────────────
  sv_nameOfSchool: string
  sv_dateOfContact: string
  sv_trainingCourse: string
  sv_websiteAddress: string
  sv_expectedCredential: string
  sv_dateOfVisit: string
  sv_phoneNumber: string
  sv_schoolRepresentative: string
  sv_prerequisiteYes: boolean
  sv_prerequisiteNo: boolean
  sv_prerequisiteDesc: string
  sv_admissionHighSchool: boolean
  sv_admissionDiploma: boolean
  sv_admissionGED: boolean
  sv_admissionOther: boolean
  sv_admissionOtherText: string
  sv_courseHours: string
  sv_courseMonths: string
  sv_courseWeeks: string
  sv_scheduleFrom: string
  sv_scheduleTo: string
  sv_scheduleAmPm: string
  sv_scheduleChangeYes: boolean
  sv_scheduleChangeNo: boolean
  sv_newSchedule: string
  sv_internshipYes: boolean
  sv_internshipNo: boolean
  sv_internshipDuration: string
  sv_equipmentSame: boolean
  sv_equipmentNearlySame: boolean
  sv_equipmentDifferent: boolean
  sv_practiceYes: boolean
  sv_practiceNo: boolean
  sv_placementAssistance: string
  sv_employmentAssistance: string

  // ── Form 4: Training Provider Selection Form ──────────────────────────
  tp_providerName: string
  tp_providerAddress: string
  tp_trainingProgram: string
  tp_credentialAttained: string
  tp_justifyProximity: boolean
  tp_justifyUIDuration: boolean
  tp_justifyFrequency: boolean
  tp_justifyOccupational: boolean
  tp_justifyFamilyCare: boolean
  tp_justifyPlacementRecord: boolean
  tp_justifyOther: boolean
  tp_otherProvidersCount: string
  tp_otherProviderName: string
  tp_otherProviderRep: string
  tp_otherProviderDateVisit: string
  tp_otherProviderTimeVisit: string
  tp_customerName: string
  tp_customerSignature: string
  tp_tdsDate: string
}

export const defaultFormData: FormData = {
  ita_customerLastName: '', ita_customerFirstName: '', ita_njNumber: '',
  ita_email: '', ita_phone: '', ita_course: '', ita_credential: '',
  ita_trainingWeeks: '', ita_trainingHours: '', ita_trainingStartDate: '',
  ita_trainingEndDate: '',
  ita_daysSun: false, ita_daysMon: false, ita_daysTues: false,
  ita_daysWed: false, ita_daysThurs: false, ita_daysFri: false, ita_daysSat: false,
  ita_classStartTime: '', ita_classEndTime: '',
  ita_providerFederalId: '', ita_providerEmail: '',
  ita_eligibleTrainingProvider: '', ita_trainingAddressSite: '',
  ita_contactPerson: '', ita_contactPhone: '',
  ita_bhiContactPerson: '', ita_bhiPhone: '', ita_bhiTitle: '', ita_bhiEmail: '',
  ita_totalFunding: '', ita_providerRepName: '', ita_providerRepTitle: '',
  ita_providerRepDate: '', ita_bhiRepDate: '',

  vf_name: '', vf_njNumber: '', vf_vendor: '', vf_last4SS: '',
  vf_course: '', vf_credential: '',
  vf_initials1: '', vf_initials2: '', vf_initials3: '',
  vf_initials4: '', vf_initials5: '', vf_initials6: '',
  vf_signatureTitle: '', vf_signatureDate: '', vf_careerAdvisorDate: '',

  sv_nameOfSchool: '', sv_dateOfContact: '', sv_trainingCourse: '',
  sv_websiteAddress: '', sv_expectedCredential: '', sv_dateOfVisit: '',
  sv_phoneNumber: '', sv_schoolRepresentative: '',
  sv_prerequisiteYes: false, sv_prerequisiteNo: false, sv_prerequisiteDesc: '',
  sv_admissionHighSchool: false, sv_admissionDiploma: false,
  sv_admissionGED: false, sv_admissionOther: false, sv_admissionOtherText: '',
  sv_courseHours: '', sv_courseMonths: '', sv_courseWeeks: '',
  sv_scheduleFrom: '', sv_scheduleTo: '', sv_scheduleAmPm: '',
  sv_scheduleChangeYes: false, sv_scheduleChangeNo: false, sv_newSchedule: '',
  sv_internshipYes: false, sv_internshipNo: false, sv_internshipDuration: '',
  sv_equipmentSame: false, sv_equipmentNearlySame: false, sv_equipmentDifferent: false,
  sv_practiceYes: false, sv_practiceNo: false,
  sv_placementAssistance: '', sv_employmentAssistance: '',

  tp_providerName: '', tp_providerAddress: '', tp_trainingProgram: '',
  tp_credentialAttained: '',
  tp_justifyProximity: false, tp_justifyUIDuration: false,
  tp_justifyFrequency: false, tp_justifyOccupational: false,
  tp_justifyFamilyCare: false, tp_justifyPlacementRecord: false,
  tp_justifyOther: false,
  tp_otherProvidersCount: '1', tp_otherProviderName: '',
  tp_otherProviderRep: '', tp_otherProviderDateVisit: '',
  tp_otherProviderTimeVisit: '',
  tp_customerName: '', tp_customerSignature: '', tp_tdsDate: '',
}
