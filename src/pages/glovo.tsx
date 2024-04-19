import { useEffect, useState } from "react";
import Button from "../components/button";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";

// Define Yup schema for validation
const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  age: yup
    .number()
    .positive("Age must be a positive number")
    .required("Age is required"),
  about: yup.string().required("About field is required"),
});

type FormValues = {
  firstName: string;
  lastName: string;
  age: number;
  about: string;
};

type ValuePiece = Date | null;

type DateValue = ValuePiece | [ValuePiece, ValuePiece];

const Glovo = () => {
  const [date, setDate] = useState<DateValue>(new Date());
  const [time, setTime] = useState<string | null>("10:00");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Kreiraj narudžbu</h1>
      <form
        className="glovo"
        onSubmit={(values) => {
          values.preventDefault();
          const formElements = values.target as HTMLFormElement;
          const formData = new FormData(formElements);
          const formValues: { [key: string]: string } = {};
          formData.forEach((value, key) => {
            formValues[key] = value as string;
          });
          //sendToServer(formData)
          console.log(formData);
        }}
      >
        <h3>Hrana</h3>
        <div className="field field--food">
          <label className="field__label" htmlFor="food">
            Odaberi jelo
          </label>
          <select className="input" name="food" id="food">
            <option value="pizza">Pizza</option>
            <option value="hamburger">Hamburger</option>
            <option value="tacos">Tacos</option>
            <option value="palacinke">Palačinke</option>
            <option value="torta_od_cokolade">Torta od čokolade</option>
          </select>
        </div>
        <div className="field field--food">
          <label className="field__label" htmlFor="quantity">
            Količina
          </label>
          <input
            className="input"
            name="quantity"
            id="quantity"
            type="number"
          />
        </div>
        <h3>Podatci za dostavu</h3>
        <div className="field field--food">
          <label className="field__label" htmlFor="fullName">
            Ime i prezime
          </label>
          <input className="input" name="fullName" id="fullName" type="text" />
        </div>
        <div className="field field--food">
          <label className="field__label" htmlFor="address">
            Adresa za dostavu
          </label>
          <input className="input" name="address" id="address" type="text" />
        </div>
        <Button color="blue">Naruči</Button>
      </form>

      <h1>React date picker</h1>
      <form className="glovo">
        <div className="field">
          <label className="field__label" htmlFor="date">
            Date
          </label>
          <DatePicker name="date" onChange={setDate} value={date} />
        </div>
        <div className="field">
          <label className="field__label" htmlFor="time">
            Time
          </label>
          <TimePicker onChange={setTime} value={time} />
        </div>
      </form>

      <h1>React Hook Forms</h1>
      <form className="glovo" onSubmit={handleSubmit(onSubmit)}>
        <div className="field field--food">
          <label className="field__label" htmlFor="firstName">
            First Name
          </label>
          <input
            className="input"
            type="text"
            id="firstName"
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="field__validation">{errors.firstName.message}</p>
          )}
        </div>
        <div className="field field--food">
          <label className="field__label" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="input"
            type="text"
            id="lastName"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="field__validation">{errors.lastName.message}</p>
          )}
        </div>
        <div className="field field--food">
          <label className="field__label" htmlFor="age">
            Age
          </label>
          <input
            className="input"
            type="number"
            id="age"
            {...register("age")}
          />
          {errors.age && (
            <p className="field__validation">{errors.age.message}</p>
          )}
        </div>
        <div className="field field--food">
          <label className="field__label" htmlFor="about">
            About
          </label>
          <textarea className="input" id="about" {...register("about")} />
          {errors.about && (
            <p className="field__validation">{errors.about.message}</p>
          )}
        </div>
        <Button color="blue">Submit</Button>
      </form>
    </>
  );
};
export default Glovo;
