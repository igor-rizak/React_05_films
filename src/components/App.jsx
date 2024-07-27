import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home/Home.jsx';
import { About } from './pages/About/About.jsx';
import { Products } from './pages/Products/Products.jsx';
import { ProductDetails } from './pages/ProductDetails/ProductDetails.jsx';
import { Mission } from './Mission/Mission.jsx';
import { Team } from './Team/Team.jsx';
import { Reviews } from './Reviews/Reviews.jsx';
import { SharedLayout } from './SharedLayout/SharedLayout.jsx';

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
