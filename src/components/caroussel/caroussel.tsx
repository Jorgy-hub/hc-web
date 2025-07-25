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
                    className="w-full h-full bg-[rgba(0,0,0,0.7)] relative"
                >
                    <div className="w-1/2 h-full p-16 place-content-end">
                        <div className=""></div>
                        {game.description}
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