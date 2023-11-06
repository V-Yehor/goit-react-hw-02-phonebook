import { FilterText } from './Filter.styled';

export const Filter = ({ OnSearch }) => {
  return (
    <>
      <FilterText>Find contact by name</FilterText>
      <input
        type="text"
        name="search"
        placeholder="Type name"
        onChange={evt => OnSearch(evt.target.value)}
      />
    </>
  );
};
