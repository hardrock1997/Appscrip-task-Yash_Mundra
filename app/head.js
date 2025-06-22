export default function Head() {
  return (
    <>
      <title>My Store</title>
      <meta name="description" content="Buy the best products online." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "My Store",
            url: "https://shopFromMyStore.com"
          }),
        }}
      />
    </>
  );
}