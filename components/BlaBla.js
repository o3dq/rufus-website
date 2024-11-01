import Image from "next/image";

export default function Blabla() {
    return (
        <>
            <div id="about" className="bg-black text-white w-[90%] flex items-center justify-center p-4">
                <div className="max-w-3xl w-full flex flex-col gap-8">
                    <h1 className="text-3xl font-bold">About Rufus</h1>
                    <p className="text-sm text-white/80">
                        Rufus is a utility that helps format and create bootable
                        USB flash drives, such as USB keys/pendrives, memory
                        sticks, etc. <br /> <br />
                        It can be especially useful for cases where: <br />{" "}
                        <br />- you need to create USB installation media from
                        bootable ISOs (Windows, Linux, UEFI, etc.) <br />
                        - you need to work on a system that doesn't have an OS
                        installed <br />
                        - you need to flash a BIOS or other firmware from DOS{" "}
                        <br />
                        - you want to run a low-level utility <br />
                        Despite its small size, Rufus provides everything you
                        need! <br /> <br />A non exhaustive list of Rufus
                        supported ISOs is also provided at the bottom of this
                        page.
                    </p>
                </div>
            </div>

            <div id="usage" className="bg-black text-white w-[90%] flex items-center justify-center p-4">
                <div className="max-w-3xl w-full flex flex-col gap-8">
                    <h1 className="text-3xl font-bold">Usage</h1>
                    <p className="text-sm text-white/80">
                        Download the executable and run it – no installation is
                        necessary.
                        <br />
                        <br />
                        The executable is digitally signed and the signature
                        should state:
                        <br />
                        <br />-{" "}
                        <span className="italic">"Akeo Consulting"</span>{" "}
                        (v1.3.0 or later)
                        <br />-{" "}
                        <span className="italic">
                            "Pete Batard - Open Source Developer"
                        </span>{" "}
                        (v1.2.0 or earlier)
                        <br />
                        <br />
                        <span className="font-bold">Notes on DOS support:</span>
                        <br />
                        <br />
                        If you create a DOS bootable drive and use a non-US
                        keyboard, Rufus will attempt to select a keyboard layout
                        according to the locale of your system.
                    </p>
                </div>
            </div>
        </>
    );
}
