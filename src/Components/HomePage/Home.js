import React from 'react'
import Herosection from '../HeroSection/Herosection'
import Pricing from '../Pricing';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function Home() {
    return (
      <div>
        <Herosection {...homeObjOne} />
        <Herosection {...homeObjTwo} />
        <Herosection {...homeObjThree} />
        <Pricing />
        <Herosection {...homeObjFour} />
      </div>
    );
}

export default Home
