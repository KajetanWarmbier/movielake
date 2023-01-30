const NavButton = (props) => {
  return (
    <button
      className={`h-12 w-fit px-4 font-semibold text-white bg-white bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-xl border-white border-opacity-70 ${props.btnStyle} hover:bg-opacity-80`}
    >
      {props.btnText}
    </button>
  );
};

export default NavButton;
