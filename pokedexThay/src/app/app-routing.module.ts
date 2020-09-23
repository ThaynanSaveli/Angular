import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalhesPokemonComponent } from './components/detalhes-pokemon/detalhes-pokemon.component';
import { ListaPokemonsComponent } from './components/lista-pokemons/lista-pokemons.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'listaDePokemons', component: ListaPokemonsComponent},
  {path: 'detalhesPokemon/:id', component: DetalhesPokemonComponent},
  {path: '', pathMatch:'full', redirectTo:'login'},
  {path: '**', pathMatch:'full', redirectTo:'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
