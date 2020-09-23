import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListaPokemonsComponent } from '../lista-pokemons/lista-pokemons.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'O campo do e-mail é obrigatório';
    }

    return this.email.hasError('email') ? 'E-mail inválido.' : '';
  }

  constructor(private router: Router) { }

  listaDePokemons(){
    this.router.navigateByUrl('/listaDePokemons');
  }

}
