import Avatar from '@mui/material/Avatar';
const AvatarWrapper = ({ src, size }) => {
  return (
    <Avatar
      src={src}
      sx={{ width: size, height: size }}
      style={{ marginRight: '10px', cursor: 'pointer' }}
    ></Avatar>
  );
};
export default AvatarWrapper;
