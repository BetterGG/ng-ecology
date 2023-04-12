import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "zorroModule",
    data: {
      breadcrumb: "zorroModule",
    },
    loadChildren: () =>
      import(
        /* webpackChunkName: 'zorroModule' */ "./modules/zorroModule/zorroModule.module"
      ).then((m) => m.ZorroModuleModule),
  },
  {
    path: "materialModule",
    data: {
      breadcrumb: "materialModule",
    },
    loadChildren: () =>
      import(
        /* webpackChunkName: 'materialModule' */ "./modules/materialModule/materialModule.module"
      ).then((m) => m.MaterialModuleModule),
  },
  {
    path: "cdkModule",
    data: {
      breadcrumb: "cdkModule",
    },
    loadChildren: () =>
      import(
        /* webpackChunkName: 'cdkModule' */ "./modules/cdkModule/cdkModule.module"
      ).then((m) => m.CdkModuleModule),
  },
  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
