import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { PlatformDetectorService } from '../../core/plataform-detector/platform-detector.service';
import { RegisterService } from 'src/core/services/register/register.service';
import { LoginDto } from 'src/core/models/registry/dto\'s/login-dto.model';

@Component({
  selector: 'tw-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;

  @ViewChild('emailInput', { static: true }) emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private platformDetectorService: PlatformDetectorService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      cpfCnpj: ['', Validators.required]
    });
    this.platformDetectorService.isPlatformBrowser() &&
      this.emailInput.nativeElement.focus();
  }

  login() {
    this.registerService
      .getRegister(this.loginForm.value as LoginDto)
      .subscribe(
        () => this.router.navigate(['/logged']),
        err => {
          console.log(err);
          this.platformDetectorService.isPlatformBrowser() &&
            this.emailInput.nativeElement.focus();
        });
  }

  create() {
    this.router.navigate(['/create']);
  }

}
