import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  aberto = signal(false);

  toggle(): void {
    this.aberto.update(v => !v);
  }
}