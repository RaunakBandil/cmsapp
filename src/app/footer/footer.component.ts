import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footer: any[] = []
  constructor(private dataserive: DataService) { }
  ngOnInit() {

    this.dataserive.footer().subscribe(res => {
      this.footer = Object.values(res);
      // console.log(this.footer)
    })

  }
}
