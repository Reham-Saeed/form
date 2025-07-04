import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { signupValidators } from './shared/validators/validators';
import { AlertErrorComponent } from './shared/alert-error/alert-error.component';

export interface FieldConfig {
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AlertErrorComponent,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form'; errorMessage: string = '';
  successMessage: string = '';

  private readonly _FormBuilder = inject(FormBuilder);

  register: FormGroup = this._FormBuilder.group(
    {
      name: [null, signupValidators.name],
      email: [null, signupValidators.email],
      password: [null, signupValidators.password],
      rePassword: [null],
      phone: [null, signupValidators.phone],
      nationalId: [null, signupValidators.nationalId],
      address: [null, signupValidators.address],
      birthDate: [null, signupValidators.birthDate],
      gender: [null, signupValidators.gender],
      maritalStatus: [null, signupValidators.maritalStatus],
      job: [null, signupValidators.job],
      education: [null, signupValidators.education],
      bloodType: [null, signupValidators.bloodType],
      emergencyContactName: [null, signupValidators.emergencyContactName],
      emergencyContactPhone: [null, signupValidators.emergencyContactPhone],
      allergies: [null],
      chronicDiseases: [null],
      insuranceProvider: [null],
      insuranceNumber: [null],
      notes: [null],
    },
    { validators: [confirmPassword] }
  );
  passwordType: string = 'password';
  sendData() {
    if (this.register.valid) {
      this.successMessage = 'Registration successful!';
      this.errorMessage = '';
      console.log(this.register.value);
    } else {
      this.register.markAllAsTouched();
      this.successMessage = '';
      this.errorMessage = 'Please fix the errors in the form.';
    }
  }
}
function confirmPassword(g: AbstractControl) {
  return g.get('password')?.value == g.get('rePassword')?.value
    ? null
    : { mismatch: true };
}
