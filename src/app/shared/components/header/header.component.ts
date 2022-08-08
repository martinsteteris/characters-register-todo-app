import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  headerItems = [
    {
      title: 'Planner',
      path: '/planner'
    },
    {
      title: 'Register',
      path: '/register'
    },
    {
      title: 'Characters',
      path: '/characters'
    }
  ]
}
