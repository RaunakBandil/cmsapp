import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cmsapp';
  show = false;
  thisbtnContent = true;
  showbtnContent(btn: string) {
    if (btn === 'btn1') {
      this.thisbtnContent = true;
    } else {
      this.thisbtnContent = false;

    }
  }
}
