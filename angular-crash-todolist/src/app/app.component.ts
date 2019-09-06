import { Component } from '@angular/core';


/*@Component is a typescript decorator which includes metadata for the component for example 'app-root' is what will be rendered in the
index.html file*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular Crash Course - To Do List';
  name: string ='Johnny';
}
 