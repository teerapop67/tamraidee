import Box from "@mui/material/Box";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import { MaterialType } from "../../../../data/material";

const MatCardContainer = styled(Box)`
  display: flex;
  width: 100%;
  margin-bottom: 4rem;
`;

const MatCardWrapper = styled(Box)`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 30px;
`;

const CardBox = styled(motion.div)`
  padding: 30px 10px;
  filter: drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.25));
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 40px;
  background-color: #fff;
  cursor: pointer;

  > p {
    font-size: 14px;
    position: absolute;
    left: 40px;
    top: 20px;
  }
`;

const MatImage = styled(Image)`
  object-fit: cover;
`;

interface MaterialCardProps {
  materialType: MaterialType[];
}

const MaterialCard: React.FC<MaterialCardProps> = (props) => {
  return (
    <>
      <MatCardContainer>
        <MatCardWrapper>
          {props.materialType.map((item) => (
            <CardBox
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <p>{item.name}</p>
              <MatImage src={item.src} width="100%" height="100%" />
            </CardBox>
          ))}
        </MatCardWrapper>
      </MatCardContainer>
    </>
  );
};

export default MaterialCard;
