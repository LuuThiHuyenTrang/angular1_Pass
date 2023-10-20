import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { IAuth } from 'src/app/interface/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  userForm = this.formBuilder.group({
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
        await lastValueFrom(this.auth.logIn(this.userForm.value as IAuth));
        alert('Dang nhap thanh cong!');
        this.routerNext.navigateByUrl('/products');
      }
    } catch (error: any) {
      alert('Error: ' + error.error);
    }
  }
}
