import {
  red,
  pink,
  purple,
  indigo,
  blue,
  teal,
  green,
  lightGreen,
  amber,
  orange,
  deepOrange,
  deepPurple,
  blueGrey
} from '@material-ui/core/colors';

const colors = [
  red, pink, purple, indigo, blue, teal, green, lightGreen, amber, orange, deepOrange, deepPurple, blueGrey
]

export default function colorFrom(string) {
  try {
    const index = string
      .toString()
      .split("")
      .map(char => char.charCodeAt())
      .reduce((sum, num) => sum + num, 0)

    const colorIndex = index % colors.length;
    return colors[colorIndex][500]

  } catch (error) {
    console.error(error);
    return blueGrey[500]
  }

}
