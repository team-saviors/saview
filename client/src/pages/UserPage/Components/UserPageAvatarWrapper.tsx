const UserPageAvatarWrapper = ({
  size,
  src,
  // onMouseOver,
  // onMouseOut,
  // isHover,
  // handleClick,
  ...props
}) => {
  return (
    <>
      <img
        role="presentation"
        src={src}
        alt={src}
        style={{
          width: size,
          height: size,
          cursor: 'pointer',
          filter: 'brightness(100%)',
          borderRadius: '100px',
        }}
        onFocus={props?.onMouseOver}
        onMouseOver={props?.onMouseOver}
        onBlur={props?.onMouseOut}
        onMouseOut={props?.onMouseOut}
        onClick={props?.handleClick}
      ></img>
      {props?.isHover && (
        <div
          style={{
            position: 'absolute',
            top: '200px',
            color: 'white',
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
