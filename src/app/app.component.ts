import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

 
  valueName : string = "";
  handleChange(value : string){
    this.valueName = value;
  }

}
