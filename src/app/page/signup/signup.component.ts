import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { IAuth } from 'src/app/interface/auth';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  userForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private routerNext: Router
  ) {}
  async onSubmit() {
    try {
      if (this.userForm.valid) {
        await lastValueFrom(this.auth.signup(this.userForm.value as IAuth));
        alert('Dang ky thanh cong!');
        this.routerNext.navigateByUrl('/signin');
      }
    } catch (error: any) {
      alert('Error: ' + error.error);
    }
  }
}
