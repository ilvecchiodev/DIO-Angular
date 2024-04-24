import { Component, EnvironmentInjector, OnInit } from '@angular/core';
import {environment} from "../environments/environment.development";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = environment.projectName;

  constructor(){}

  ngOnInit(): void {
    console.log(environment.projectName);
  }
}
