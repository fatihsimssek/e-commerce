import localFont from "next/font/local";
import "./global.css";

const barlow = localFont({
  src: [
    {
      path: "./fonts/Barlow-Black.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Barlow-BlackItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Barlow-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Barlow-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Barlow-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Barlow-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Barlow-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Barlow-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Barlow-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Barlow-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/Barlow-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Barlow-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-barlow",
  display: "swap",
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
