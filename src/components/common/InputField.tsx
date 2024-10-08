import React from 'react';

// InputFieldProps 인터페이스 정의
interface InputFieldProps {
    id: string;
    type: string;
    label: string;
    placeholder: string;
    value?: string; // 선택적 value 속성
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // 선택적 onChange 핸들러
}

// InputField 컴포넌트
const InputField: React.FC<InputFieldProps> = ({
    id,
    type,
    label,
    placeholder,
    value,
    onChange,
}) => (
    <div className='mb-4'>
        <label
            htmlFor={id}
            className='block text-gray-500 text-sm font-medium mb-2'
        >
            {label}
        </label>
        <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
    </div>
);

export default InputField;
