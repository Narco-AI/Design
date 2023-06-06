import { Switch, Group, useMantineTheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export function Demo() {
  const theme = useMantineTheme();
  return (
    <Group position="center">
      <Switch
        size="md"
        color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
        onLabel={<IconSun size="1rem" stroke={2.5} color={theme.colors.gray[0]} />}
        offLabel={<IconMoonStars size="1rem" stroke={2.5} color={theme.colors.dark[9]} />}
      />
    </Group>
  );
}