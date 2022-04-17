import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const FooterBox = styled(Box)`
  background: linear-gradient(180deg, #6a99dd 0%, #be58cb 100%);
  margin: 0;
`;

const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10px;
  height: 150px;

  .box-link {
    display: flex;
    gap: 30px;

    > ul {
      list-style: none;

      > li {
        margin: 5px 0;
        color: #dbdbdb;
        cursor: pointer;
        transition: all 0.2s ease;
        :hover {
          color: #fff;
        }
      }
    }
  }

  @media screen and (max-width: 745px) {
    flex-direction: column;
    height: auto;
    gap: 10px;
  }
`;

const BoxWrapper = styled(Box)`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;

  .head-text {
    font-size: 45px;
    color: #f5f5f5;
    letter-spacing: -2.71909px;
    font-weight: 700;
    margin-bottom: 2px;

    @media screen and (max-width: 400px) {
      font-size: 30px;
    }
  }

  > span > p {
    color: #dbdbdb;
  }
`;

const Footer: React.FC<any> = () => {
  return (
    <>
      <FooterBox width="100%">
        <FooterContainer>
          <BoxWrapper>
            <Image
              src="/logo/logoTam.png"
              width="100%"
              height="100%"
              objectFit="cover"
            />
            <span>
              <h1 className="head-text">Tam Rai Dee</h1>
              <p>Make your stream more virtual</p>
            </span>
          </BoxWrapper>
          <div className="box-link">
            <ul className="link-col-1">
              <Link href="/">
                <li>About</li>
              </Link>
              <Link href="/">
                <li>Our ision</li>
              </Link>
              <Link href="/">
                <li>Our team</li>
              </Link>
            </ul>
            <ul className="link-col-2">
              <Link href="/">
                <li>Sponsors</li>
              </Link>
              <Link href="/">
                <li>Download</li>
              </Link>
            </ul>
          </div>
          <Box>
            <p style={{ color: "#dbdbdb" }}>© The Vignette Authors 2021</p>
          </Box>
        </FooterContainer>
      </FooterBox>
    </>
  );
};

export default Footer;
