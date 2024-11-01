import Image from "next/image";

export default function Home() {
    return (
        <div className="contents">
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-[#2e2e2e]">
                <div className="container max-w-4xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <a href="#" className="text-2xl font-bold mr-8">
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

                            <div className="flex items-center space-x-6">
                                <a
                                    href="#"
                                    className="font-medium leading-5 text-sm text-white/70 hover:text-white"
                                >
                                    Home
                                </a>
                                <a
                                    href="#"
                                    className="font-medium leading-5 text-sm text-white/70 hover:text-white duration-300"
                                >
                                    Downloads
                                </a>
                            </div>
                        </div>

                        <div>
                            <button className="h-10 px-4 py-2 bg-white text-black hover:bg-white/80 duration-300 rounded-md text-sm">
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="relative min-h-screen pt-16">
                <div className="flex flex-col items-center justify-center min-h-screen p-4">
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
                            <button className="flex items-center justify-center gap-3 px-12 py-3 bg-white text-black hover:bg-white/80 duration-300 rounded-md text-sm">
                                <svg width="16" height="16" fill="currentColor">
                                    <path d="M0 2.265l6.54-.887.002 6.287-6.536.037L0 2.265zM6.536 8.39l.005 6.293-6.535-.896v-5.44l6.53.043zm.792-7.13L15.998 0v7.585l-8.67.07V1.26zM16 8.45L15.998 16l-8.67-1.22-.012-6.345L16 8.45z"></path>
                                </svg>
                                Download
                            </button>

                            <a href="#" className="border-b-2 border-b-transparent hover:border-b-white duration-200">
                                View other platforms
                            </a>
                        </div>
                    </div>
                    <div className="bg-black text-white w-[90%] flex items-center justify-center p-4" id="downloads">
                        <div className="max-w-3xl w-full">
                            <h1 className="text-3xl font-bold">Installation</h1>
                            <p className="text-sm text-gray-400 mb-6">
                                Latest version: v4.6
                            </p>

                            <div className="overflow-x-auto">
                                <table className="min-w-full text-sm">
                                    <thead>
                                        <tr>
                                            <th className="w-1/3 py-2 px-4 border-r border-[#2E2E2E] text-left"> </th>
                                            <th className="w-1/3 py-2 px-4 border-t border-r border-[#2E2E2E] text-center">
                                                64-bit
                                            </th>
                                            <th className="w-1/3 py-2 px-4 border-t border-r border-[#2E2E2E] text-center">
                                                arm64
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            {
                                                os: "macOS",
                                                extension: "app",
                                                x64: "v3.4.1",
                                                arm64: "v3.4.1",
                                            },
                                            {
                                                os: "Windows",
                                                extension: "exe",
                                                x64: "v3.4.1",
                                                arm64: "N/A",
                                            },
                                            {
                                                os: "Debian",
                                                extension: "deb",
                                                x64: "v3.4.1",
                                                arm64: "v3.4.1",
                                            },
                                            {
                                                os: "Fedora",
                                                extension: "rpm",
                                                x64: "v3.4.1",
                                                arm64: "v3.4.1",
                                            },
                                            {
                                                os: "More Linux distros",
                                                extension: "AppImage",
                                                x64: "v3.4.1",
                                                arm64: "v3.4.1",
                                            },
                                        ].map((item, idx) => (
                                            <tr key={idx} className={item.os.includes("Windows") ? "text-teal-300" : "bg-black"}>
                                                <td className="py-3 px-4 border border-[#2E2E2E]">
                                                    <span className="font-bold">{item.os}</span> (.{item.extension})
                                                </td>
                                                <td className="py-3 px-4 border border-[#2E2E2E] hover:text-teal-300 duration-200 text-center">
                                                    {item.x64 !== "N/A" ? (
                                                        <a
                                                            href="#"
                                                            className="flex items-center justify-center"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>{" "}
                                                            {item.x64}
                                                        </a>
                                                    ) : (
                                                        <span className="text-gray-400">N/A</span>
                                                    )}
                                                </td>
                                                <td className="py-3 px-4 border border-[#2E2E2E] hover:text-teal-300 duration-200 text-center">
                                                    {item.arm64 !== "N/A" ? (
                                                        <a
                                                            href="#"
                                                            className="flex items-center justify-center"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>{" "}
                                                            {item.arm64}
                                                        </a>
                                                    ) : (
                                                        <span className="text-gray-400">N/A</span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
