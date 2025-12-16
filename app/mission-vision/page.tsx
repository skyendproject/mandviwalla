'use client'

import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import Footer from "@/components/Footer";
import CoreValues from "@/components/mission-vision/CoreValues";
import MissionStatement from "@/components/mission-vision/MissionStatement";
import StrategicGoals from "@/components/mission-vision/StrategicGoals";
import VisionStatement from "@/components/mission-vision/VisionStatement";

export default function CompanyInformation() {
    return (
        <div>
            <Hero
                imagePath="/mission-vision.jpg"
                heading="Mission & Vision"
                breadcrumbPath="Mission & Vision"
                path="Profile"
            />
            <MissionStatement />
            <VisionStatement />
            <StrategicGoals />
            <CoreValues />
            <AboveFooter variant="dark" />
            <Footer variant="dark" />
        </div>
    );
}
