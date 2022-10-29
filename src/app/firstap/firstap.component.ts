import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstap',
  templateUrl: './firstap.component.html',
  styleUrls: ['./firstap.component.css']
})
export class FirstapComponent implements OnInit {
  name = 'ahmed chetoui'
  link = "assets/y9.jpg"
  

  constructor() { }

  ngOnInit(): void {
  }

}
