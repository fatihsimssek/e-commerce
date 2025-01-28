import localFont from "next/font/local";
import "./globals.css";

const barlow = localFont({
  src: [
    {
      path: "./fonts/Barlow-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Barlow-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Barlow-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Barlow-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Food App Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} antialiased`}>{children}</body>
    </html>
  );
}
