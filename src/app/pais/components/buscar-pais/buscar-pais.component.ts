import { Component, EventEmitter, Output,OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-buscar-pais',
  templateUrl: './buscar-pais.component.html',
  styleUrls: ['./buscar-pais.component.css']
})
export class BuscarPaisComponent implements OnInit {

  ngOnInit(): void {
   this.debounce
   .pipe(debounceTime(300)
   ).subscribe(term => {
    this.onDebounce.emit(term);
   })
  }

//Evento para mandar el valor
@Output() onEnter : EventEmitter<string> = new EventEmitter();
@Output() onDebounce : EventEmitter<string> = new EventEmitter();

@Input() placeholder : string="";
//para que se pueda emitir un valor cuando se cabe de emitir
debounce: Subject<string> = new Subject();

termino : string ="";
constructor(){}


buscar(){
this.onEnter.emit(this.termino);
}

//llamamos a la variabe debounce como un obserbable para que me vaya notificando
// todo lo que se va ingresando en el input
teclaPresionada(){
  this.debounce.next(this.termino)
}


}
