import Script from 'next/script'

export default function GoogleAdsense() {
  const ADSENSE_ID = 'ca-pub-7690377849232326'

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}
