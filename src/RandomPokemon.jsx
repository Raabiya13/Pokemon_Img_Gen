import PokemonImgGen from "./PokemonImgGen";
import "./RandomPokemon.css"
export default function RandomPokemon(){
    const random_num= Math.floor((Math.random() * 151)+1);
     const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${random_num}.png`;
    return(
        <>
        <h1>Click to reveal your Favorite Pokémon! </h1>
        <div className="PokemonCard">
        <h1 className="PokemonNum">Pokémon Number : {random_num}</h1>
        <img src={url} alt=""/>

        
        </div>
        <PokemonImgGen/>
        </>
        
    );
}