import Footer from '../components/Footer'
import DataProvider from '../store/DataContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>
    <DataProvider>
        {children}
    </DataProvider>
    <Footer />
  </>
}
