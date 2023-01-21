import Image from 'next/image';
import styles from '../../styles/Home.module.css'
import { NextPage } from 'next';
import { useRouter } from 'next/router';

interface Props {
    pokemonId:number;
}

export const FavoriteCardPokemon:NextPage<Props> = ({pokemonId}) => {

  const router = useRouter()
  const onClick = ()=>{

    router.push(`/pokemon/${ pokemonId}`)
  }

  return (
    <div className={styles.card} key={pokemonId} onClick={onClick}>
        <div 
            className={styles.cover__card}>
            <Image 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
            width={300}
            height={180}
            priority
            alt="poke"
            />

        </div>

            <h5 style={{color:"black"}}>Favorito {pokemonId}</h5>
        {/* <h1>Descripcion</h1>*/}
    </div>
  )
}
