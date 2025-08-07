'use client';
import { useEffect, useState } from "react";
import { Title } from "../banner/banner"

const Navbar = () => {
    const [show, setShow] = useState(false);
    const navbarColor = show ? " bg-black" : " bg-transparent";
    const controlNavbar = () => {
        setShow(window.scrollY > 250);
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => window.removeEventListener('scroll', controlNavbar)
    }, [])

    return <>
        <div className={"w-full h-1/6 fixed flex place-content-center items-center justify-start px-16 z-150 duration-200 ease-in" + navbarColor}>
            <div className="h-32 w-32 bg-[url(/images/misc/Ham.png)] bg-cover mr-6"></div>
            
        </div>
    </>
}

export {
    Navbar
};