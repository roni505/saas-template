import Image from "next/image";
import Link from "next/link"

const Logo = () => {
    return (
        <div className="text-wh">
            <Link
            href="/"
            >
                <div className="flex gap-2 justify-center items-center">
                    <Image
                    src="/logoIcon.svg"
                    width={40}
                    height={40}
                    alt="This is the logo icon"
                    />
                    <span className="text-xl font-medium">Stratify</span>
                </div>
            </Link>
        </div>
    )
}

export default Logo;