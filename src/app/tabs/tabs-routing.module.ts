import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'listen',
        loadChildren: () => import('../listen/listen.module').then(m => m.ListenPageModule)
      },
      {
        path: 'social',
        loadChildren: () => import('../social/social.module').then(m => m.SocialPageModule)
      },
      {
        path: 'contact-us',
        loadChildren: () => import('../contact-us/contact-us.module').then(m => m.ContactUsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/listen',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/listen',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
