import { Montserrat ,Poppins} from 'next/font/google'
import './globals.css'
import Footer from './components/footer'
import Header from './components/header'


import clsx from 'clsx';
 
const lato = Montserrat({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400","500","600","700"  ],
  variable: '--font-lato',
})
const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", ], variable: '--font-poppins' });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(lato.variable , poppins.variable ,lato.className)}>
        <Header/>
        {children}
      <Footer/></body>
    </html>
  )
}
