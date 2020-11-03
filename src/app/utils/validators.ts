import { AbstractControl } from '@angular/forms';

export class MyValidators{

  static isPriceValid(control: AbstractControl){
    const value = control.value;
    console.log(value);
    if ((!value)){
      // Se retorna este objeto si y solo si es inválido
      const valor = parseInt(value);
      if (isNaN(valor) ) {
        return {price_invalid: true}; }
    // tslint:disable-next-line: align
    }if (value < 2000){
      return {price_invalid: true};
    }
    return null; // Se retorna null si no hubo ningun error
  }
}
