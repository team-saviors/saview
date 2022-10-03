import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { questionStore } from '../store/store';
const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <Nav>
      {page !== 1 && (
        <ArrowBackIcon
          width="24"
          cursor="pointer"
          fill="var(--text)"
          onClick={() => setPage((prev) => prev - 1)}
        />
      )}
      {`${totalPages} pages 중 `}
      <PageSelect
        name="page"
        value={page}
        onChange={(e) => setPage(parseInt(e.target.value))}
      >
        {Array(totalPages)
          .fill()
          .map((data, idx) => (
            <option value={idx + 1} key={idx + 1}>
              {idx + 1}
            </option>
          ))}
      </PageSelect>
      페이지
      {page !== totalPages && (
        <ArrowForwardIcon
          width="24"
          cursor="pointer"
          fill="var(--text)"
          onClick={() => setPage((prev) => prev + 1)}
        />
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 16px;
  color: var(--text); ;
`;

const PageSelect = styled.select`
  cursor: pointer;
  background-color: var(--primary);
  border: none;
  font-size: 16px;
  color: var(--highlight);
  font-weight: bold;
  font-family: inherit;
  &:focus {
    outline: none;
  }
`;

export default Pagination;
