import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {

    this.count().then(
      mensaje => console.log(mensaje)
    )
    .catch(
      error => console.error('Terminó con errores', error)
    );
  }

  ngOnInit() {
  }

  count(): Promise<String> {
    return new Promise((resolve, reject) => {
      let contador = 0;
      const interval = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve('¡Ya terminó!');
          clearInterval(interval);
        }
      }, 1000);
    });
  }

}
