import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CdkModuleComponent } from "./cdkModule.component";
import { CdkModuleRoutingModule } from "./cdkModule-routing.module";

@NgModule({
  imports: [CommonModule, CdkModuleRoutingModule],
  declarations: [CdkModuleComponent],
})
export class CdkModuleModule {}
