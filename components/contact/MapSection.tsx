import React from "react";

export default function MapSection() {
  return (
    <div className="w-full mt-10">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19809.96423268413!2d-0.124626!3d51.507351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cbf0a8b1b1%3A0x2e8b8b8b8b8b8b8b!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1610000000000!5m2!1sen!2suk"
        width="100%"
        height="320"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow"
      ></iframe>
    </div>
  );
}
