interface TitleProps {
    children: string;
}

const Title = (props: TitleProps) => <div className="text-5xl font-sans font-bold my-3">{props.children}</div>
const TitleGlowing = (props: TitleProps) => <div className="text-5xl font-sans font-bold my-3 text-orange-400 text-shadow-lg text-shadow-orange-500/40">{props.children}</div>

const Banner = () => {
    return <div className="w-screen h-screen shadow-2xl bg-no-repeat bg-cover bg-center bg-[url(https://cdn.modrinth.com/data/UUATcpwj/images/a4864428f4a4ee6179403c84f6d2aa245fb8bd55.gif)]" >
        <div className="w-full h-full bg-[rgba(0,0,0,0.7)]">
            { /* Banner Nav */}
            <div className="w-full h-1/6 grid place-content-center justify-start px-16">
                <Title>HC</Title>
            </div>
            { /* Banner Part */}
            <div className="w-full h-5/6 text-center px-[12%] pt-[12%]">
                { /* Image + Title */}
                <div className="flex place-content-center text-center justify-center items-center">
                    <div className="bg-[url(https://emoji.discadia.com/emojis/485e7b43-c59a-4120-a5ef-6c05d9c36210.gif)] h-16 w-16 bg-cover hue-rotate-330"></div>
                    <Title>Host it</Title>
                    <div className="w-4 h-auto"></div>
                    <TitleGlowing>Create it</TitleGlowing>
                </div>
                { /* Description */}
                <div className="text-zinc-400">
                    Launch your game server in minutes with powerful tools, welcoming community, and 24/7 support. Perfect for communities of all sizes.
                </div>
                { /* Buttons */}
                <div className="flex place-content-center text-center justify-center items-center mt-4">
                    <div className="px-4 py-2 bg-orange-400 rounded-full m-2 flex justify-center items-center">
                        Start Hosting
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                        </svg>
                    </div>
                    <div className="px-4 py-2 bg-zinc-800 rounded-full m-2 flex text-zinc-100 justify-center items-center">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export {
    Banner,
    Title,
    TitleGlowing
}