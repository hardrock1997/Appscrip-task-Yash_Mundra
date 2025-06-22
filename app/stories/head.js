export default function Head() {
  return (
    <>
      <title>Stories | My Store</title>
      <meta name="description" content="Read inspiring stories from our customers and team." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Stories",
             url: "https://shopFromMyStore.com/stories",
          }),
        }}
      />
    </>
  );
}
