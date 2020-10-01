import React, { createContext, useReducer } from "react";

const initialState = {
  countTotal: 0,
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_DATA": {
      const { data } = action;
      return {
        ...state,
        data,
      };
    }
    case "ADD": {
      const { id } = action;
      let countTotal = JSON.parse(JSON.stringify(state.countTotal));
      const data = JSON.parse(JSON.stringify(state.data));
      countTotal++;
      const newData = data.map((item) => {
        if (item.id === id) {
          const count = item.count ? item.count + 1 : 1;
          return { ...item, count };
        }
        return { ...item };
      });
      return {
        countTotal,
        data: newData,
      };
    }
    case "REMOVE": {
      const { id } = action;
      let countTotal = JSON.parse(JSON.stringify(state.countTotal));
      const data = JSON.parse(JSON.stringify(state.data));
      countTotal = countTotal > 0 ? countTotal - 1 : null;
      const newData = data.map((item) => {
        if (item.id === id) {
          const count = item.count
            ? item.count > 0
              ? item.count - 1
              : null
            : null;
          return { ...item, count };
        }
        return { ...item };
      });
      return {
        countTotal,
        data: newData,
      };
    }
    case "DELETE": {
      const { id } = action;
      let countTotal = JSON.parse(JSON.stringify(state.countTotal));
      const data = JSON.parse(JSON.stringify(state.data));
      const newData = data.map((item) => {
        if (item.id === id) {
          countTotal = countTotal - item.count;
          return { ...item, count: 0 };
        } else {
          return { ...item };
        }
      });
      return {
        countTotal,
        data: newData,
      };
    }
  }
};

const CartContext = createContext();

function CartProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
