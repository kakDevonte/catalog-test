import React from 'react';
import debounce from 'lodash.debounce';
import './search.scss';
import { useContextActions, useContextState } from '../../context/context';

export const Search = () => {
  const { search } = useContextState();
  const { setSearch, setPage } = useContextActions();
  const [value, setValue] = React.useState(search);
  const inputRef = React.useRef(null);

  const onClickClear = () => {
    setValue('');
    setSearch('');
    setPage(0);
    inputRef.current?.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearch(str);
      setPage(0);
    }, 500),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className="search">
      <svg
        className="icon"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="search">
          <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
        </g>
      </svg>
      <input
        ref={inputRef}
        className="input"
        value={value}
        onChange={(event) => onChangeInput(event)}
        placeholder="Поиск..."
      />
      {value && (
        <svg
          className="clear-icon"
          onClick={onClickClear}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </div>
  );
};
