import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from "../../Services/empleado.service";
import { NgForm } from '@angular/forms';
import { Empleado } from '../../Models/empleado';
 
declare var M: any;
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  standalone: true,
  providers: [EmpleadoService]
})
export class EmpleadosComponent implements OnInit {
 
  constructor(public empleadoService: EmpleadoService) { }
  ngOnInit(): void {
  }
  agregarEmpleado(form?: NgForm) {
    this.empleadoService.PostEmpleado(form?.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Guardado satisfactoriamente'});
      });
  }
  resetForm(form?: NgForm) { // Limpiar el formulario, recibe un formulario como parametro
    if (form) {
      form.reset();
      this.empleadoService.selectedEmpleado = new Empleado();
    }
  }
}
