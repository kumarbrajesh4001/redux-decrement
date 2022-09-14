export const incNumber = (nm) => {
  return {
    type: "INCREMENT",
    payload:nm,
  };
};

export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};
