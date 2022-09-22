import { useState } from 'react';
import { questionRegisterStore } from '../store/store';
const QuestionInfoSelect = () => {
  const { questions, handleMainChange, handleSubChange } =
    questionRegisterStore();
  const categoryData = [
    {
      label: '대분류',
      item: ['프론트엔드', '백엔드', 'CS'],
    },
    {
      label: '소분류',
      item: [
        ['JavaScript', 'React', 'TypeScript', 'Vue', 'NodeJS', '기타'],
        ['Java', 'Spring', 'MySQL', 'Express', 'MongoDB', '기타'],
        [
          '운영체제',
          '자료구조',
          '알고리즘',
          '네트워크',
          '디자인패턴',
          '데이터베이스',
          '기타',
        ],
      ],
    },
  ];

  const subChange = () => {
    switch (questions.mainCategory) {
      case '프론트엔드':
        return categoryData[1].item[0].map((data, idx) => (
          <MenuItem value={data} key={idx}>
            {data}
          </MenuItem>
        ));
      case '백엔드':
        return categoryData[1].item[1].map((data, idx) => (
          <MenuItem value={data} key={idx}>
            {data}
          </MenuItem>
        ));
      case 'CS':
        return categoryData[1].item[2].map((data, idx) => (
          <MenuItem value={data} key={idx}>
            {data}
          </MenuItem>
        ));
    }
  };
  return (
    <InputWrapper>
      <FormControl fullWidth>
        <InputLabel id="main-select-label">{categoryData[0].label}</InputLabel>
        <Select
          labelId="main-select-label"
          id="main-select"
          value={questions.mainCategory}
          label={categoryData[0].label}
          onChange={handleMainChange}
        >
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
          value={questions.subCategory}
          label={categoryData[1].label}
          onChange={handleSubChange}
        >
          {subChange()}
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
