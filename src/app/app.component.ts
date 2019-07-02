import { Component } from '@angular/core';
import { EmailListItem } from './EmailListItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'email-app';

  // To create each component rather than defining it in the component file - create a class
  components = [
    new EmailListItem(),
    new EmailListItem(),
    new EmailListItem()
  ]

  public usertopic = "Magic";

  userRead(index: number) {
    this.components[index].readFlag = true;
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      let check = document.getElementById("search") as HTMLInputElement;
      this.usertopic = check.value;
      console.log("check");
    }
  }

}
