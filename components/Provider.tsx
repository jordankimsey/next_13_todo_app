'use client';
import { ThemeProvider } from 'next-themes';

type Props = {};

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      {children}
    </ThemeProvider>
  );
};
