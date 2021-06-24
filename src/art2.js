import React from 'react';
import CountDown from './art/countdown';
import Inka from './art/inka';
import Inkamen from './art/inkamen';
import Sun from './art/sun';
import Board from './art/boards'
import Lasers from './art/lasers'


const Art2 = () => (
    <div className="art flex flex-row flex-wrap pt-20 mt-5 ml-10 mr-10 justify-center">
    <Inka />
    <CountDown />
    <Sun />
    <Inkamen />
    <Board />
    <Lasers />
    </div>
  );

export default Art2
