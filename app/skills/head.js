export default function Head() {
  return (
    <>
      <title>Skills | My Store</title>
      <meta name="description" content="Explore our key skills and expertise." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Skills",
            url: "https://shopFromMyStore.com/skills",
          }),
        }}
      />
    </>
  );
}
