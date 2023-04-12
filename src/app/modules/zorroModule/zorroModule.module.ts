import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ZorroModuleComponent } from "./zorroModule.component";
import { ZorroModuleRoutingModule } from "./zorroModule-routing.module";

@NgModule({
  imports: [CommonModule, ZorroModuleRoutingModule],
  declarations: [ZorroModuleComponent],
})
export class ZorroModuleModule {}
