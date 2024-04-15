import { Route } from '@angular/router';
import { authenticatedGuard } from './core/guards/auth.guard';
import { AccountDetailComponent } from './features/accounts/account-detail.component';
import { AccountListComponent } from './features/accounts/account-list.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { MainComponent } from './layouts/main.component';
import { signedInGuard } from './core/guards/signed-in.guard';

export const appRoutes: Route[] = [
  { path: 'signin', component: SignInComponent, title: 'Sign In', canActivate: [signedInGuard]},
  {
    path: '',
    component: MainComponent,
    canActivate: [authenticatedGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, title: 'Dashboard' },
      { path: 'account/list', component: AccountListComponent, title: 'Account List' },
      { path: 'account/:id', component: AccountDetailComponent, title: 'Account Detail' }
    ]
  }
];
