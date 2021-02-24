import create from "zustand";

const useCart = create((set, get) => ({
  items: [],
  addToCart: (product) => {
    // snapshot dello stato di items prima dell'aggiunta del nuovo product
    const items = get().items;

    // cerco elemento già nel carrello con id === product id
    const hasProduct = items.find((i) => i.id === product.id);

    if (!!hasProduct) {
      // incremento conteggio prodotto nel carrello SE GIA' ESISTENTE
      hasProduct.count++;
      // setto nuovo carrello
      set({
        items: [...items]
      });
    } else {
      // aggiungiamo proprietà per la quantità nel carrello
      product.count = 1;

      // settaggio di un nuovo elemento items array SE NON ESISTE GIA'
      set({
        items: [...items, product]
      });
    }
  },
  removeFromCart: (productId) => {
    // snapshot dello stato di items prima dell'aggiunta del nuovo product
    const items = get().items;

    // cerco elemento già nel carrello con id === product id
    const hasMoreProducts = items.find(
      (i) => i.id === productId && i.count > 1
    );

    if (!!hasMoreProducts) {
      // decremento conteggio prodotto nel carrello SE GIA' ESISTENTE
      hasMoreProducts.count--;
      // setto nuovo carrello
      set({
        items: [...items]
      });
    } else {
      set({
        items: [...items.filter((i) => i.id !== productId)]
      });
    }
  }
}));

export default useCart;
