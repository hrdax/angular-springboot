import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EstadosService } from './services/estados/estados.service';
import { PaisesService } from './services/paises/paises.service';
import { PersonaService } from './services/persona/persona.service';
import { FormGroup, Validators } from '@angular/forms'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'front_persona';

  personaForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public estadosService: EstadosService,
    public paisesService: PaisesService,
    public personaService: PersonaService
    ) {

  }

  ngOnInit(): void {
    this.personaForm = this.fb.group({
      nombre : ['', Validators.required],
      apellido : ['', Validators.required],
      edad : ['', Validators.required],
      pais : ['', Validators.required],
      estado : ['', Validators.required],
    })
  }

  guardar():void{

  }
}
