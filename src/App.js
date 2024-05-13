import React from 'react';
import Nav from './Components/Nav';
import Landing from './Components/Landing';
import Work from './Components/Work';
import Playreel from './Components/Playreel';
import Images from './Components/Images';
import Spread from './Components/Spread';
import Story from './Components/Story';
import LocomotiveScroll from 'locomotive-scroll';




function App() {
const locomotiveScroll = new LocomotiveScroll();

return (
    <div className='w-full font-["Open-sans]"'>
    <Nav />
    <Landing />
    <Work />
    <Playreel />
    <Images />
    <Spread />
    <Story />
    </div>
  )
}

export default App
