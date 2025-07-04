import { Validators } from "@angular/forms";

export const signupValidators = {
  name: [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(20),
  ],
  email: [Validators.required, Validators.email],
  password: [
    Validators.required,
    Validators.pattern(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    ),
  ],
  phone: [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
  nationalId: [Validators.required, Validators.pattern(/^\d{14}$/)],
  address: [Validators.required, Validators.minLength(5)],
  birthDate: [Validators.required],
  gender: [Validators.required],
  maritalStatus: [Validators.required],
  job: [Validators.required],
  education: [Validators.required],
  bloodType: [Validators.required],
  emergencyContactName: [Validators.required],
  emergencyContactPhone: [
    Validators.required,
  ],
}