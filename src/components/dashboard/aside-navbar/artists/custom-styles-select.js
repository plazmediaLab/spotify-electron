const customStyles = {
  container: (styles) => ({
    ...styles,
    height: '39px'
  }),
  valueContainer: (styles) => ({
    ...styles,
    marginTop: '0.1rem',
    height: '1.7rem'
  }),
  singleValue: () => ({
    color: '#F3F3F9',
    paddingLeft: '0.25rem',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  }),
  input: () => ({
    color: '#F3F3F9',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    backgroundColor: '#494A4E'
  }),
  control: (styles, { isFocused, isSelected }) => ({
    ...styles,
    boxShadow: 'none',
    border: 'none',
    backgroundColor: isFocused ? '#494A4E' : '#16171B',
    borderRadius: '0.25rem'
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    // const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isSelected ? '#7000f8' : '',
      cursor: isDisabled ? 'not-allowed' : 'default',
      ':hover': {
        backgroundColor: '#dbbffd'
      }
    };
  },
  placeholder: (styles, { isFocused }) => ({
    ...styles,
    color: isFocused ? '#F3F3F9' : '#494A4E'
  })
};

export default customStyles;
