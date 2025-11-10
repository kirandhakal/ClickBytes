import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        {/* <Footer /> */}
        <main className="pt-20">{children}</main>
      </body>
    </html>
  )
}
