import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home/Home.jsx'));
const About = lazy(() => import('../pages/About/About.jsx'));
const Products = lazy(() => import('../pages/Products/Products.jsx'));
const ProductDetails = lazy(() =>
  import('../pages/ProductDetails/ProductDetails.jsx')
);
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout.jsx'));
const Mission = lazy(() => import('./Mission/Mission.jsx'));
const Team = lazy(() => import('./Team/Team.jsx'));
const Reviews = lazy(() => import('./Reviews/Reviews.jsx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};
