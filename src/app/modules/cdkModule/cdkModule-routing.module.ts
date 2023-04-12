import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DialogPageComponent } from "./dialogPage/dialogPage.component";
import { DragDropPageComponent } from "./dragDropPage/dragDropPage.component";

const routes: Routes = [
  {
    path: "dialogPage",
    data: {
      breadcrumb: "dialogPage",
      routePath: "/cdkModule/dialogPage",
    },
    component: DialogPageComponent,
  },
  {
    path: "dragDropPage",
    data: {
      breadcrumb: "dragDropPage",
      routePath: "/cdkModule/dragDropPage",
    },
    component: DragDropPageComponent,
  },
];

@NgModule({
  declarations: [DragDropPageComponent, DragDropPageComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdkModuleRoutingModule {}
