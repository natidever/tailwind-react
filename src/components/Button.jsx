import 'tailwindcss/tailwind.css';
import '../index.css';

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins bg-blue-gradient font-medium text-[18px] text-white rounded-[10px] outline-none ${styles}`}>
         {/* Get Started  */}
  </button>
   
 
);

export default Button
