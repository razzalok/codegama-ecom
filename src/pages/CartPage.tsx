import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { removeFromCart, updateQuantity } from '../store/reducers/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity < 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center bg-gray-500 text-white">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <p>Add some products to your cart to see them here!</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h2 className="text-2xl font-bold mb-8">Shopping Cart</h2>
      <div className="grid grid-cols-1 gap-6">
        {cartItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-6 flex items-center text-gray-900">
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-contain mr-6"
            />
            <div className="flex-grow">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-800 mb-2">${item.price}</p>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  className="bg-gray-200 px-3 py-1 rounded"
                >
                  -
                </button>
                <span className="mx-4">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="bg-gray-200 px-3 py-1 rounded"
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold mb-2">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-right">
        <p className="text-2xl font-bold">
          Total: ${total.toFixed(2)}
        </p>
        <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage