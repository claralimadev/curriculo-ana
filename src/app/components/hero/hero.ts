import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  nome = signal('Ana Clara Lima');
  papel = signal('Dev Frontend / Squad Proenergia');
  tagline = signal('Energia que move a indústria, código que move o futuro.');
  bio = signal('Desenvolvedora frontend em formação, criando interfaces web com Angular 22 e conectando a base técnica de automação industrial e IoT do SENAI ao universo digital.');
  iniciais = computed(() => this.nome().split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase());
}
