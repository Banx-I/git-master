import { useEffect } from "react";

const Croatia = () => {
  const getData = async () => {
    await fetch("https://restcountries.com/v3.1/name/croatia")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return <>Croatia</>;
};

export default Croatia;
