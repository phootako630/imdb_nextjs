'use client';
import {useState} from "react";
import { useRouter } from 'next/navigation';
import { CgSearchLoading } from 'react-icons/cg'
export default function SearchBox() {
    const [search, setSearch] = useState('');
    const router = useRouter();
    function handleSubmit(e) {
        e.preventDefault();
        console.log(search);
        if (!search) return;
        router.push(`/search/${search}`);
        setSearch('');
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex max-w-6xl mx-auto
        justify-between
        item-center px-5">
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search for a movie..."
                className="w-full h-14 rounded-sm
                   placeholder-gray-500
            outline-none bg-transparent flex-1 px-5 py-3 rounded-full"/>

            <button
                disabled={!search}
                type="submit"
                className="text-amber-700 disabled:text-gray-400 font-bold font-mono">
                Search
            </button>
            <button onClick={handleSubmit}>
            <div className="text-blue-600 flex items-center justify-center ml-2">
                <CgSearchLoading size={20} />
            </div>
            </button>
        </form>
    )
}


