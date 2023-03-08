import React from 'react';
import { useRecoilValue } from 'recoil';
import GridCol from './component/GridCol';
import currentTheme from './atom';
import placeHolderText from './constant/stringArr';
import themeColor from './constant/themeColor';

export default function Grid() {
  const themeVal = useRecoilValue(currentTheme);
  const currentThemeIndex = () => {
    const themeArr = placeHolderText;
    return themeArr.findIndex((theme) => theme === themeVal);
  };

  const currentThemeIndexVal = currentThemeIndex();
  const colors = currentThemeIndexVal === -1 ? [] : themeColor[currentThemeIndexVal];

  return (
    <div className="grid">
      <GridCol gridCol={1} colYCoordinate={0} colors={colors.slice(0, 2)} />
      <GridCol gridCol={2} colYCoordinate={50} colors={colors.slice(2, 4)} />
      <GridCol gridCol={3} colYCoordinate={30} colors={colors.slice(4, 6)} />
      <GridCol gridCol={4} colYCoordinate={-20} colors={colors.slice(6, 8)} />
      <GridCol gridCol={5} colYCoordinate={40} colors={colors.slice(8, 10)} />
      <GridCol gridCol={6} colYCoordinate={40} colors={colors.slice(10, 12)} />
      <GridCol gridCol={7} colYCoordinate={20} colors={colors.slice(12, 14)} />
    </div>
  );
}
