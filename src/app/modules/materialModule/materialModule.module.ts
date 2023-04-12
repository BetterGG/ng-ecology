import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModuleComponent } from "./materialModule.component";
import { MaterialModuleRoutingModule } from "./materialModule-routing.module";

@NgModule({
  imports: [CommonModule, MaterialModuleRoutingModule],
  declarations: [MaterialModuleComponent],
})
export class MaterialModuleModule {}
