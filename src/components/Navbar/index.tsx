import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import { useCookies } from "react-cookie";
import { useAppSelector } from "../../Redux/store";

const NavBox = styled(Box)<{ mobile: boolean }>`
  background: ${({ mobile }) => (mobile ? "#222" : "#fff")};
  transition: all 0.2s ease-in-out;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
`;

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;

  justify-content: space-between;

  .WrapRight {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    height: 100%;

    .profile-wrapper {
      padding: 1px;
      width: 40px;
      height: 40px;
      border-radius: 10px;
      border: 2px solid transparent;
      background: linear-gradient(180deg, #fff 0%, #fff 100%) padding-box,
        linear-gradient(180deg, #6a99dd 0%, #be58cb 100%) border-box;
    }
  }

  .WrapLeft {
    display: flex;
  }

  .mobile-bar {
    display: none;
    @media screen and (max-width: 840px) {
      display: flex;
      cursor: pointer;
      margin-left: 10px;
      transition: all 0.5s ease;
      :hover {
        color: #be58cb;
      }
    }
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  cursor: pointer;
  width: 125px;
`;

const ImgLogo = styled(Image)`
  object-fit: cover;
`;

const Menu = styled.div<{ mobile: boolean }>`
  display: flex;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 840px) {
    position: absolute;
    transition: ${({ mobile }) => mobile && "all 0.4s ease"};
    width: 100%;
    transform: ${({ mobile }) =>
      mobile ? "translateY(80px)" : "translateY(-100%)"};
    height: auto;
    gap: 10px;
    background: #333;
    top: 0;
    left: 0;
    box-shadow: 0 0 30px 10px inset rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid #222;
    flex-direction: column;
  }
`;

const MenuItem = styled.li<{ mobile: boolean; active: boolean }>`
  list-style: none;
  cursor: pointer;
  color: ${({ active }) => active && "#be58cb"};

  :hover {
    text-shadow: 0 15px 10px #be58cb;
  }

  @media screen and (max-width: 840px) {
    width: 100%;
    transition: all 0.5s ease;
    padding: 2rem 0;
    color: #fff;
    text-align: center;
    :hover {
      background-color: #be58cb;
    }
  }
`;

const SignInRegisItem = styled.div<{ active: boolean; mobile: boolean }>`
  font-weight: bold;
  background: linear-gradient(180deg, #be58cb 0%, #f10e5a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  border-radius: ${({ active }) => active && "12px"};
  box-shadow: ${({ active }) => active && "0px 0px 5px 3px rgba(0, 0, 0, 0.1)"};
  box-shadow: ${({ active, mobile }) =>
    active && mobile && "0px 0px 5px 3px rgba(255, 255, 255, .5)"};
  cursor: pointer;
  padding: 6px 20px;
  text-align: center;

  @media screen and (max-width: 360px) {
    padding: 6px 5px;
  }
`;

const NotifyWrapper = styled.div`
  position: relative;
  display: flex;
  background-color: #eee6e6;
  padding: 8px;
  cursor: pointer;
  border-radius: 10px;

  .iconNotify {
    background: linear-gradient(180deg, #6a99dd 0%, #be58cb 100%);
    -webkit-background-clip: text;
    font-size: 20px;
    -webkit-text-fill-color: transparent;
  }

  .numberNotify {
    position: absolute;
    right: -10px;
    color: #fff;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    background: linear-gradient(180deg, #6a99dd 0%, #be58cb 100%);
    border-radius: 50%;
    top: -5px;
  }
`;

export const LinkItem: React.FC<any> = ({
  href,
  path,
  children,
  mobile,
  menu,
  setMobile,
}) => {
  const active = path === href;
  return (
    <>
      <Link href={href} passHref>
        {menu ? (
          <MenuItem
            active={active}
            mobile={mobile}
            onClick={() => setMobile(!mobile)}
          >
            {children}
          </MenuItem>
        ) : (
          <SignInRegisItem mobile={mobile} active={active}>
            {children}
          </SignInRegisItem>
        )}
      </Link>
    </>
  );
};

interface PropsNav {
  path: any;
}

interface IStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

const Navbar: React.FC<PropsNav> = (props) => {
  const [mobile, setMobile] = useState<boolean>(false);
  const { path } = props;
  const matchesMobile = useMediaQuery("(min-width:840px)");
  const { member_email } = useAppSelector((state) => state.UserReducer);

  if (mobile && matchesMobile) setMobile(false);

  console.log("Email: ", member_email);
  return (
    <NavBox width="100%" mobile={mobile}>
      <NavContainer>
        <div className="WrapLeft">
          <Link href="/" passHref>
            <LogoWrapper>
              <ImgLogo
                src="/logo/logoTam.png"
                width="100%"
                height="78"
                alt="logo"
              />
            </LogoWrapper>
          </Link>

          <Menu mobile={mobile}>
            <LinkItem
              href="/"
              mobile={mobile}
              path={path}
              menu={true}
              setMobile={setMobile}
            >
              Home
            </LinkItem>
            <LinkItem
              href="/register"
              mobile={mobile}
              path={path}
              menu={true}
              setMobile={setMobile}
            >
              About
            </LinkItem>
            <LinkItem
              href="/blog"
              mobile={mobile}
              path={path}
              menu={true}
              setMobile={setMobile}
            >
              Blog
            </LinkItem>
            <LinkItem
              href="/page"
              mobile={mobile}
              path={path}
              menu={true}
              setMobile={setMobile}
            >
              Page
            </LinkItem>
            <LinkItem
              href="/contact"
              mobile={mobile}
              path={path}
              menu={true}
              setMobile={setMobile}
            >
              Contact
            </LinkItem>
          </Menu>
        </div>
        {!member_email ? (
          <div className="WrapRight" style={{ gap: "20px" }}>
            <LinkItem
              href="/contact"
              mobile={mobile}
              path={path}
              menu={true}
              setMobile={setMobile}
            >
              + เขียนสูตรอาหาร
            </LinkItem>
            <Divider orientation="vertical" flexItem />
            <LinkItem
              href="/contact"
              mobile={mobile}
              path={path}
              menu={true}
              setMobile={setMobile}
            >
              My Recipes
            </LinkItem>
            <NotifyWrapper>
              <p className="numberNotify">1</p>
              <i className="fa-solid fa-bell iconNotify"></i>
            </NotifyWrapper>
            <div className="profile-wrapper">
              <Image
                src="/img/profile/IMG_8877.png"
                width="100%"
                height="100%"
                alt="profile"
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>
        ) : (
          <ul className="WrapRight">
            <LinkItem href="/signIn" mobile={mobile} menu={false} path={path}>
              Sign In
            </LinkItem>
            <LinkItem href="/register" mobile={mobile} path={path} menu={false}>
              Register
            </LinkItem>
          </ul>
        )}

        {!mobile ? (
          <i
            onClick={() => setMobile(!mobile)}
            className="fa-solid fa-bars mobile-bar"
          />
        ) : (
          <i
            onClick={() => setMobile(!mobile)}
            style={{ color: "#fff" }}
            className="fa-solid fa-circle-xmark mobile-bar"
          ></i>
        )}
      </NavContainer>
    </NavBox>
  );
};

export default Navbar;
