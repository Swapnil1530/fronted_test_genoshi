import type { Metadata } from "next";
import { ThemeProvider } from "./../components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Graff The Feature of Research",
  description: "",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
