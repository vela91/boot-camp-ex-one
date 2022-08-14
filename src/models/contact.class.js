export class Contact {
  name = '';
  lastName = '';
  email = '';
  conected = false;

  constructor (name, lastName, email, conected){
    this.name= name;
    this.lastName= lastName;
    this.email= email;
    this.conected = conected;
  }
}