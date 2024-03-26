import { useState } from "react";
import Button from "../components/button";

type ProfileType = {
  name: string;
  lastName: string;
  age: number;
  gender: boolean;
  profilePicture?: string;
};

type BookType = {
  title: string;
  author: string;
  pages: number;
  hardCovers: boolean;
};

const defaultProfileValues: ProfileType = {
  age: 30,
  gender: false,
  lastName: "Sakoman",
  name: "Ivan",
  profilePicture:
    "https://pbs.twimg.com/profile_images/1572397599323291649/W8RTbXWI_400x400.jpg",
};

const DataTypes = () => {
  const [name, setName] = useState<string>("");
  const [names, setNames] = useState<string[]>(["Ivan", "Jelena"]);
  const [homeNumber, setHomeNumber] = useState<number>(5);
  const [grades, setGrades] = useState<number[]>([
    5, 1, 2, 5, 2, 1, 1, 3, 1, 3, 4,
  ]);
  const [profile, setProfile] = useState<ProfileType>(defaultProfileValues);
  const [books, setBooks] = useState<BookType[]>([]);
  const [wc, setWc] = useState<boolean>(false);

  const plasticSurgery = () => {
    const newState: ProfileType = {
      ...profile,
      gender: !profile.gender,
    };

    setProfile(newState);
  };

  const addBook = () => {
    const newState: BookType[] = [
      {
        title: "Petar Pan",
        author: "Nemam pojma",
        hardCovers: false,
        pages: 30,
      },
    ];
    setBooks(newState);
  };

  return (
    <>
      <h1>String</h1>
      <div>{name ? name : "Trenutno ime ne postoji. Molimo dodajte ime."}</div>
      <Button
        onClick={() => {
          setName("Igor");
        }}
      >
        Change name
      </Button>
      <hr />
      <h1>Array stringova</h1>
      <div>
        {names.length > 0
          ? names.map((name, index) => {
              return <div key={index}>{name}</div>;
            })
          : "Nema imena u ovom nizu. Dodajte bar jedno ime kako bi ga vidjeli."}
        <Button
          onClick={() => {
            const newState = [...names, "Igor", "Gabrijel", "Mario"];
            setNames(newState);
          }}
        >
          Change names
        </Button>
      </div>
      <hr />
      <h1>Number</h1>
      <div>
        {homeNumber > 0
          ? homeNumber
          : "Kućni broj ne može biti nula ili manji od nule."}
        <Button onClick={() => setHomeNumber(50)}>Change home number</Button>
      </div>
      <hr />
      <h1>Array brojeva</h1>
      <div>
        {grades.length > 0
          ? grades.map((grade, index) => {
              return <div key={index}>{grade > 0 && grade < 6 && grade}</div>;
            })
          : "Nema ocjena"}
        <Button
          onClick={() => {
            let newState: number[] = [];

            grades.forEach((grade) => {
              if (grade > 1) {
                newState.push(grade);
              }
            });
            setGrades(newState);
          }}
        >
          Obriši sve jedinice
        </Button>
      </div>
      <hr />
      <h1>Objekt</h1>
      <div>
        {profile.profilePicture ? (
          <img width={30} src={profile.profilePicture} alt="Profile picture" />
        ) : undefined}

        <div>
          {profile.name}&nbsp;{profile.lastName},{profile.age}
        </div>
        <div>{!profile.gender ? "♀️" : "♂️"}</div>
        <Button onClick={() => plasticSurgery()}>Change gender</Button>
      </div>
      <hr />
      <h1>Array objekata</h1>
      <div>
        {books.length > 0
          ? books.map((book) => {
              return (
                <>
                  <div key={book.title}>
                    {book.title}, {book.author}
                    <div>broj stranica: {book.pages}</div>
                    <div>tvrde korice: {book.hardCovers ? "da" : "ne"}</div>
                  </div>
                </>
              );
            })
          : "Trenutno ne postoji niti jedna knjiga za prikaz"}
        <Button onClick={addBook}>Dodaj knjigu</Button>
      </div>
      <hr />
      <h1>Boolean</h1>
      <div>{wc ? "ima ga" : "nema ga"}</div>
      <Button
        onClick={() => {
          setWc(!wc);
        }}
      >
        Call Toi Toi
      </Button>
    </>
  );
};

export default DataTypes;
