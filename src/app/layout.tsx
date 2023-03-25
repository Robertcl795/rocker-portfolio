
export const metadata = {
  title: "Rocker's Portfolio",
  description: "Showcase of all Robert Rocker's projects.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
