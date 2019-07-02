import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  @Output() mailRead = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  @Input() topic: string;

  read() {
    console.log('mail read');
    this.mailRead.emit();
  }

}
