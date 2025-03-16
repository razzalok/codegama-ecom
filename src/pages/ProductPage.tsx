import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetProductQuery } from '../store/services/api';
import { addToCart } from '../store/reducers/cartSlice';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { data: product, isLoading, error } = useGetProductQuery(id!);

  if (isLoading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-600">Error loading product</div>;
  if (!product) return <div className="text-center py-8">Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-contain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-200 mb-4">{product.description}</p>
          <div className="mb-4">
            <span className="text-2xl font-bold">${product.price}</span>
          </div>
          <div className="mb-4">
            <span className="text-lg">
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </span>
          </div>
          <div className="mb-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              {product.category}
            </span>
          </div>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage