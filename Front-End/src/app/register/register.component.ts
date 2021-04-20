import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ageValidator } from 'src/core/plataform-detector/validators/age-validade';
import { RegisterService } from 'src/core/services/register/register.service';

import { PlatformDetectorService } from '../../core/plataform-detector/platform-detector.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  @ViewChild('nameInput', { static: true }) nameInput: ElementRef<HTMLInputElement>;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private platformDetectorService: PlatformDetectorService,
    private _registerService: RegisterService
  ) { }

  ngOnInit(): void {
    this.createForm(); 0

    this.platformDetectorService.isPlatformBrowser() &&
      this.nameInput.nativeElement.focus();
  }

  backLogin() {
    this.router.navigate(['']);
  }

  private createForm() {
    this.registerForm = this.formBuilder.group({
      register: this.formBuilder.group({
        name: ['', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ]],
        cpfCnpj: ['', Validators.required],
        birthDate: ['', [Validators.required, ageValidator]],
        email: ['',
          [
            Validators.required, Validators.email,
            Validators.minLength(5),
            Validators.maxLength(100)
          ]],
        contact: ['', Validators.required],
      }),
      address: this.formBuilder.group({
        cep: ['', Validators.required],
        road: ['', Validators.required],
        number: ['', [Validators.required, Validators.maxLength(10)]],
        district: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
      })
    });
  }

  register() {
    this._registerService.createRegister(this.registerForm.getRawValue()).subscribe(resp => {
      this.router.navigate(['']);
    })
  }

}
