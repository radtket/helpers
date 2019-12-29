export const calcTotalPrice = cart => {
  return cart.reduce((tally, { item, quantity }) => {
    if (!item) {
      return tally;
    }

    return tally + quantity * item.price;
  }, 0);
};
