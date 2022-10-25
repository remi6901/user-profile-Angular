import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  picture : string = "../assets/avatar.jpg";
  name : string = "Jonh Doe";
  age : number = 32;
  citation : string = "";

  constructor() { 
  }

  ngOnInit(): void {
  }

}
