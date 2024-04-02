"use client";
import { randomChar, getSpecialChar } from "../components/utils";
import React, { useState } from "react";
import { FaClipboard } from "react-icons/fa";
import { Black_Han_Sans } from "next/font/google";
import { useForm } from "../components/useForm";
import { toast } from "react-hot-toast";
const black = Black_Han_Sans({ subsets: ["latin"], weight: "400" });

export default function Form() {
  const [values, setValue] = useForm({
    length: 6,
    capital: true,
    small: true,
    number: false,
    special: true,
  });

  const [result, setResult] = useState("");

  const arrayFields = [
    {
      fields: values.capital,
      getChar: () => randomChar(65, 90),
    },
    {
      fields: values.small,
      getChar: () => randomChar(97, 122),
    },
    {
      fields: values.number,
      getChar: () => randomChar(48, 57),
    },
    {
      fields: values.special,
      getChar: () => getSpecialChar(),
    },
  ];

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    let generatedPassword = "";
    const checkedFields = arrayFields.filter(({ fields }) => fields);

    for (let i = 0; i < values.length; i++) {
      const index = Math.floor(Math.random() * checkedFields.length);
      const letter = checkedFields[index]?.getChar();

      if (letter) {
        generatedPassword += letter;
      }
    }
    if (generatedPassword) {
      setResult(generatedPassword);
    } else {
      console.error("Please select at least one option");
    }
  };

  const handleClipboard = async () => {
    if (result) {
      await navigator.clipboard.writeText(result);
      toast.success("Copied to your clipboard");
    } else {
      toast.error("No password to copy");
    }
  };

  return (
    <div className="flex justify-center pt-10 h-max">
      <form
        className="bg-gray-100 rounded-lg shadow-md p-8 space-y-6 max-w-xl w-full"
        onSubmit={handleOnSubmit}
      >
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Enter your password"
            value={result}
            readOnly
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            type="button"
            className="bg-blue-500 text-white p-2 rounded-lg ml-2 transition-transform hover:scale-110"
          >
            <FaClipboard className="text-xl" onClick={handleClipboard} />
          </button>
        </div>

       
        <div className="flex justify-between items-center">
          <label htmlFor="length">Length:</label>
          <input
            type="number"
            name="length"
            value={values.length}
            onChange={setValue}
            id="length"
            min={6}
            max={10}
            className="px-4 py-2 border rounded-lg w-20 text-center"
          />
        </div>

        <div className="flex justify-between">
          <label htmlFor="Capital">Include Capital:</label>
          <input
            type="checkbox"
            id="Capital"
            name="capital"
            checked={values.capital}
            onChange={setValue}
          />
        </div>

        <div className="flex justify-between">
          <label htmlFor="Small">Include Small:</label>
          <input
            type="checkbox"
            id="Small"
            name="small"
            checked={values.small}
            onChange={setValue}
          />
        </div>

        <div className="flex justify-between">
          <label htmlFor="Number">Include Number:</label>
          <input
            type="checkbox"
            id="Number"
            name="number"
            checked={values.number}
            onChange={setValue}
          />
        </div>

        <div className="flex justify-between">
          <label htmlFor="Symbol">Include Symbol:</label>
          <input
            type="checkbox"
            id="Symbol"
            name="symbol"
            checked={values.symbol}
            onChange={setValue}
          />
        </div>

        <button
          type="submit"
          className={`bg-blue-600 text-white p-3 rounded-lg transition-transform hover:scale-110 w-full ${black.className} transition-colors hover:bg-blue-700`}
        >
          Generate Password
        </button>
      </form>
    </div>
  );
}
