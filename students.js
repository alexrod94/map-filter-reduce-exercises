const students = [
  {
    name: "Tony Parker",
    firstProject: 80,
    secondProject: 75,
  },
  {
    name: "Marc Barchini",
    firstProject: 84,
    secondProject: 65,
  },
  {
    name: "Claudia Lopez",
    firstProject: 45,
    secondProject: 95,
  },
  {
    name: "Alvaro Briattore",
    firstProject: 82,
    secondProject: 92,
  },
  {
    name: "Isabel Ortega",
    firstProject: 90,
    secondProject: 32,
  },
  {
    name: "Francisco Martinez",
    firstProject: 90,
    secondProject: 55,
  },
  {
    name: "Jorge Carrillo",
    firstProject: 83,
    secondProject: 77,
  },
  {
    name: "Miguel López",
    firstProject: 80,
    secondProject: 75,
  },
  {
    name: "Carolina Perez",
    firstProject: 85,
    secondProject: 72,
  },
  {
    name: "Ruben Pardo",
    firstProject: 89,
    secondProject: 72,
  },
];

/* [
    {
        name: 'asdfasdfasdf',
        averageScore: 50
    }
] */

const newStudents = students.map((student) => {
  const averageScore = (student.firstProject + student.secondProject) / 2;
  return {
    name: student.name,
    averageScore: averageScore,
  };
});

console.log(newStudents);

const totalAverage = newStudents.reduce((acc, curr) => {
  const result = acc + curr.averageScore / newStudents.length;
  console.log(result);
  return result;
}, 0);

console.log(totalAverage);
