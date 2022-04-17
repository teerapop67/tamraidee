import Box from "@mui/material/Box";
import styled from "styled-components";

export const HeroSection = styled(Box)<{ src: string; h?: string }>`
  width: 100%;
  height: ${({ h }) => h};
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`;
