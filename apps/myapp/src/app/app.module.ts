import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import {MylibModule} from "@myWorkSpace/mylib";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NxModule.forRoot(), MylibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
