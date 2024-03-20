import { useEffect, useState } from "react";
import Tag from "../components/tag";

type PokemonType = {
  name: string;
  order: number;
  sprites: {
    front_default: string;
    front_shiny: string;
  };
  abilities: PokemonAbilityType[];
  types: PokemonTypeType[];
};

type PokemonAbilityType = {
  ability: {
    name: string;
  };
};

type PokemonTypeType = {
  type: {
    name: string;
  };
};

const Mewtwo = () => {
  const [pokemonData, setPokemonData] = useState<PokemonType | null>(null);

  const getData = async () => {
    await fetch("https://pokeapi.co/api/v2/pokemon/mewtwo")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPokemonData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {pokemonData ? (
        <>
          <h1>
            #{pokemonData.order} | {pokemonData.name}
          </h1>
          <div>
            <div className="mb-2">
              Abilities:&nbsp;
              {pokemonData.abilities.map((ability, index) => {
                return <Tag key={index}>{ability.ability.name}</Tag>;
              })}
            </div>
            <div>
              Types:&nbsp;
              {pokemonData.types.map((type, index) => {
                return <Tag key={index}>{type.type.name}</Tag>;
              })}
            </div>
          </div>
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name + "picture"}
          />
        </>
      ) : (
        "Još nismo dohvatili podatke"
      )}
    </>
  );
};
export default Mewtwo;
