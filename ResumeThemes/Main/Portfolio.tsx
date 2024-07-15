import { portfolio } from "@data";
import { Grid, Image } from "@mantine/core";
import { StyledPortfolio, StyledItems } from "./Main.styled";
import Title from "./Title";
const Portfolio = () => {
  return (
    <>
      <Title title="Portfolio" />
      <StyledPortfolio>
        <StyledItems>
          <ul>
            {portfolio.map((item) => (
              <li key={item.website}>
                <Image radius="md" src={item.thumb} alt={item.title} />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </StyledItems>
      </StyledPortfolio>
    </>
  );
};

export default Portfolio;
