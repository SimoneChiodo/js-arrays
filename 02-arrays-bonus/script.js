const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);
// // Versione con il FOR -----
// let FORreversedTeachers = [];
// for (let i = 0; i < teachers.length; i++) {
//     FORreversedTeachers[i] = teachers[teachers.length - 1 - i];
// }
// console.log(FORreversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = teachers.filter((teacher) => teacher.length >= 5);
console.log(longNames);
// // Versione con il FOR -----
// let FORlongNames = [];
// for (let i = 0; i < teachers.length; i++) {
//     if (teachers[i].length >= 5) {
//         FORlongNames.push(teachers[i]);
//     }
// }
// console.log(FORlongNames);

// 3. Rimuovi 'Ed' dall'array teachers
console.log(teachers.filter((teacher) => teacher !== "Ed"));
// // Versione con il FOR -----
// for (let i = 0; i < teachers.length; i++) {
//     if (teachers[i] === "Ed") {
//         teachers.splice(i, 1);
//     }
// }
// console.log(teachers);
