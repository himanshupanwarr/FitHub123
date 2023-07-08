const Button = ({ onClickHandler, value, title }) => {
    return (
      <button onClick={onClickHandler} value={value} className="border-1  border-solid border-[black] rounded-[5px] p-[5px] pl-[10px] pr-[10px] hover:bg-green-300 bg-green-600 mr-[20px]">
        {title}
      </button>
    
    );
  };
  
  export default Button;