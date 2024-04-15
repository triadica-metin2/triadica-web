import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { FormsModule } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    InputTextModule,
    CalendarModule,
    TriStateCheckboxModule,
    ButtonModule,
    DropdownModule,
    SidebarModule,
  ],
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
})
export class AccountListComponent implements OnInit {
  protected breakpointObserver = inject(BreakpointObserver);

  accounts = [
    {
      id: 1,
      login: 'User1',
      email: 'user1@example.com',
      lastLogin: new Date(),
      isBlocked: false,
      characters: [
        {
          id: 101,
          name: 'Character1',
          level: 20,
          lastPlay: new Date(),
          mapIndex: 1,
        },
        {
          id: 102,
          name: 'Character2',
          level: 23,
          lastPlay: new Date(),
          mapIndex: 2,
        },
      ],
    },
    {
      id: 2,
      login: 'User2',
      email: 'user2@example.com',
      lastLogin: new Date(),
      isBlocked: true,
      characters: [
        {
          id: 201,
          name: 'Character3',
          level: 15,
          lastPlay: new Date(),
          mapIndex: 1,
        },
      ],
    },
  ];
  blocked: boolean | null = null;
  dateRange: Date[] | undefined;
  visibleSidebar = false;
  isMobile = true;

  ngOnInit(): void {
    // Check if the device is mobile or desktop
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }
}
