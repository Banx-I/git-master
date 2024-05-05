import { useNavigate } from "react-router-dom";
import Cup from "./../assets/IMG_20240427_125619.jpg"

export type GameType = {
  id: string;
  imgUrl: string;
  name: string;
  developer: string;
  rating: string;
  onlinePvP: boolean;
  price: number;
  
};
export const gamesData: GameType[] = [
  {
    id: "gta-v",
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
    name: "GTA V",
    developer: "Rockstar Games",
    rating: "9/10",
    onlinePvP: true,
    price: 29,
  },
  {
    id: "Baldurs-Gate-3",
    imgUrl: "https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7b.jpg",
    name: "Baldur's Gate 3",
    developer: "Larian Studios",
    rating: "10/10",
    onlinePvP: false,
    price: 59,
  },
  {
    id: "Cup",
    imgUrl: Cup,
    name: "Gulaš u glinenom ćupu",
    developer: "Jelo starih naroda",
    rating: "Recept klikom na sliku",
    onlinePvP: false,
    price: 99,
  },
  {
    id: "the-witcher-3",
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/0c/The_Witcher_3_cover_art.jpg",
    name: "The Witcher 3: Wild Hunt",
    developer: "CD Projekt Red",
    rating: "9.8/10",
    onlinePvP: false,
    price: 39,
  },
  {
    id: "horizon-zero-dawn",
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/f5/Horizon_Zero_Dawn.jpg",
    name: "Horizon Zero Dawn",
    developer: "Guerrilla Games",
    rating: "9.5/10",
    onlinePvP: false,
    price: 49,
  },
  {
    id: "assassins-creed-valhalla",
    imgUrl: "=",
    name: "Assassin's Creed Valhalla",
    developer: "Ubisoft",
    rating: "9.2/10",
    onlinePvP: true,
    price: 59,
  }
];


const Games = () => {
  const navigate = useNavigate();

  const goTo = (gameId: string) => {
    navigate(gameId);
  };

  return (
    <>
      <div className="games__grid">
        {gamesData.map((game) => {
          return (
            <div
              key={game.id}
              onClick={() => goTo(game.id)}
              className="games__card"
            >
              <img className="games__img" src={game.imgUrl} alt="" />
              <h2 className="games__name">{game.name}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Games;
