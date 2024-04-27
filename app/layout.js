import "./globals.css";
import localFont from 'next/font/local';
const myFont = localFont({ src: '../public/fonts/Boldins.ttf' })


export const metadata = {
  title: "$Kitty",
  description: "hello. we are $kitty. ca: FWAyhDQwGczixbQigkE26A4UYwfCeoqRD5qSxJ8XH9aS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
