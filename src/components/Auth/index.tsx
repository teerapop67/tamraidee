import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: column;
`;

const InputField = styled.input`
  width: 100%;
  height: 3em;
  background: linear-gradient(0deg, #fefefe, #fefefe),
    linear-gradient(
      180deg,
      rgba(106, 153, 221, 0.2) 0%,
      rgba(190, 88, 203, 0.2) 100%
    );
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  border: none;
  padding: 0 1rem;
`;

type inputName = {
  name: string;
  type: string;
  propSet: Dispatch<SetStateAction<string>>;
};

interface PropsAuth {
  inputType: inputName[];
  authType: string;
}

const AuthInput: React.FC<PropsAuth> = (props) => {
  return (
    <>
      {props.inputType.map((input) => (
        <InputWrapper key={input.name}>
          <p>{input.name}</p>
          <InputField
            type={input.type}
            name={input.name}
            placeholder={`Enter ${input.type}`}
            onChange={(evt) => input.propSet(evt.target.value)}
          />
        </InputWrapper>
      ))}
    </>
  );
};

export default AuthInput;
