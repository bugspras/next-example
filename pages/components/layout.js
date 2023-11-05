import Header from './header'
import Footer from './footer'
 
export default function Layout({ children }) {
  return (
    <>
    <title>My page title</title>
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
      </div>
    </>
  )
}