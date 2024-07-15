import React from "react";
import { StyledTitle } from "./Main.styled";

const Title = ({ title }: { title: string }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export default Title;
