import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MenubarModule,
    ButtonModule,
    RouterOutlet,
  ],
  template: ` <div class="h-full flex flex-column">
    <p-menubar [model]="items">
      <ng-template pTemplate="start">
        <img
          src="https://primefaces.org/cdn/primeng/images/primeng.svg"
          height="40"
          class="mr-4"
        />
      </ng-template>
      <ng-template pTemplate="end">
        <p-button
          label="Wyloguj"
          icon="pi pi-power-off"
          (click)="logout()"
        ></p-button>
      </ng-template>
    </p-menubar>

    <main style="height: calc(100vh );">
      <router-outlet></router-outlet>
    </main>
  </div>`,
  styles: ``,
})
export class MainComponent {
  authService = inject(AuthService);

  items: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'pi pi-fw pi-home',
      routerLink: ['/dashboard'],
    },
    {
      label: 'Konta',
      icon: 'pi pi-fw pi-users',
      items: [
        {
          label: 'Lista kont',
          icon: 'pi pi-fw pi-list',
          routerLink: ['/account/list'],
        },
      ],
    },
  ];

  logout() {
    this.authService.logout();
  }
}
