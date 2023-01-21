import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
// import Image from 'next/image';
import { NextPage, GetStaticPaths, GetStaticProps} from 'next';

import confetti from 'canvas-confetti'

// import { pokeApi } from '../../api';
import { Pokemon } from '../../interfaces';
import { localFavorites } from '../../utils';
import Image from 'next/image';
import { getPokemonInfo } from '../../utils/getPokemonInfo';


interface Props {
    pokemon:Pokemon
  
}

const PokemonPage:NextPage<Props> = ({pokemon}) => {

  const [isInFavorites, setIsInFavorites] = useState(false);
 
useEffect(() => {
    setIsInFavorites(localFavorites.existInFavorites(pokemon.id));
  }, [pokemon.id]);

  const handleFavorites = ()=>{
    // console.log("ID",pokemon.id);
    localFavorites.toggleFavorite(pokemon.id)
    setIsInFavorites(!isInFavorites)

    if (isInFavorites) return;
      confetti({
        zIndex:999,
        particleCount:100,
        spread:160,
        angle:-100,
        origin:{
          x:1,
          y:0.1
        }
      })
    
  }


    // console.log(pokemon)

 
  return (
    <Layout title={pokemon.name}>

        <h1 className='sprites'>{pokemon.name}</h1>
      <div style={{display:"grid",justifyContent:"end"}}>
      <a 
      href="#"
      className='favorites' 
      onClick={handleFavorites}
            
      >{isInFavorites?"En favoritos" : "Guardar en favoritos"}
      </a> 
      </div>
      <div className="wrapp">
        <Image
        id='current'
        className='thumb' 
          src={ pokemon.sprites.other?.dream_world.front_default || "/no-image.png"}
          width={140}
          height={140}
         alt={pokemon.name}
         />
      <Image
      className='thumb' 
        src={ pokemon.sprites.front_default}
       alt={pokemon.name}
       width={140}
       height={140}
       />
      <Image
      className='thumb' 
        src={ pokemon.sprites.back_default}
       alt={pokemon.name}
       width={140}
       height={140}
       />
      <Image
      className='thumb' 
        src={ pokemon.sprites.front_shiny}
       alt={pokemon.name}
       width={140}
       height={140}
       />
      <Image
      className='thumb' 
        src={ pokemon.sprites.back_shiny}
       alt={pokemon.name}
       width={140}
       height={140}
       />
    </div>
    </Layout>
  )
}



export const getStaticPaths:GetStaticPaths =  async(txt) => {
  const pokemons99 = [...Array(99)].map((value,i)=> `${i + 1}`);
   
    return {
        // forma de hacer uno por uno
    //   paths:[
    //     {
    //         params:{ id:"1" }
    //     },
    //     {
    //         params:{ id:"2" }
    //     },
    //     {
    //         params:{ id:"3" }
    //     },
    //   ],
        // forma de hacer dinamicamente
        paths:pokemons99.map(id => ({
            params:{id}
        })),
      // fallback:false
      fallback: 'blocking'
    }
  }


  export const getStaticProps:GetStaticProps =  async({params}) => {
    const {id} =params as {id:string}
     
    // INCREMENT STATIC GENERATION
    const pokemon = await getPokemonInfo(id)

    if ( !pokemon){
      return{
        redirect: {
          destination:"/",
          permanent: false
        }
      }
    }
  
    return {
      props: {
        pokemon
      }, // will be passed to the page component as props
      revalidate: 86400, // In seconds cada 24 horas
    }
  }

export default PokemonPage;