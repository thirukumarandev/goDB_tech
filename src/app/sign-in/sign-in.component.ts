import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  loading = false;
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      usrNm: ['', Validators.required],
      pasWd: ['', Validators.required],
    });
  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (
      this.f.usrNm.value == 'user@gmail.com' &&
      this.f.pasWd.value == '12345678'
    ) {
      this.submitted = false;
      this.router.navigate(['/home']);
      this.loginForm.reset();
    } else {
      this.submitted = false;
    }
  }
}
