import { Metadata } from "next";
import "./globals.css";

export const metadata : Metadata = {
title: {
  absolute: '',
  default: 'FemiDev',
  template: 'Tutorial | %s'
},
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="body" style={{'display': 'flex', 'flexDirection': 'column', 'minHeight': '100vh', 'margin': '0px'}}>
        <header style={{'background': 'teal', 'padding': '20px 10px', 'color': 'white'}}>Header</header>
          <main style={{'flex': '1'}}>{children}</main>
          {/* <h1 className="text-3xl text-red-500 pb-6">Looking for tailwind</h1> */}
        <footer style={{'background': 'black', 'color': 'white', 'padding': '30px 10px'}}>Copyright 2024</footer>
      </body>
    </html>
  );
}
