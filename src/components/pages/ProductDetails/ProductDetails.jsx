import { useParams } from 'react-router-dom';
import { getProductById } from './fakeAPI';

export const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);
  return (
    <main>
      <img
        src="https://pixabay.com/get/g71893346e76ad9df57a136942b2b4040d5d096bf6b8dbfe0ba20eefc6c48379a706b5f9c58ccd9d33f57ae7753ad37c700f3787506367d53a2efc81459a6f205_640.png"
        alt=""
      />
      <div>
        <h2>
          Product - {product.name} - {id}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
    </main>
  );
};
