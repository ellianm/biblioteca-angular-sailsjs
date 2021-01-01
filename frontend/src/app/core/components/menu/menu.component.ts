import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { LoadingService } from '../../services/loading.service';
import { delay } from 'rxjs/internal/operators/delay';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lv-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private loadingService: LoadingService,
    private userService: UserService,
    private router : Router) { }

  menus: MenuItem[];
  loading: boolean;
  logged: boolean;

  ngOnInit(): void {
    this.logged = this.userService.isLogged();
    this.loadMenus();
    this.listenToLoading();
  }

  loadMenus() {
    this.menus = [
      {
        label: "Home",
        icon: 'pi pi-fw pi-home',
        routerLink: "/"
      },
      {
        label: "Novo Livro",
        icon: "pi pi-fw pi-plus",
        routerLink: "/newBook"
      },
      {
        label: "Meus Livros",
        icon: "pi pi-fw pi-folder-open",
        routerLink: "/my",
        visible: this.logged
      }, {
        label: "Livros Favoritados",
        icon: "pi pi-fw pi-star",
        routerLink: "/favorite",
        visible: this.logged
      }, {
        label: "Desconectar",
        icon: "pi pi-fw pi-sign-out",
        command: (onclick) => { this.logout() },
        visible: this.logged
      }, {
        label: "Login",
        icon: "pi pi-fw pi-sign-in",
        routerLink: "/login",
        visible: !this.logged
      }, {
        label: "Cadastrar-se",
        icon: "pi pi-fw pi-sign-in",
        routerLink: "/register",
        visible: !this.logged
      }];
  }
  logout() {
    this.userService.logout();
    this.router.navigate(['/login'])
  }
  
  listenToLoading(): void {
    this.loadingService.loadingSub
      .pipe(delay(0))
      .subscribe((loading) => {
        this.loading = loading;
      });
  }
}
