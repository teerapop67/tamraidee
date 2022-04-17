import type { NextPage } from "next";
import Head from "next/head";
import AuthInput from "../src/components/Auth";
import LandingAuth from "../src/components/Auth/LandingAuth";
import { BtnAuth } from "../src/components/Buttons";
import { RegisterSignBox } from "./register";
import { useEffect, useState } from "react";
import { dispatchUser, getAllUser } from "../src/hook/allUser";
import { AlertWarnings, AlertWrapper } from "../src/components/Alert";
import { IUser } from "../src/Redux/userReducer";
import { useAppDispatch } from "../src/Redux/store";
import { useRouter } from "next/router";

const SignInPage: NextPage = (props) => {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [textAlert, setTextAlert] = useState("");
  const [alertPopup, setAlertPopup] = useState(false);
  const dispatch = useAppDispatch();
  const signInInput = [
    { name: "Email", type: "email", propSet: setEmail },
    { name: "Password", type: "password", propSet: setPassword },
  ];
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      let allUser = await getAllUser();
      setUser(allUser);
    };
    fetchData();
  }, [user]);

  const handleSignIn = async () => {
    user.map((item: IUser, index: number) => {
      if (item.member_email === email && item.member_password === password) {
        setTextAlert("Welcome To My World");
        setAlertPopup(true);
        dispatchUser(item, dispatch);
        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else if (item.member_email === email) {
        setTextAlert("Your Password is wrong !");
        setAlertPopup(true);
      } else if (item.member_password === password) {
        setTextAlert("Your Email is wrong !");
        setAlertPopup(true);
      } else {
        setTextAlert("Please Enter Email and Password !");
        setAlertPopup(true);
      }
    });
  };

  return (
    <>
      <Head>
        <title>Tam Rai Dee - Sign In</title>
      </Head>

      <LandingAuth>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            marginBottom: "10rem",
          }}
        >
          <RegisterSignBox>
            <AuthInput inputType={signInInput} authType="signIn" />
          </RegisterSignBox>
          <BtnAuth
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSignIn}
          >
            Sign In
          </BtnAuth>
        </div>
        <AlertWrapper alertPopup={alertPopup}>
          {textAlert === "Welcome To My World" ? (
            <AlertWarnings
              type="fa-brands fa-adn"
              setAlertPopup={setAlertPopup}
              success={true}
            >
              {textAlert}
            </AlertWarnings>
          ) : (
            <AlertWarnings
              type="fa-solid fa-circle-exclamation"
              setAlertPopup={setAlertPopup}
            >
              {textAlert}
            </AlertWarnings>
          )}
        </AlertWrapper>
      </LandingAuth>
    </>
  );
};

export default SignInPage;
