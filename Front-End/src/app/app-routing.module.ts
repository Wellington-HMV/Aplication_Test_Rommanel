import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedComponent } from './logged/logged.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './signin/signin.component';

const routes: Routes = [{
  path: '',
  component: SignInComponent
},
{
  path: 'create',
  component: RegisterComponent
},
{
  path: 'logged',
  component: LoggedComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
