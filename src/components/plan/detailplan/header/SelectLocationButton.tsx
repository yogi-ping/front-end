// import React from 'react';
// interface SelectLocationButtonProps {
//     isAddingLocation: boolean;
//     setIsAddingLocation: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const SelectLocationButton: React.FC<SelectLocationButtonProps> = ({
//     isAddingLocation,
//     setIsAddingLocation,
// }) => {
//     return (
//         <button
//             className={`w-[50px] h-[30px] ${
//                 isAddingLocation ? 'bg-[#fed766]' : 'bg-[#ABABAB]'
//             } rounded-[100px] px-[2px] `}
//             onClick={() => setIsAddingLocation(!isAddingLocation)}
//             aria-label='addLocationButton'
//         >
//             <div
//                 className={`w-[27px] h-[27px] bg-white rounded-full transition-transform duration-300 ${
//                     isAddingLocation ? 'translate-x-[19px]' : 'translate-x-0'
//                 }`}
//             />
//         </button>
//     );
// };

// export default SelectLocationButton;
