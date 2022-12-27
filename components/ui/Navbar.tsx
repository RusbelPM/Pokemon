import Image from "next/image"
import NextLink from 'next/link'

export const Navbar = () => {
  
  return (


    <div style={{
        display:"flex",
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:"0px 20px",
        backgroundColor:"#000" 

    }}>
      <div style={{display:"flex"}}>
          <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg"
          alt="icono"
          width={50}
          height={50}
          style={{
            marginTop:"15px"
          }}
          />
          <NextLink href="/" passHref style={{display:"flex"}}>
            <h1
            style={{
              marginTop:"14px",
            }}
            >P</h1>
            <h3>okémon</h3>          

          </NextLink>
          </div>

            <NextLink href="/favoritos" passHref>
              <h3>Favoritos</h3>
            </NextLink>
      
    </div>
  )
}

