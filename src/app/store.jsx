import { create } from 'zustand';

const saveToLocalStorage = (key, value) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const loadFromLocalStorage = (key) => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  return null;
};

const useCart = create((set, get) => ({
  cart: [],

  initializeCart: () => set(() => ({
    cart: loadFromLocalStorage('cart') || []
  })),

  addToCart: (product) => set((state) => {
    const existingProduct = state.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      alert('exist..!');
      return state;
    } else {
      const updatedCart = [...state.cart, { ...product, num: 1 }];
      saveToLocalStorage('cart', updatedCart);
      return { cart: updatedCart };
    }
  }),

  removeFromCart: (productId) => set((state) => {
    const updatedCart = state.cart.filter((item) => item.id !== productId);
    saveToLocalStorage('cart', updatedCart);
    return { cart: updatedCart };
  }),

  plusFromCart: (pId) => set((state) => {
    const index = state.cart.findIndex((item) => item.id === pId);
    if (index !== -1) {
      state.cart[index].num += 1;
      const updatedCart = [...state.cart];
      saveToLocalStorage('cart', updatedCart);
      return { cart: updatedCart };
    }
  }),

  minusFromProduct: (pId) => set((state) => {
    const index2 = state.cart.findIndex((item) => item.id === pId);
    if (index2 !== -1) {
      state.cart[index2].num -= 1;
      let updatedCart;
      if (state.cart[index2].num <= 0) {
        updatedCart = state.cart.filter((item) => item.id !== pId);
      } else {
        updatedCart = [...state.cart];
      }
      saveToLocalStorage('cart', updatedCart);
      return { cart: updatedCart };
    }
  }),

  getQuantity: (productId) => {
    const state = get();
    const product = state.cart.find((item) => item.id === productId);
    return product ? product.num : 0;
  },

  loadFromLocalStorage: () => {
    const storedCart = loadFromLocalStorage('cart');
    if (storedCart) {
      set({ cart: storedCart });
    }
  }
}));

export default useCart;
