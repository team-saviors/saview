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
                marginRight: '10px',
                marginTop: '15px',
                cursor: 'pointer',
                filter: 'brightness(50%)',
                borderRadius: '100px',
              }
            : {
                width: size,
                height: size,
                cursor: 'pointer',
                marginRight: '10px',
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
            position: 'relative',
            bottom: `160px`,
            left: `120px`,
            color: 'white',
            pointerEvents: 'none',
          }}
        >
          {'이미지 변경'}
        </div>
      )}
    </>
  );
};

export default UserPageAvatarWrapper;
