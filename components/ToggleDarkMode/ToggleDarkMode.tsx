import React from "react";
import {
  createStyles,
  UnstyledButton,
  Center,
  useMantineColorScheme,
  Group,
} from "@mantine/core";
import { Moon, Sun } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  iconWrapper: {
    height: 28,
    width: 28,
    borderRadius: 28,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.yellow[4]
        : theme.colors.dark[4],
    color: theme.colorScheme === "dark" ? theme.black : theme.colors.blue[2],
  },

  value: {
    lineHeight: 1,
  },
}));

function ToggleDarkMode() {
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const Icon = colorScheme === "dark" ? Sun : Moon;

  return (
    <Group position="center" my="xl">
      <UnstyledButton
        aria-label="Toggle theme"
        onClick={() => toggleColorScheme()}
      >
        <Center className={classes.iconWrapper}>
          <Icon size={18} />
        </Center>
      </UnstyledButton>
    </Group>
  );
}

export default ToggleDarkMode;
