import { Banner } from "@/components/banner/banner";
import { CarousselGameOption, Caroussel } from "@/components/caroussel/caroussel";
import { Navbar } from "@/components/navbar/navbar";

const games: CarousselGameOption[] = [
  {
    name: "Minecraft",
    description: "Host Minecraft",
    bannerImage: "/images/minecraft/banner.jpg",
    coverImage: "/images/minecraft/cover.jpg"
  },
  {
    name: "ARK: Survival Evolved",
    description: "Host Minecraft",
    bannerImage: "/images/ark/banner.jpeg",
    coverImage: "/images/ark/cover.jpeg"
  },
  {
    name: "RUST",
    description: "Host Minecraft",
    bannerImage: "/images/rust/banner.jpg",
    coverImage: "/images/rust/cover.jpeg"
  }
]

export default function Home() {
  return (
    <>
      <section className="w-screen h-screen px-16 py-8">
        <Caroussel games={games}></Caroussel>
      </section>
    </>
  );
}
