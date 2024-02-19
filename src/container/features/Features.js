import React from 'react'
import Feature from '../../components/Feature/Feature'
import Brands from '../Brands/Brands';

const Features = () => {
  const featuresData = [
    {
      title: 'Immersive Experiences',
      text: 'Kinss takes virtual reality to the next level, transporting users into immersive worlds where they can fully engage with their surroundings and be part of extraordinary adventures.',
    },
    {
      title: 'Cutting-Edge Technology',
      text: 'With a focus on pushing boundaries, Kinss harnesses advanced technology to deliver state-of-the-art VR experiences, ensuring users enjoy the most realistic and captivating virtual environments.',
    },
    {
      title: 'Boundless Exploration',
      text: 'Kinss enables users to explore limitless possibilities, from embarking on thrilling simulations to venturing into uncharted territories, unlocking new realms of imagination and discovery.',
    },
    {
      title: 'Seamless Connection',
      text: 'Kinss fosters connectivity, allowing users to engage and interact with others in the virtual space, fostering a sense of community and shared experiences that transcend physical boundaries.',
    },
  ];
  return (
    <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
   <Brands/>

  </div>
  )
}

export default Features
