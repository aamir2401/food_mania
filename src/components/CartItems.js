


const CartItems = ({ items }) => {
    console.log("fet", items); // Assuming 'items' is being passed correctly as a prop
  
    return (
      <div>
        {items.map((item) => ( // Correctly map over 'items'
          <div
            key={item?.card?.info?.id}
            className="menu-item mb-6 p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300 ease-in-out"
          >
            {/* Menu Item Title, Price, and Image */}
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.card.info.name}
                </h3>
                <span className="text-lg font-medium text-green-500">
                  ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
  
              {/* Image Container */}
              <div className="relative w-36 h-16">
                {/* Image */}
                <img
                  src={CDN_URL + item.card.info.imageId}
                  alt={item.card.info.id}
                  className="object-cover rounded-md w-full h-full"
                />
              </div>
            </div>
  
            {/* Menu Item Description */}
            <div className="mt-2">
              <p className="text-gray-600 text-xs">
                {item.card.info.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default CartItems;
  