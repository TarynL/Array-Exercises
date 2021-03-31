import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function called getStudentById
// It should accept one integer parameter named `id`
// It should return the student object with the matching ID
// Ex: getStudentById(1)
export let getStudentById = (id) => {

 return students.find(studentId => studentId.id === id)}

// Export a function called getInstructorById
// It should accept one integer parameter named `id`
// It should return the instructor object with the matching ID
// Ex: getInstructorById(1)

export let getInstructorById = (id) => {
    return instructors.find(instructorId => instructorId.id ===id)
}

// Export a function called getStudentByLastName
// It should accept one string parameter named `lastName`
// It should return the student object whose last name matches `lastName`
// It should NOT be case sensitive
// Ex: getStudentByName("sMiTh")

export const getStudentByLastName =(lastName) => {
    return students.find(student => student.lastName.toLowerCase() === lastName.toLowerCase())
}

// Export a function called getStudentByName
// It should accept one string parameter named `fullName`
// It should return the student object whose first and last name match `fullName`
// It should NOT be case sensitive
// Ex: getStudentByName("Summer SMITH")
export const getStudentByName = (fullName) => {
    return students.find(student => `${student.firstName} ${student.lastName}`.toLowerCase() === fullName.toLowerCase())
}
// Export a function called getInstructorOfStudent
// It should accept one integeter parameter named `studentId`
// It should return the instructor object of the student whose id matches `studentId`
// Ex: getInstructorOfStudent(4)      // returns Brenda Long
// export const getInstructorOfStudent = (studentId) => {
     
//     return instructors.find(instructor => instructor.id === students.find((student => student.id === studentId).instructorId)) 
     
// }

export const getInstructorOfStudent = (studentId) => {
    let selectedStudent = students.find(student => student.id === studentId)
    return instructors.find(instructor => instructor.id === selectedStudent.instructorId)
    
}
// Export a function called getStudentWithMostLangs
// It should not accept any parameters
// It should return the student object who knows the most programming languages
// Ex: getStudentWithMostLangs()      // returns Rick Sanchez
// HINT: You may not need the `find` method for this. This is one of the few cases where a `for` loop might be appropriate


export const getStudentWithMostLangs = () => {
    let maxNumberOfLangs = 0
    let studentWithMostLangs = {}
    // creat a for loop that looks for each
    for (let student of students){
        if (student.languages.length > maxNumberOfLangs){
            maxNumberOfLangs = student.languages.length
            studentWithMostLangs = student
        }
    }
return studentWithMostLangs
}

// reduce method
// export const getStudentsWithMostLangs = () => {
//     return students.reduce((acc, cv) => cv.languages.length > acc.languages.length ? cv : acc)
    
// }