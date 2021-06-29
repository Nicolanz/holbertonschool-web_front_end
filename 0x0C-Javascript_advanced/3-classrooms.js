
function createClassRoom(numbersOfStudents){
    function studentSeat(seat){
        function result(){
            return seat
        }
        return result;
    }
    let students = [];
    for (let i = 0; i < numbersOfStudents; i++) {
        students.push(studentSeat(i + 1));
    }
    return students;
}
const classRoom = createClassRoom(10);
