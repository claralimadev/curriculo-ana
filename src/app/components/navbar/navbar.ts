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

  navegar(evento: Event, seletor: string): void {
    evento.preventDefault();
    this.aberto.set(false);

    const alvo = document.querySelector<HTMLElement>(seletor);
    if (!alvo) return;

    const topo = alvo.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top: topo, behavior: 'smooth' });
  }
}
