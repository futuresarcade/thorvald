import React from 'react';
import CountDownII from './art/countdownII';
import Squares from './art/squares'
import Ovni from './art/ovni';
import StillLife from './art/stilllife';
import Focus from './art/focus';



const Art3 = () => (
    <div className="art flex flex-row flex-wrap pt-20 mt-5 ml-10 mr-10 justify-center">
    <StillLife />
    <Focus />
    <Squares />
    <Ovni />
    <CountDownII />
    </div>
  );

export default Art3
