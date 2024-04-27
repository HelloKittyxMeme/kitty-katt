import Image from "next/image";


export default function Home() {
  return (
    <div className="bg-white min-w-screen min-h-screen text-black flex flex-col justify-center">
      <div className="w-full md:w-1/2  m-auto flex flex-col relative" >
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
          <a className="w-1/8" key={social.image} target="_blank" href={social.link}> 
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

    </div>
  );
}

const socials = [
  {
    link: "https://t.me/hellokittyxmeme",
    image: "/socials/telegram.jpeg"
  },
  {
    link: "https://twitter.com/hellokittyxmeme",
    image: "/socials/twitter.jpeg"
  },
  {
    link: "https://dexscreener.com/solana/4sfytpfkjctkjx7x5jflc2xhtrp2hktcruiumdcdqhwv",
    image: "/socials/dexscreener.jpeg"
  }
]
