import { useParams } from "react-router-dom";
import { GameType, gamesData } from "./games";
import { useEffect, useState } from "react";


const GameInfo = () => {
  const { gameId } = useParams();
  const [data, setData] = useState<GameType>();

  const getGameInfo = () => {
    const game = gamesData.find((game) => {
      return game.id === gameId;
    });
    setData(game);
  };

  useEffect(() => {
    getGameInfo();
  }, []);

  return (
    <>
      {data ? (
        <>
          <div className="games">
            <img className="games--left" src={data.imgUrl} alt={data.name} />
            <div className="games--right">
              <h1>{data.name}</h1>
              <div>{data.developer}</div>
              <div>Online PvP: {data.onlinePvP ? "yes" : "no"}</div>
              <div>
                <b>{data.price}$</b>
              </div>
              <div>{data.rating}</div>
            </div>
          </div>
        </>
      ) : (
        <div>
          Igrica sa nazivom <b>{gameId}</b> ne postoji u našoj bazi podataka
        </div>
      )}
    </>
  );
};
export default GameInfo;
