import Image from "next/image";
import {Metadata} from "next"

export const metadata: Metadata ={
  title: "Home - NextJS Gallery" ,
  description: "This is my homepage"
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <h1>Home</h1>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur magni porro, doloremque repellat debitis dolor. Perferendis, eveniet tempora dolorum beatae quisquam recusandae adipisci voluptate nesciunt veritatis cumque culpa, quo molestiae deserunt saepe. Qui inventore possimus expedita, ab excepturi quis repellat?</p>
    </div>
  );
}
