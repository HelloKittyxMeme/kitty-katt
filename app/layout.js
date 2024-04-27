import "./globals.css";
import localFont from 'next/font/local';
const myFont = localFont({ src: '../public/fonts/Boldins.ttf' })


export const metadata = {
  title: "$Kitty",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
