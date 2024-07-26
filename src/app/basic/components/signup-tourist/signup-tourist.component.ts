import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
@Component({
  selector: 'app-signup-tourist',
  templateUrl: './signup-tourist.component.html',
  styleUrl: './signup-tourist.component.css'
})
export class SignupTouristComponent {
  validateForm!: FormGroup;
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private notification: NzNotificationService,
    private router: Router) {}

    ngOnInit(){
      this.validateForm = this.fb.group({
        email: [null, [Validators.email, Validators.required]],
        name: [null, [Validators.required]],
        lastname: [null, [Validators.required]],
        phone: [null],
        checkPassword: [null, [Validators.required]],

      })
    }

    submitForm(){
      this.authService.registerTourist(this.validateForm.value).subscribe(res =>{
        this.notification
        .success(
          'SUCCESS',
          `Signup Successful`,
          {nzDuration: 5000}
        );
        this.router.navigateByUrl('/login');
      },error =>{
        this.notification
        .error(
          'ERROR',
          `${error.error}`,
          {nzDuration: 5000}
        )
      })
    }

}
