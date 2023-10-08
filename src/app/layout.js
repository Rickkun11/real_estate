import './globals.css'
export const metadata = {
    title: 'Real Estate Landing Page',
    description: 'Real Estate center searching for home'
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
