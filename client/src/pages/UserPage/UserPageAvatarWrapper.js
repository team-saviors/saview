import styled from 'styled-components';
const UserPageAvatarWrapper = ({
  size,
  src,
  onMouseOver,
  onMouseOut,
  isHover,
  handleClick,
}) => {
  return (
    <>
      <img
        role="presentation"
        src={src}
        alt={src}
        style={
          isHover
            ? {
                width: size,
                height: size,
                cursor: 'pointer',
                filter: 'brightness(50%)',
                borderRadius: '100px',
              }
            : {
                width: size,
                height: size,
                cursor: 'pointer',
                filter: 'brightness(100%)',
                borderRadius: '100px',
              }
        }
        onFocus={onMouseOver}
        onMouseOver={onMouseOver}
        onBlur={onMouseOut}
        onMouseOut={onMouseOut}
        onClick={handleClick}
      ></img>
      {isHover && (
        <div
          style={{
            position: 'absolute',
            top: '200px',
            color: 'black',
            pointerEvents: 'none',
            width: '80px',
          }}
        >
          {'이미지 변경'}
        </div>
      )}
    </>
  );
};

export default UserPageAvatarWrapper;
