import styled from 'styled-components';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import { timeConverter } from '../../utils/timeHandler';

const QuestionCard = (props) => {
  const { questionId, content, views, answerNum, subCategory } = props.question;
  const navigate = useNavigate();
  //사용중 = subCategory, content,views,answerNum
  return (
    <CardItem
      variant="outlined"
      onClick={() => navigate(`questions/${questionId}`)}
    >
      <ArticleItemTitle>{content}</ArticleItemTitle>
      <ArticleInfoBox>
        <ArticleTimeStamp>
          {timeConverter(props.question.createdAt)}
        </ArticleTimeStamp>
      </ArticleInfoBox>
      <HashTagListBox>
        <HashTagItem>#{subCategory}</HashTagItem>
        <ArticleInfoSubBox>
          <CommentCount>댓글 수 {answerNum} &nbsp; &nbsp;</CommentCount>
          <Views>조회수 {views}</Views>
        </ArticleInfoSubBox>
      </HashTagListBox>
    </CardItem>
  );
};
const CardItem = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 190px;
  margin: 20px auto 0px 0px;
  gap: 11px;
  position: relative;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  padding: 20px;
  box-shadow: rgb(0 0 0 / 15%) 0px 8px 24px;
  transition: all 150ms ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;

const ArticleItemTitle = styled.h2`
  display: flex;
  width: 100%;
  height: 30px;
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: no-wrap;
  line-height: 2;
  word-break: break-all;
  text-overflow: ellipsis;
  table-layout: fixed;
  &:hover,
  &:active {
    text-decoration: underline;
  }
`;

const Views = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const CommentCount = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const ArticleInfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ArticleInfoSubBox = styled.div`
  display: flex;
`;

const UserProfile = styled.img`
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
`;

const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

const HeartBox = styled.div`
  display: flex;
  align-items: center;
`;

const ArticleTimeStamp = styled.div`
  font-size: 12px;
  font-weight: 400;
`;

const RightFooterBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const HashTagListBox = styled.div`
  position: relative;
  top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70%;
  flex-wrap: nowrap;
`;

const HashTagItem = styled.div`
  height: fit-content;
  max-width: 110px;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0.11);
  border-radius: 4px;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 4px;
  transition-duration: 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

export default QuestionCard;
