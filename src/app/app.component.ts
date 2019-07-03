import { Component, Input } from '@angular/core';
import { EmailListItem } from './EmailListItem';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // To create each component rather than defining it in the component file - create a class
  components = [
    new EmailListItem("Frederick", "Chains"),
    new EmailListItem("Gabriel", "Gundam"),
    new EmailListItem("John", "Table Tennis")
  ]

  public usertopic = "Magic";

  userRead(index: number) {
    this.components[index].readFlag = true;
  }

}
