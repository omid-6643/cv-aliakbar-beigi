import React from "react";
import { createStyles, UnstyledButton, Center, Group } from "@mantine/core";
import { BrandGithub } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  iconWrapper: {
    height: 28,
    width: 28,
    borderRadius: 28,
    // backgroundColor: theme.colors.blue[6],
    background: "linear-gradient(45deg, #fd7e14 0%, #fa5252 100%)",

    color: "#fff",
  },

  value: {
    lineHeight: 1,
  },
}));

const Github = () => {
  const { classes } = useStyles();

  return (
    <Group position="center" my="xl">
      <UnstyledButton aria-label="Github Repository">
        <a
          href="https://github.com/omid-6643/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Center className={classes.iconWrapper}>
            <BrandGithub size={18} />
          </Center>
        </a>
      </UnstyledButton>
    </Group>
  );
};

export default Github;
