import React, { useState, useEffect, FC } from 'react';
import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { IconButton, Input, InputGroup, Box, Stack, InputLeftElement } from '@chakra-ui/react';

import useDebounce from '@shared/hooks/useDebounce';

interface ISearchBoxProps {
  onChange: (filter: string) => void;
}

const SearchBox: FC<ISearchBoxProps> = ({ onChange }) => {

  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce<string>(search);

  useEffect(() => {
    onChange(debouncedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleClear = () => setSearch("");

  return (
    <Stack isInline maxWidth="450px" width="450px">
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          children={<SearchIcon color='gray.400' />}
        />
        <Input
          placeholder='Search missions'
          backgroundColor='white'
          value={search}
          onChange={handleInputChange}
        ></Input>
        <IconButton
          aria-label='Clear'
          colorScheme='bg'
          onClick={handleClear}
          icon={<CloseIcon color={search !== '' ? 'red' : ''} />}
          disabled={search === ''}
        />
      </InputGroup>
    </Stack>
  );
};

export default SearchBox;
