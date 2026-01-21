import Image from "next/image";
import { colors } from "@/lib/colors";

export default function BoardOfDirectors() {
    const directors = [
        {
            name: "Azeem Mandviwalla",
            role: "Chief Executive / Director",
            image: "/azeem-mandviwalla.png"
        },
        {
            name: "Mr. Abdul Qadir Shiwani",
            role: "Chief Executive / Director",
            image: "/qadir-shiwani.png"
        },
        {
            name: "Mariron Hon",
            role: "Chief Executive / Director",
            image: "/mariron-hon.png"
        },
        {
            name: "Azeem Mandviwalla",
            role: "Chief Executive / Director",
            image: "/azeem-mandviwalla2.png"
        }
    ];

    return (
        <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-">
            <div className="container mx-auto">

                {/* Header Section */}
                <div className="flex flex-col gap-4 mb-8 md:mb-12 items-center text-center max-w-3xl mx-auto">

                    {/* Label */}
                    <div className="border-l-4 pl-4" style={{ borderColor: colors.orange.dark }}>
                        <p className="text-sm md:text-base 2xl:text-lg font-semibold " style={{ color: colors.gray.tagColor }}>
                            OUR Management / Leadership
                        </p>
                    </div>

                    {/* Heading */}
                    <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-[42px] font-semibold text-black">
                        Meet Our Board Of Director
                    </h2>

                    {/* Description */}
                    <p className="text-xs sm:text-sm md:text-base leading-relaxed -mt-3 md:mt-0" style={{ color: colors.gray.text }}>
                        Profiles of Directors / CEO / Board Of Director
                    </p>
                </div>

                {/* Directors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
                    {directors.map((director, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden"
                            style={{ border: '1px solid #E5E5E5' }}
                        >
                            <div className="flex flex-col sm:flex-row">

                                {/* Left Side - Text and Social Icons */}
                                <div className="flex flex-col justify-center items-center p-4 sm:p-6 sm:w-1/2 gap-0 lg:gap-6">
                                    <div className="text-center">
                                        <h3 className="text-lg md:text-xl xl:text-xl 2xl:text-2xl font-semibold text-black mb-1 sm:mb-2">
                                            {director.name}
                                        </h3>
                                        <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-6" style={{ color: colors.gray.light }}>
                                            {director.role}
                                        </p>
                                    </div>

                                    {/* Social Media Icons */}
                                    <div className="flex justify-center">
                                        <div className="inline-flex gap-4 sm:gap-6 p-2 rounded-full w-fit" style={{ boxShadow: 'inset 0 2px 3px rgba(255, 255, 255, 0.15)' }}>
                                            {/* Instagram */}
                                            <a href="#" className="w-8 h-8 flex items-center justify-center">
                                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.1875 0C14.8203 0 16.1484 1.32852 16.1484 2.96094V13.1875C16.1484 14.8203 14.8199 16.1484 13.1875 16.1484H2.96094C1.32852 16.1484 0 14.8199 0 13.1875V2.96094C0 1.32852 1.32852 0 2.96094 0H13.1875ZM8.07422 2.75879C5.1432 2.75879 2.75792 5.14322 2.75781 8.07422C2.75781 11.0057 5.14313 13.3906 8.07422 13.3906C11.0052 13.3906 13.3906 11.0053 13.3906 8.07422C13.3905 5.14327 11.0056 2.75886 8.07422 2.75879ZM8.07422 4.92676C9.80835 4.92676 11.2227 6.34028 11.2227 8.07422C11.2227 9.80835 9.80916 11.2227 8.07422 11.2227C6.34009 11.2227 4.92676 9.80916 4.92676 8.07422C4.92676 6.34028 6.3401 4.92676 8.07422 4.92676ZM13.5615 1.3418C12.8677 1.3418 12.3029 1.90625 12.3027 2.59961C12.3027 3.2931 12.8677 3.85742 13.5615 3.85742C14.2549 3.85726 14.8193 3.293 14.8193 2.59961C14.8192 1.90635 14.2548 1.34196 13.5615 1.3418Z" fill={colors.primary.blue} />
                                                </svg>
                                            </a>

                                            {/* Twitter */}
                                            <a href="#" className="w-8 h-8 flex items-center justify-center">
                                                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.9893 1.92314C19.2541 2.24917 18.4632 2.46968 17.6337 2.56817C18.4806 2.06077 19.1305 1.25793 19.4373 0.299726C18.6448 0.769808 17.7667 1.11082 16.833 1.29463C16.0849 0.497913 15.019 0 13.8388 0C11.5743 0 9.73775 1.83659 9.73775 4.10105C9.73775 4.42249 9.77414 4.73537 9.84449 5.03571C6.43617 4.86474 3.41413 3.23215 1.39128 0.750234C1.03834 1.3558 0.83587 2.06077 0.83587 2.81223C0.83587 4.23471 1.56041 5.4905 2.66023 6.22575C1.98829 6.20464 1.3555 6.02022 0.802839 5.71224C0.802533 5.72967 0.802533 5.7471 0.802533 5.76423C0.802533 7.75129 2.21675 9.40866 4.09249 9.78515C3.74872 9.87935 3.38569 9.9292 3.01225 9.9292C2.74739 9.9292 2.49079 9.90382 2.24061 9.85611C2.76238 11.485 4.27661 12.6708 6.0716 12.7041C4.66778 13.8042 2.8997 14.4597 0.977781 14.4597C0.64747 14.4597 0.320218 14.4404 0 14.4022C1.81396 15.5662 3.97015 16.2449 6.286 16.2449C13.8293 16.2449 17.9545 9.99588 17.9545 4.57603C17.9545 4.39833 17.9506 4.22125 17.9426 4.0457C18.7445 3.46765 19.4397 2.74556 19.9893 1.92314Z" fill={colors.primary.blue} />
                                                </svg>
                                            </a>

                                            {/* Facebook */}
                                            <a href="#" className="w-8 h-8 flex items-center justify-center">
                                                <svg width="11" height="23" viewBox="0 0 11 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.90596 11.1728H6.84447V22.3887H2.20605V11.1728H0V7.23105H2.20605V4.68032C2.20605 2.85627 3.0725 0 6.88576 0L10.3216 0.0143746V3.84048H7.82867C7.41976 3.84048 6.84477 4.04478 6.84477 4.9149V7.23472H10.3112L9.90596 11.1728Z" fill={colors.primary.blue} />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>


                                {/* Right Side - Image */}
                                < div className="sm:w-1/2 h-64 sm:h-auto p-4" >
                                    <Image
                                        src={director.image}
                                        alt={director.name}
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover md:w-[241.83px] md:h-[259.51px]"
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div >
            </div >
        </section >
    );
}
