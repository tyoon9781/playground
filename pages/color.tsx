import "@/app/globals.css";
import { genNumberSegment } from "@/app/module/color";
import { useEffect, useState } from "react";

type RGB = [number, number, number];

type TestCase = {
  answer: number;
  trap: number;
};

const genRandomOneDigit = (): number => {
  return Math.floor(Math.random() * 10);
};

const genRandomTest = (): TestCase => {
  let num1 = genRandomOneDigit();
  let num2 = genRandomOneDigit();
  while (num1 === num2) {
    num2 = genRandomOneDigit();
  }

  return { answer: num1, trap: num2 };
};

const Cell = ({ rgb }: { rgb: RGB }) => {
  const backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  return (
    <td>
      <div className="w-6 h-6" style={{ backgroundColor }}></div>
    </td>
  );
};

const colorGen = (answer: boolean, trap: boolean): RGB => {
  const range = 25;
  const big = 200;
  const middle = 150;
  const small = 50;
  const _r_c = (scale: number, range: number) => {
    return Math.floor(scale + (Math.random() - 0.5) * range);
  };

  if (answer && trap) {
    // r값 진하게,
    // (121, 92, 45), (122, 86, 37)
    // return [_r_c(120, range), _r_c(90, range), _r_c(small, 35)];
    return [_r_c(160, range), _r_c(145, range), _r_c(50, range)];
  } else if (answer && !trap) {
    // r값 연하게,
    // (155, 146, 60), (170, 141, 43)
    return [_r_c(160, range), _r_c(145, range), _r_c(50, range)];
  } else if (!answer && trap) {
    // g값 진하게,
    // (37, 88, 39), (35, 92, 38)
    // return [_r_c(35, range), _r_c(90, range), _r_c(38, range)];
    return [_r_c(65, range), _r_c(145, range), _r_c(50, range)];
  } else {
    // g값 연하게,
    // (74, 153, 51), (54, 141, 52)
    return [_r_c(65, range), _r_c(145, range), _r_c(50, range)];
  }
};

const ColorSegment = () => {
  const testCase = genRandomTest();
  const answerSeg = genNumberSegment(testCase.answer);
  const trapSeg = genNumberSegment(testCase.trap);
  console.log(`answer : ${testCase.answer}, trap : ${testCase.trap}`);
  const yLen = 7;
  const xLen = 5;
  let color: RGB;

  const boundaryCheck = (x: number, y: number): boolean => {
    if (x === 0 || x === xLen - 1 || y === 0 || y === yLen - 1) {
      return true;
    }
    return false;
  };

  const tableRows = [];
  for (let y = 0; y < yLen; y += 1) {
    const cells = [];
    for (let x = 0; x < xLen; x += 1) {
      if (boundaryCheck(x, y)) {
        color = colorGen(false, false);
      } else {
        color = colorGen(answerSeg[y - 1][x - 1], trapSeg[y - 1][x - 1]);
      }
      cells.push(<Cell rgb={color} />);
    }
    tableRows.push(<tr>{cells}</tr>);
  }

  return <table>{tableRows}</table>;
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <>
        <div>
          <h1>this is color test</h1>
          {<ColorSegment />}
        </div>
      </>
    )
  );
}
