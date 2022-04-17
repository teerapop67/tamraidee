import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, { useState } from "react";
import styled from "styled-components";
import { BtnMaterial } from "../../../Buttons";
import MaterialCard from "./materialCard";
import MaterialChosen from "./materialChosen";
import {
  materialMeat,
  materialSea,
  materialVegetable,
  materialFruit,
  materialEggMilkButterCheese,
  materialFrozen,
  materialMeatTransform,
  materialDry,
} from "../../../../data/material";
import { MenuTypeMaterial } from "../../../../data/menuTypeMaterial";

const ContainerMaterial = styled(Container)`
  margin: 6rem auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MatTypeWrapper = styled(Box)`
  display: flex;
  margin-bottom: 4rem;
  justify-content: center;
  gap: 30px;
  width: 100%;

  .col-2 {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(2, 1fr);

    @media screen and (max-width: 750px) {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    .iconMat {
      font-size: 18px;
      margin-right: 10px;
    }
  }

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const MaterialSection: React.FC<any> = () => {
  const [menuType, setMenuType] = useState("Meat");
  return (
    <>
      <ContainerMaterial>
        <MatTypeWrapper>
          <MaterialChosen />

          <div className="col-2">
            {MenuTypeMaterial.map((item) => (
              <BtnMaterial
                key={item.keyword}
                onClick={() => setMenuType(item.keyword)}
              >
                <i className={item.icon} />
                {item.name}
              </BtnMaterial>
            ))}
          </div>
        </MatTypeWrapper>
        {menuType === "Meat" && <MaterialCard materialType={materialMeat} />}
        {menuType === "Sea" && <MaterialCard materialType={materialSea} />}
        {menuType === "Vet" && (
          <MaterialCard materialType={materialVegetable} />
        )}
        {menuType === "Fruit" && <MaterialCard materialType={materialFruit} />}
        {menuType === "Egg" && (
          <MaterialCard materialType={materialEggMilkButterCheese} />
        )}
        {menuType === "Frozen" && (
          <MaterialCard materialType={materialFrozen} />
        )}
        {menuType === "Transform" && (
          <MaterialCard materialType={materialMeatTransform} />
        )}
        {menuType === "Dry" && <MaterialCard materialType={materialDry} />}
      </ContainerMaterial>
    </>
  );
};

export default MaterialSection;
