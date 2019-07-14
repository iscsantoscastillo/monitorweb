import { Component, OnInit, ViewChild } from '@angular/core';
import {Persona} from './persona.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  title = 'listado-personas';
  personas: Persona[] = [new Persona("Juan", "Perez"), new Persona("Julio", "Balam")]; 
  nombreInput:string;
  apellidoInput:string;

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyBlDy-Kr7Z1nNVIujBXmlfjJsr1IP_tQIE",
      authDomain: "vigventas.firebaseapp.com",
      databaseURL: "https://vigventas.firebaseio.com",
      projectId: "vigventas",
      storageBucket: "vigventas.appspot.com",
      messagingSenderId: "76103733430"
    })
  }

  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(persona1);
  }
}
