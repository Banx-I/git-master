import sedanCar from "../assets/sedan.png";
import suvCar from "../assets/pngwing.com.png";
import luxuryCar from "../assets/supercar.png";

type CarType = {
  title: string;
  description: string[][];
  img: string | undefined;
};

const data: CarType[] = [
  {
    title: "SEDANS",
    description: [
      ["Choose a sedan for its affordability and excellent fuel economy."],
      ["Ideal for cruising in the city or on your next road trip."],
      ["Spacious seating for up to five passengers."],
      ["Advanced safety features for peace of mind."],
      ["Great for daily commuting or long-distance travel."]
    ],
    img: sedanCar,
  },
  {
    title: "SUVS",
    description: [
      ["Choose a sedan for its affordability and excellent fuel economy."],
      ["Ideal for cruising in the city or on your next road trip."],
      ["Spacious seating for up to five passengers."],
      ["Advanced safety features for peace of mind."],
      ["Great for daily commuting or long-distance travel."]
    ],
    img: suvCar,
  },
  {
    title: "LUXURY",
    description: [
      ["Choose a sedan for its affordability and excellent fuel economy."],
      ["Ideal for cruising in the city or on your next road trip."],
      ["Spacious seating for up to five passengers."],
      ["Advanced safety features for peace of mind."],
      ["Great for daily commuting or long-distance travel."]
    ],
    img: luxuryCar,
  },
];

const Cars = () => {
  return (
    <>
      <div className="cars">
        {data.map((car) => {
          return (
            <div key={car.title} className="cars__card">
              <img
                className="cars__img"
                src={car.img}
                alt="Icon of a sedan car"
              />
              <h2 className="cars__title">{car.title}</h2>
              <ul className="cars__desc">
            {car.description.map((item, index) => (
              <li key={index}>
                 {item}
              </li>
            ))}
          </ul>
              <button className="cars__btn">Learn More</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cars;
