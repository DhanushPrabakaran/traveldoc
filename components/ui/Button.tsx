type prop ={
    text : string;
}
const Button = ({text}: prop) => {
  return (
    <button 
    className=" text-white text-xl max-xl:text-xl ml-5 font-bold py-2 px-4 ">
      {text}
    </button>
  );
};

export default Button;
