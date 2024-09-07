import React from 'react';
// import './ShimmerCard.css'; // Import the CSS for shimmer effect

const ShimmerCard = () => {
  return (
    <div class=" shimmer-card p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
  <div class="shimmer shimmer-image bg-gray-300 h-40 w-full rounded-lg"></div>
  <div class="shimmer shimmer-title bg-gray-300 h-6 w-3/4 rounded"></div>
  <div class="shimmer shimmer-text bg-gray-300 h-4 w-full rounded"></div>
  <div class="shimmer shimmer-text bg-gray-300 h-4 w-5/6 rounded"></div>
</div>

  );
};

export default ShimmerCard;
