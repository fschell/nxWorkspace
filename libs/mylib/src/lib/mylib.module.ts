import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyserviceService} from "./myservice.service";
@NgModule({
  imports: [CommonModule],
  providers: [
    MyserviceService
  ]
})
export class MylibModule {}

