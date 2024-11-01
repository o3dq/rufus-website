
import "./globals.css";

export const metadata = {
    title: "Rufus - Create bootable USB drives the easy way.",
    description: "Rufus: Create bootable USB drives the easy way.",
    keywords: "Application,BIOS,Boot,Bootable,DOS,Download,Drive,Fast,Flash,Formatting,FreeDOS,Linux,Portable,Rufus,Small,Standalone,UEFI,USB,Utility,Windows",
    author: "Pete Batard",
    applicationName: "Rufus",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
