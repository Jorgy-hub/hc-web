import ScrollButton from "../scrollButton/scrollButton";

interface TitleProps {
    children: string;
}

const Title = (props: TitleProps) => <div className="text-5xl font-sans font-bold my-3">{props.children}</div>
const TitleGlowing = (props: TitleProps) => <div className="text-5xl font-sans font-bold my-3 text-orange-400 text-shadow-lg text-shadow-orange-500/40">{props.children}</div>

const Banner = () => {
    return <div className="w-screen h-screen shadow-2xl bg-no-repeat bg-cover bg-center bg-[url(https://cdn.modrinth.com/data/UUATcpwj/images/a4864428f4a4ee6179403c84f6d2aa245fb8bd55.gif)]" >
        <div className="w-full h-full bg-[rgba(0,0,0,0.7)]">
            { /* Banner Part */}
            <div className="w-full h-full text-center px-[12%]">
                { /* Image + Title */}
                <div className="flex place-content-center text-center justify-center items-center">
                    
                </div>

                { /* Scroll Button */}
                <div className="absolute bottom-6 right-1/2">
                    <ScrollButton></ScrollButton>
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