import Image from "next/image"
import Link from "next/link";


interface LogoProps {
    show: boolean
}

export default function Logo({show} : LogoProps) {
    if (!show) return null;

    return (
    <div>
        <Link href="/">
            <Image
                src="/images/logo.png"
                alt="ロゴ画像"
                width={200}
                height={100}
                className="h-auto w-auto"
            />
        </Link>
        
    </div>
    )
}
  
