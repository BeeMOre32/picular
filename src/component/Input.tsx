import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { InputProps } from '../interface';
import currentTheme from '../atom';

function Input({ placeHolderText }: InputProps) {
  const setCurrentTheme = useSetRecoilState(currentTheme);
  const [placeHolder, setPlaceHolder] = useState('');

  const handelPlaceHolderTime = (text: string) => {
    setPlaceHolder('|');
    let i = -1;
    const interVal = setInterval(() => {
      setPlaceHolder((prev) => {
        if (text[i]) {
          return `${prev.split('|').join('') + text[i]}|`;
        }
        return prev;
      });
      i += 1;
      if (i === text.length) {
        setTimeout(() => {
          setPlaceHolder('');
        }, 4000);
        clearInterval(interVal);
        setPlaceHolder((prevState) =>
          prevState
            .split('')
            .filter((_, index) => index !== prevState.length - 1)
            .join(''),
        );
      }
    }, 200);
  };

  const setPlaceHolderText = () => {
    const randomIndex = Math.floor(Math.random() * placeHolderText.length);
    const randomText = placeHolderText[randomIndex];
    setCurrentTheme(randomText);
    handelPlaceHolderTime(randomText);
  };

  useEffect(() => {
    const interVal = setInterval(() => {
      setPlaceHolderText();
    }, 7000);
    return () => {
      clearInterval(interVal);
    };
  }, []);
  return <motion.input type="text" className="input" placeholder={placeHolder} />;
}

export default Input;
