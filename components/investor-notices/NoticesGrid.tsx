"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { colors } from "@/lib/colors";

const notices = [
  {
    image: "/notices/notice-1.png",
    title: "AGM-notice-both-3.pdf",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
    button: "AGM-NOTICE-BOTH-3-PDF"
  },
  {
    image: "/notices/notice-2.png",
    title: "Publication-of-Public-Announcement-of-Offer-06-02-2023.pdf",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
    button: "PUBLICATION-OF-PUBLIC-PDF"
  },
  {
    image: "/notices/notice-3.png",
    title: "AGM-notice-both-3.pdf",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
    button: "AGM-NOTICE-BOTH-3-PDF"
  },
  {
    image: "/notices/notice-4.png",
    title: "Publication-of-Public-Announcement-of-Offer-06-02-2023.pdf",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
    button: "PUBLICATION-OF-PUBLIC-PDF"
  },
  {
    image: "/notices/notice-5.png",
    title: "AGM-notice-both-3.pdf",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
    button: "AGM-NOTICE-BOTH-3-PDF"
  },
  {
    image: "/notices/notice-6.png",
    title: "Publication-of-Public-Announcement-of-Offer-06-02-2023.pdf",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
    button: "PUBLICATION-OF-PUBLIC-PDF"
  }
];

export default function NoticesGrid() {
  return (
    <section className="w-full py-12 px-4 md:px-0 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-sm text-gray-600 mb-1 border-l-2 border-blue-700 inline-block pl-2">Notices</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Notices & Announcements</h2>
          <p className="mx-auto text-base md:text-base max-w-2xl" style={{ color: colors.gray.text }}>
            Timely corporate notices, regulatory disclosures and shareholder announcements.<br />
            Short links: Mandviwalla MAUSER Plastic Industries Limited posts all statutory notices, AGM/EGM invitations, corporate briefings and other regulatory announcements here. Use the filters to find notices by news type or status.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {notices.map((notice, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col w-full max-w-md mx-auto border border-gray-200">
              <div className="w-full h-48 relative border-b border-[#000000]">
                <Image
                  src={notice.image}
                  alt={notice.title}
                  fill
                  className="object-contain object-top"
                  priority
                />
              </div>
              <div className="flex flex-col gap-4 p-6 flex-1">
                <div className="font-semibold text-lg text-gray-900 truncate" title={notice.title}>{notice.title}</div>
                <div className="text-gray-600 text-sm line-clamp-2">{notice.description}</div>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-white"
                  style={{ background: colors.primary.blue }}
                  download
                >
                  <Download size={20} className="text-white" />
                  {notice.button}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
