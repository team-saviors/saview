import Button from '../components/BasicButton';
import styled from 'styled-components';
import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
const AnswerModal = ({ question }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <AnswerModalBtn onClick={handleOpen}>답변 작성</AnswerModalBtn>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalHeader>
            <h2>답변하기</h2>
            <IconButton>
              <ClearIcon />
            </IconButton>
          </ModalHeader>
          <ModalBody>
            <h3>질문 : {question.content}</h3>
            <AnswerContent>
              <label htmlFor="anwer">답변 내용</label>
              <textarea
                name="content"
                rows="10"
                placeholder="질문과 관련된 답변을 구체적으로 작성해 주세요. 타인에 비방이나 욕설, 광고 등 주제와 관련없는 내용은 삭제될 수 있습니다."
              ></textarea>
            </AnswerContent>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Box>
      </Modal>
    </div>
  );
};

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';

const AnswerModalBtn = styled(Button)``;
const ModalHeader = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  vertical-align: baseline;
  padding: 2.5rem 2.5rem 0 2.5rem;
  border-bottom: none;
  > h2 {
    font-size: 26px;
    font-weight: 700;
  }
`;
const ModalBody = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  padding: 2.5rem;
  border-bottom: none;
`;
const AnswerContent = styled(Box)`
  margin: 1.2rem 0 0 0;
  display: flex;
  flex-direction: column;
  > label {
    margin-bottom: 0.5rem;
  }
  > textarea {
    font-size: 1rem;
    font-weight: 400;
    padding: 8px 12px;
    height: auto;
    /* width: 100%; */
  }
`;
const ModalFooter = styled(Box)``;
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '950px',
  height: '700px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  bgcolor: 'background.paper',
  border: '2px solid gray',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: '20px',
  padding: '0',
};

export default AnswerModal;
