import { Separator } from '@/components/ui/separator';
import brand from '@/love/dFunction/gBrand';
import FinalRouteName from '@/love/gRoute/FinalRouteName';
import React from 'react';
import { Link } from 'react-router-dom';


function HeaderComponent({ Redux }) {
  return (
    Redux.state.RequiredObject?.Loading ? null :
    <React.Fragment>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to={FinalRouteName.GlobalRoute.HomeRoute} className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img className="w-10 h-10 object-cover object-center rounded" alt="hero" src={brand().logo} />
            <span className="ml-3 text-xl">{brand().name}</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-white">First Link</Link>
            <Link className="mr-5 hover:text-white">Second Link</Link>
            <Link className="mr-5 hover:text-white">Third Link</Link>
            <Link className="mr-5 hover:text-white">Fourth Link</Link>
          </nav>
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
      <Separator/>
    </React.Fragment>
  );
}

export default HeaderComponent;
