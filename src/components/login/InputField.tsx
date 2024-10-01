// login/Input.tsx
import React from 'react';

// InputFieldProps 인터페이스 정의
interface InputFieldProps {
  id: string;
  type: string;
  label: string;
  placeholder: string;
}

// InputField 컴포넌트
const InputField = ({ id, type, label, placeholder }: InputFieldProps) => (
  <div className='mb-4'>
    <label
      className='block text-gray-500 text-sm font-medium mb-2'
      htmlFor={id}
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
      placeholder={placeholder}
    />
  </div>
);

export default InputField;
