import React from 'react';
import video from '../../videos/video.mp4';
import {HeroContainer, HeroBg, VideoBg} from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type='video.mp4' />
      </HeroBg> 
    </HeroContainer>
  )
}

export default HeroSection
