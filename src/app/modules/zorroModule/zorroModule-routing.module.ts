import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormPageComponent } from "./formPage/formPage.component";
import { ModalPageComponent } from "./modalPage/modalPage.component";
import { TablePageComponent } from "./tablePage/tablePage.component";
import { DragSortTableComponent } from "./tablePage/components/dragSortTable/dragSortTable.component";
import { NgZorroAntdModule } from "../../ngZorroAntd.module";
import { NgCdkModule } from "../../ngCdk.module";
import { ChildTableComponent } from "./tablePage/components/childTable/childTable.component";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: "formPage",
    data: {
      routePath: "/zorroModule/formPage",
    },
    component: FormPageComponent,
  },
  {
    path: "modalPage",
    data: {
      routePath: "/zorroModule/modalPage",
    },
    component: ModalPageComponent,
  },
  {
    path: "tablePage",
    data: {
      routePath: "/zorroModule/tablePage",
    },
    component: TablePageComponent,
  },
];

@NgModule({
  declarations: [
    FormPageComponent,
    ModalPageComponent,
    TablePageComponent,
    DragSortTableComponent,
    ChildTableComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    NgZorroAntdModule,
    NgCdkModule,
    CommonModule,
  ],
  exports: [RouterModule],
})
export class ZorroModuleRoutingModule {}
