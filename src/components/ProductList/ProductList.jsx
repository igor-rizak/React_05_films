import { Link } from 'react-router-dom';
import { Container, CardWrapper, ProductName } from './ProductList.styled';

export const ProductList = ({ products }) => {
  return (
    <Container>
      {products.map(product => (
        <CardWrapper key={product.id}>
          <Link to={`${product.id}`}>
            <img
              src="https://pixabay.com/get/gc62d433a83c6477da2c0192ab190972cb2dbbf25278d07f339f880af46e05012658bb0b44790407760852f68a3ab408dbb89f28c48fe1751ded0d3d23c4d3677_640.jpg"
              alt=""
            />
            <ProductName>{product.name}</ProductName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};
