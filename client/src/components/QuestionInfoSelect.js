import { useState } from 'react';

const QuestionInfoSelect = () => {
  const [main, setMain] = useState('');

  const handleMainChange = (event) => {
    setMain(event.target.value);
    console.log(event.target.value);
  };
  const [sub, setSub] = useState('');

  const handleSubChange = (event) => {
    setSub(event.target.value);
    console.log(event.target.value);
  };

  const categoryData = [
    {
      label: '대분류',
      item: ['프론트엔드', '백엔드', 'CS'],
    },
    {
      label: '소분류',
      item: [
        'JavaScript',
        'React',
        'TypeScript',
        'Vue',
        'NodeJS',
        'Java',
        'Spring',
        'MySQL',
        'Express',
        'MongoDB',
        '운영체제',
        '자료구조',
        '알고리즘',
        '네트워크',
        '디자인패턴',
        '데이터베이스',
      ],
    },
  ];
  return (
    <InputWrapper>
      <FormControl fullWidth>
        <InputLabel id="main-select-label">{categoryData[0].label}</InputLabel>
        <Select
          labelId="main-select-label"
          id="main-select"
          value={main}
          label={categoryData[0].label}
          onChange={handleMainChange}
        >
          {/* <MenuItem value={'프론트엔드'}>프론트엔드</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
          {categoryData[0].item.map((data, idx) => (
            <MenuItem value={data} key={idx}>
              {data}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="sub-select-label">{categoryData[1].label}</InputLabel>
        <Select
          labelId="sub-select-label"
          id="sub-select"
          value={sub}
          label={categoryData[0].label}
          onChange={handleSubChange}
        >
          {/* <MenuItem value={'프론트엔드'}>프론트엔드</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
          {categoryData[1].item.map((data, idx) => (
            <MenuItem value={data} key={idx}>
              {data}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </InputWrapper>
  );
};

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';
import styled from 'styled-components';

const InputWrapper = styled(Box)`
  display: flex;
  margin-top: 40px;
  grid-gap: 15px;
`;
export default QuestionInfoSelect;
