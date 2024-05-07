import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { PhoneType } from "./phones";
import Button from "../components/button";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const schema = yup.object().shape({
  brand: yup.string().required("Brand name is required"),
  model: yup.string().required("Model name is required"),
  price: yup
    .number()
    .typeError("Amount must be a number")
    .positive("Age must be a positive number")
    .required("First name is required"),
  color: yup.string().required("Color is required"),
  storage: yup.string().required("Storage is required"),
});

type FormValues = Omit<PhoneType, "id">;

type Props = {
  isEdit: boolean;
};

const PhonesCreate = ({ isEdit }: Props) => {
  const navigate = useNavigate();
  const { id } = useParams() as { id: string };
  const [data, setData] = useState<PhoneType>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const getData = (id: string) => {
    fetch(`http://localhost:3000/phones/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log(res.statusText);
          alert(res.statusText);
          return;
        }
      })
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    if (isEdit) {
      getData(id);
    }
  }, []);

  useEffect(() => {
    if (isEdit && data) {
      reset({ ...data });
    }
  }, [reset, data]);

  const postData = (values: PhoneType) => {
    fetch("http://localhost:3000/phones", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(() => {
        //success
        navigate("/phones");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editData = (id: string, values: PhoneType) => {
    fetch(`http://localhost:3000/phones/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          alert(res.statusText);
          return;
        }
      })
      .then(() => {
        //go back
        navigate(-1);
      });
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const values: PhoneType = {
      ...data,
      id: isEdit ? id : uuidv4(),
    };

    if (isEdit) {
      editData(id, values);
    } else {
      postData(values);
    }
  };

  return (
    <>
      <form className="phone-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="field field--food">
          <label className="field__label" htmlFor="firstName">
            Brand
          </label>
          <input
            className="input"
            type="text"
            id="brand"
            {...register("brand")}
          />
          {errors.brand && (
            <p className="field__validation">{errors.brand.message}</p>
          )}
        </div>
        <div className="field field--food">
          <label className="field__label" htmlFor="model">
            Model
          </label>
          <input
            className="input"
            type="text"
            id="model"
            {...register("model")}
          />
          {errors.model && (
            <p className="field__validation">{errors.model.message}</p>
          )}
        </div>
        <div className="field field--food">
          <label className="field__label" htmlFor="color">
            Color
          </label>
          <input
            className="input"
            type="string"
            id="color"
            {...register("color")}
          />
          {errors.color && (
            <p className="field__validation">{errors.color.message}</p>
          )}
        </div>
        <div className="field field--food">
          <label className="field__label" htmlFor="storage">
            Storage
          </label>
          <input
            type="text"
            className="input"
            id="storage"
            {...register("storage")}
          />
          {errors.storage && (
            <p className="field__validation">{errors.storage.message}</p>
          )}
        </div>
        <div className="field field--food">
          <label className="field__label" htmlFor="price">
            price
          </label>
          <input
            type="number"
            className="input"
            id="price"
            {...register("price")}
          />
          {errors.price && (
            <p className="field__validation">{errors.price.message}</p>
          )}
        </div>
        <Button color="blue">{isEdit ? "Edit phone" : "Create new"}</Button>
      </form>
    </>
  );
};
export default PhonesCreate;
