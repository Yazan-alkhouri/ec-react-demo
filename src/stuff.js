export class User{
  constructor(fName, lName){
    this.firstName = fName
    this.lastName = lName
  }
  getFullName(){
    return this.firstName + " " + this.lastName
  }
}