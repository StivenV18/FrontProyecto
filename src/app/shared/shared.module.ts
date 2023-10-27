import { NgModule } from "@angular/core";
import { SharedRoutingModule } from "./shared-routing.module";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from "./components/header/header.component";



@NgModule({
    declarations: [
      HeaderComponent,
      FooterComponent

  ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      SharedRoutingModule,
      DialogModule,
      ButtonModule,
      RouterModule
    ],
    exports: [
      HeaderComponent,FooterComponent
    ]
})
export class SharedModule { }
