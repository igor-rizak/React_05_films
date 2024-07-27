import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home/Home.jsx';
import { About } from './pages/About/About.jsx';
import { Products } from './pages/Products/Products.jsx';
import { ProductDetails } from './pages/ProductDetails/ProductDetails.jsx';
import { Container, Header, Logo, Link } from './App.styled';
import { Mission } from './Mission/Mission.jsx';
import { Team } from './Team/Team.jsx';
import { Reviews } from './Reviews/Reviews.jsx';

export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          GoMerch Store
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Container>
  );
};
