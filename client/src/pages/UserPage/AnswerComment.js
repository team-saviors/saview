import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AvatarWrapper from '../../components/AvatarWrapper';
import { getUsersActivity } from '../../utils/axiosRequest';
import { useParams } from 'react-router-dom';
export const AnswerComment = () => {
  const params = useParams();
  const [data, setData] = useState({ total: 0, totalHits: 0, hits: [] });
  const [size, setSize] = useState(10);
  const [page, setPage] = useState(1);
  const [activity, setActivity] = useState('answers');
  const numOfPages = data.totalHits ? Math.ceil(data.totalHits / size) : 0;

  useEffect(() => {
    const fetch = async () => {
      const data = await getUsersActivity(activity, params.id, {
        page: page,
        size: size,
      });
      if (page === 1) {
        setData(data);
      } else {
        setData((prevData) => ({
          ...prevData,
          hits: [...prevData.hits, ...data.hits],
        }));
      }
    };
    fetch();
  });
  console.log(data);
  return (
    <>
      <Container>
        <InfoWrapper>
          <div>
            <span>Category</span>
            <span style={{ marginLeft: '30px' }}>좋아요 개수</span>
          </div>
          <div>몇시간전?</div>
        </InfoWrapper>
        <ContentsWrapper>질문 내용 블라블라블라</ContentsWrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  border-bottom: 1px solid #e5e7eb;
  width: 1024px;
  height: 100px;
  display: flex;
  flex-direction: column;
`;
const InfoWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 10px;
  line-height: 40px;
  color: gray;
`;
const ContentsWrapper = styled.div`
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  font-weight: bold;
`;

export default AnswerComment;
