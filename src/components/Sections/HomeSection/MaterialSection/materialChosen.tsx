import React, { useState } from "react";
import styled from "styled-components";

const Col1 = styled.div`
  padding: 12px 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  border: 2px solid transparent;
  background: linear-gradient(180deg, #fff 0%, #fff 100%) padding-box,
    linear-gradient(180deg, #6a99dd 0%, #be58cb 100%) border-box;

  .picked {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .text-material-chosen {
    background: linear-gradient(180deg, #be58cb 0%, #f10e5a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    letter-spacing: 0.3px;
  }
`;

type MaterialType = {
  item: string;
  remove: string;
};

const MaterialChosen: React.FC<any> = () => {
  const [material, setMaterial] = useState<MaterialType[]>([
    { item: "เป็ด", remove: "ลบ" },
    { item: "หมู", remove: "ลบ" },
    { item: "ไข่", remove: "ลบ" },
    { item: "ใบกระเพรา", remove: "ลบ" },
  ]);
  return (
    <>
      <Col1>
        <span>
          <h4 className="picked">วัตถุดิบที่เลือก</h4>
          <ul style={{ paddingLeft: "2rem" }}>
            {material.map((items) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "2rem",
                }}
                key={items.item}
              >
                <li className="text-material-chosen">{items.item}</li>
                <p style={{ color: "#FF8F8F", cursor: "pointer" }}>
                  {items.remove}
                </p>
              </div>
            ))}
          </ul>
        </span>
      </Col1>
    </>
  );
};

export default MaterialChosen;
