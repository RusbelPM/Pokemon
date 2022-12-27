import React from 'react'
import NextLink from 'next/link';

export const NoFavorites = () => {
  return (
    <div className="container">
  <div className="big_text text">
    <h1>No hay favoritos</h1>
    <p>Selecciona un favorito <NextLink href="/">Home</NextLink></p>
  </div>
</div>
  )
}
