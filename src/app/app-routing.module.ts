import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './pages/main-layout/main-layout.component';
import {PageHomeComponent} from './pages/pages/page-home/page-home.component';
import {PageIcecreamComponent} from './pages/pages/page-icecream/page-icecream.component';
import {PageNocontentComponent} from './pages/pages/page-nocontent/page-nocontent.component';
import {PageLoginComponent} from './pages/pages/page-login/page-login.component';
import {PageAccountComponent} from './pages/pages/page-account/page-account.component';
import {AuthGuard} from './shared/auth.guard';
import {PageEmailnotifyComponent} from './pages/pages/page-emailnotify/page-emailnotify.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: PageHomeComponent},
      {path: 'icecream', component: PageIcecreamComponent},
      {path: 'nocontent', component: PageNocontentComponent},
      {path: 'login', component: PageLoginComponent},
      {path: 'emailnotify', component: PageEmailnotifyComponent},
      {path: 'account/:localId', component: PageAccountComponent, canActivate: [AuthGuard]}
    ]
  },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
