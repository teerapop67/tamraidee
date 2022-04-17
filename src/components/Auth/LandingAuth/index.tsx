import styled from "styled-components";
import Link from "next/link";
import Box from "@mui/material/Box";

const WrapperHome = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;

  @media screen and (max-width: 840px) {
    flex-direction: column;
    height: 100%;
    padding-top: 5rem;
  }
`;

const RegisLink = styled.p`
  font-weight: bold;
  background: linear-gradient(180deg, #be58cb 0%, #f10e5a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  display: inline;
  cursor: pointer;
`;

const TextHeadWrapper = styled(Box)`
  display: flex;
  gap: 30px;

  .textWrap {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .textHeader {
    font-size: 28px;
  }
  @media screen and (max-width: 840px) {
    margin-top: 5rem;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

const BgWrapper = styled(Box)`
  background-image: url("/img/bgLanding.png");
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;
`;

const LandingAuth: React.FC<any> = (props) => {
  return (
    <>
      <BgWrapper width="100%">
        <WrapperHome>
          <TextHeadWrapper>
            <div className="textWrap">
              <span className="textHeader">
                <h1>Sign In to</h1>
                <h1>Tam Rai Dee</h1>
              </span>
              <span>
                <p>If you don't have an account</p>
                <span>
                  you can
                  <Link href="/register">
                    <RegisLink> Register here!</RegisLink>
                  </Link>
                </span>
              </span>
            </div>
          </TextHeadWrapper>
          {props.children}
        </WrapperHome>
      </BgWrapper>
    </>
  );
};

export default LandingAuth;
