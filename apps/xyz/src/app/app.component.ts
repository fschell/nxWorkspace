import { Component } from '@angular/core';
//import {MyserviceService} from "../../../../libs/mylib/src/lib/myservice.service";
import {MyserviceService} from "@myWorkSpace/mylib";

@Component({
  selector: 'xyz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xyz';

  constructor( public myService: MyserviceService) {}
}
