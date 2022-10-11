import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useForm } from 'react-hook-form';
import { postAnswer } from '../api/Answer';
import { useNavigate, useParams } from 'react-router-dom';
import BasicButton from '../components/BasicButton';
import { Button, IconButton } from '@mui/material';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { signInModalStore } from '../store/store';
const AnswerModal = ({ getQuestion, question, sort, page }) => {
  const params = useParams();
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();
  const { openModal } = signInModalStore();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
    navigate(`/questions/${question.questionId}`);
  };
  const onSubmit = async (data) => {
    const res = await postAnswer(question.questionId, data);
    if (res?.response?.status === 201) {
      alert('답변 작성이 완료되었습니다');
    }
    if (res?.response?.status === 403) {
      openModal();
    }
    reset();
    handleClose();
    await getQuestion(params.id, page, sort);
  };
  const onError = () => {};
  return (
    <AnswerContainer>
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
            <IconButton onClick={handleClose}>
              <ClearIcon />
            </IconButton>
          </ModalHeader>
          <ModalBody>
            <h3>질문 : {question.content}</h3>
            <AnswerContent>
              <form onSubmit={handleSubmit(onSubmit, onError)}>
                <label className="answer-label" htmlFor="anwer">
                  답변 내용
                </label>
                <textarea
                  id="content"
                  required
                  name="content"
                  rows="10"
                  placeholder="질문과 관련된 답변을 구체적으로 작성해 주세요. 타인에 비방이나 욕설, 광고 등 주제와 관련없는 내용은 삭제될 수 있습니다."
                  {...register('content')}
                />
                <MadalBtns>
                  <CancelBtn onClick={handleClose}>취소</CancelBtn>
                  <RegistBtn type="submit">등록</RegistBtn>
                </MadalBtns>
              </form>
            </AnswerContent>
          </ModalBody>
        </Box>
      </Modal>
    </AnswerContainer>
  );
};

const AnswerContainer = styled(Box)``;
const AnswerModalBtn = styled.button`
  font-size: 17px;
  font-weight: 500;
  padding: 0.4375rem 0.8125rem;
  color: white;
  border-radius: 3px;
  border: 1px solid #00000000;
  background-color: #506b9b;
  &:hover {
    background-color: #3d5a92;
  }
`;
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
  padding: 4rem 2.5rem 2.5rem 2.5rem;
  border-bottom: none;
`;
const AnswerContent = styled(Box)`
  margin: 1.2rem 0 0 0;
  display: flex;
  flex-direction: column;
  > form {
    display: flex;
    flex-direction: column;
    > label {
      margin-bottom: 0.5rem;
    }
    > textarea {
      font-size: 1rem;
      font-weight: 400;
      padding: 8px 12px;
      width: 100%;
      resize: vertical;
      overflow: auto;
      background-color: #fbfbfd;
    }
  }
`;
const MadalBtns = styled(Box)`
  width: 100%;
  display: flex;
  padding: 2.5rem;
  border-top: none;
  /* text-align: right; */
  align-items: center;
  justify-content: center;
  > Button {
    margin: 0.25rem;
    font-weight: 500;
    font-size: 1rem;
    padding: 0.4375rem 0.8125rem;
  }
`;
const CancelBtn = styled(BasicButton)``;
const RegistBtn = styled(BasicButton)``;
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '950px',
  height: '620px',
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
