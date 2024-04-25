import { useEffect } from "react";

const Vjezba25042024 = () => {
  //1.Zadatak
  //Napisati funkciju koja prima niz brojeva, a vraca objekt u
  //kojemu se nalaze 2 podatka minNumber i maxNumber.
  type Value = number | null;

  type MaxValues = {
    maxNumber: Value;
    minNumber: Value;
  };

  const data01: number[] = [1, 123, 5, -234, -0, -6540.554];

  const getMaxValues = (data: number[]) => {
    let maxValue: Value = null;
    let minValue: Value = null;

    data.forEach((number) => {
      if (!maxValue || maxValue < number) {
        maxValue = number;
      }
      if (!minValue || minValue > number) {
        minValue = number;
      }
    });
    const result: MaxValues = {
      maxNumber: maxValue,
      minNumber: minValue,
    };
    return result;
  };
  const getMaxValuesV2 = (data: number[]) => {
    const result: MaxValues = {
      maxNumber: Math.max(...data),
      minNumber: Math.min(...data),
    };
    return result;
  };

  //2.Zadatak
  //kreirati funkciju koja prima broj (count), a vraca ispis
  //brojeva od 0 do broja (count) koji smo dobili kroz parametar.
  //Ako broj koji dode kroz parametar bude negativan, neka
  //funkcija vrati string "Broj ne može biti negativan."

  const countToLimit = (count: number) => {
    let result: string = "";

    for (let index = 1; index <= count; index++) {
      result += `${index === 1 ? "" : ","} ${index}`;
    }
    return result;
  };

  const countToLimitV2 = (count: number) => {
    return Array.from({ length: count }, (_, index) => index + 1).join(",");
  };

  //Triggers
  useEffect(() => {
    console.log("Zadatak#1 ", getMaxValues(data01));
    console.log("Zadatak#2V2 ", getMaxValuesV2(data01));
    console.log("Zadatak#2 ", countToLimit(5));
    console.log("Zadatak#2V2 ", countToLimitV2(5));
  }, []);
  return <>vjezba</>;
};
export default Vjezba25042024;
