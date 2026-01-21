"use client";

import Image from "next/image";
import { colors } from "@/lib/colors";

export default function WhyChooseUs() {
    return (
        <section className="w-full py-20 px-4 md:px-20 bg-white">
            <div className="container mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-sm md:text-base 2xl:text-lg mb-2 font-semibold" style={{ fontFamily: "var(--font-lato)" }}>
                        <span
                            className="inline-block border-l-2 pl-2"
                            style={{ borderColor: colors.primary.orange ,color: colors.gray.tagColor }}
                        >
                            Why Choose Us?
                        </span>
                    </p>
                    <h2 className="text-2xl md:text-4xl font-bold 2xl:text-[42px]" style={{ fontFamily: "var(--font-maven)" }}>
                        Why Partner With Us?
                    </h2>
                </div>

                {/* Main Layout */}
                <div className="relative flex flex-col md:flex-row justify-center items-center md:items-start max-w-6xl mx-auto gap-8 md:gap-0">

                    {/* LEFT CONTENT - Desktop */}
                    <div className="hidden md:flex flex-col justify-between text-right w-1/3 pr-8 lg:pr-16 h-[460px]">
                        <div className="pt-10">
                            <h3 className="text-lg lg:text-xl 2xl:text-2xl font-semibold mb-1">Sustainable Practices</h3>
                            <p className="text-sm text-gray-600">
                                Reusable, eco-friendly packaging solutions.
                            </p>
                        </div>

                        <div className="pb-10">
                            <h3 className="text-lg lg:text-xl 2xl:text-2xl font-semibold mb-1">Customer Commitment</h3>
                            <p className="text-sm text-gray-600">
                                On-time delivery & after-sales support.
                            </p>
                        </div>
                    </div>

                    {/* CENTER IMAGE */}
                    <div className="relative w-[280px] h-[380px] sm:w-[320px] sm:h-[420px] md:w-[360px] md:h-[460px] flex-shrink-0">
                        <Image
                            src="/why-choose-us.jpg"
                            alt="Partnership"
                            fill
                            className="object-cover"
                        />

                        {/* LEFT ICONS */}
                        <div className="absolute top-10 left-0 -translate-x-1/2 w-16 h-16 bg-[#ECF0F1] flex items-center justify-center shadow">
                            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.1739 40.1302H14.0435" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M10.7826 45.5649H21.6522" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M5.34782 50.9996H18.3913" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M32.5217 41.2173C32.5217 41.2173 32.3478 48.076 27.087 50.9999" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M43.3913 41.2173C43.3913 41.2173 43.5652 48.076 48.8261 50.9999" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M51 26.9997C51 35.4018 45.163 43.391 37.9565 43.391C30.75 43.391 24.913 35.4127 24.913 26.9997C24.913 18.5975 30.75 12.9562 37.9565 12.9562C45.163 12.9562 51 18.5975 51 26.9997Z" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M51 22.7393C51 22.7393 43.6739 24.7393 37.9565 22.7393C35.2065 21.7719 31.6304 21.4675 29.2609 21.6523" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M23.8261 34.6957H1V1H37.9565V10.7826" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M17.3043 21.6525H6.43478V29.2612H17.3043V21.6525Z" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M26 11.8696L19.4783 8.6087L12.9565 11.8696V1H26V11.8696Z" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <div className="absolute bottom-10 left-0 -translate-x-1/2 w-16 h-16 bg-[#ECF0F1] flex items-center justify-center shadow">
                            <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.2174 45.5649H13.0435" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M14.1304 50.9998C17.132 50.9998 19.5652 48.5666 19.5652 45.565C19.5652 42.5635 17.132 40.1302 14.1304 40.1302C11.1289 40.1302 8.69566 42.5635 8.69566 45.565C8.69566 48.5666 11.1289 50.9998 14.1304 50.9998Z" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M41.3044 45.5649H39.1304" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M26.087 1H11.9565" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M40.2174 50.9998C43.219 50.9998 45.6522 48.5666 45.6522 45.565C45.6522 42.5635 43.219 40.1302 40.2174 40.1302C37.2159 40.1302 34.7826 42.5635 34.7826 45.565C34.7826 48.5666 37.2159 50.9998 40.2174 50.9998Z" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M45.6522 46.6519H48.913C50.1196 46.6519 51.087 45.6736 51.087 44.478V33.6084C51.087 32.4128 50.1196 31.4345 48.913 31.4345L45.9022 15.8041C45.7065 14.7823 44.8044 14.0432 43.7718 14.0432H31.5217C30.3152 14.0432 29.3478 15.0215 29.3478 16.2171V46.6519H34.7826" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M0 46.6519H8.69565" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M19.5652 46.652H29.3478V9.69552C29.3478 8.49987 28.3696 7.52161 27.1739 7.52161H8.69566" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M48.9131 31.4345H40.2174C39.0109 31.4345 38.0435 30.4563 38.0435 29.2606V14.0432" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M17.3913 34.6957H3.26086" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M13.0435 28.1741H0" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M4.34782 20.5656H2.1739" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M21.7392 20.5656H6.52176" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M16.3043 15.1301H0" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M6.52174 7.52161H4.34782" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                            </svg>

                        </div>

                        {/* RIGHT ICONS */}
                        <div
                            className="absolute top-10 right-0 translate-x-1/2 w-16 h-16 flex items-center justify-center shadow"
                            style={{ backgroundColor: colors.primary.blue }}
                        >
                            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.08696 25.9998C1.3913 24.3259 1 22.4889 1 20.565C1 12.7607 7.32609 6.43457 15.1304 6.43457C22.9348 6.43457 29.2609 12.7607 29.2609 20.565C29.2609 28.3694 22.9348 34.6954 15.1304 34.6954C10.7609 34.6954 6.8587 32.7063 4.26087 29.5976" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M15.1304 21.6519V10.7823" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M15.1304 6.43478V1" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M18.3913 1H11.8696" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M23.8261 4.26099L21.6522 8.60881" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M6.43481 4.26099L8.60873 8.60881" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M10.7826 29.261H4.26086V35.7827" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M16.2174 45.5647H14.0435" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M15.1304 50.9997C18.1319 50.9997 20.5652 48.5665 20.5652 45.5649C20.5652 42.5634 18.1319 40.1301 15.1304 40.1301C12.1289 40.1301 9.69562 42.5634 9.69562 45.5649C9.69562 48.5665 12.1289 50.9997 15.1304 50.9997Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M41.2174 45.5647H39.0435" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M40.1304 50.9997C43.1319 50.9997 45.5652 48.5665 45.5652 45.5649C45.5652 42.5634 43.1319 40.1301 40.1304 40.1301C37.1289 40.1301 34.6956 42.5634 34.6956 45.5649C34.6956 48.5665 37.1289 50.9997 40.1304 50.9997Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M45.5652 46.652H48.8261C50.0326 46.652 51 45.6738 51 44.4781V33.6086C51 32.4129 50.0326 31.4346 48.8261 31.4346L45.8153 15.8042C45.6196 14.7825 44.7283 14.0433 43.6848 14.0433H31.4348" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M1 36.8699V44.4786C1 45.6742 1.97826 46.6525 3.17391 46.6525H9.69565" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M19.4783 46.6522H34.6957" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M48.8261 31.4346H40.1305C38.9239 31.4346 37.9565 30.4564 37.9565 29.2607V14.0433" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                            </svg>

                        </div>

                        <div className="absolute bottom-10 right-0 translate-x-1/2 w-16 h-16 bg-[#ECF0F1]  flex items-center justify-center shadow">
                            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M43.3913 12.6633H8.60864V38.7503H43.3913V12.6633Z" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M21.6522 46.3593H7.52174C3.92391 46.3593 1 43.4354 1 39.8375V11.5767C1 7.97884 3.92391 5.05493 7.52174 5.05493H24.913" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M30.3478 5.05493H44.4782C48.076 5.05493 51 7.97884 51 11.5767V39.8375C51 43.4354 48.076 46.3593 44.4782 46.3593H27.0869" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M32.5218 23.5329L26 20.272L19.4783 23.5329V12.6633H32.5218V23.5329Z" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M11.8695 34.4028H18.3912" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M11.8695 30.0551H22.7391" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M20.5652 9.40281L24.913 5.05498L20.5652 0.707153" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M31.4347 42.0114L27.0869 46.3592L31.4347 50.707" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    {/* RIGHT CONTENT - Desktop */}
                    <div className="hidden md:flex flex-col justify-between text-left w-1/3 pl-8 lg:pl-16 h-[460px]">
                        <div className="pt-10">
                            <h3 className="text-lg lg:text-xl 2xl:text-2xl font-semibold mb-1">Certified Quality</h3>
                            <p className="text-sm text-gray-600">
                                UN-approved and internationally tested packaging.
                            </p>
                        </div>

                        <div className="pb-10">
                            <h3 className="text-lg lg:text-xl 2xl:text-2xl font-semibold mb-1">35+ Years Experience</h3>
                            <p className="text-sm text-gray-600">
                                Trusted heritage since 1988.
                            </p>
                        </div>
                    </div>

                </div>

                {/* MOBILE FEATURES - Vertical Stack */}
                <div className="md:hidden mt-12 space-y-8 max-w-md mx-auto">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#ECF0F1] flex items-center justify-center shadow flex-shrink-0">
                            <svg width="32" height="32" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.1739 40.1302H14.0435" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M10.7826 45.5649H21.6522" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M5.34782 50.9996H18.3913" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M32.5217 41.2173C32.5217 41.2173 32.3478 48.076 27.087 50.9999" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M43.3913 41.2173C43.3913 41.2173 43.5652 48.076 48.8261 50.9999" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M51 26.9997C51 35.4018 45.163 43.391 37.9565 43.391C30.75 43.391 24.913 35.4127 24.913 26.9997C24.913 18.5975 30.75 12.9562 37.9565 12.9562C45.163 12.9562 51 18.5975 51 26.9997Z" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M51 22.7393C51 22.7393 43.6739 24.7393 37.9565 22.7393C35.2065 21.7719 31.6304 21.4675 29.2609 21.6523" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M23.8261 34.6957H1V1H37.9565V10.7826" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M17.3043 21.6525H6.43478V29.2612H17.3043V21.6525Z" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M26 11.8696L19.4783 8.6087L12.9565 11.8696V1H26V11.8696Z" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-1">Sustainable Practices</h3>
                            <p className="text-sm text-gray-600">
                                Reusable, eco-friendly packaging solutions.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div
                            className="w-12 h-12 flex items-center justify-center shadow flex-shrink-0"
                            style={{ backgroundColor: colors.primary.blue }}
                        >
                            <svg width="32" height="32" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.08696 25.9998C1.3913 24.3259 1 22.4889 1 20.565C1 12.7607 7.32609 6.43457 15.1304 6.43457C22.9348 6.43457 29.2609 12.7607 29.2609 20.565C29.2609 28.3694 22.9348 34.6954 15.1304 34.6954C10.7609 34.6954 6.8587 32.7063 4.26087 29.5976" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M15.1304 21.6519V10.7823" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M15.1304 6.43478V1" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M18.3913 1H11.8696" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M23.8261 4.26099L21.6522 8.60881" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M6.43481 4.26099L8.60873 8.60881" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M10.7826 29.261H4.26086V35.7827" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M16.2174 45.5647H14.0435" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M15.1304 50.9997C18.1319 50.9997 20.5652 48.5665 20.5652 45.5649C20.5652 42.5634 18.1319 40.1301 15.1304 40.1301C12.1289 40.1301 9.69562 42.5634 9.69562 45.5649C9.69562 48.5665 12.1289 50.9997 15.1304 50.9997Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M41.2174 45.5647H39.0435" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M40.1304 50.9997C43.1319 50.9997 45.5652 48.5665 45.5652 45.5649C45.5652 42.5634 43.1319 40.1301 40.1304 40.1301C37.1289 40.1301 34.6956 42.5634 34.6956 45.5649C34.6956 48.5665 37.1289 50.9997 40.1304 50.9997Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M45.5652 46.652H48.8261C50.0326 46.652 51 45.6738 51 44.4781V33.6086C51 32.4129 50.0326 31.4346 48.8261 31.4346L45.8153 15.8042C45.6196 14.7825 44.7283 14.0433 43.6848 14.0433H31.4348" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M1 36.8699V44.4786C1 45.6742 1.97826 46.6525 3.17391 46.6525H9.69565" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M19.4783 46.6522H34.6957" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M48.8261 31.4346H40.1305C38.9239 31.4346 37.9565 30.4564 37.9565 29.2607V14.0433" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-1">Certified Quality</h3>
                            <p className="text-sm text-gray-600">
                                UN-approved and internationally tested packaging.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#ECF0F1] flex items-center justify-center shadow flex-shrink-0">
                            <svg width="32" height="32" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.2174 45.5649H13.0435" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M14.1304 50.9998C17.132 50.9998 19.5652 48.5666 19.5652 45.565C19.5652 42.5635 17.132 40.1302 14.1304 40.1302C11.1289 40.1302 8.69566 42.5635 8.69566 45.565C8.69566 48.5666 11.1289 50.9998 14.1304 50.9998Z" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M41.3044 45.5649H39.1304" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M26.087 1H11.9565" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M40.2174 50.9998C43.219 50.9998 45.6522 48.5666 45.6522 45.565C45.6522 42.5635 43.219 40.1302 40.2174 40.1302C37.2159 40.1302 34.7826 42.5635 34.7826 45.565C34.7826 48.5666 37.2159 50.9998 40.2174 50.9998Z" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M45.6522 46.6519H48.913C50.1196 46.6519 51.087 45.6736 51.087 44.478V33.6084C51.087 32.4128 50.1196 31.4345 48.913 31.4345L45.9022 15.8041C45.7065 14.7823 44.8044 14.0432 43.7718 14.0432H31.5217C30.3152 14.0432 29.3478 15.0215 29.3478 16.2171V46.6519H34.7826" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M0 46.6519H8.69565" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M19.5652 46.652H29.3478V9.69552C29.3478 8.49987 28.3696 7.52161 27.1739 7.52161H8.69566" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M48.9131 31.4345H40.2174C39.0109 31.4345 38.0435 30.4563 38.0435 29.2606V14.0432" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M17.3913 34.6957H3.26086" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M13.0435 28.1741H0" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M4.34782 20.5656H2.1739" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M21.7392 20.5656H6.52176" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M16.3043 15.1301H0" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M6.52174 7.52161H4.34782" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-1">Customer Commitment</h3>
                            <p className="text-sm text-gray-600">
                                On-time delivery & after-sales support.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#ECF0F1] flex items-center justify-center shadow flex-shrink-0">
                            <svg width="32" height="32" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M43.3913 12.6633H8.60864V38.7503H43.3913V12.6633Z" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M21.6522 46.3593H7.52174C3.92391 46.3593 1 43.4354 1 39.8375V11.5767C1 7.97884 3.92391 5.05493 7.52174 5.05493H24.913" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M30.3478 5.05493H44.4782C48.076 5.05493 51 7.97884 51 11.5767V39.8375C51 43.4354 48.076 46.3593 44.4782 46.3593H27.0869" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M32.5218 23.5329L26 20.272L19.4783 23.5329V12.6633H32.5218V23.5329Z" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M11.8695 34.4028H18.3912" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M11.8695 30.0551H22.7391" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M20.5652 9.40281L24.913 5.05498L20.5652 0.707153" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M31.4347 42.0114L27.0869 46.3592L31.4347 50.707" stroke="#7A7A7A" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-1">35+ Years Experience</h3>
                            <p className="text-sm text-gray-600">
                                Trusted heritage since 1988.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
