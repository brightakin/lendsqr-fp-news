import {useState} from 'react';

export const useToggleVisibility = (): any => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);
  const [Icon, setIcon] = useState<string>('eye-off');

  const togglePasswordVisibility = (): any => {
    if (Icon === 'eye-off') {
      setIcon('eye');
      setIsPasswordVisible(!isPasswordVisible);
    } else if (Icon === 'eye') {
      setIcon('eye-off');
      setIsPasswordVisible(!isPasswordVisible);
    }
  };

  return {
    isPasswordVisible,
    Icon,
    togglePasswordVisibility,
  };
};
