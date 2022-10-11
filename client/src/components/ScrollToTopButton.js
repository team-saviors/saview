import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const ScrollToTopButton = () => {
  const handleClick = () => (document.documentElement.scrollTop = 0);
  return (
    <>
      <ArrowCircleUpIcon
        sx={{ fontSize: 50 }}
        onClick={handleClick}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          cursor: 'pointer',
        }}
      ></ArrowCircleUpIcon>
    </>
  );
};
export default ScrollToTopButton;
