import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


model: object = {
  first_name: "Bob",
  last_name: "Smith"
}

  onSubmit(data: NgForm){
    console.log(data.value)
    console.log(this.model)
  }

}
