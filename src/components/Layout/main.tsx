import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import styled, { keyframes } from "styled-components";
import Link from "next/link";

const ArrowAnimate = keyframes`
  from { transform: translateY(5px) },
  to { transform: translateY(-1px)}
`;

const ArrowScroll = styled.div`
  position: fixed;
  right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 30px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background: linear-gradient(180deg, #be58cb 0%, #f10e5a 100%);
  box-shadow: 0px 2px 4px rgba(51, 51, 51, 0.25);
  animation: ${ArrowAnimate} 0.5s alternate ease-in-out infinite;
`;

const Main: React.FC<any> = ({ children, router }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  return (
    <>
      <Navbar path={router.asPath} />
      <div>{children}</div>
      <Footer />
      {scrollPosition > 400 && (
        <Link href={router.asPath} passHref>
          <ArrowScroll>
            <i className="fa-solid fa-arrow-up" style={{ color: "#fff" }}></i>
          </ArrowScroll>
        </Link>
      )}
    </>
  );
};

export default Main;
