"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface CarousselGameOption {
    name: string;
    description: string;
    bannerImage: string;
    coverImage: string;
}

interface CarousselProps {
    games: CarousselGameOption[];
}

const Caroussel = (props: CarousselProps) => {
    const interval = 7000;
    const { games } = props;
    const [game, setGame] = useState(games[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animation, setAnimation] = useState(false);
    const bannerBg = "url('" + game.bannerImage + "')";

    // Updating Game over click
    const updateGame = (newGame: CarousselGameOption, i: number) => {
        setGame(newGame);
        setCurrentIndex(i);
    }

    // Updating Game over time
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length);
            setGame(games[currentIndex]);
        }, interval);

        return () => clearInterval(timer);
    }, [currentIndex, games, games.length, interval]);

    return (
        <div className="w-full h-full bg-zinc-900 rounded-md shadow-2xl flex overflow-hidden">
            <div
                className={"w-9/12 h-full bg-center bg-cover"}
                style={{ backgroundImage: bannerBg }}
            >
                <div
                    className="w-full h-full bg-[rgba(0,0,0,0.7)] relative flex"
                >
                    <div className="w-1/2 h-full p-16 place-content-end p-8">
                        <div className="h-full w-full bg-[rgba(13,13,13,0.9)] rounded-md p-16">
                            <h5 className="mb-4 text-2xl font-bold text-orange-400">{game.name} Server Hosting</h5>
                            <div className="flex items-baseline text-gray-900 dark:text-white">
                                <span className="text-3xl font-semibold">$</span>
                                <span className="text-5xl font-extrabold tracking-tight">9.99</span>
                                <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            <div className="flex items-baseline text-gray-900 dark:text-white">
                                <span className="ms-1 text-lg font-normal text-gray-500 dark:text-gray-400">($7.49 first month)</span>
                            </div>
                            <ul role="list" className="space-y-5 my-7">
                                <li className="flex items-center">
                                    <svg className="shrink-0 w-4 h-4 text-blue-700 dark:text-orange-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Standard DDos Protection</span>
                                </li>
                                <li className="flex">
                                    <svg className="shrink-0 w-4 h-4 text-blue-700 dark:text-orange-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Local + Offsite Backups</span>
                                </li>
                                <li className="flex">
                                    <svg className="shrink-0 w-4 h-4 text-blue-700 dark:text-orange-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Full Control Over Your Set-up</span>
                                </li>
                                <li className="flex">
                                    <svg className="shrink-0 w-4 h-4 text-blue-700 dark:text-orange-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Sub Users + Scheduled Tasks</span>
                                </li>
                                <li className="flex line-through decoration-gray-500">
                                    <svg className="shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span className="text-base font-normal leading-tight text-gray-500 ms-3">Sketch Files</span>
                                </li>
                            </ul>
                            <div className="w-full flex">
                                <button type="button" className="w-1/2 m-2 text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-500 font-bold rounded-full text-sm px-5 py-2.5 inline-flex justify-center text-center">
                                    Order Now
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-5 ml-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                    </svg>
                                </button>
                                <button type="button" className="w-1/2 m-2 text-white bg-[rgb(0,0,0))] hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-500 font-bold rounded-full text-sm px-5 py-2.5 inline-flex justify-center text-center">
                                    Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-5 ml-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-3/12 h-full bg-zinc-900 border-1 border-zinc-600">
                {
                    games.map((gameM, i) => {
                        const carousselSelected = gameM.name == game.name;
                        const gameCover = "url('" + gameM.coverImage + "')";
                        const gameBgColor = carousselSelected ? " bg-zinc-700" : " bg-zinc-900";
                        const gameCoverSize = carousselSelected ? "scale(110%)" : "none";

                        return <div
                            onClick={() => updateGame(gameM, i)}
                            className={"w-full h-32 border-b-2 border-zinc-600 flex items-center px-4 text-sm relative cursor-pointer" + gameBgColor}
                            key={gameM.name + i}>
                            <div
                                className={"mr-2 rounded-sm bg-center bg-cover duration-100 ease-in h-22 w-16 shadow-md"}
                                style={{ backgroundImage: gameCover, transform: gameCoverSize }}
                            ></div>
                            {gameM.name}
                            {
                                carousselSelected
                                &&
                                <div className="w-full h-[2px] bg-zinc-600 absolute bottom-0 left-0">
                                    <div
                                        className="w-full h-full bg-zinc-100 origin-bottom-left"
                                        style={{ animation: 'loadingbar 7s' }}
                                    ></div>
                                </div>
                            }
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export { Caroussel };

export type { CarousselGameOption };

/*
// Executes animation change of banner
        setAnimation(false); 
        setTimeout(() => {
            setAnimation(true);
        }, 10);
*/