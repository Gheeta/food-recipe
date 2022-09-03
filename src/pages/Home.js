import React from 'react';
import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkills";
import QuoteSesction from "../components/QuoteSesction";
import ChiefsSection from '../components/ChiefsSection';

export default function Home() {
  return (
    <div>
       <HeroSection/>
       <ImproveSkills/>
       <QuoteSesction/>
       <ChiefsSection/>
    </div>
  )
}
