import Image from "next/image";


export default function Home() {
  return (
    <div className="bg-white min-w-screen min-h-screen text-black flex flex-col justify-center">
      <div className="w-full md:w-1/2  m-auto flex flex-col relative" >
        <p className="text-6xl md:absolute top-[10%] w-full text-center mr-10">$Kitty   </p>
        <Image
          src="/kitty.jpeg"
          alt="Descriptive text for the image"
          width={500}
          height={300}
          layout="responsive"
          sizes="(max-width: 150px) 100vw, (max-width: 150px) 50vw, 33vw"
        />
        <p className="text-6xl md:absolute bottom-[20%] w-full text-center">Coming soon</p>
        <div className="w-full flex items-center m-auto justify-center md:absolute bottom-0">{socials.map(social => (
          <a className="w-1/8 max-w-[100px] md:max-w-[133px]" key={social.image} target="_blank" href={social.link}>
            <Image
              src={social.image}
              alt="Descriptive text for the image"
              width={500}
              height={300}
              layout="responsive"
              sizes="(max-width: 150px) 100vw, (max-width: 150px) 50vw, 33vw"
            />
          </a>
        ))}</div>
      </div>
      <p className="w-10/12 md:w-1/2 m-auto text-center md:text-3xl">FWAyhDQwGczixbQigkE26A4UYwfCeoqRD5qSxJ8XH9aS</p>

    </div>
  );
}

const socials = [
  {
    link: "https://www.dextools.io/app/en/solana/pair-explorer/4sFYTPFKJCtkJX7X5jFLc2XhTRp2hKTcRUiumdCDqHwv?t=1714236234635",
    image: "/socials/dextools.png"
  },
  {
    link: "https://t.me/hellokittyxmeme",
    image: "/socials/telegram.jpeg"
  },
  {
    link: "https://twitter.com/hellokittymemex",
    image: "/socials/twitter.jpeg"
  },
  {
    link: "https://dexscreener.com/solana/4sfytpfkjctkjx7x5jflc2xhtrp2hktcruiumdcdqhwv",
    image: "/socials/dexscreener.jpeg"
  }
]
