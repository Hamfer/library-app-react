import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import Select from 'react-select';

import {useAppSelector} from '@/store';
import {booksSelector} from '@/store/reducers/book';

const SearchSelect = () => {
  const navigate = useNavigate();
  const books = useAppSelector(booksSelector);

  const onClickSearch = React.useCallback((id: number) => {
    navigate(`/book/${id}`);
  }, []);

  return (
    <>
      <FontAwesomeIcon icon="search" className="mr-2" />
      <Select
        placeholder={<p className="truncate">Cari nama / author buku</p>}
        options={books}
        getOptionValue={option => `${option.id}`}
        getOptionLabel={option => `${option.title} - ${option.author}`}
        classNames={{
          input: () => '!text-black dark:!text-white',
          singleValue: () => '!text-black dark:!text-white',
          container: () => 'w-full',
          menu: () => '!bg-dark-surface',
          menuList: () => 'dark:text-white',
          indicatorSeparator: () => '!hidden',
          dropdownIndicator: () => '!hidden',
          option: data => (data.isFocused ? '!bg-white/10' : ''),
          control: () =>
            '!bg-transparent !border-transparent !shadow-none hover:!border-transparent w-full',
        }}
        onChange={val => (val ? onClickSearch(val.id) : null)}
      />
    </>
  );
};

export default SearchSelect;
