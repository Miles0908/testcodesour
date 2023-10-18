import { useEffect, useState } from "react"
import styles from "./CocktailList.module.scss"
import Image from "next/image";

const CocktailList= ()=>{
    const [datadrink, setDatadrink] = useState([]);

    useEffect(() => {
        fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s=")
          .then((res) => res.json())
          .then((data) => setDatadrink(data));
      }, []);
      console.log(setDatadrink)

    return (
        <div>
            <h1>Scopri gli ultimi coktail</h1>
        <div className={styles.CocktailList}>
         
       {datadrink?.drinks?.map((drink) => (
      <div className={styles.CocktailList__Card} key={drink.idDrink}>
       <img className={styles.CocktailList__Img} src={drink.strDrinkThumb} alt="Immagine Cocktail" />
        <h1>Nome Drink: {drink.strDrink}</h1>
        <p>Categoria: {drink.strCategory}</p>
        <p>Ingredienti: {drink.strIngredient1}, {drink.strIngredient2}, {drink.strIngredient3}, {drink.strIngredient4}</p>
        <p>Istruzioni: {drink.strInstructionsIT}</p>
        </div>
        ))
        .slice(0, 3)}
        </div>
        </div>
    )
}
export default CocktailList