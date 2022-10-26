import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getEmployAnnouncement } from '../../api/Employ/get';
const EmployAnnouncement = ({ mainCategory, subCategory }) => {
  const [employAnnouncement, setEmployAnnouncement] = useState(null);
  const [current, setCurrent] = useState(0);
  const [searchWord, setSearchWord] = useState(null);
  const next = () => {
    if (current >= 18) {
      setCurrent(0);
    } else {
      setCurrent(current + 2);
    }
  };

  const prev = () => {
    if (current <= 1) {
      setCurrent(18);
    } else {
      setCurrent(current - 2);
    }
  };
  useEffect(() => {
    (async function () {
      const res = await getEmployAnnouncement(mainCategory);
      setEmployAnnouncement(res.data);
    })();
  }, [mainCategory]);
  useEffect(() => {
    (async function () {
      const res = await getEmployAnnouncement(subCategory);
      setEmployAnnouncement(res.data);
    })();
  }, [subCategory]);
  console.log(employAnnouncement);
  return (
    <>
      {employAnnouncement?.length ? (
        <main>
          <ContentsWrapper>
            <span
              style={{
                width: '47.5%',
                marginRight: '30px',
                borderRight: '1px solid #d9dfeb',
              }}
            >
              <a href={employAnnouncement[current].link}>
                <h2 style={{ display: 'inline-block' }}>
                  {employAnnouncement[current].name}
                </h2>
              </a>
              <div style={{ marginTop: '5px' }}>
                {employAnnouncement[current].title}
              </div>
              <div style={{ marginTop: '10px' }}>
                <Box>학력</Box>
                <Span>{employAnnouncement[current].education}</Span>
                <Box>기한</Box>
                <Span>{employAnnouncement[current].date}</Span>
                <Box>위치</Box>
                <Span>{employAnnouncement[current].location}</Span>
                <Box>경력</Box>
                <Span>{employAnnouncement[current].experience}</Span>
              </div>
            </span>
            <span style={{ width: '47.5%' }}>
              <a href={employAnnouncement[current + 1].link}>
                <h2 style={{ display: 'inline-block' }}>
                  {employAnnouncement[current + 1].name}
                </h2>
              </a>
              <div style={{ marginTop: '5px' }}>
                {employAnnouncement[current + 1].title}
              </div>
              <div
                style={{
                  marginTop: '10px',
                }}
              >
                <Box>학력</Box>
                <Span>{employAnnouncement[current + 1].education}</Span>
                <Box>기한</Box>
                <Span>{employAnnouncement[current + 1].date}</Span>
                <Box>위치</Box>
                <Span>{employAnnouncement[current + 1].location}</Span>
                <Box>경력</Box>
                <Span>{employAnnouncement[current + 1].experience}</Span>
              </div>
            </span>
            <div>
              <ChevronLeftIcon
                onClick={prev}
                style={{ cursor: 'pointer' }}
              ></ChevronLeftIcon>
              <ChevronRightIcon
                onClick={next}
                style={{ cursor: 'pointer' }}
              ></ChevronRightIcon>
            </div>
          </ContentsWrapper>
        </main>
      ) : null}
    </>
  );
};
const ContentsWrapper = styled.section`
  width: 95%;
  min-height: 100px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  background-color: #f9f9fc;
  border: 1px solid #d9dfeb;
  border-radius: 4px;
`;

const Box = styled.span`
  height: fit-content;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0.11);
  border-radius: 4px;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 4px;
  margin: 0 3px 0 0;
  background-color: #c5ccee;
`;
const Span = styled.span`
  margin-right: 3px;
`;
export default EmployAnnouncement;

//border #d9dfeb
//color #28323c
//background cceff
