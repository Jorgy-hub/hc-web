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
        <div className={"w-screen h-1/6 fixed grid place-content-center justify-start px-16 z-150 duration-100 ease-in" + navbarColor}>
            <Title>HC</Title>
        </div>
    </>
}

export {
    Navbar
};