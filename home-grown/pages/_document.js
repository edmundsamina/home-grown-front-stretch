import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <script
      src="https://widget.cloudinary.com/v2.0/global/all.js"
      type="text/javascript"
    ></script>
      <title>Home Grown</title>
      <link rel="icon" type="image/png" href="icons/browsertablogo.png"/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
