// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { Menu } from "lucide-react";
// import { colors } from "@/lib/colors";
// import MobileNavLinks from "./MobileNavLinks";

// interface MobileOpenProps {
//     mobileMenuOpen: boolean;
//     setMobileMenuOpen: (open: boolean) => void;
// }

// export default function MobileHeader({ mobileMenuOpen, setMobileMenuOpen }: MobileOpenProps) {
//     return (
//         <div className="lg:hidden w-full">
//             {/* NavLinks (always at the top, blue bg) */}
//             <div style={{ backgroundColor: colors.primary.blue }} className="w-full">
//                 <div className="container mx-auto flex items-center justify-between gap-10 px-4 py-3 font-medium text-white">
//                     {/* Mobile Menu Icon */}
//                     <button
//                         className="md:hidden text-white"
//                         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                         aria-label="Open mobile menu"
//                     >
//                         <Menu size={24} />
//                     </button>
//                     <Link
//                         href='/contact-us'
//                         className="inline-flex items-center gap-2 font-semibold px-3 py-2 transition min-w-[140px] max-w-[220px] justify-center"
//                         style={{ backgroundColor: colors.orange.dark, color: colors.primary.blue }}
//                         onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.orange.warm}
//                         onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.orange.dark}
//                     >
//                         <span className="flex items-center gap-2 w-full justify-center">
//                             <svg width="18" height="18" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
//                                 <path d="M8.75 10C7.42392 10 6.15215 9.47322 5.21447 8.53553C4.27678 7.59785 3.75 6.32608 3.75 5C3.75 3.67392 4.27678 2.40215 5.21447 1.46447C6.15215 0.526784 7.42392 0 8.75 0C10.0761 0 11.3479 0.526784 12.2855 1.46447C13.2232 2.40215 13.75 3.67392 13.75 5C13.75 6.32608 13.2232 7.59785 12.2855 8.53553C11.3479 9.47322 10.0761 10 8.75 10ZM8.16797 14.0312L7.44141 12.8203C7.19141 12.4023 7.49219 11.875 7.97656 11.875H8.75H9.51953C10.0039 11.875 10.3047 12.4062 10.0547 12.8203L9.32812 14.0312L10.6328 18.8711L12.0391 13.1328C12.1172 12.8164 12.4219 12.6094 12.7383 12.6914C15.4766 13.3789 17.5 15.8555 17.5 18.8008C17.5 19.4648 16.9609 20 16.3008 20H11.1523C11.0703 20 10.9961 19.9844 10.9258 19.957L10.9375 20H6.5625L6.57422 19.957C6.50391 19.9844 6.42578 20 6.34766 20H1.19922C0.539063 20 0 19.4609 0 18.8008C0 15.8516 2.02734 13.375 4.76172 12.6914C5.07812 12.6133 5.38281 12.8203 5.46094 13.1328L6.86719 18.8711L8.17188 14.0312H8.16797Z" fill="#1338BE" />
//                             </svg>
//                             <span className="whitespace-nowrap">CONTACT US</span>
//                         </span>
//                     </Link>
//                 </div>
//             </div>

//             {/* Mobile Menu Dropdown (nav links) */}
//             {mobileMenuOpen && (
//                 <div className="absolute top-full left-0 w-full shadow-lg z-50" style={{ backgroundColor: colors.primary.blue }}>
//                     <div className="md:hidden">

//                         <MobileNavLinks onClose={() => setMobileMenuOpen(false)} />
//                         {/* Below: Top and Middle Strips (logo, welcome, contact, address) */}
//                         <div className="block md:hidden px-4 py-4 bg-white text-gray-800 border-t border-gray-200">
//                             {/* Top Strip Content (Mobile) */}
//                             <div className="mb-4 border-b border-gray-200 pb-4">
//                                 <div className="flex items-start gap-2 mb-2">
//                                     <span className="inline-block w-2 h-2 rounded-full mt-1" style={{ backgroundColor: colors.orange.dark }}></span>
//                                     <div className="flex flex-col">
//                                         <span className="text-base font-semibold" style={{ color: colors.orange.dark }}>
//                                             Welcome to <strong className="ml-1">Mandviwalla MAUSER</strong>
//                                         </span>
//                                         <span className="text-base font-semibold" style={{ color: colors.orange.dark }}>
//                                             Plastic Industries Limited company
//                                         </span>
//                                         <span className="text-sm text-gray-700 mt-1">We're here to help you</span>
//                                     </div>
//                                 </div>
//                                 <div className="flex gap-6 font-semibold text-gray-700 mb-2 pl-6">
//                                     <Link href="#" className="hover:text-gray-500">FAQ's</Link>
//                                     <Link href="#" className="hover:text-gray-500">Career</Link>
//                                 </div>
//                                 <div className="flex gap-3 mt-2">
//                                     {/* Facebook icon */}
//                                     <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M9.44877 0.00531635C8.33913 0.0755454 7.31266 0.300864 6.3224 0.692976C4.03364 1.59913 2.15684 3.31779 1.05209 5.5183C-0.217056 8.04654 -0.344264 11.0225 0.70471 13.66C1.12841 14.7261 1.72335 15.6908 2.51008 16.5872C2.67056 16.7705 3.1608 17.2622 3.3428 17.4221C4.23521 18.2093 5.19318 18.8043 6.26662 19.2373C6.77154 19.4402 7.30973 19.608 7.83421 19.7231C8.00839 19.7621 8.40078 19.8353 8.43209 19.8353C8.45068 19.8353 8.45068 19.7962 8.45068 16.3531V12.8709H5.90653V9.97394H8.45068V8.75176C8.45068 8.04654 8.45459 7.47105 8.46047 7.38912C8.5544 6.01868 9.11803 4.99646 10.1014 4.41316C10.5437 4.15078 11.0447 3.99081 11.6612 3.91473C11.8256 3.89522 11.8814 3.89327 12.3012 3.89327C12.7738 3.89327 12.9362 3.90108 13.4265 3.94692C13.7318 3.97521 14.4089 4.06104 14.4715 4.0786C14.4872 4.08348 14.4882 4.14883 14.4862 5.31444L14.4833 6.5454L13.7004 6.55125C12.8442 6.5571 12.8609 6.55612 12.6241 6.61855C12.3638 6.68683 12.1681 6.79607 11.9978 6.96482C11.7512 7.20964 11.6182 7.54031 11.5917 7.97534C11.5868 8.06312 11.5819 8.54887 11.5819 9.05413V9.97394H12.9714C14.2494 9.97394 14.3609 9.97491 14.3609 9.98954C14.3609 10.0032 13.9412 12.7499 13.9255 12.8387L13.9196 12.8709H11.5819V16.3531C11.5819 19.7426 11.5819 19.8353 11.6005 19.8353C11.6367 19.8353 12.0105 19.765 12.2043 19.7221C14.2651 19.2647 16.1291 18.1634 17.5362 16.5725C19.4062 14.4579 20.2859 11.6731 19.9718 8.8571C19.7115 6.51613 18.6156 4.33318 16.8836 2.70718C15.271 1.19141 13.2112 0.25697 11.0095 0.0394555C10.9234 0.0316522 10.7982 0.0199474 10.7306 0.014095C10.5741 0.00141474 9.62295 -0.00541308 9.44877 0.00531635Z" fill={colors.orange.dark} />
//                                     </svg>
//                                     {/* Instagram icon */}
//                                     <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M10.0194 4.86396C7.1768 4.86396 4.88397 7.14948 4.88397 9.98298C4.88397 12.8165 7.1768 15.102 10.0194 15.102C12.8619 15.102 15.1547 12.8165 15.1547 9.98298C15.1547 7.14948 12.8619 4.86396 10.0194 4.86396ZM10.0194 13.311C8.18242 13.311 6.68069 11.8185 6.68069 9.98298C6.68069 8.14744 8.17795 6.65495 10.0194 6.65495C11.8608 6.65495 13.358 8.14744 13.358 9.98298C13.358 11.8185 11.8563 13.311 10.0194 13.311ZM16.5626 4.65457C16.5626 5.31839 16.0263 5.84856 15.3648 5.84856C14.6989 5.84856 14.167 5.31393 14.167 4.65457C14.167 3.9952 14.7033 3.46057 15.3648 3.46057C16.0263 3.46057 16.5626 3.9952 16.5626 4.65457ZM19.9638 5.86638C19.8879 4.26696 19.5214 2.85021 18.3459 1.68295C17.1749 0.515689 15.7536 0.150363 14.1491 0.0701693C12.4954 -0.0233898 7.53882 -0.0233898 5.88513 0.0701693C4.28507 0.145908 2.86379 0.511234 1.68833 1.67849C0.512868 2.84576 0.150843 4.26251 0.0703936 5.86192C-0.0234645 7.51035 -0.0234645 12.4512 0.0703936 14.0996C0.146374 15.699 0.512868 17.1157 1.68833 18.283C2.86379 19.4503 4.2806 19.8156 5.88513 19.8958C7.53882 19.9893 12.4954 19.9893 14.1491 19.8958C15.7536 19.82 17.1749 19.4547 18.3459 18.283C19.5169 17.1157 19.8834 15.699 19.9638 14.0996C20.0577 12.4512 20.0577 7.5148 19.9638 5.86638ZM17.8275 15.8683C17.4788 16.7415 16.804 17.4142 15.9235 17.7662C14.605 18.2875 11.4764 18.1672 10.0194 18.1672C8.56232 18.1672 5.42925 18.283 4.11523 17.7662C3.23922 17.4187 2.56434 16.746 2.21125 15.8683C1.68833 14.554 1.809 11.4354 1.809 9.98298C1.809 8.53059 1.6928 5.40749 2.21125 4.09767C2.55987 3.22445 3.23475 2.55171 4.11523 2.19975C5.43371 1.67849 8.56232 1.79878 10.0194 1.79878C11.4764 1.79878 14.6095 1.68295 15.9235 2.19975C16.7995 2.54726 17.4744 3.21999 17.8275 4.09767C18.3504 5.41195 18.2297 8.53059 18.2297 9.98298C18.2297 11.4354 18.3504 14.5585 17.8275 15.8683Z" fill={colors.orange.dark} />
//                                     </svg>
//                                     {/* Youtube icon */}
//                                     <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M27.8978 3.12469C27.5701 1.89474 26.6046 0.926076 25.3787 0.597344C23.1567 0 14.2466 0 14.2466 0C14.2466 0 5.33657 0 3.11449 0.597344C1.88859 0.926128 0.923088 1.89474 0.595393 3.12469C0 5.35405 0 10.0054 0 10.0054C0 10.0054 0 14.6567 0.595393 16.8861C0.923088 18.116 1.88859 19.0443 3.11449 19.3731C5.33657 19.9704 14.2466 19.9704 14.2466 19.9704C14.2466 19.9704 23.1566 19.9704 25.3787 19.3731C26.6046 19.0443 27.5701 18.116 27.8978 16.8861C28.4932 14.6567 28.4932 10.0054 28.4932 10.0054C28.4932 10.0054 28.4932 5.35405 27.8978 3.12469ZM11.3325 14.2285V5.78232L18.7795 10.0055L11.3325 14.2285Z" fill={colors.orange.dark} />
//                                     </svg>
//                                 </div>
//                             </div>
//                             {/* Middle Strip Content */}
//                             <div className="flex flex-col gap-4 pt-4">
//                                 <div className="flex items-center gap-3">
//                                     <Image src="/assets/logo.png" width={48} height={70} alt="Mandviwalla-logo" />
//                                     <div className="flex flex-col text-base">
//                                         <h2 className="font-bold">Mandviwalla <span style={{ color: colors.orange.dark }}>MAUSER</span></h2>
//                                         <h3 className="text-sm">Plastic Industries Limited</h3>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-col gap-2 text-gray-700 text-sm">
//                                     <div className="flex items-start gap-2">
//                                         <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path opacity="0.989" fillRule="evenodd" clipRule="evenodd" d="M6.37814 0.0119188C7.21512 -0.0645876 7.89252 0.227225 8.4104 0.88735C9.85061 2.84937 11.1012 4.93373 12.1622 7.14043C12.3347 7.56389 12.4494 8.00161 12.5062 8.45358C12.482 8.78656 12.3882 9.09921 12.2248 9.39154C11.5027 10.1762 10.721 10.8953 9.87987 11.5489C11.4082 15.7348 14.2638 18.6008 18.4466 20.1468C18.9255 19.6157 19.3944 19.0738 19.8535 18.521C20.2936 17.9521 20.8668 17.6186 21.5731 17.5205C22.5927 17.7181 23.5515 18.0828 24.4496 18.6148C26.0841 19.5622 27.6682 20.5836 29.2019 21.6788C30.0434 22.3886 30.2205 23.2327 29.7334 24.2113C28.8522 25.3844 27.8413 26.437 26.7007 27.3692C25.5109 28.3914 24.2187 29.2668 22.8237 29.9954C21.779 30.0284 20.7577 29.8825 19.7597 29.5577C17.2957 28.7634 15.003 27.6378 12.8813 26.1811C7.88745 22.7301 4.06267 18.2799 1.40694 12.8307C0.759163 11.3668 0.300606 9.84514 0.031267 8.26599C-0.0104223 7.91162 -0.0104223 7.55732 0.031267 7.20296C1.41542 4.6507 3.21839 2.43085 5.44018 0.543431C5.73845 0.332014 6.05111 0.154846 6.37814 0.0119188Z" fill={colors.orange.dark} />
//                                         </svg>
//                                         <div className="flex flex-col leading-tight">
//                                             <span className="font-semibold text-base">+92 21-32441116-9</span>
//                                             <span className="text-[#999999] text-sm">info@mandviwalla.net</span>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-start gap-2">
//                                         <svg width="23" height="30" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path d="M12.6715 29.3259C15.6851 25.5544 22.5584 16.4136 22.5584 11.2792C22.5584 5.05214 17.5062 0 11.2792 0C5.05214 0 0 5.05214 0 11.2792C0 16.4136 6.87326 25.5544 9.88691 29.3259C10.6095 30.2247 11.9489 30.2247 12.6715 29.3259ZM11.2792 7.51946C12.2763 7.51946 13.2326 7.91557 13.9377 8.62066C14.6428 9.32574 15.0389 10.282 15.0389 11.2792C15.0389 12.2763 14.6428 13.2326 13.9377 13.9377C13.2326 14.6428 12.2763 15.0389 11.2792 15.0389C10.282 15.0389 9.32574 14.6428 8.62066 13.9377C7.91557 13.2326 7.51946 12.2763 7.51946 11.2792C7.51946 10.282 7.91557 9.32574 8.62066 8.62066C9.32574 7.91557 10.282 7.51946 11.2792 7.51946Z" fill={colors.orange.dark} />
//                                         </svg>
//                                         <div className="flex flex-col leading-tight">
//                                             <span className="font-semibold text-base">Mandviwalla Building</span>
//                                             <span className="text-[#999999] text-sm">Old Queens Road, Karachi</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}


//         </div>
//     );
// }


"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { colors } from "@/lib/colors";
import MobileNavLinks from "./MobileNavLinks";

interface MobileOpenProps {
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
}

export default function MobileHeader({ mobileMenuOpen, setMobileMenuOpen }: MobileOpenProps) {
    return (
        <div className="lg:hidden w-full">

            {/* Top nav - blue background */}
            <div style={{ backgroundColor: colors.primary.blue }}>
                <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3 font-medium text-white">
                    {/* Hamburger */}
                    <button
                        className="text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Open mobile menu"
                    >
                        <Menu size={24} />
                    </button>

                    {/* Contact button */}
                    <Link
                        href='/contact-us'
                        className="inline-flex items-center gap-2 font-semibold px-3 py-2 min-w-[140px] max-w-[220px] justify-center rounded-md transition"
                        style={{ backgroundColor: colors.orange.dark, color: colors.primary.blue }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.orange.warm}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.orange.dark}
                    >
                        <svg width="18" height="18" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                            <path d="M8.75 10C7.42392 10 6.15215 9.47322 5.21447 8.53553C4.27678 7.59785 3.75 6.32608 3.75 5C3.75 3.67392 4.27678 2.40215 5.21447 1.46447C6.15215 0.526784 7.42392 0 8.75 0C10.0761 0 11.3479 0.526784 12.2855 1.46447C13.2232 2.40215 13.75 3.67392 13.75 5C13.75 6.32608 13.2232 7.59785 12.2855 8.53553C11.3479 9.47322 10.0761 10 8.75 10ZM8.16797 14.0312L7.44141 12.8203C7.19141 12.4023 7.49219 11.875 7.97656 11.875H8.75H9.51953C10.0039 11.875 10.3047 12.4062 10.0547 12.8203L9.32812 14.0312L10.6328 18.8711L12.0391 13.1328C12.1172 12.8164 12.4219 12.6094 12.7383 12.6914C15.4766 13.3789 17.5 15.8555 17.5 18.8008C17.5 19.4648 16.9609 20 16.3008 20H11.1523C11.0703 20 10.9961 19.9844 10.9258 19.957L10.9375 20H6.5625L6.57422 19.957C6.50391 19.9844 6.42578 20 6.34766 20H1.19922C0.539063 20 0 19.4609 0 18.8008C0 15.8516 2.02734 13.375 4.76172 12.6914C5.07812 12.6133 5.38281 12.8203 5.46094 13.1328L6.86719 18.8711L8.17188 14.0312H8.16797Z" fill="#1338BE" />
                        </svg>
                        <span>CONTACT US</span>
                    </Link>
                </div>
            </div>

            {/* Dropdown Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full max-h-[90vh] overflow-y-auto shadow-lg z-50" style={{ backgroundColor: colors.primary.blue }}>
                    <div className="px-4 py-4">

                        {/* Nav Links */}
                        <MobileNavLinks onClose={() => setMobileMenuOpen(false)} />

                        {/* Top Info Strip */}
                        <div className="bg-white rounded-md p-4 mt-4 text-gray-800 space-y-4 shadow-sm">
                            <div className="flex items-start gap-2">
                                {/* <span className="inline-block w-2 h-2 rounded-full mt-1" style={{ backgroundColor: colors.orange.dark }}></span> */}
                                <div className="flex flex-col">
                                    <span className="text-base font-semibold" style={{ color: colors.orange.dark }}>
                                        Welcome to <strong>Mandviwalla MAUSER</strong>
                                    </span>
                                    <span className="text-sm text-gray-700 mt-1">We're here to help you</span>
                                </div>
                            </div>

                            <div className="flex gap-6 font-semibold text-gray-700">
                                <Link href="#" className="hover:text-gray-500">FAQ's</Link>
                                <Link href="#" className="hover:text-gray-500">Career</Link>
                            </div>

                            {/* Social icons */}
                            <div className="flex gap-4 mt-2">
                                {/* Facebook icon */}
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.44877 0.00531635C8.33913 0.0755454 7.31266 0.300864 6.3224 0.692976C4.03364 1.59913 2.15684 3.31779 1.05209 5.5183C-0.217056 8.04654 -0.344264 11.0225 0.70471 13.66C1.12841 14.7261 1.72335 15.6908 2.51008 16.5872C2.67056 16.7705 3.1608 17.2622 3.3428 17.4221C4.23521 18.2093 5.19318 18.8043 6.26662 19.2373C6.77154 19.4402 7.30973 19.608 7.83421 19.7231C8.00839 19.7621 8.40078 19.8353 8.43209 19.8353C8.45068 19.8353 8.45068 19.7962 8.45068 16.3531V12.8709H5.90653V9.97394H8.45068V8.75176C8.45068 8.04654 8.45459 7.47105 8.46047 7.38912C8.5544 6.01868 9.11803 4.99646 10.1014 4.41316C10.5437 4.15078 11.0447 3.99081 11.6612 3.91473C11.8256 3.89522 11.8814 3.89327 12.3012 3.89327C12.7738 3.89327 12.9362 3.90108 13.4265 3.94692C13.7318 3.97521 14.4089 4.06104 14.4715 4.0786C14.4872 4.08348 14.4882 4.14883 14.4862 5.31444L14.4833 6.5454L13.7004 6.55125C12.8442 6.5571 12.8609 6.55612 12.6241 6.61855C12.3638 6.68683 12.1681 6.79607 11.9978 6.96482C11.7512 7.20964 11.6182 7.54031 11.5917 7.97534C11.5868 8.06312 11.5819 8.54887 11.5819 9.05413V9.97394H12.9714C14.2494 9.97394 14.3609 9.97491 14.3609 9.98954C14.3609 10.0032 13.9412 12.7499 13.9255 12.8387L13.9196 12.8709H11.5819V16.3531C11.5819 19.7426 11.5819 19.8353 11.6005 19.8353C11.6367 19.8353 12.0105 19.765 12.2043 19.7221C14.2651 19.2647 16.1291 18.1634 17.5362 16.5725C19.4062 14.4579 20.2859 11.6731 19.9718 8.8571C19.7115 6.51613 18.6156 4.33318 16.8836 2.70718C15.271 1.19141 13.2112 0.25697 11.0095 0.0394555C10.9234 0.0316522 10.7982 0.0199474 10.7306 0.014095C10.5741 0.00141474 9.62295 -0.00541308 9.44877 0.00531635Z" fill={colors.orange.dark} />
                                </svg>
                                {/* Instagram icon */}
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0194 4.86396C7.1768 4.86396 4.88397 7.14948 4.88397 9.98298C4.88397 12.8165 7.1768 15.102 10.0194 15.102C12.8619 15.102 15.1547 12.8165 15.1547 9.98298C15.1547 7.14948 12.8619 4.86396 10.0194 4.86396ZM10.0194 13.311C8.18242 13.311 6.68069 11.8185 6.68069 9.98298C6.68069 8.14744 8.17795 6.65495 10.0194 6.65495C11.8608 6.65495 13.358 8.14744 13.358 9.98298C13.358 11.8185 11.8563 13.311 10.0194 13.311ZM16.5626 4.65457C16.5626 5.31839 16.0263 5.84856 15.3648 5.84856C14.6989 5.84856 14.167 5.31393 14.167 4.65457C14.167 3.9952 14.7033 3.46057 15.3648 3.46057C16.0263 3.46057 16.5626 3.9952 16.5626 4.65457ZM19.9638 5.86638C19.8879 4.26696 19.5214 2.85021 18.3459 1.68295C17.1749 0.515689 15.7536 0.150363 14.1491 0.0701693C12.4954 -0.0233898 7.53882 -0.0233898 5.88513 0.0701693C4.28507 0.145908 2.86379 0.511234 1.68833 1.67849C0.512868 2.84576 0.150843 4.26251 0.0703936 5.86192C-0.0234645 7.51035 -0.0234645 12.4512 0.0703936 14.0996C0.146374 15.699 0.512868 17.1157 1.68833 18.283C2.86379 19.4503 4.2806 19.8156 5.88513 19.8958C7.53882 19.9893 12.4954 19.9893 14.1491 19.8958C15.7536 19.82 17.1749 19.4547 18.3459 18.283C19.5169 17.1157 19.8834 15.699 19.9638 14.0996C20.0577 12.4512 20.0577 7.5148 19.9638 5.86638ZM17.8275 15.8683C17.4788 16.7415 16.804 17.4142 15.9235 17.7662C14.605 18.2875 11.4764 18.1672 10.0194 18.1672C8.56232 18.1672 5.42925 18.283 4.11523 17.7662C3.23922 17.4187 2.56434 16.746 2.21125 15.8683C1.68833 14.554 1.809 11.4354 1.809 9.98298C1.809 8.53059 1.6928 5.40749 2.21125 4.09767C2.55987 3.22445 3.23475 2.55171 4.11523 2.19975C5.43371 1.67849 8.56232 1.79878 10.0194 1.79878C11.4764 1.79878 14.6095 1.68295 15.9235 2.19975C16.7995 2.54726 17.4744 3.21999 17.8275 4.09767C18.3504 5.41195 18.2297 8.53059 18.2297 9.98298C18.2297 11.4354 18.3504 14.5585 17.8275 15.8683Z" fill={colors.orange.dark} />
                                </svg>
                                {/* Youtube icon */}
                                <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.8978 3.12469C27.5701 1.89474 26.6046 0.926076 25.3787 0.597344C23.1567 0 14.2466 0 14.2466 0C14.2466 0 5.33657 0 3.11449 0.597344C1.88859 0.926128 0.923088 1.89474 0.595393 3.12469C0 5.35405 0 10.0054 0 10.0054C0 10.0054 0 14.6567 0.595393 16.8861C0.923088 18.116 1.88859 19.0443 3.11449 19.3731C5.33657 19.9704 14.2466 19.9704 14.2466 19.9704C14.2466 19.9704 23.1566 19.9704 25.3787 19.3731C26.6046 19.0443 27.5701 18.116 27.8978 16.8861C28.4932 14.6567 28.4932 10.0054 28.4932 10.0054C28.4932 10.0054 28.4932 5.35405 27.8978 3.12469ZM11.3325 14.2285V5.78232L18.7795 10.0055L11.3325 14.2285Z" fill={colors.orange.dark} />
                                </svg>
                            </div>
                        </div>

                        {/* Middle Strip - Logo & Contact */}
                        <div className="bg-white rounded-md p-4 mt-4 space-y-4 shadow-sm">
                            <div className="flex items-center gap-3">
                                <Image src="/assets/logo.png" width={48} height={70} alt="Mandviwalla-logo" />
                                <div className="flex flex-col text-base">
                                    <h2 className="font-bold">Mandviwalla <span style={{ color: colors.orange.dark }}>MAUSER</span></h2>
                                    <h3 className="text-sm">Plastic Industries Limited</h3>
                                </div>
                            </div>

                            {/* Contact & Address */}
                            <div className="flex flex-col gap-3 text-sm text-gray-700">
                                <div className="flex items-start gap-2">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.989" fillRule="evenodd" clipRule="evenodd" d="M6.37814 0.0119188C7.21512 -0.0645876 7.89252 0.227225 8.4104 0.88735C9.85061 2.84937 11.1012 4.93373 12.1622 7.14043C12.3347 7.56389 12.4494 8.00161 12.5062 8.45358C12.482 8.78656 12.3882 9.09921 12.2248 9.39154C11.5027 10.1762 10.721 10.8953 9.87987 11.5489C11.4082 15.7348 14.2638 18.6008 18.4466 20.1468C18.9255 19.6157 19.3944 19.0738 19.8535 18.521C20.2936 17.9521 20.8668 17.6186 21.5731 17.5205C22.5927 17.7181 23.5515 18.0828 24.4496 18.6148C26.0841 19.5622 27.6682 20.5836 29.2019 21.6788C30.0434 22.3886 30.2205 23.2327 29.7334 24.2113C28.8522 25.3844 27.8413 26.437 26.7007 27.3692C25.5109 28.3914 24.2187 29.2668 22.8237 29.9954C21.779 30.0284 20.7577 29.8825 19.7597 29.5577C17.2957 28.7634 15.003 27.6378 12.8813 26.1811C7.88745 22.7301 4.06267 18.2799 1.40694 12.8307C0.759163 11.3668 0.300606 9.84514 0.031267 8.26599C-0.0104223 7.91162 -0.0104223 7.55732 0.031267 7.20296C1.41542 4.6507 3.21839 2.43085 5.44018 0.543431C5.73845 0.332014 6.05111 0.154846 6.37814 0.0119188Z" fill={colors.orange.dark} />
                                    </svg>
                                    <div className="flex flex-col leading-tight">
                                        <span className="font-semibold text-base">+92 21-32441116-9</span>
                                        <span className="text-gray-400 text-sm">info@mandviwalla.net</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2">
                                    <svg width="23" height="30" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6715 29.3259C15.6851 25.5544 22.5584 16.4136 22.5584 11.2792C22.5584 5.05214 17.5062 0 11.2792 0C5.05214 0 0 5.05214 0 11.2792C0 16.4136 6.87326 25.5544 9.88691 29.3259C10.6095 30.2247 11.9489 30.2247 12.6715 29.3259ZM11.2792 7.51946C12.2763 7.51946 13.2326 7.91557 13.9377 8.62066C14.6428 9.32574 15.0389 10.282 15.0389 11.2792C15.0389 12.2763 14.6428 13.2326 13.9377 13.9377C13.2326 14.6428 12.2763 15.0389 11.2792 15.0389C10.282 15.0389 9.32574 14.6428 8.62066 13.9377C7.91557 13.2326 7.51946 12.2763 7.51946 11.2792C7.51946 10.282 7.91557 9.32574 8.62066 8.62066C9.32574 7.91557 10.282 7.51946 11.2792 7.51946Z" fill={colors.orange.dark} />
                                    </svg>
                                    <div className="flex flex-col leading-tight">
                                        <span className="font-semibold text-base">Mandviwalla Building</span>
                                        <span className="text-gray-400 text-sm">Old Queens Road, Karachi</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}
