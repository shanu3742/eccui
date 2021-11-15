import React from 'react'


//regionName,countryName,recipeName,recipeDetils

const Recipe = ({regionName,countryName,recipeName,recipeDetils}) => {
    return (
        <>
           <div>
      <h1>Recipe {regionName} Cart</h1>
      <button>{countryName}</button>
      <p>{recipeName}</p>
      <p>hey {recipeDetils} is Osm recipe </p>
    </div>  

    
        </>
    )
}

export default Recipe
