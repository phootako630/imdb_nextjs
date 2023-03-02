import React from 'react';
import NavBarItem from "@/components/NavBarItem";

const NavBar = () => {
    return (
        <div className="flex justify-center
        dark:bg-gray-600
        bg-amber-100 lg:text-lg p-4">
           <NavBarItem title="Trending" param="fetchTrendingData" />
            <NavBarItem title="Top Rated" param="fetchTopRatedData" />
        </div>
    );
};

export default NavBar;
