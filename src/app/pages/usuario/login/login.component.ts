
import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    email: string = '';
    password: string = '';

    constructor(private authService: AuthService) {}

    onSubmit(): void {
        this.authService.login(this.email, this.password).subscribe({
            next: (response) => {
                alert('Login successful');
            },
            error: (error) => {
                alert('Invalid credentials');
            },
        });
    }
}
