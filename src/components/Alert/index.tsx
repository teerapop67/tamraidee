import styled from "styled-components";
import React, { Dispatch, SetStateAction } from "react";

export const AlertWrapper = styled.div<{ alertPopup: boolean }>`
  position: fixed;
  z-index: 999;
  top: 7rem;
  right: 2rem;
  transition: all 0.3s ease;
  transform: ${({ alertPopup }) =>
    alertPopup ? "translateX(0)" : "translateX(1000%)"};
`;

export const Alert = styled.div<{ success?: boolean }>`
  background: ${({ success }) => (success ? "#4caf50" : "rgb(245, 124, 0)")};
  padding: 12px 15px;
  border-radius: 6px;
  color: #fff;
  filter: drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.25));
  > i:nth-child(1) {
    color: #fff;
    margin-right: 0.5rem;
  }

  > i:nth-child(2) {
    color: #222;
    font-size: 12px;
    margin-left: 0.8rem;
    cursor: pointer;
  }
`;

interface AlertProps {
  setAlertPopup: Dispatch<SetStateAction<boolean>>;
  type: string;
  children: string;
  success?: boolean;
}

export const AlertWarnings: React.FC<AlertProps> = ({
  children,
  setAlertPopup,
  type,
  success,
}) => {
  return (
    <>
      <Alert success={success}>
        <i className={type}></i> {children}
        <i className="fa-solid fa-x" onClick={() => setAlertPopup(false)}></i>
      </Alert>
    </>
  );
};
