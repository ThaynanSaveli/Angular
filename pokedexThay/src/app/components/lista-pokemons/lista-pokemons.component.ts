import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
    let corTipoPokemon;
    let tipos = [];
    for(let i = 1; i <= 100; i++){
      let tipoPokemon;
      this.pokemonService.getPokemons(i).subscribe(
        resposta =>{
          tipos = resposta.types;
          tipos.forEach(function (valor, indice) {
            tipoPokemon = {
              indice: indice,
              tipo: valor.type.name
            }
            if(valor.type.name == 'bug'){
              corTipoPokemon = '#729f3f';
            }
            if(valor.type.name == 'poison'){
              corTipoPokemon = '#b97fc9';
            }
            if(valor.type.name == 'fire'){
              corTipoPokemon = '#fd7d24';
            }
            if(valor.type.name == 'water'){
              corTipoPokemon = '#4592c4';
            }
            if(valor.type.name == 'flying'){
              corTipoPokemon = '#3dc7ef';
            }
            if(valor.type.name == 'eletric'){
              corTipoPokemon = '#eed535';
            }
            if(valor.type.name == 'ground'){
              corTipoPokemon = '#ab9842';
            }
            if(valor.type.name == 'psychic'){
              corTipoPokemon = '#f366b9';
            }
            if(valor.type.name == 'steel'){
              corTipoPokemon = '#9eb7b8';
            }
            if(valor.type.name == 'ice'){
              corTipoPokemon = '#51c4e7';
            }
            if(valor.type.name == 'normal'){
              corTipoPokemon = '#a4acaf';
            }
            if(valor.type.name == 'fairy'){
              corTipoPokemon = '#fdb9e9';
            }
            if(valor.type.name == 'grass'){
              corTipoPokemon = '#9bcc50';
            }
            if(valor.type.name == 'fighting'){
              corTipoPokemon = '#d56723';
            }
          });

          dadosPokemon = {
            indice: i,
            imagem: resposta.sprites.front_default,
            nome: resposta.name,
            tipo: tipoPokemon,
            cor: corTipoPokemon
          };

          this.data.push(dadosPokemon);
        },
        erro=>{
          console.log('erro');
        }
      );
      tipoPokemon = [];
    }
  }

  getDetalhePokemon(dados){
    this.router.navigateByUrl(`detalhesPokemon/${dados.indice}`);
  }
}
