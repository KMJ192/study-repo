// (() => {
//   const minji = {
//     firstName: 'Minji',
//     lastName: 'Kim',
//     job: 'singer',
//   };
//   const hanni = {
//     firstName: 'Hanni',
//     lastName: 'Pham',
//     group: 'New jeans',
//   };
//   const daniel = {
//     firstName: 'Daniel',
//     lastName: 'Marsh',
//     nationality: 'Australia',
//   };
//   const haerin = {
//     firstName: 'Haerin',
//     lastName: 'Kang',
//     nickName: 'cat',
//   };
//   const hyein = {
//     firstName: 'Hyein',
//     lastName: 'Lee',
//     mbti: 'ISFP',
//   };

//   const getFullName = (people) => `${people.firstName} ${people.lastName}`;

//   const people = [minji, hanni, daniel, haerin, hyein];

//   const t0 = performance.now();
//   for (let i = 0; i < 1000 * 1000 * 1000; i++) {
//     getFullName(people[i % 5]);
//   }
//   const t1 = performance.now();

//   console.log(`${Math.floor((t1 - t0) / 1000)}s`);
// })();

(() => {
  const minji = {
    firstName: 'Minji',
    lastName: 'Kim',
  };
  const hanni = {
    firstName: 'Hanni',
    lastName: 'Pham',
  };
  const daniel = {
    firstName: 'Daniel',
    lastName: 'Marsh',
  };
  const haerin = {
    firstName: 'Haerin',
    lastName: 'Kang',
  };
  const hyein = {
    firstName: 'Hyein',
    lastName: 'Lee',
  };

  const getFullName = (people) => `${people.firstName} ${people.lastName}`;

  const people = [minji, hanni, daniel, haerin, hyein];

  const t0 = performance.now();
  for (let i = 0; i < 1000 * 1000 * 1000; i++) {
    getFullName(people[i % 5]);
  }
  const t1 = performance.now();

  console.log(`${Math.floor((t1 - t0) / 1000)}s`);
})();
