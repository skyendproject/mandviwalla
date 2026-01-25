import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { colors } from "@/lib/colors";

const contactData = [
    {
        city: "Melbourne",
        phone: "+(084) 456-123987",
        email: "info@melbourne.com",
        hours: "Mon - Sat: 09:00 - 17:00",
        closed: "Sunday Closed",
        address: "99 King Street, Melbourne Park, Australia 3000",
        location: "Melbourne 28292. AUS"
    },
    {
        city: "Pekanbaru",
        phone: "+(084) 456-123987",
        email: "info@pekanbaru.com",
        hours: "Mon - Sat: 09:00 - 17:00",
        closed: "Sunday Closed",
        address: "77 St. Jomblo Park, Pekanbaru 28292, ID",
        location: "Pekanbaru 28292. ID"
    },
];

export default function ContactSection() {
    return (
        <section className="w-full container max-w-5xl py-12 md:py-16 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white relative z-20">
            {/* Left: Form */}
            <div className="">
                <div className="mb-4">
                    <h4 className="text-sm md:text-base 2xl:text-lg tracking-widest border-l-2 pl-2 mb-2 font-semibold" style={{ borderColor: colors.primary.blue, fontFamily: 'var(--font-lato)', color: colors.gray.tagColor }}>
                        Get In Touch
                    </h4>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl 2xl:text-[42px] font-semibold mb-3 md:mb-2 leading-tight">
                        Don't Hesitate to Ask a Question.
                    </h2>
                    <p className="text-gray-600 text-sm max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
                <form className="flex flex-col gap-3 w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Your Name.."
                        className="border border-[#999999] bg-[#F6F6F6] rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email Address.."
                        className="border border-[#999999] bg-[#F6F6F6] rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Subject.."
                        className="border border-[#999999] bg-[#F6F6F6] rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                        required
                    />
                    <textarea
                        placeholder="Your Message.."
                        className="border border-[#999999] bg-[#F6F6F6] rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 min-h-[100px]"
                        required
                    />
                </form>
                <button
                    type="submit"
                    className="text-white font-semibold text-sm rounded px-6 py-2 mt-2 hover:bg-blue-900 transition"
                    style={{ backgroundColor: colors.primary.blue }}
                >
                    SEND MESSAGES
                </button>
            </div>
            {/* Right: Info */}
            <div className="flex flex-col">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl 2xl:text-[42px] font-semibold mb-4 mt-10">Contact Info</h3>
                <div className="flex flex-col gap-6 w-full max-w-sm">
                    {contactData.map((loc, idx) => (
                        <div key={idx}>
                            <h4 className="font-semibold text-base mb-4 border-b pb-4" style={{ borderColor: colors.primary.blue, width: '10%' }}>{loc.city}</h4>
                            <div className="flex items-center gap-2 text-sm mb-3">
                                <svg width="22" height="22" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.989" fillRule="evenodd" clipRule="evenodd" d="M6.37814 0.0119188C7.21512 -0.0645876 7.89252 0.227225 8.4104 0.88735C9.85061 2.84937 11.1012 4.93373 12.1622 7.14043C12.3347 7.56389 12.4494 8.00161 12.5062 8.45358C12.482 8.78656 12.3882 9.09921 12.2248 9.39154C11.5027 10.1762 10.721 10.8953 9.87987 11.5489C11.4082 15.7348 14.2638 18.6008 18.4466 20.1468C18.9255 19.6157 19.3944 19.0738 19.8535 18.521C20.2936 17.9521 20.8668 17.6186 21.5731 17.5205C22.5927 17.7181 23.5515 18.0828 24.4496 18.6148C26.0841 19.5622 27.6682 20.5836 29.2019 21.6788C30.0434 22.3886 30.2205 23.2327 29.7334 24.2113C28.8522 25.3844 27.8413 26.437 26.7007 27.3692C25.5109 28.3914 24.2187 29.2668 22.8237 29.9954C21.779 30.0284 20.7577 29.8825 19.7597 29.5577C17.2957 28.7634 15.003 27.6378 12.8813 26.1811C7.88745 22.7301 4.06267 18.2799 1.40694 12.8307C0.759163 11.3668 0.300606 9.84514 0.031267 8.26599C-0.0104223 7.91162 -0.0104223 7.55732 0.031267 7.20296C1.41542 4.6507 3.21839 2.43085 5.44018 0.543431C5.73845 0.332014 6.05111 0.154846 6.37814 0.0119188Z" fill="#1338BE" />
                                </svg>
                                <div className="flex flex-col">
                                    <span>{loc.phone}</span>
                                    <span style={{ color: colors.gray.light }}>{loc.email}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm mb-3">
                                <svg width="22" height="22" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0ZM13.5938 7.03125V15C13.5938 15.4688 13.8281 15.9082 14.2207 16.1719L19.8457 19.9219C20.4902 20.3555 21.3633 20.1797 21.7969 19.5293C22.2305 18.8789 22.0547 18.0117 21.4043 17.5781L16.4062 14.25V7.03125C16.4062 6.25195 15.7793 5.625 15 5.625C14.2207 5.625 13.5938 6.25195 13.5938 7.03125Z" fill="#1338BE" />
                                </svg>
                                <div className="flex flex-col">
                                    <span>{loc.hours}</span>
                                    <span style={{ color: colors.gray.light }}>{loc.closed}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <svg width="18" height="22" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.6715 29.3259C15.6851 25.5544 22.5584 16.4136 22.5584 11.2792C22.5584 5.05214 17.5062 0 11.2792 0C5.05214 0 0 5.05214 0 11.2792C0 16.4136 6.87326 25.5544 9.88691 29.3259C10.6095 30.2247 11.9489 30.2247 12.6715 29.3259ZM11.2792 7.51946C12.2763 7.51946 13.2326 7.91557 13.9377 8.62066C14.6428 9.32574 15.0389 10.282 15.0389 11.2792C15.0389 12.2763 14.6428 13.2326 13.9377 13.9377C13.2326 14.6428 12.2763 15.0389 11.2792 15.0389C10.282 15.0389 9.32574 14.6428 8.62066 13.9377C7.91557 13.2326 7.51946 12.2763 7.51946 11.2792C7.51946 10.282 7.91557 9.32574 8.62066 8.62066C9.32574 7.91557 10.282 7.51946 11.2792 7.51946Z" fill="#1338BE" />
                                </svg>
                                <div className="flex flex-col">
                                    <span>{loc.address}</span>
                                    <span style={{ color: colors.gray.light }}>{loc.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
