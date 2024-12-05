import { Component } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent {
  operaciones = [
    {
    operacion: 'suma',
    simbolo: '+'
  },
    {
      operacion: 'resta',
      simbolo: '-'
    },
    {
      operacion: 'multiplicacion',
      simbolo: '*'
    },
    {
      operacion: 'division',
      simbolo: '/'
    }
  ];

  operandos = [1,2,3,4,5,6,7,8,9,10];

  resultado = [0,0,0,0,0,0,0,0,0,0];

  realizarOperacion(operacion: string) {
    switch (operacion){
      case "suma":
        for (let i = 0; i < 10; i++) {
          this.resultado[i] = this.operandos[i] + this.operandos[i];
        }
        break;
      case "resta":
        for (let i = 0; i < 10; i++) {
          this.resultado[i] = this.operandos[i] - this.operandos[i];
        }
        break;
      case "multiplicacion":
        for (let i = 0; i < 10; i++) {
          this.resultado[i] = this.operandos[i] * this.operandos[i];
        }
        break;
      case "division":
        for (let i = 0; i < 10; i++) {
          this.resultado[i] = this.operandos[i] / this.operandos[i];
        }
        break;
    }
  };
}
