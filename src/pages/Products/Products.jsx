import { useSearchParams } from 'react-router-dom';
import { ProductList } from 'components/ProductList/ProductList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { getProducts } from '../ProductDetails/fakeAPI';

const Products = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  const visibleProducts = products.filter(product => {
    return product.name.toLowerCase().includes(productName.toLowerCase());
  });

  return (
    <main>
      <SearchBox value={productName} onChange={updateQueryString} />
      <ProductList products={visibleProducts} />
    </main>
  );
};

export default Products;
