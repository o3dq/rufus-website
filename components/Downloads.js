import Image from "next/image";

export default function Downloads() {
    return (
        <div
            className="bg-black text-white w-full flex items-center justify-center p-4"
            id="downloads"
        >
            <div className="max-w-3xl w-full">
                <h1 className="text-3xl font-bold">Installation</h1>
                <p className="text-sm text-gray-400 mb-6">
                    Latest version: v4.6.0
                </p>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr>
                                <th className="w-1/3 py-2 px-4 border-r border-[#2E2E2E] text-left">
                                    {" "}
                                </th>
                                <th className="w-1/3 py-2 px-4 border-t border-r border-[#2E2E2E] text-center">
                                    Version
                                </th>
                                <th className="w-1/3 py-2 px-4 border-t border-r border-[#2E2E2E] text-center">
                                    Size
                                </th>
                                <th className="w-1/3 py-2 px-4 border-t border-r border-[#2E2E2E] text-center">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    os: "Windows",
                                    extension: "exe",
                                    platform: "x64",
                                    version: "4.6.0",
                                    size: "1.5 MB",
                                    date: "2024.10.21",
                                },
                                {
                                    os: "Windows Portable",
                                    extension: "exe",
                                    platform: "x64",
                                    version: "4.6.0",
                                    size: "1.5 MB",
                                    date: "2024.10.21",
                                },
                                {
                                    os: "Windows",
                                    extension: "exe",
                                    platform: "x86",
                                    version: "4.6.0",
                                    size: "1.6 MB",
                                    date: "2024.10.21",
                                },
                                {
                                    os: "Windows",
                                    extension: "exe",
                                    platform: "ARM64",
                                    version: "4.6.0",
                                    size: "5.1 MB",
                                    date: "2024.10.21",
                                },
                            ].map((item, idx) => (
                                <tr key={idx} className={"bg-black"}>
                                    <td className="py-3 px-4 border border-[#2E2E2E]">
                                        <span className="font-bold">
                                            {item.os} {item.platform}
                                        </span>{" "}
                                        (.{item.extension})
                                    </td>
                                    <td className="bg-black py-3 px-4 border border-[#2E2E2E] hover:text-teal-300 duration-200 text-center">
                                        <a
                                            href="#"
                                            className="flex items-center justify-center gap-2"
                                        >
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
                                                className="lucide lucide-download"
                                            >
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                                <polyline points="7 10 12 15 17 10" />
                                                <line
                                                    x1="12"
                                                    x2="12"
                                                    y1="15"
                                                    y2="3"
                                                />
                                            </svg>{" "}
                                            <p>v{item.version}</p>
                                        </a>
                                    </td>
                                    <td className="py-3 px-4 border border-[#2E2E2E] hover:text-teal-300 duration-200 text-center">
                                        <a
                                            href="#"
                                            className="flex items-center justify-center gap-2"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-hard-drive"
                                            >
                                                <line
                                                    x1="22"
                                                    x2="2"
                                                    y1="12"
                                                    y2="12"
                                                />
                                                <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                                                <line
                                                    x1="6"
                                                    x2="6.01"
                                                    y1="16"
                                                    y2="16"
                                                />
                                                <line
                                                    x1="10"
                                                    x2="10.01"
                                                    y1="16"
                                                    y2="16"
                                                />
                                            </svg>{" "}
                                            {item.size}
                                        </a>
                                    </td>
                                    <td className="bg-black py-3 px-4 border border-[#2E2E2E] hover:text-teal-300 duration-200 text-center">
                                        <a
                                            href="#"
                                            className="flex items-center justify-center gap-2"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-calendar"
                                            >
                                                <path d="M8 2v4" />
                                                <path d="M16 2v4" />
                                                <rect
                                                    width="18"
                                                    height="18"
                                                    x="3"
                                                    y="4"
                                                    rx="2"
                                                />
                                                <path d="M3 10h18" />
                                            </svg>{" "}
                                            <p>{item.date}</p>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
