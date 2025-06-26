"use client"
import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

interface PostedElement {
  id: number,
  link: string,
  sauce: string,
  alt: string,
  styles: {width: number, height: number}
}

const postedElement:PostedElement[] = [
{
  id: 1,
  link: "/1/post",
  sauce: "/images/test01.jpg",
  alt: "テスト画像",
  styles: {width: 570, height: 300},

},
{
  id: 2,
  link: "/2/post",
  sauce: "/images/test02.jpg",
  alt: "テスト画像2",
  styles: {width: 570, height: 300}
}
];

export default function PostResult() {
  return (
    <ul className="flex flex-wrap">
    {
      postedElement.map((posted:PostedElement) => (
        <li key={posted.id} className=" w-[24rem] mr-3 mb-3">
          <Link href={posted.link}> 
              <Image 
                src={posted.sauce}
                alt={posted.alt}
                width={posted.styles.width}
                height={posted.styles.height}
              />
              <h2>タイトル</h2>
              <div className="flex justify-between">
                <FontAwesomeIcon icon={faHeart} />
                <div>2025.06.19</div>
              </div>
          </Link>
        </li>
      ))
    }
    </ul>
  )
}
