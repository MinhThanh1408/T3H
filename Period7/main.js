// Bài 1
const giaiPhuongTrinhBac1 = (a, b) => {
  if (a === 0) {
    console.log('Phương trình bậc 1 vô nghiệm');
    return;
  }
  const result = -b / a;
  console.log('x = ', result.toFixed(3));
};
//Bài 2
function tinhTongTu1DenN(n) {
  if (n === 1) {
    return 1;
  }
  return tinhTongTu1DenN(n - 1) + n;
}
// Bài 3
const array = [1, 25, 7, -7, -3, 12, -22, 0];

const sortAToZ = (array) => {
  return array.sort((a, b) => a - b);
};

const sortAbsoluteValue = (array) => {
  return array.sort((a, b) => {
    if (Math.abs(a) - Math.abs(b) !== 0) {
      return Math.abs(a) - Math.abs(b);
    }
    return a-b;
  });
};
console.log(sortAbsoluteValue(array));
