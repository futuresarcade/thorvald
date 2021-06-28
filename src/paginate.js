import React from "react"
import { Link } from 'react-router-dom';

export default function Paginate() {
  return (



          <ul className="relative z-0 flex align-center mt-4 justify-center rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <li
              className="relative flex items-center justify-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">

            <Link to="/">
            <button className="bg-gray-200 border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center  px-6 py-3 text-3xl font-bold">1</button></Link>

            </li>

            <li
              className="relative flex items-center justify-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <Link to ="/2">

              <button className="bg-gray-200 border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center  px-6 py-3  text-3xl font-bold">2</button>
            </Link>
            </li>

            <li
              className="relative flex items-center justify-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <Link to ="/3">

              <button className="bg-gray-200 border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center  px-6 py-3  text-3xl font-bold">3</button>
            </Link>
            </li>
            </ul>


  )
}
