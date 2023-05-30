// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calAmp = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemps = temps[i];

//     if (typeof curTemps !== 'number') continue;

//     if (curTemps > max) max = curTemps;
//     if (curTemps < min) min = curTemps;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calAmp(temperatures);
// console.log(amplitude);

// // MERGING TWO ARRAYS

// const calAmpNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemps = temps[i];

//     if (typeof curTemps !== 'number') continue;

//     if (curTemps > max) max = curTemps;
//     if (curTemps < min) min = curTemps;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calAmpNew([3, 5, 2], [9, 4, 5]);
// console.log(amplitudeNew);

// TEMPERATURE MEASUREMENT

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degrees celsius:')),
//   };
//   console.log(measurement);
//   console.table(measurement);

//   console.log(measurement.value);

//   // console.warn(measure.value);
//   // console.error(measure.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());
// const arr = [17, 21, 23];
