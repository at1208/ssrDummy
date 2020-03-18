import { Input } from 'antd';
import {useState} from 'react';

const { Search } = Input;

const SearchBar = () => {

  const [value, setValue] = useState(null)
  console.log(value)
  return <>
          <Search
          placeholder="Search here"
          onSearch={value =>  console.log(value)}
          style={{ width: "100%!important" }}
          value={value}
           />
         </>
}

export default SearchBar;
