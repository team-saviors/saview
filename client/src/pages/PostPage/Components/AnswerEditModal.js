// import Button from '../components/BasicButton';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { putAnswer } from '../../../api/Answer';
import Button from '../../../components/BasicButton';
import { answerStore } from '../../../store/store';
const AnswerEditModal = ({ answer, page, sort }) => {
  const params = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: useMemo(() => {
      return answer;
    }, [answer]),
  });
  useEffect(() => {
    reset(answer);
  }, [answer]);
  const { question, getQuestion } = answerStore();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
    navigate(`/questions/${question.questionId}`);
  };

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    await putAnswer(data);
    handleClose();
    await getQuestion(params.id, page, sort);
  };
  const onError = () => {};
  return (
    <AnswerContainer>
      <EditModalBtn onClick={handleOpen}>수정하기</EditModalBtn>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalHeader>
            <h2>답변 수정</h2>
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
                  <RegistBtn type="submit">수정</RegistBtn>
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
const EditModalBtn = styled.button`
  font-size: 17px;
  font-weight: 500;
  padding: 0.4375rem 0.8125rem;
  color: #263747;
  border-radius: 3px;
  border: 1px solid #00000000;
  background-color: #e9ecf3;
  &:hover {
    background-color: #d7e2eb;
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
const CancelBtn = styled(Button)``;
const RegistBtn = styled(Button)``;
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

export default AnswerEditModal;
