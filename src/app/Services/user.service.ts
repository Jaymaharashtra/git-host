import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // 
  private users: any[] = [
    { id: 1, first_name: 'Shubham',last_name: 'mule', email: 'shubham@gmail.com', dob: '19/04/1997' },
    { id: 2, first_name: 'Gaurav',last_name: 'Gaikwad', email: 'ggaikwad@gmail.com', dob: '21/04/2000' },
    { id: 3, first_name: 'Samir',last_name: 'Gawade', email: 'samgawade@gmail.com', dob: '10/11/1993' },
    
  ];

  getUsers(): any[] {
    return this.users;
  }

  updateUser(user: any): void {
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }
  // 
  constructor() { }
}
