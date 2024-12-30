import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RolesComponent } from './components/roles/roles.component';
import { MasterComponent } from './components/master/master.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RolesComponent, RouterLink, RouterLinkActive,MasterComponent,EmployeeComponent,ClientComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'P';
}
