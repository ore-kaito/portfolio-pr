"use client"
import Image from "next/image"
import Link from "next/link"
import Button from "../Button/Button"
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function HeaderPage() {
  const [isPosted, setIsPosted] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (!isPosted) {
      setIsPosted(true); // 投稿済み状態にする
      router.push("/post");
    } else {
       alert("下書きしました");
      router.push("/"); // トップページに遷移
      setIsPosted(false);
    }
  };


  return (
    <div className="flex justify-between items-center p-3 pl-0 pr-6">
      <Link href="/" className=" px-6">
      <Image
        src="/images/logo.jpg"
        alt="ロゴ画像"
        width={200}
        height={100}
         style={{ width: '200px', height: 'auto' }}
      />
      </Link>
      <div className="flex items-center">
        <Link href="/" className="mx-3">
          <Image
            src="/images/user.jpg"
            alt="ユーザー情報"
            width={80}
            height={80}
          />
        </Link>

        <div>
          <button onClick={handleClick}>
            <Button label={isPosted ? "下書き" : "投稿"} />
          </button>
        </div>
      </div>
      
      
    </div>
  )
}
