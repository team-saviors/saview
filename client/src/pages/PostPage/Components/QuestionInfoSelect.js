import TextField from '@mui/material/TextField';
import { questionRegisterStore } from '../../../store/store';
import { BEStacks, CS, FEStacks, 기타 } from '../../MainPage/Components/Tagbox';
const QuestionInfoSelect = () => {
  const { questions, handleMainChange, handleSubChange } =
    questionRegisterStore();
  const categoryData = [
    {
      label: '대분류',
      item: ['프론트엔드', '백엔드', 'CS', '기타'],
    },
    {
      label: '소분류',
      item: [FEStacks, BEStacks, CS, 기타],
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
      case '기타':
        return <input></input>;
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
        {questions.mainCategory === '기타' ? (
          <TextField
            label="소분류"
            value={questions.subCategory}
            onChange={handleSubChange}
          ></TextField>
        ) : (
          <>
            <InputLabel id="sub-select-label">
              {categoryData[1].label}
            </InputLabel>
            <Select
              labelId="sub-select-label"
              id="sub-select"
              value={questions.subCategory}
              label={categoryData[1].label}
              onChange={handleSubChange}
            >
              {subChange()}
            </Select>
          </>
        )}
      </FormControl>
    </InputWrapper>
  );
};

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import styled from 'styled-components';

const InputWrapper = styled(Box)`
  display: flex;
  margin-top: 40px;
  grid-gap: 15px;
`;
export default QuestionInfoSelect;
