import Avatar from '@mui/material/Avatar';
const AvatarWrapper = (props, size = 30) => {
  return (
    <Avatar
      src={props.src}
      sx={{ width: props.size, height: props.size }}
      style={{ marginRight: '10px' }}
    ></Avatar>
  );
};
export default AvatarWrapper;
