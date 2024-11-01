import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-[#2e2e2e]">
            <div className="container max-w-4xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="/" className="text-2xl font-bold mr-8">
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
                                className="lucide lucide-usb"
                            >
                                <circle cx="10" cy="7" r="1" />
                                <circle cx="4" cy="20" r="1" />
                                <path d="M4.7 19.3 19 5" />
                                <path d="m21 3-3 1 2 2Z" />
                                <path d="M9.26 7.68 5 12l2 5" />
                                <path d="m10 14 5 2 3.5-3.5" />
                                <path d="m18 12 1-1 1 1-1 1Z" />
                            </svg>
                        </a>

                        <div className="hidden sm:flex items-center space-x-6">
                            <a
                                href="#"
                                className="font-medium leading-5 text-sm text-white/70 hover:text-white"
                            >
                                Home
                            </a>
                            <a
                                href="#downloads"
                                className="font-medium leading-5 text-sm text-white/70 hover:text-white duration-300"
                            >
                                Downloads
                            </a>
                            <a
                                href="#about"
                                className="font-medium leading-5 text-sm text-white/70 hover:text-white duration-300"
                            >
                                About
                            </a>
                            <a
                                href="#usage"
                                className="font-medium leading-5 text-sm text-white/70 hover:text-white duration-300"
                            >
                                Usage
                            </a>
                        </div>
                    </div>

                    <div>
                        <a href="#downloads" className="h-10 px-4 py-2 bg-white text-black hover:bg-white/80 duration-300 rounded-md text-sm">
                            Download
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
