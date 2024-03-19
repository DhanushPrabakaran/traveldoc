<<<<<<< HEAD
type prop ={
    text : string;
}
const Button = ({text}: prop) => {
  return (
    <button 
    className="bg-white max-sm:text-xs text-sm p-3 px-6 rounded-3xl text-nowrap text-emerald-600 font-extrabold uppercase hover:bg-lime-200">
      {text}
=======
type text ={
    
}
const Button = () => {
  return (
    <button 
    className="bg-white w-full h-full mx-1 p-3 px-6 rounded-3xl text-nowrap text-emerald-600 font-extrabold uppercase hover:bg-lime-200">
      Sign-up / Login
>>>>>>> 1158935d29cd0612a8b49f72aec134b459f2d8f9
    </button>
  );
};

export default Button;
