import { Route, Routes } from 'react-router';
import Home from '../pages/Home/Home';
import ProductDetails from "@/pages/Details/ProductDetails";


const MainRouter = () => {
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