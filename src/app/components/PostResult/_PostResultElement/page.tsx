"use client"
import Image from "next/image"
import Link from "next/link"

export default function PostResultElement() {
  return (
    <li className=" w-[24rem] mr-3 mb-3">
        <Link href={"/{id}/post"}> 
            <Image 
            src="/images/test01.jpg"
            alt="テスト画像"
            width={570}
            height={300}
            style={{ width: '570px', height: '300px' }}/>
            <div>
                <p className="font-bold">サンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
                <div className="flex justify-between">
                    <Image src="/images/heart.png"
                    alt="お気に入り"
                    width={16}
                    height={16}
                    style={{ width: '16px', height: '16px' }}/>
                    <p>#React,#Java</p>
                    <p>更新日：2025.06.19</p>
                </div>
                
            </div>
        </Link>
    </li>
  )
}
