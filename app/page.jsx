import React from "react";
import Link from "next/link";
import Hero from "@/components/Hero.jsx";
import InfoBoxes from "@/components/InfoBoxes";
import HomePropertis from "@/components/HomePropertis";

const HomePage = () => {
  // console.log(process.env.MONGODB_URI);

  return (
    <div>
      <Hero />
      <InfoBoxes />
      <HomePropertis />
    </div>
  );
};
export default HomePage;
