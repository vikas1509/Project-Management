import React, { useState } from 'react';

const CryptoItem = ({ coin, price, addToCart }) => {
  const [qty, setQty] = useState('');

  const handleAdd = () => {
    const parsedQty = parseFloat(qty);
    if (!isNaN(parsedQty) && parsedQty > 0) {
      addToCart(coin, parsedQty, price);
      setQty(''); // reset quantity after adding to cart
    }
  };

  return (
    <div style={{ textAlign: 'center', border: '1px solid black', padding: '20px' }}>
      <div style={{ backgroundColor: 'red', padding: '10px' }}>{coin} @${price}</div>
      <input
        type="number"
        step="0.01"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        style={{ margin: '10px 0' }}
      />
      <button onClick={handleAdd} style={{ backgroundColor: 'blue', color: 'white' }}>
        ADD
      </button>
    </div>
  );
};

export default CryptoItem;
