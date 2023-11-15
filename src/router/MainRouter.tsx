import { FC } from "react"
import { Route, Routes } from 'react-router';
import Home from '../pages/Home/Home';
import ProductDetails from '@/pages/Details/ProductDetails';
import Category from '@/pages/Category/Category';
import Subcategory from '@/pages/Category/Subcategory/Subcategory';
import { Link } from 'react-router-dom';
import FooterPage from '@/pages/FooterPage/FooterPage';
import OrderStatus from '@/pages/OrderStatus/OrderStatus';

const MainRouter: FC = () => {
    const ROUTES = [
        {
            path: '/',
            key: 1,
            element: <Home />,
        },
        {
            path: '/product-details/:id/:name',
            key: 2,
            element: <ProductDetails />,
        },
        {
            path: '/category/:name/:id',
            key: 3,
            element: <Category />,
        },
        {
            path: '/subcategory/:name/:id',
            key: 4,
            element: <Subcategory />,
        },
        {
            path: '*',
            key: 5,
            element: (
                <div
                    style={{
                        height: '100vh',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                    }}
                >
                    <img
                        src="https://de.ryte.com/magazine/wp-content/uploads/2016/08/404-fehler.jpg"
                        style={{ height: '100%', width: '100%' }}
                    />
                    <Link
                        to="/"
                        style={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '25px',
                            cursor: 'pointer',
                            position: 'absolute',
                            bottom: '50px',
                        }}
                    >
                        Вернуться на главную
                    </Link>
                </div>
            ),
        },
        {
            path: '/show/:name',
            key: 6,
            element: <FooterPage />,
        },
        {
            path: '/order/status/:id/:order_status/:code',
            key: 7,
            element: <OrderStatus />,
        },
    ];

    return (
        <Routes>
            {ROUTES.map(({ element, key, path }) => (
                <Route
                    key={key}
                    element={element}
                    path={path}
                />
            ))}
        </Routes>
    );
};

export default MainRouter;