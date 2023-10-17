import tinycolor from 'tinycolor2';

const black = '#000';
const blackColor = tinycolor(black);
const background = blackColor.clone().lighten(5).toHexString();

export const theme = {
  palette: {
    background,
    black,
  },
};
