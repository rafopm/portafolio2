// ThemeContext.js (crea un contexto para el tema)
import { DefaultSeo } from 'next-themes';

export const ThemeProvider = ({ children }) => {
  return (
    <>
      <DefaultSeo
        theme="light" // Establece el tema inicial aquí (puede ser 'light' o 'dark')
      />
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
