import NavElement from "@element/NavElement";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const NavBar = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1.2rem;
  margin-bottom: 1rem;
`;

const Navbar = () => {
  const [index, setIndex] = useState(0);
  const PATCH_TEXT = ["인기", "최신"];
  const onChangePriamry = (i: number) => {
    setIndex(i);
  };
  return (
    <NavBar>
      {PATCH_TEXT.map((text, i) => (
        <>
          <NavElement
            key={i}
            onClick={() => onChangePriamry(i)}
            elementIndex={i}
            index={index}
            text={text}
          />
        </>
      ))}
    </NavBar>
  );
};

export default Navbar;
