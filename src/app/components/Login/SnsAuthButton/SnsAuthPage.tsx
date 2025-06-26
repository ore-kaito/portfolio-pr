"use client"
import Link from "next/link"
import Image from "next/image"

const snsList = [
  { name:"Google", src: "/images/Google.png", href:"" },
  { name:"X 旧Twitter", src: "/images/X.png", href:"" },
  { name:"Instagram", src: "/images/Instagram.png", href:"" },

]

export default function SnsAuthPage() {
  return (
    <ul className="flex justify-between py-0 px-36">
      {
        snsList.map((sns, index) => (
          <Link key={index} className="block text-center" href={sns.href}>
            <Image 
              src={sns.src}
              alt={sns.name} 
              width={40}
              height={40}
              style={{ width: "40px", height: "auto" }}
              className="inline-block"
              />
            <p>{sns.name}</p>
          </Link>
        )) 
      }
      
    </ul>
  );
}


