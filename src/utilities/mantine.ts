import type { MantineThemeOverride } from '@mantine/core';

export const mantineTheme: MantineThemeOverride = {
  colorScheme: 'light',
  fontFamily: '-apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
  defaultRadius: 5,
  /*colors: {
    primary: ['#f5fcfb', '#ebf7f5', '#ceede7', '#afe0d6', '#7eccb7', '#53b697', '#43a381', '#2e8763', '#1f6e4a', '#115231'],
  },
  primaryColor: 'primary',*/
  components: {
    Table: { defaultProps: { fontSize: 'md' } },
    Modal: { defaultProps: { radius: 'md' } },
  },
  globalStyles: (theme) => ({
    body: { color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7] },
  }),
};
