import { useNavigate } from "react-router-dom";

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
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
    name: "gta V",
    developer: "Rockstar Games",
    rating: "9/10",
    onlinePvP: true,
    price: 29,
  },
  {
    id: "Baldurs-Gate-3",
    imgUrl:
      "https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7b.jpg",
    name: "Baldur's Gate 3",
    developer: "Larian Studios",
    onlinePvP: false,
    price: 59,
    rating: "10/10",
  },
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
