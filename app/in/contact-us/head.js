export default function Head() {
  return (
    <>
      <title>Contact Us | My Store</title>
      <meta name="description" content="Get in touch with us for any questions or support." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact My Store",
            url: "https://shopFromMyStore.com/in/contact-us",
          }),
        }}
      />
    </>
  );
}
