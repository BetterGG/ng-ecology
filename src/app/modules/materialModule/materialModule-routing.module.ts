import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MatTablePageComponent } from "./matTablePage/matTablePage.component";
import { MatSliderPageComponent } from "./matSliderPage/matSliderPage.component";

const routes: Routes = [
  {
    path: "matTablePage",
    data: {
      routePath: "/materialModule/matTablePage",
    },
    component: MatTablePageComponent,
  },
  {
    path: "matSliderPage",
    data: {
      routePath: "/materialModule/matSliderPage",
    },
    component: MatSliderPageComponent,
  },
];

@NgModule({
  declarations: [MatTablePageComponent, MatSliderPageComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialModuleRoutingModule {}
