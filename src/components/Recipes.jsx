import React, { useState } from 'react'

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4
}

const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 4
}

console.log(elvenShieldRecipe)
console.log(elvenGauntletsRecipe)

function Recipes() {
  const [recipes, setRecipes] = useState({})
  console.log({ recipes })
  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipes(elvenShieldRecipe)}>Elven Shield Recipe</button>
      <button onClick={() => setRecipes(elvenGauntletsRecipe)}>Elven Gauntlet Recipe</button>

      <ul>
        {Object.keys(recipes).map(material => <li key={material}>{material}: {recipes[material]}</li>)}
      </ul>
    </div>
  )
}

export default Recipes