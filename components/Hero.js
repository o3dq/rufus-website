import Image from "next/image";

export default function Hero() {
    return (
        <div className="container mx-auto flex flex-col items-center justify-between gap-12 mb-16">
            <div className="p-1 bg-gradient-to-b from-pink-500 to-yellow-500 rounded-lg">
                <div className="bg-black p-3 rounded-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-usb w-8 h-8"
                    >
                        <circle cx="10" cy="7" r="1" />
                        <circle cx="4" cy="20" r="1" />
                        <path d="M4.7 19.3 19 5" />
                        <path d="m21 3-3 1 2 2Z" />
                        <path d="M9.26 7.68 5 12l2 5" />
                        <path d="m10 14 5 2 3.5-3.5" />
                        <path d="m18 12 1-1 1 1-1 1Z" />
                    </svg>
                </div>
            </div>

            <div className="w-[50%] sm:w-[60%] md:w-[40%] lg:w-[30%] aspect-auto">
                <img
                    src="https://rufus.ie/pics/screenshot1_en.png"
                    alt="Rufus Screenshot"
                />
            </div>

            <div className="flex flex-col gap-3 items-center justify-center">
                <a href="#downloads" className="flex items-center justify-center gap-3 px-12 py-3 bg-white text-black hover:bg-white/80 duration-300 rounded-md text-sm">
                    <svg width="16" height="16" fill="currentColor">
                        <path d="M0 2.265l6.54-.887.002 6.287-6.536.037L0 2.265zM6.536 8.39l.005 6.293-6.535-.896v-5.44l6.53.043zm.792-7.13L15.998 0v7.585l-8.67.07V1.26zM16 8.45L15.998 16l-8.67-1.22-.012-6.345L16 8.45z"></path>
                    </svg>
                    Download
                </a>

                <a
                    href="#downloads"
                    className="border-b-2 border-b-transparent hover:border-b-white duration-200"
                >
                    View other platforms
                </a>
            </div>
        </div>
    );
}
