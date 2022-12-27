import { NextPage } from 'next';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';


interface Props {
    pokemons:number[];
}

export const FavoritesPokemons:NextPage<Props> = ({pokemons}) => {
  return (
    <div>
            <h1 style={{color:"#000"}} >Favoritos</h1>
        {
            pokemons.map(id => {
            return(
             <FavoriteCardPokemon key={id} pokemonId={id}/>
            )
            })
        }


        </div>
  )
}
