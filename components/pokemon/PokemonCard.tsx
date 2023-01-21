import{FC}from'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image';

import { SmallPokemon } from "../../interfaces"
import { useRouter } from 'next/router';

interface Props {
    pokemon:SmallPokemon
}

export const PokemonCard:FC<Props> = ({pokemon}) => {
    const {id,name,img} = pokemon;

    const router = useRouter()
    const onClick = ()=>{

      router.push(`/name/${ pokemon.name }`)
    }
  return (
    <div className={styles.card} key={id} onClick={onClick}>
            <div 
                className={styles.cover__card}>
                <Image 
                src={img}
                width={300}
                height={180}
                alt="poke"
                priority
                />
            </div>
            <h2>{name}</h2>
            <hr/>
            <div className={styles.footer__card}>
                <h3 className={styles.user__name}>id:{id}</h3>
            </div>
        </div>
  )
}
