import { Component } from '@angular/core';
import { EmpleadosComponent } from './components/empleados/empleados.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [EmpleadosComponent],
})
export class AppComponent {}
