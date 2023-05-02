import React from 'react';

const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_SEARCH = 'SET_SEARCH';
const SET_LOADING = 'SET_LOADING';
const SET_PAGE = 'SET_PAGE';
const INITIALIZE_STATE = 'INITIALIZE_STATE';

const initialState = {
  initialProducts: [],
  products: [],
  search: '',
  loading: true,
  page: 0,
};

const Context = React.createContext();

export const Provider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const actions = {
    setInitState: (value) => {
      dispatch({
        type: INITIALIZE_STATE,
        payload: value,
      });
    },
    setProducts: (value) => {
      dispatch({
        type: SET_PRODUCTS,
        payload: value,
      });
    },
    setSearch: (value) => {
      dispatch({
        type: SET_SEARCH,
        payload: value,
      });
    },
    setLoading: (value) => {
      dispatch({
        type: SET_LOADING,
        payload: value,
      });
    },
    setPage: (value) => {
      dispatch({
        type: SET_PAGE,
        payload: value,
      });
    },
  };

  return (
    <Context.Provider value={{ state, actions }}>
      {props.children}
    </Context.Provider>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE_STATE: {
      return {
        ...state,
        initialProducts: action.payload,
        products: action.payload,
      };
    }
    case SET_SEARCH: {
      return {
        ...state,
        search: action.payload,
      };
    }
    case SET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case SET_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
  }
};

export const useContextState = () => {
  return React.useContext(Context).state;
};

export const useContextActions = () => {
  return React.useContext(Context).actions;
};
