import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        frstNm: ['', Validators.required],
        lstNm: ['', Validators.required],
        emailID: [
          '',
          [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ],
        ],
        mobileNo: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
            Validators.pattern('^[0-9]+$'),
          ],
        ],
        gender: ['', Validators.required],
        address: ['', Validators.required],
        psWrd: ['', [Validators.required, Validators.minLength(8)]],
        conPassword: ['', Validators.required],
      },
      {
        validator: this.checkPasswords,
      }
    );
  }
  get getSignUpForm() {
    return this.registerForm.controls;
  }

  checkPasswords(group: FormGroup) {
    let pass = group.get('psWrd').value;
    let confirmPass = group.get('conPassword').value;

    return pass === confirmPass ? null : { notSame: true };
  }
  onSubmit() {
    this.submitted = true;

    if (this.getSignUpForm) {
      this.router.navigate(['/singin']);
      this.registerForm.reset();
    } else {
      this.submitted = false;
    }
  }
}
