import Link from "next/link";
import Image from "next/image";
import { colors } from "@/lib/colors";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full">
            {/* Main Footer */}
            <div className="w-full py-12 md:py-16 px-4 md:px-20" style={{ backgroundColor: colors.primary.blue }}>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 text-white">
                        
                        {/* Logo and Company Info */}
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/assets/logo.png"
                                    alt="Mandviwalla MAUSER Logo"
                                    width={80}
                                    height={80}
                                    className="rounded-lg p-2"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-bold">
                                    Mandviwalla <span style={{ color: colors.orange.dark }}>MAUSER</span>
                                </h3>
                                <p className="text-sm">Plastic Industries Limited</p>
                            </div>
                            
                            {/* Social Media Icons */}
                            <div className="flex gap-4">
                                <Link href="#" className="hover:opacity-80 transition-opacity">
                                    <Facebook size={20} fill="currentColor" />
                                </Link>
                                <Link href="#" className="hover:opacity-80 transition-opacity">
                                    <Instagram size={20} />
                                </Link>
                                <Link href="#" className="hover:opacity-80 transition-opacity">
                                    <Youtube size={20} fill="currentColor" />
                                </Link>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-lg font-bold mb-2 pb-2 border-b-2 border-white/30">
                                Contact Info
                            </h4>
                            
                            <div className="flex gap-3 items-start">
                                <MapPin size={18} className="flex-shrink-0 mt-1" style={{ color: colors.orange.dark }} />
                                <p className="text-sm">
                                    Mandviwalla Building, Old Queens Road, Karachi
                                </p>
                            </div>
                            
                            <div className="flex gap-3 items-center">
                                <Phone size={18} className="flex-shrink-0" style={{ color: colors.orange.dark }} />
                                <p className="text-sm">+92 21-32441116-9</p>
                            </div>
                            
                            <div className="flex gap-3 items-center">
                                <Phone size={18} className="flex-shrink-0" style={{ color: colors.orange.dark }} />
                                <p className="text-sm">+92 21-32441276</p>
                            </div>
                            
                            <div className="flex gap-3 items-center">
                                <Mail size={18} className="flex-shrink-0" style={{ color: colors.orange.dark }} />
                                <p className="text-sm">info@mandviwalla.net</p>
                            </div>
                        </div>

                        {/* Our Services */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-lg font-bold mb-2 pb-2 border-b-2 border-white/30">
                                Our Services
                            </h4>
                            
                            <Link href="#" className="flex gap-3 items-center hover:translate-x-1 transition-transform">
                                <ArrowRight size={16} style={{ color: colors.orange.dark }} />
                                <span className="text-sm">Injection Moulding Products</span>
                            </Link>
                            
                            <Link href="#" className="flex gap-3 items-center hover:translate-x-1 transition-transform">
                                <ArrowRight size={16} style={{ color: colors.orange.dark }} />
                                <span className="text-sm">Blow Moulding Products</span>
                            </Link>
                            
                            <Link href="#" className="flex gap-3 items-center hover:translate-x-1 transition-transform">
                                <ArrowRight size={16} style={{ color: colors.orange.dark }} />
                                <span className="text-sm">Custom Plastic Solutions</span>
                            </Link>
                        </div>

                        {/* Additional Links */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-lg font-bold mb-2 pb-2 border-b-2 border-white/30">
                                Additional Links
                            </h4>
                            
                            <Link href="#" className="flex gap-3 items-center hover:translate-x-1 transition-transform">
                                <ArrowRight size={16} style={{ color: colors.orange.dark }} />
                                <span className="text-sm">About Us</span>
                            </Link>
                            
                            <Link href="#" className="flex gap-3 items-center hover:translate-x-1 transition-transform">
                                <ArrowRight size={16} style={{ color: colors.orange.dark }} />
                                <span className="text-sm">Our Products</span>
                            </Link>
                            
                            <Link href="#" className="flex gap-3 items-center hover:translate-x-1 transition-transform">
                                <ArrowRight size={16} style={{ color: colors.orange.dark }} />
                                <span className="text-sm">Election of Director</span>
                            </Link>
                            
                            <Link href="#" className="flex gap-3 items-center hover:translate-x-1 transition-transform">
                                <ArrowRight size={16} style={{ color: colors.orange.dark }} />
                                <span className="text-sm">FAQ's</span>
                            </Link>
                            
                            <Link href="#" className="flex gap-3 items-center hover:translate-x-1 transition-transform">
                                <ArrowRight size={16} style={{ color: colors.orange.dark }} />
                                <span className="text-sm">Contact Us</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="w-full py-4 px-4 text-center" style={{ backgroundColor: colors.orange.dark }}>
                <p className="text-white text-sm">
                    © Copyright Insure 2023. All Rights Reserved. By <strong>Mandviwalla MAUSER Plastic Industries Limited</strong>
                </p>
            </div>
        </footer>
    );
}
