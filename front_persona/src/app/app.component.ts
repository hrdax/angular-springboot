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
  paises: any;
  estados: any;
  personas: any;

  constructor(
    public fb: FormBuilder,
    public estadosService: EstadosService,
    public paisesService: PaisesService,
    public personaService: PersonaService
    ) {

  }

  ngOnInit(): void {
    this.personaForm = this.fb.group({
      id: [''],
      nombre : ['', Validators.required],
      apellido : ['', Validators.required],
      edad : ['', Validators.required],
      pais : ['', Validators.required],
      estado : ['', Validators.required],
    })

    this.paisesService.getAllPaises().subscribe(resp => {
      this.paises = resp;
    },
    error => {console.log(error)})

    this.personaService.getAllPersonas().subscribe(resp => {
      this.personas = resp;
    },
    error => {console.log(error)})

    this.personaForm.get('pais')?.valueChanges.subscribe(value =>  {
      this.estadosService.getAllEstadosByPais(value.id).subscribe(resp=>{
        this.estados = resp
      }, error=>{
        console.log(error)
      })
    })
  }

  

  guardar():void{
    this.personaService.savePersona(this.personaForm.value).subscribe(resp => {
      this.personaForm.reset()
      this.personas.push(resp)
    },
    error => {console.error(error)})
  }

  eliminar(persona:any) {
    this.personaService.deletePersona(persona.id).subscribe(resp => {
      this.personas.pop(persona)

    },
    error => {console.error(error)})
  }

  editar(persona:any) {
    this.personaForm.setValue({
      id : persona.id,
      nombre : persona.nombre,
      apellido : persona.apellido,
      edad : persona.edad,
      pais : persona.pais,
      estado : persona.estado,
    })
  }
}
