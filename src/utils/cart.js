export function addToCart(product, selectedSize = null, selectedColor = null, quantity = 1) {
  const sizeToUse = selectedSize || (product.sizes ? product.sizes[0] : 'Free Size');
  const colorToUse = selectedColor || (product.colors ? product.colors[0] : 'Default');
  const itemKey = `${product.id}-${sizeToUse}-${colorToUse}`;

  try {
    const saved = localStorage.getItem('om_divine_cart');
    const cart = saved ? JSON.parse(saved) : [];
    const existingIndex = cart.findIndex(item => item.itemKey === itemKey);
    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        ...product,
        itemKey,
        selectedSize: sizeToUse,
        selectedColor: colorToUse,
        quantity
      });
    }
    localStorage.setItem('om_divine_cart', JSON.stringify(cart));
  } catch (e) {
    console.error('Failed to save cart to localStorage', e);
  }
}

export function getCart() {
  try {
    const saved = localStorage.getItem('om_divine_cart');
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.error('Failed to read cart from localStorage', e);
    return [];
  }
}

export function clearCart() {
  try {
    localStorage.removeItem('om_divine_cart');
  } catch (e) {
    console.error('Failed to clear cart in localStorage', e);
  }
}
