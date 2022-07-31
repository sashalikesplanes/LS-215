let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  const studentGrades = Object.values(scores).map((student) => {
    // calculate grade
    const exerciseGrade = student.scores.exercises.reduce(
      (prev, cur) => prev + cur
    );
    const examGrade =
      student.scores.exams.reduce((prev, cur) => prev + cur) / 4;
    // round grade
    const grade = Math.round(exerciseGrade * 0.35 + examGrade * 0.65);
    // get letter
    let letter;
    if (grade >= 93) letter = "A";
    else if (grade >= 85) letter = "B";
    else if (grade >= 77) letter = "C";
    else if (grade >= 69) letter = "D";
    else if (grade >= 60) letter = "E";
    else letter = "F";

    return `${grade} (${letter})`;
  });

  // per student 
  //   per exam
  //      add to average, update min max
  const exams = Object.values(scores).reduce(
    (allStudentExams, oneStudent) => {
      oneStudent.scores.exams.forEach((examScore, examNum) => {
        // Create object to keep track of this exams stats
        if (!allStudentExams[examNum]) allStudentExams[examNum] = { sum: 0, min: Infinity, max: -Infinity};
        allStudentExams[examNum].sum += examScore;
        const min = allStudentExams[examNum].min;
        const max = allStudentExams[examNum].max;
        if (examScore < min) allStudentExams[examNum].min = examScore;
        if (examScore > max) allStudentExams[examNum].max = examScore;
      });
      return allStudentExams;
    }, []);
  exams.forEach(exam => {
    exam.average = exam.sum / Object.values(scores).length;
    delete exam.sum
  });
  // calculate average per exam
  return { studentGrades, exams };
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
// studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
// exams: [
// { average: 75.6, minimum: 50, maximum: 100 },
// { average: 86.4, minimum: 70, maximum: 100 },
// { average: 87.6, minimum: 60, maximum: 100 },
// { average: 91.8, minimum: 80, maximum: 100 },
// ],
// }
