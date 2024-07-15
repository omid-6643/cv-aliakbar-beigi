import {
  Container,
  createStyles,
  Group,
  Header,
  useMantineColorScheme,
} from "@mantine/core";
import { useState } from "react";

import { Github, ToggleDarkMode } from "../index";
const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#1A1B1E",
    borderBottomColor: "#2C2E33",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    position: "relative",
    backgroundColor: "#1A1B1E",
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 3 : 7],
    },
  },
  toggleDarkMode: {
    position: "absolute",
    right: 0,
    display: "flex",
    gap: 15,
  },
}));

const ResumeHeader = () => {
  const { colorScheme } = useMantineColorScheme();
  const links = [
    {
      link: `pdf/light/AliAkbarBeigi-Resume.pdf`,
      label: "Download PDF",
    },
  ];
  const [active] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      download
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      // onClick={(event) => {
      //   event.preventDefault();
      //   // generatePDF();
      //   setActive(link.link);
      // }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={60} mb={120} className={classes.root}>
      <Container className={classes.header}>
        {/* <MantineLogo /> */}
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <div className={classes.toggleDarkMode}>
          <Github />
          <ToggleDarkMode />
        </div>
      </Container>
    </Header>
  );
};
export default ResumeHeader;
