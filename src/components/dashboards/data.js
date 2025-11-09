export const users = [
  { id: "s001", password: "pass1", role: "student", name: "Sneha Agarwal" },
  { id: "s002", password: "pass2", role: "student", name: "Rahul Mehta" },
  { id: "s003", password: "pass3", role: "student", name: "Priya Sharma" },
  { id: "admin", password: "admin123", role: "admin", name: "Administrator" },
  { id: "teacher01", password: "abc123", role: "teacher", name: "Teacher" },
];

// Default progress structure per student
export const defaultProgress = {
  register: true,
  formFillUp: true,
  uploadDocuments: true,
  payment: true,
  documentVerified: false,
  interviewDate: "",
  entranceExamGiven: false,
  selected: false,
};
