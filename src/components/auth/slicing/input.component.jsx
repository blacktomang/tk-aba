import React from "react";
import { AuthInputContainer, Submit } from "./input.styles";

function InputAuthField({ label, name, type, value }) {
  return (
    <>
        {type === "submit" ? (
          <Submit type="submit" value={value} />
        ) : (
          <>
          <AuthInputContainer>
            <input
              type={type}
              name={name}
              id={name}
              required
              autoComplete="off"
            />
            <label htmlFor={name}>{label}</label>
      </AuthInputContainer>
          </>
        )}
    </>
  );
}

export default InputAuthField;
