import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: any = { id: 0, fname: '',lname:'', email: '', dateofbirth: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const userId = Number(params.get('id'));
      if (userId > 0) {
        // Load user data for editing
        this.user = this.userService.getUsers().find((u) => u.id === userId);
      }
    });
  }

  saveUser(): void {
    this.userService.updateUser(this.user);
    this.router.navigate(['/user-list']);
  }
}

