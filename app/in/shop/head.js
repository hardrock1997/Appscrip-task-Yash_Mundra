export default function Head() {
  return (
    <>
      <title>Shop | My Store</title>
      <meta name="description" content="Explore a wide range of products in our shop." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            name: "My Store",
            url: "https://shopFromMyStore.com/in/shop",
          }),
        }}
      />
    </>
  );
}
