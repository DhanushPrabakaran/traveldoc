type prop ={
    text : string;
}
const Button = ({text}: prop) => {
  return (
    <button 
    className="bg-white max-sm:text-xs text-sm p-3 px-6 rounded-3xl text-nowrap text-emerald-600 font-extrabold uppercase hover:bg-lime-200">
      {text}
    </button>
  );
};

export default Button;
