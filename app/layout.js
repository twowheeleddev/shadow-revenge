import ThemeProvider from "./providers/ThemeProvider";
import ResponsiveProvider from "./providers/ResponsiveProvider";
import ThemeToggle from "./styles/ThemeToggle";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <ResponsiveProvider>
            {/* Include the ThemeToggle button */}
            <ThemeToggle />
            {children}
          </ResponsiveProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
