import Menu from "./components/Menu";
import "./global.scss";

export const metadata = {
  title: "QAGPT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
