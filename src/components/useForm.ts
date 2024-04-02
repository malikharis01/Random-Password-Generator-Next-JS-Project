import React from "react";
import { useState } from "react";

export function useForm(initialValues: any) {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (e: any) => {
      console.log(e.target.type);
      setValues({
        ...values,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      });
    },
  ];
}
