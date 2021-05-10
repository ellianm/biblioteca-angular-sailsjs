import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AddBookComponent } from './pages/book/add-book/add-book.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { NotAuthGuard } from './core/guards/not.auth.guard';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MyComponent } from './pages/book/my/my.component';
import { FavoriteComponent } from './pages/book/favorite/favorite.component';
import { ViewBookComponent } from './pages/book/view-book/view-book.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Página Inicial | Livraria'
    }
  },
  {
    path: 'newBook',
    component: AddBookComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Cadastrar Novo Livro | Livraria'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAuthGuard],
    data: {
      title: 'Login | Livraria'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NotAuthGuard],
    data: {
      title: 'Registrar-se | Livraria'
    }
  },
  {
    path: 'my',
    component: MyComponent,
    canActivate: [AuthGuard],
    data: {
      title:'Meus Livros | Livraria'
    }
  },
  {
    path: 'favorite',
    component: FavoriteComponent,
    canActivate: [AuthGuard],
    data: {
      title:'Livros Favoritados | Livraria'
    }
  },
  {
    path:'viewBook/:id',
    component: ViewBookComponent,
    data: {
      title:'Visualizar Livro | Livraria'
    }
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      title: 'Página não Encontrada | Livraria'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
