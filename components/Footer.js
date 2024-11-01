import Image from "next/image";

export default function Footer() {
    return (
        <div class="w-full max-w-screen-xl mx-auto px-6 my-12">
            <div class="relative border border-[#2E2E2E] shadow-sm px-6 py-12">
                <div class="absolute top-0 left-0 w-full h-full">
                    <div class="absolute w-4 h-4 border border-[#2E2E2E] rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-background"></div>
                    <div class="absolute w-4 h-4 border border-[#2E2E2E] rounded-full top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-background"></div>
                    <div class="absolute w-4 h-4 border border-[#2E2E2E] rounded-full bottom-0 left-0 -translate-x-1/2 translate-y-1/2 bg-background"></div>
                    <div class="absolute w-4 h-4 border border-[#2E2E2E] rounded-full bottom-0 right-0 translate-x-1/2 translate-y-1/2 bg-background"></div>
                </div>

                <div class="relative flex sm:items-center justify-between gap-6 flex-col-reverse sm:flex-row">
                    <span class="text-xs sm:text-sm py-[2px] px-3 text-white/60 border border-[#2E2E2E] rounded-full text-center w-fit shadow-sm">
                        Inspired by{" "}
                        <a class="underline cursor-pointer">Nobody</a>
                    </span>
                    <div class="flex flex-col gap-2">
                        <span class="text-xs sm:text-sm py-[2px] px-3 text-white/60 border border-[#2E2E2E] rounded-full text-center w-fit shadow-sm">
                            Navigation
                        </span>
                        <a
                            href="#"
                            class="text-xs sm:text-sm font-medium text-white/60"
                        >
                            Home
                        </a>
                        <a
                            href="#downloads"
                            class="text-xs sm:text-sm font-medium text-white/60"
                        >
                            Downloads
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
