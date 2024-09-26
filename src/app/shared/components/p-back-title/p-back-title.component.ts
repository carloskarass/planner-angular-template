import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'p-back-title',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatLabel],
  templateUrl: './p-back-title.component.html',
  styleUrl: './p-back-title.component.scss',
  exportAs: 'PBackTitleModule',
})
export class PBackTitleComponent {
  constructor(private router: Router) {}
  @Input() title: string = 'TITLE';
  @Input() backPath: string = 'TITLE';

  goBack() {
    this.router.navigateByUrl(this.backPath);
  }
}
