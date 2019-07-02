import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  @Input() emailContent;

  @Output() mailRead = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  @Input() topic: string;

  read() {
    this.mailRead.emit();
  }

}
