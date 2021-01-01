import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { MessageServiceResolver } from 'src/app/core/services/message-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router : Router,
    private messageService: MessageServiceResolver) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.authService
      .authenticate(this.form.get('userName').value, this.form.get('password').value)
      .subscribe(
        () => this.router.navigate(['/']),
        err => {
          this.form.reset();
          this.messageService.error('Usuário ou senha inválidos!');
        }
      );
  }

}
