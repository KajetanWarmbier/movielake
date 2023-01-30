const HeaderLabel = (props) => {
  return (
    <h2 className='text-xl font-semibold text-white text-opacity-90 mb-5 ml-2 border-b-2 border-white border-opacity-60 md:text-2xl'>
      {props.children}
    </h2>
  );
};

export default HeaderLabel;
