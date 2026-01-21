import Image from "next/image";
import { colors } from "@/lib/colors";
import { Calendar, ChevronRight } from "lucide-react";

export default function RecentUpdates() {
    const mainPost = {
        image: "/container-recent.png",
        title: "MANDVIWALA MAUSER PLASTIC INDUSTRIES MAUSER PLASTIC INDUSTRIES MANDVIWALA...",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: {
            name: "JOEL CAIRNS",
            avatar: "/joel-cairns.png"
        },
        date: "18 DECEMBER 2023"
    };

    const sideBlogs = [
        {
            image: "/recent-blog-recent1.png",
            title: "MANDVIWALA MAUSER PLASTIC...",
            description: "Lorem ipsum dolor sit amet, consectetur..."
        },
        {
            image: "/recent-blog-recent2.png",
            title: "MANDVIWALA MAUSER PLASTIC...",
            description: "Lorem ipsum dolor sit amet, consectetur..."
        },
        {
            image: "/assets/home-banner.jpg",
            title: "MANDVIWALA MAUSER PLASTIC...",
            description: "Lorem ipsum dolor sit amet, consectetur..."
        },
        {
            image: "/azeem-mandviwalla.png",
            title: "MANDVIWALA MAUSER PLASTIC...",
            description: "Lorem ipsum dolor sit amet, consectetur..."
        }
    ];

    return (
        <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-20">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 md:mb-8">
                    <div className="flex flex-col gap-2">
                        {/* Label */}
                        <div className="border-l-4 pl-3" style={{ borderColor: colors.primary.blue }}>
                            <p className="text-sm md:text-base 2xl:text-lg font-semibold" style={{ color: colors.gray.tagColor }}>
                                Our News and Blogs
                            </p>
                        </div>

                        {/* Heading */}
                        <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-[42px] font-semibold text-black">
                            Recently Updated
                        </h2>
                    </div>

                    {/* View More Button */}
                    <button
                        className="flex items-center gap-2 px-5 py-2.5 rounded-md text-white
                         text-sm transition-colors whitespace-nowrap"
                        style={{ backgroundColor: colors.primary.blue }}
                    >
                        VIEW MORE
                        <ChevronRight size={18} />
                    </button>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
                    {/* Main Featured Post */}
                    <div className="flex flex-col gap-5">
                        {/* Image */}
                        <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                            <Image
                                src={mainPost.image}
                                alt={mainPost.title}
                                width={800}
                                height={600}
                                className="w-full h-full object-cover"
                                quality={95}
                                priority
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-3">
                            <h3 className="text-lg xl:text-xl 2xl:text-2xl font-bold text-black leading-snug">
                                {mainPost.title}
                            </h3>

                            <p className="text-sm md:text-base 2xl:text-lg leading-relaxed" style={{ color: colors.gray.border }}>
                                {mainPost.description}
                            </p>

                            {/* Author and Date */}
                            <div className="flex items-center gap-3 md:gap-4 pt-1 flex-wrap">
                                {/* Author */}
                                <div className="flex items-center gap-2">
                                    <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-100">
                                    </div>
                                    <span className="text-xs font-medium" style={{ color: colors.gray.border }}>
                                        {mainPost.author.name}
                                    </span>
                                </div>

                                {/* Date */}
                                <div className="flex items-center gap-1.5">
                                    <Calendar size={14} style={{ color: colors.gray.border }} />
                                    <span className="text-xs" style={{ color: colors.gray.border }}>
                                        {mainPost.date}
                                    </span>
                                </div>

                                {/* Read More */}
                                <button className="ml-auto text-xs md:text-sm font-bold pb-1 border-b-2" style={{ color: colors.orange.dark, borderColor: colors.orange.dark }}>
                                    READ MORE
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Side Blog List */}
                    <div className="flex flex-col gap-5">
                        {sideBlogs.map((blog, index) => (
                            <div key={index} className="flex gap-4">
                                {/* Image */}
                                <div className="w-36 md:w-44 h-28 md:h-32 shrink-0 rounded-md overflow-hidden bg-gray-100">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        width={176}
                                        height={128}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-2 flex-1 justify-center pb-5 border-b last:border-b-0" style={{ borderColor: '#E5E5E5' }}>
                                    <h4 className="text-sm md:text-base font-bold leading-tight" style={{ color: '#7A7A7A' }}>
                                        {blog.title}
                                    </h4>
                                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: colors.gray.border }}>
                                        {blog.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
