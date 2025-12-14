import Link from "next/link";
import Image from "next/image";
import { colors } from "@/lib/colors";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

interface FooterProps {
    variant?: "blue" | "dark";
}

export default function Footer({ variant = "blue" }: FooterProps) {
    const bgColor = variant === "blue" ? colors.primary.blue : colors.neutral.darkGray;

    return (
        <footer className="w-full">
            {/* Main Footer */}
            <div className="w-full py-12 md:py-16 px-4 md:px-20" style={{ backgroundColor: bgColor }}>
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
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.07447 0.00399317C6.24366 0.056743 5.47512 0.225982 4.73369 0.520502C3.02006 1.20112 1.61486 2.49203 0.787715 4.14485C-0.162514 6.04385 -0.257757 8.27912 0.527629 10.2602C0.844861 11.0609 1.2903 11.7855 1.87934 12.4588C1.9995 12.5965 2.36655 12.9658 2.50282 13.0859C3.17098 13.6772 3.88823 14.1241 4.69193 14.4494C5.06997 14.6018 5.47292 14.7278 5.86562 14.8142C5.99603 14.8435 6.28981 14.8985 6.31326 14.8985C6.32718 14.8985 6.32718 14.8692 6.32718 12.283V9.66747H4.42232V7.49154H6.32718V6.57354C6.32718 6.04385 6.33011 5.61159 6.3345 5.55005C6.40484 4.5207 6.82684 3.75289 7.56314 3.31478C7.89429 3.1177 8.2694 2.99754 8.73096 2.9404C8.85404 2.92575 8.8958 2.92428 9.2101 2.92428C9.56397 2.92428 9.68558 2.93014 10.0526 2.96458C10.2812 2.98582 10.7882 3.05029 10.8351 3.06348C10.8468 3.06715 10.8475 3.11623 10.8461 3.99173L10.8439 4.91632L10.2578 4.92071C9.61671 4.92511 9.62917 4.92438 9.45187 4.97127C9.25699 5.02255 9.11046 5.10461 8.98298 5.23135C8.79836 5.41524 8.69872 5.66361 8.67894 5.99036C8.67528 6.0563 8.67161 6.42115 8.67161 6.80066V7.49154H9.71196C10.6688 7.49154 10.7523 7.49227 10.7523 7.50326C10.7523 7.51351 10.438 9.57662 10.4263 9.64329L10.4219 9.66747H8.67161V12.283C8.67161 14.8289 8.67161 14.8985 8.68553 14.8985C8.71264 14.8985 8.99251 14.8457 9.13757 14.8135C10.6805 14.4699 12.0762 13.6427 13.1297 12.4478C14.5298 10.8595 15.1884 8.76779 14.9532 6.65267C14.7584 4.89434 13.9378 3.2547 12.641 2.0334C11.4337 0.894879 9.89145 0.193013 8.24302 0.0296354C8.17855 0.0237744 8.08477 0.0149827 8.03422 0.0105869C7.917 0.00106263 7.20488 -0.00406583 7.07447 0.00399317Z" fill="#F28500" />
                                </svg>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.50167 3.65337C5.3734 3.65337 3.65672 5.37005 3.65672 7.49833C3.65672 9.6266 5.3734 11.3433 7.50167 11.3433C9.62995 11.3433 11.3466 9.6266 11.3466 7.49833C11.3466 5.37005 9.62995 3.65337 7.50167 3.65337ZM7.50167 9.99805C6.12632 9.99805 5.00195 8.87702 5.00195 7.49833C5.00195 6.11963 6.12298 4.99861 7.50167 4.99861C8.88037 4.99861 10.0014 6.11963 10.0014 7.49833C10.0014 8.87702 8.87702 9.99805 7.50167 9.99805ZM12.4007 3.4961C12.4007 3.9947 11.9992 4.39292 11.5039 4.39292C11.0053 4.39292 10.6071 3.99136 10.6071 3.4961C10.6071 3.00084 11.0086 2.59927 11.5039 2.59927C11.9992 2.59927 12.4007 3.00084 12.4007 3.4961ZM14.9473 4.4063C14.8904 3.20496 14.616 2.14083 13.7359 1.26408C12.8592 0.38734 11.795 0.112939 10.5937 0.052705C9.35555 -0.0175683 5.64445 -0.0175683 4.4063 0.052705C3.20831 0.109593 2.14417 0.383993 1.26408 1.26074C0.383993 2.13748 0.112939 3.20162 0.052705 4.40296C-0.0175683 5.6411 -0.0175683 9.3522 0.052705 10.5904C0.109593 11.7917 0.383993 12.8558 1.26408 13.7326C2.14417 14.6093 3.20496 14.8837 4.4063 14.9439C5.64445 15.0142 9.35555 15.0142 10.5937 14.9439C11.795 14.8871 12.8592 14.6127 13.7359 13.7326C14.6127 12.8558 14.8871 11.7917 14.9473 10.5904C15.0176 9.3522 15.0176 5.64445 14.9473 4.4063ZM13.3477 11.9189C13.0867 12.5747 12.5814 13.08 11.9222 13.3444C10.935 13.7359 8.59258 13.6456 7.50167 13.6456C6.41076 13.6456 4.06497 13.7326 3.08115 13.3444C2.42526 13.0834 1.91997 12.5781 1.65561 11.9189C1.26408 10.9317 1.35443 8.58924 1.35443 7.49833C1.35443 6.40742 1.26743 4.06163 1.65561 3.0778C1.91662 2.42192 2.42192 1.91662 3.08115 1.65226C4.06832 1.26074 6.41076 1.35109 7.50167 1.35109C8.59258 1.35109 10.9384 1.26408 11.9222 1.65226C12.5781 1.91327 13.0834 2.41857 13.3477 3.0778C13.7393 4.06497 13.6489 6.40742 13.6489 7.49833C13.6489 8.58924 13.7393 10.935 13.3477 11.9189Z" fill="#F28500" />
                                </svg>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6866 1.65023C14.514 1.00066 14.0058 0.489083 13.3604 0.315472C12.1906 0 7.5 0 7.5 0C7.5 0 2.80939 0 1.6396 0.315472C0.994234 0.489111 0.485952 1.00066 0.31344 1.65023C0 2.8276 0 5.28409 0 5.28409C0 5.28409 0 7.74057 0.31344 8.91795C0.485952 9.56751 0.994234 10.0578 1.6396 10.2314C2.80939 10.5469 7.5 10.5469 7.5 10.5469C7.5 10.5469 12.1906 10.5469 13.3604 10.2314C14.0058 10.0578 14.514 9.56751 14.6866 8.91795C15 7.74057 15 5.28409 15 5.28409C15 5.28409 15 2.8276 14.6866 1.65023ZM5.9659 7.51439V3.05378L9.88634 5.28414L5.9659 7.51439Z" fill="#F28500" />
                                </svg>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-lg font-bold mb-2 pb-2 relative">
                                Contact Info
                                <span className="absolute bottom-0 left-0 h-0.5 w-[30%]" style={{ backgroundColor: colors.orange.dark }}></span>
                            </h4>

                            <div className="flex gap-3 items-start">
                                <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.33573 14.6629C7.84256 12.7772 11.2792 8.20679 11.2792 5.63959C11.2792 2.52607 8.75312 0 5.63959 0C2.52607 0 0 2.52607 0 5.63959C0 8.20679 3.43663 12.7772 4.94346 14.6629C5.30474 15.1124 5.97445 15.1124 6.33573 14.6629ZM5.63959 3.75973C6.13817 3.75973 6.61632 3.95779 6.96886 4.31033C7.3214 4.66287 7.51946 5.14102 7.51946 5.63959C7.51946 6.13817 7.3214 6.61632 6.96886 6.96886C6.61632 7.3214 6.13817 7.51946 5.63959 7.51946C5.14102 7.51946 4.66287 7.3214 4.31033 6.96886C3.95779 6.61632 3.75973 6.13817 3.75973 5.63959C3.75973 5.14102 3.95779 4.66287 4.31033 4.31033C4.66287 3.95779 5.14102 3.75973 5.63959 3.75973Z" fill="#F28500" />
                                </svg>
                                <p className="text-sm">
                                    Mandviwalla Building, Old Queens Road, Karachi
                                </p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.989" fillRule="evenodd" clipRule="evenodd" d="M3.18893 0.00595915C3.6074 -0.0322924 3.94609 0.113608 4.20501 0.443656C4.92509 1.42462 5.55037 2.46676 6.08086 3.57006C6.16708 3.78178 6.22442 4.00063 6.25281 4.22661C6.24074 4.39309 6.19385 4.54941 6.11212 4.69557C5.75108 5.08787 5.36028 5.4474 4.93972 5.77418C5.70388 7.86705 7.13158 9.29998 9.22289 10.073C9.46231 9.80742 9.69679 9.53649 9.92634 9.26012C10.1464 8.97565 10.4329 8.80891 10.7861 8.75989C11.2959 8.85865 11.7752 9.04102 12.2242 9.30701C13.0415 9.78069 13.8335 10.2913 14.6003 10.839C15.021 11.1938 15.1096 11.6159 14.8661 12.1051C14.4255 12.6917 13.9201 13.2179 13.3497 13.684C12.7549 14.1951 12.1088 14.6328 11.4114 14.9971C10.889 15.0135 10.3784 14.9406 9.87944 14.7782C8.64748 14.3811 7.50115 13.8183 6.44039 13.09C3.94355 11.3645 2.03124 9.13956 0.703442 6.41509C0.379565 5.68313 0.150296 4.92236 0.0156328 4.13281C-0.00521093 3.95564 -0.00521093 3.7785 0.0156328 3.60132C0.707681 2.32525 1.60913 1.21537 2.71997 0.271704C2.8691 0.166 3.02542 0.0774194 3.18893 0.00595915Z" fill="#F28500" />
                                </svg>
                                <p className="text-sm">+92 21-32441116-9</p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 0C3.36442 0 0 3.36442 0 7.5C0 11.6356 3.36442 15 7.5 15C11.6356 15 15 11.6356 15 7.5C15 3.36441 11.6356 0 7.5 0ZM10.7191 9.01292C10.7606 8.51387 10.7834 8.00697 10.7834 7.5C10.7834 6.99303 10.7606 6.48613 10.7191 5.98708C12.5664 6.38926 13.5484 7.07907 13.5484 7.5C13.5484 7.92093 12.5664 8.61074 10.7191 9.01292ZM7.5 13.5484C7.07907 13.5484 6.38926 12.5664 5.98708 10.7191C6.48613 10.7606 6.99303 10.7834 7.5 10.7834C8.00697 10.7834 8.51387 10.7606 9.01292 10.7191C8.61074 12.5664 7.92093 13.5484 7.5 13.5484ZM7.5 9.33176C6.87086 9.33176 6.29298 9.29783 5.75725 9.24275C5.70217 8.70702 5.66824 8.12914 5.66824 7.5C5.66824 6.87086 5.70217 6.29298 5.75725 5.75725C6.29298 5.70217 6.87086 5.66824 7.5 5.66824C8.12914 5.66824 8.70702 5.70217 9.24275 5.75725C9.29783 6.29298 9.33176 6.87086 9.33176 7.5C9.33176 8.12914 9.29783 8.70702 9.24275 9.24275C8.70702 9.29783 8.12914 9.33176 7.5 9.33176ZM1.45161 7.5C1.45161 7.07907 2.43365 6.38926 4.28089 5.98708C4.23939 6.48613 4.21663 6.99303 4.21663 7.5C4.21663 8.00697 4.2394 8.51387 4.28089 9.01292C2.43365 8.61074 1.45161 7.92093 1.45161 7.5ZM7.5 1.45161C7.92093 1.45161 8.61074 2.43365 9.01292 4.28089C8.51387 4.23939 8.00697 4.21663 7.5 4.21663C6.99303 4.21663 6.48613 4.2394 5.98708 4.28089C6.38926 2.43365 7.07907 1.45161 7.5 1.45161ZM13.11 5.25061C12.3834 4.90717 11.4923 4.65002 10.5229 4.47714C10.35 3.50765 10.0928 2.61655 9.74939 1.89C11.2767 2.50468 12.4953 3.7233 13.11 5.25061ZM5.25061 1.89003C4.90717 2.61658 4.65002 3.50768 4.47714 4.47714C3.50768 4.65002 2.61658 4.90711 1.89003 5.25058C2.5047 3.72327 3.72333 2.5047 5.25061 1.89003ZM1.89006 9.74942C2.61661 10.0929 3.50768 10.35 4.47714 10.5229C4.65002 11.4923 4.90711 12.3834 5.25058 13.1099C3.72333 12.4953 2.50473 11.2767 1.89006 9.74942ZM9.74942 13.11C10.0929 12.3834 10.35 11.4923 10.5229 10.5229C11.4923 10.35 12.3834 10.0928 13.11 9.74939C12.4953 11.2767 11.2767 12.4953 9.74942 13.11Z" fill="#F28500" />
                                </svg>
                                <p className="text-sm">+92 21-32441276</p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 0C9.48912 0 11.3968 0.790176 12.8033 2.1967C14.2098 3.60322 15 5.51088 15 7.5C15 9.48912 14.2098 11.3968 12.8033 12.8033C11.3968 14.2098 9.48912 15 7.5 15C5.51088 15 3.60322 14.2098 2.1967 12.8033C0.790176 11.3968 0 9.48912 0 7.5C0 5.51088 0.790176 3.60322 2.1967 2.1967C3.60322 0.790176 5.51088 0 7.5 0ZM6.79688 3.51562V7.5C6.79688 7.73438 6.91406 7.9541 7.11035 8.08594L9.92285 9.96094C10.2451 10.1777 10.6816 10.0898 10.8984 9.76465C11.1152 9.43945 11.0273 9.00586 10.7021 8.78906L8.20312 7.125V3.51562C8.20312 3.12598 7.88965 2.8125 7.5 2.8125C7.11035 2.8125 6.79688 3.12598 6.79688 3.51562Z" fill="#F28500" />
                                </svg>
                                <p className="text-sm">info@mandviwalla.net</p>
                            </div>
                        </div>

                        {/* Our Services */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-lg font-bold mb-2 pb-2 relative">
                                Our Services
                                <span className="absolute bottom-0 left-0 h-0.5 w-[30%]" style={{ backgroundColor: colors.orange.dark }}></span>
                            </h4>

                            <Link href="#" className="flex gap-3 items-center hover:translate-x-1 transition-transform">
                                <ArrowRight size={18} style={{ color: colors.orange.dark }} />
                                <span className="text-sm">Injection Moulding Products</span>
                            </Link>

                            <Link href="#" className="flex gap-3 items-center hover:translate-x-1 transition-transform">
                                <ArrowRight size={18} style={{ color: colors.orange.dark }} />
                                <span className="text-sm">Blow Moulding Products</span>
                            </Link>

                            <Link href="#" className="flex gap-3 items-center hover:translate-x-1 transition-transform">
                                <ArrowRight size={18} style={{ color: colors.orange.dark }} />
                                <span className="text-sm">Custom Plastic Solutions</span>
                            </Link>
                        </div>

                        {/* Additional Links */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-lg font-bold mb-2 pb-2 relative">
                                Additional Links
                                <span className="absolute bottom-0 left-0 h-0.5 w-[30%]" style={{ backgroundColor: colors.orange.dark }}></span>
                            </h4>

                            <Link href="#" className="flex gap-3 items-center hover:translate-x-1 transition-transform">
                                <ArrowRight size={18} style={{ color: colors.orange.dark }} />
                                <span className="text-sm">About Us</span>
                            </Link>

                            <Link href="#" className="flex gap-3 items-center hover:translate-x-1 transition-transform">
                                <ArrowRight size={18} style={{ color: colors.orange.dark }} />
                                <span className="text-sm">Our Products</span>
                            </Link>

                            <Link href="#" className="flex gap-3 items-center hover:translate-x-1 transition-transform">
                                <ArrowRight size={18} style={{ color: colors.orange.dark }} />
                                <span className="text-sm">Election of Director</span>
                            </Link>

                            <Link href="#" className="flex gap-3 items-center hover:translate-x-1 transition-transform">
                                <ArrowRight size={18} style={{ color: colors.orange.dark }} />
                                <span className="text-sm">FAQ's</span>
                            </Link>

                            <Link href="#" className="flex gap-3 items-center hover:translate-x-1 transition-transform">
                                <ArrowRight size={18} style={{ color: colors.orange.dark }} />
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
