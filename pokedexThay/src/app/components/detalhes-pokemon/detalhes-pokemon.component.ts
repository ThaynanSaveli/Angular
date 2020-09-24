import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-detalhes-pokemon',
  templateUrl: './detalhes-pokemon.component.html',
  styleUrls: ['./detalhes-pokemon.component.css']
})
export class DetalhesPokemonComponent {

  pokemon: any = '';
  tipoPokemon = [];
  habilidades = [];
  fotoPokemon = '';
  corTipoPokemon = '';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private pokemonService: PokemonService, private breakpointObserver: BreakpointObserver,
    private activatedRouter: ActivatedRoute, private router: Router) {
      this.activatedRouter.params.subscribe(
        params => {
          this.getPokemon(params['id']);
        }
      );
    }

  voltarParaLista(){
    this.router.navigateByUrl('/listaDePokemons');
  }

  getPokemon(id){
    this.pokemonService.getPokemons(id).subscribe(
      resposta => {
        this.pokemon = resposta;
        this.fotoPokemon = this.pokemon.sprites.front_default;
        this.tipoPokemon = this.pokemon.types[0].type.name;

        if(resposta.types[0].type.name == 'bug'){
          this.corTipoPokemon = '#729f3f';
        }
        if(resposta.types[0].type.name == 'poison'){
          this.corTipoPokemon = '#b97fc9';
        }
        if(resposta.types[0].type.name == 'fire'){
          this.corTipoPokemon = '#fd7d24';
        }
        if(resposta.types[0].type.name == 'water'){
          this.corTipoPokemon = '#4592c4';
        }
        if(resposta.types[0].type.name == 'flying'){
          this.corTipoPokemon = '#3dc7ef';
        }
        if(resposta.types[0].type.name == 'eletric'){
          this.corTipoPokemon = '#eed535';
        }
        if(resposta.types[0].type.name == 'ground'){
          this.corTipoPokemon = '#ab9842';
        }
        if(resposta.types[0].type.name == 'psychic'){
          this.corTipoPokemon = '#f366b9';
        }
        if(resposta.types[0].type.name == 'steel'){
          this.corTipoPokemon = '#9eb7b8';
        }
        if(resposta.types[0].type.name == 'ice'){
          this.corTipoPokemon = '#51c4e7';
        }
        if(resposta.types[0].type.name == 'normal'){
          this.corTipoPokemon = '#a4acaf';
        }
        if(resposta.types[0].type.name == 'fairy'){
          this.corTipoPokemon = '#fdb9e9';
        }
        if(resposta.types[0].type.name == 'grass'){
          this.corTipoPokemon = '#9bcc50';
        }
        if(resposta.types[0].type.name == 'fighting'){
          this.corTipoPokemon = '#d56723';
        }
        let habilidadesPoke = [];
        resposta.abilities.forEach(function (valor, indice) {
          habilidadesPoke.push(valor.ability.name);
        });

        this.habilidades = habilidadesPoke;
      },
      erro =>{
        
      }
    );
  }
}
