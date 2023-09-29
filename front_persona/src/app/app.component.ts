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

    this.paisesService.getAllPaises().subscribe(resp => {
      this.paises = resp;
    },
    error => {console.log(error)})
  }

  

  guardar():void{

  }
  
  cargarEstadosPorPaisesId(event:any){
    this.estadosService.getAllEstadosByPais(event.target.value).subscribe(resp=>{
      this.estados = resp
    }, error=>{
      console.log(error)
    })

  }

}
