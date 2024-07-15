import { portfolio } from "@data";
import { Image } from "@mantine/core";
import { StyledItems, StyledPortfolio } from "./Main.styled";
import Title from "./Title";
const Portfolio = () => {
  return (
    <>
      <Title title="Portfolio" />
      <StyledPortfolio>
        <StyledItems>
          <ul>
            {portfolio &&
              portfolio.map((item: any) => (
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
