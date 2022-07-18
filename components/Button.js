import Link from "next/link";

const Button = ({text}) => {
  return (

      <p className="lg:inline-flex lg:w-auto text-4xl px-6 py-4 rounded text-white font-bold items-center justify-center w-fit bg-rose-600 hover:bg-rose-800 transition duration-500">
        {text}
      </p>

  );
};

export default Button;
