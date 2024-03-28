import { useState } from "react";
import IconClose from "../assets/close";
import IconDelete from "../assets/delete";

type FruitType = {
  id: string;
  name: string;
  color: string;
};

const fruitData: FruitType[] = [
  {
    id: "001",
    name: "Clementine",
    color: "Orange",
  },
  {
    id: "002",
    name: "Cherry",
    color: "Red",
  },
  {
    id: "003",
    name: "Fig",
    color: "Green/Purple",
  },
  {
    id: "004",
    name: "Kiwi",
    color: "green",
  },
  {
    id: "005",
    name: "Lemon",
    color: "yellow",
  },
  {
    id: "006",
    name: "Olive",
    color: "green",
  },
  {
    id: "007",
    name: "Orange",
    color: "Orange",
  },
  {
    id: "008",
    name: "Pear",
    color: "Green",
  },
  {
    id: "009",
    name: "Pineapple",
    color: "yellow",
  },
  {
    id: "010",
    name: "Watermelon",
    color: "red",
  },
];

const Gallery = () => {
  const [data, setData] = useState<FruitType[]>(fruitData);
  const [activeItem, setActiveItem] = useState<FruitType | null>(null);

  const handleActiveItem = (fruit: FruitType) => {
    setActiveItem(fruit);
  };

  const handleDelete = (id: string) => {
    const newState = data.filter((item) => item.id !== id);
    setData(newState);
  };

  return (
    <>
      <h1>Gallery</h1>
      <hr />
      <div className="gallery">
        {data.map((fruit) => {
          return (
            <img
              onClick={() => handleActiveItem(fruit)}
              className="gallery__img"
              key={fruit.id}
              src={`https://source.unsplash.com/random/?${fruit.name}`}
              alt={`${fruit.name}`}
            />
          );
        })}
      </div>
      {activeItem && (
        <>
          <div className="gallery__modal">
            <div
              className="gallery__delete"
              onClick={() => {
                handleDelete(activeItem.id);
                setActiveItem(null);
              }}
            >
              <IconDelete />
            </div>
            <div className="gallery__close" onClick={() => setActiveItem(null)}>
              <IconClose />
            </div>
            <div className="gallery__info">
              <div>Name: {activeItem.name}</div>
              <div>Color: {activeItem.color}</div>
            </div>
            <img
              src={`https://source.unsplash.com/random/?${activeItem.name}`}
              alt={activeItem.name}
            />
          </div>
          <div
            className="gallery__overlay"
            onClick={() => setActiveItem(null)}
          ></div>
        </>
      )}
    </>
  );
};
export default Gallery;
