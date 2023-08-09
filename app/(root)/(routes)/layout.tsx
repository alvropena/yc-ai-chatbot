import Navbar from "@/components/navbar"

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>

    )
}
