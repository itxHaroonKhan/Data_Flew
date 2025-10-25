import React from "react";

interface ButtonProps {
  label: string; 
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button className="bg-blue-500 text-white rounded-full px-5 py-2 hover:bg-blue-600 transition-colors">
      {label}
    </button>
  );
};

export default Button;
