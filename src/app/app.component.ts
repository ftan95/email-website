import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'email-app';

  components = [1,2,3];

  public usertopic = "Magic";

  userRead() {
    let icon = document.getElementById("test") as HTMLElement;
    icon.style.display = "none";
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      let check = document.getElementById("search") as HTMLInputElement;
      this.usertopic = check.value;
      console.log("check");
    }
  }

}
