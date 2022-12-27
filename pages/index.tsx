
import styles from '../styles/Home.module.css'

import {NextPage,GetStaticProps} from 'next'

import { pokeApi } from '../api';
import { Layout } from "../components/layouts";
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon';


<link rel="stylesheet" href="https://kit-free.fontawesome.com/releases/latest/css/free.min.css" media="all"></link>

interface Props {
  pokemons:SmallPokemon[];
}

 const HomePage:NextPage<Props> =  ({pokemons})=> {
  return (
    <Layout title="Listado de pokemons" >

        <div className={styles.container__cards}>
        {
          pokemons.map( (pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>
          ))
        }
        
      </div>
    </Layout>
  )
}

// getStaticProps : solo se ejecuta en el lado del servidor y solo se ejecuta en el build
// exepto cuando estamos en desarrollo

export const getStaticProps:GetStaticProps =  async(txt) => {
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=99')

 const pokemons:SmallPokemon[] = data.results.map((poke,i)=>({
  ...poke,
  id:i+1,
  img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
 }))
  return {
    props: {
      pokemons
    }, // will be passed to the page component as props
  }
}

export default HomePage;