import styled from "styled-components";
import { motion } from "framer-motion";

export const BtnAuth = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  width: 250px;
  color: #fff;
  background: linear-gradient(180deg, #6a99dd 0%, #be58cb 100%);
  box-shadow: 0px 25px 20px rgba(190, 88, 203, 0.16);
  border-radius: 8px;
  cursor: pointer;
`;

export const BtnMaterial = styled(motion.button)`<{ active?: boolean }>
  display: flex;
  align-items: center;
  padding: 10px 30px;
  gap: 10px;
  border: 2px solid transparent;
  background: linear-gradient(180deg, #fff 0%, #fff 100%) padding-box,
    linear-gradient(180deg, #6a99dd 0%, #be58cb 100%) border-box;
  box-shadow: 0px 25px 20px rgba(190, 88, 203, 0.16);
  border-radius: 8px;
  cursor: pointer;
  justify-content: center;
  transition: all 0.3 s ease-in-out;

  :hover {
    background: linear-gradient(180deg, #6a99dd 0%, #be58cb 100%);
    color: #fff;
  }
`;
