
// .toString() // chuyển đổi một array thàng strign
// .join('value để làm dấu cách nhau') // chuyển đổi một array thành string và có ký tự cách nhau chuyền vào
// .pop() // xóa element cuối mảng và trả về phần tử đã xóa 
// .push('phần tử cần thêm vào', 'phần tử cần thêm vào')//  thêm vào cuối mảng
//thêm nhiều thì cách nhau bàng dấu phẩy
// .shift() //xóa đi phần tử đầu mảng và trả về phần tử đó
// .unshift('phần tử cần thêm vào', 'phần tử cần thêm vào') // thêm vào đầu mảng
// .splice(số bát đầu xóa, số kết thúc xóa, phần từ cần thêm vào chỗ xóa) // thêm sửa xóa
// .contat(array cần nối) // nối array nối chuối
// .slice(vị trí cát, vị trí kết thú) // sử dụng để cát mảng hoạc coppy mảng bàng cách khồn chuyền gì vào






function  Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

    Student.prototype.getFullName = function (){
        return `${this.firstName} ${this.lastName}`
    };
};

var student = new Student('tinh', 'bui')

console.log(student.fristName)
console.log(student.lastName)
console.log(student.getFullName())