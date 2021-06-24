
import React from 'react';

import InkaWall from './art/inkawall'
import Trapped from './art/trapped'
import Midnight from './art/midnight'
import Rotate from './art/rotate'
import Axis from './art/axis'



const Art = () => (
    <div className="art flex flex-row flex-wrap pt-20 mt-5 ml-10 mr-10 justify-center">
    <Axis />
    <InkaWall />
    <Trapped />
    <Midnight />
    <Rotate />
    </div>


);

export default Art;
