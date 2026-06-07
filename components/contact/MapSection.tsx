import React from "react";

export default function MapSection() {
  return (
    <div className="w-full mt-10">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.5326890918595!2d67.00147169999998!3d24.84564990000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e009d60e7c7%3A0xcec726b3689893e5!2sMandviwalla%20Mauser%20Plastic%20Industries%20Ltd!5e0!3m2!1sen!2s!4v1780835680227!5m2!1sen!2s"
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

