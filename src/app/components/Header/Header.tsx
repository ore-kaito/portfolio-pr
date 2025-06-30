"use client"
import Image from "next/image"
import Link from "next/link"
import Button from "../Button/Button"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "./Logo"
import { usePathname } from "next/navigation";

export default function HeaderPage() {
  const pathname = usePathname();
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


 useEffect(() => {
    if (pathname === "/") {
      setIsPosted(false);
    }
  }, [pathname]);

  return (
    <div className="flex justify-between items-center p-3 pl-0 pr-6">
      <div>
        <Logo show={true} />
      </div>
      
      <div className="flex items-center">
        {!["/login"].includes(pathname) && 
        <>
          <Link href="/" className="mx-3">
            <Image
              src="/images/user.jpg"
              alt="ユーザー情報"
              width={80}
              height={80}
              className="h-auto w-auto"

            />
          </Link>

          <button onClick={handleClick}>
            <Button label={isPosted ? "下書き" : "投稿"} />
          </button>

          <div>
            {pathname !== "/"}
            <Link href="/login">
              <Button label={"ログイン"}></Button>
            </Link>
          </div>
        </>

        }
        
      </div>
      
      
    </div>
  )
}
