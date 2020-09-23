import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pokemons',
  templateUrl: './lista-pokemons.component.html',
  styleUrls: ['./lista-pokemons.component.css']
})
export class ListaPokemonsComponent {

  data: any[] = [];

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void{
    this.getPokemons();
  }

  getPokemons(){
    let dadosPokemon;
    for(let i = 1; i <= 100; i++){
      this.pokemonService.getPokemons(i).subscribe(
        resposta =>{
          dadosPokemon = {
            indice: i,
            imagem: resposta.sprites.front_default,
            nome: resposta.name
          };

          this.data.push(dadosPokemon);
        },
        erro=>{
          console.log('erro');
        }
      );
    }
  }
}
