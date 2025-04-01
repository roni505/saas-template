import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full bg-neutral-950">
            <div className="flex max-w-7xl justify-between lg:py-12 max-md:flex-col mx-auto px-5 sm:p-0">
                <div className="flex justify-between lg:flex-col h-auto">
                    <span >LOGO</span>
                    <div>
                    <Image
                    src="/projectTimeLineIcon.svg"
                    width={20}
                    height={20}
                    alt="This is the svg"
                    />
                    </div>
                </div>
                <div className="flex gap-44 h-full flex-wrap">
                    <div className="flex flex-col gap-5">
                        <span className="text-base">
                            Product
                        </span>
                        <div className="flex flex-col gap-4 text-sm text-[#767676]">
                            <Link href="/">Features</Link>
                            <Link href="/">Benefits</Link>
                            <Link href="/">About</Link>
                            <Link href="/">Customers</Link>
                            <Link href="/">Pricing</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <span className="text-base">
                            Product
                        </span>
                        <div className="flex flex-col gap-4 text-sm text-[#767676]">
                            <Link href="/">Features</Link>
                            <Link href="/">Benefits</Link>
                            <Link href="/">About</Link>
                            <Link href="/">Customers</Link>
                            <Link href="/">Pricing</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <span className="text-base">
                            Product
                        </span>
                        <div className="flex flex-col gap-4 text-sm text-[#767676]">
                            <Link href="/">Features</Link>
                            <Link href="/">Benefits</Link>
                            <Link href="/">About</Link>
                            <Link href="/">Customers</Link>
                            <Link href="/">Pricing</Link>
                        </div>
                    </div>
                </div>
            </div>
            <span className="flex h-[1px] bg-gradient-to-r from-transparent via-[#363636] to-transparent mx-auto w-full"></span>
            <div className="py-6 flex justify-center items-center">
                <span>Built by Roni</span>
            </div>
        </footer>
    )
}

export default Footer;