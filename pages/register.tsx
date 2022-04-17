import type { NextPage } from "next";
import Box from "@mui/material/Box";
import Head from "next/head";
import AuthInput from "../src/components/Auth";
import LandingAuth from "../src/components/Auth/LandingAuth";
import styled from "styled-components";
import { BtnAuth } from "../src/components/Buttons";
import { useState } from "react";

export const RegisterSignBox = styled(Box)`
  width: 300px;
  display: grid;
  gap: 20px;
  margin-top: 4rem;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 14.1817px 68.0722px rgba(117, 120, 139, 0.1);
  border-radius: 20px;
  padding: 1rem;

  @media screen and (max-width: 840px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;

  @media screen and (max-width: 840px) {
    margin-bottom: 4rem;
  }
`;

const RegisterPage: NextPage = (props) => {
  const [dd, setDD] = useState("");

  const registerInput = [
    { name: "First Name*", type: "text", propSet: setDD },
    { name: "Last Name*", type: "text", propSet: setDD },
    { name: "User*", type: "text", propSet: setDD },
    { name: "Email*", type: "email", propSet: setDD },
    { name: "Password*", type: "password", propSet: setDD },
    { name: "Retype Password*", type: "password", propSet: setDD },
    { name: "Date*", type: "date", propSet: setDD },
  ];
  return (
    <>
      <Head>
        <title>Tam Rai Dee - Register</title>
      </Head>

      <LandingAuth>
        <Wrapper>
          <RegisterSignBox>
            <AuthInput inputType={registerInput} authType="Register" />
          </RegisterSignBox>
          <BtnAuth whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
            Register
          </BtnAuth>
        </Wrapper>
      </LandingAuth>
    </>
  );
};

export default RegisterPage;
