type NumberSegment = [
  [boolean, boolean, boolean],
  [boolean, boolean, boolean],
  [boolean, boolean, boolean],
  [boolean, boolean, boolean],
  [boolean, boolean, boolean],
];

export const genNumberSegment = (num: number): NumberSegment => {
  let numberSegment: NumberSegment;

  switch (num) {
    case 0:
      numberSegment = [
        [true, true, true],
        [true, false, true],
        [true, false, true],
        [true, false, true],
        [true, true, true],
      ];
      break;
    case 1:
      numberSegment = [
        [false, true, false],
        [false, true, false],
        [false, true, false],
        [false, true, false],
        [false, true, false],
      ];
      break;
    case 2:
      numberSegment = [
        [true, true, true],
        [false, false, true],
        [true, true, true],
        [true, false, false],
        [true, true, true],
      ];
      break;
    case 3:
      numberSegment = [
        [true, true, true],
        [false, false, true],
        [true, true, true],
        [false, false, true],
        [true, true, true],
      ];
      break;
    case 4:
      numberSegment = [
        [true, false, true],
        [true, false, true],
        [true, true, true],
        [false, false, true],
        [false, false, true],
      ];
      break;
    case 5:
      numberSegment = [
        [true, true, true],
        [true, false, false],
        [true, true, true],
        [false, false, true],
        [true, true, true],
      ];
      break;
    case 6:
      numberSegment = [
        [true, true, true],
        [true, false, false],
        [true, true, true],
        [true, false, true],
        [true, true, true],
      ];
      break;
    case 7:
      numberSegment = [
        [true, true, true],
        [false, false, true],
        [false, false, true],
        [false, false, true],
        [false, false, true],
      ];
      break;
    case 8:
      numberSegment = [
        [true, true, true],
        [true, false, true],
        [true, true, true],
        [true, false, true],
        [true, true, true],
      ];
      break;
    case 9:
      numberSegment = [
        [true, true, true],
        [true, false, true],
        [true, true, true],
        [false, false, true],
        [true, true, true],
      ];
      break;
    default:
      numberSegment = [
        [true, true, true],
        [true, false, true],
        [true, true, true],
        [false, false, true],
        [true, true, true],
      ];
      break;
  }
  return numberSegment;
};
