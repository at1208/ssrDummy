import Header from '../header/header';
import Footer from '../footer/footer';
import style from './layout.module.css'

const Layout = ({ children }) => {

  return <div className={`${style.layout}`}>
        <Header />
          <div className={`${style.layout_body}`}>{children}</div>
        <Footer />
         </div>
}

export default Layout;
