import Avatar from '@mui/material/Avatar';
const AvatarWrapper = (props) => {
  return (
    <Avatar
      src={props.src}
      sx={{ width: 30, height: 30 }}
      style={{ marginRight: '10px' }}
    ></Avatar>
  );
};
export default AvatarWrapper;
