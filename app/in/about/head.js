export default function Head() {
  return (
    <>
      <title>About Us | My Store</title>
      <meta name="description" content="Learn more about our company and values." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About My Store",
            url: "https://shopFromMyStore.com/in/about",
          }),
        }}
      />
    </>
  );
}
