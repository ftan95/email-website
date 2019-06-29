import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clicking() {
    let test = document.getElementById("read") as HTMLElement;
    test.style.display = "none";
  }

}
