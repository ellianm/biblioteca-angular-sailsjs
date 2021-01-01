import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { MessageServiceResolver } from 'src/app/core/services/message-service.service';
import { User } from 'src/app/core/models/User';
import { RegisterService } from 'src/app/core/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageServiceResolver) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      fullName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email]
      ]
    })
  }
  register() {
    let user = this.form.getRawValue() as User;
    this.registerService.register(user).subscribe(
      () => {
        this.authService.authenticate(user.userName, user.password).subscribe(() => {
          this.router.navigate([''])
        });
        this.messageService.success("Cadastro realizado com sucesso!");
      },
      err => this.messageService.error("Não foi possível realizar o cadastro, " + err.error.message)
    )
  }

}
