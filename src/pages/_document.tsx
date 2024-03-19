import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/logo/favicon.jpg" />
        <link rel="icon" type="image/jpg" sizes="32x32" href="/logo/favicon.jpg" />
        <link rel="icon" type="image/jpg" sizes="16x16" href="/logo/favicon.jpg" />
      </Head>
      <body className="font-Prompt text-main-text-color">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
