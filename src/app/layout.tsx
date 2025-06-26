
import type { Metadata } from "next";
import "./globals.css";
import HeaderPage from "./components/Header/Header";
import FooterPage from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "PortfolioPR",
  description: "みんなでポートフォリオを載せてどれくらいのレベルのポートフォリオで内定をもらったのかを知ることでモチベーションが保つのでは？という発想で作成したポートフォリオです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <HeaderPage />
        {children}
        <FooterPage />
      </body>
    </html>
  );
}
