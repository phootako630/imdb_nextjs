import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";


export default function Header() {
    return (
        <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
            <div className="flex">
                <MenuItem title="HOME" address="/" Icon={AiFillHome} />
                <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
            </div>
            <div className="flex items-center space-x-5">

            </div>
        </div>
    );
}