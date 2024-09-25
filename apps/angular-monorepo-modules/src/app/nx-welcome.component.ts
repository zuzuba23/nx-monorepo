import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `nx welocome`,
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
