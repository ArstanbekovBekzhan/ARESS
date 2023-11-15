import { FC, ReactNode } from 'react'
import Footer from '../Footer/Footer.tsx'
import Header from '../Header/Header.tsx'
import Sidebar from '../Sidebar/Sidebar.tsx'
import './Layout.scss'

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='Layout'>
      <Header />
      <div className="body">
        <section>
          <Sidebar />
        </section>
        <div className="children">{children}</div>
      </div>

      <footer><Footer /></footer>
    </div>
  );
};

export default Layout;
