import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContatoComponent {
  email = signal('anaclara.lr.dev@gmail.com');
}
