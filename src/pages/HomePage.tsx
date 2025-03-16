import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { useGetProductsQuery, useGetCategoriesQuery } from '../store/services/api';
import { setSelectedCategory } from '../store/reducers/productsSlice';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state: RootState) => state.products.selectedCategory);
  const { data: products, isLoading: productsLoading, error: productsError } = useGetProductsQuery();
  const { data: categories } = useGetCategoriesQuery();

  const filteredProducts = selectedCategory && products
    ? products.filter(product => product.category === selectedCategory)
    : products;

  if (productsLoading) return <div className="text-center py-8">Loading...</div>;
  if (productsError) return <div className="text-center py-8 text-red-600">Error loading products</div>;

  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => dispatch(setSelectedCategory(''))}
            className={`px-4 py-2 rounded ${
              !selectedCategory ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'
            }`}
          >
            All
          </button>
          {categories?.map(category => (
            <button
              key={category}
              onClick={() => dispatch(setSelectedCategory(category))}
              className={`px-4 py-2 rounded ${
                selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts?.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage