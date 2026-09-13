import { Component, ChangeDetectionStrategy } from '@angular/core';

export interface Fato {
  rotulo: string;
  valor: string;
}

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [],
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SobreComponent {
  fatos = [
    { rotulo: 'Formação', valor: 'Engenharia de Software — UniAteneu (2026)' },
    { rotulo: 'Técnica', valor: 'Mecatrônica — SENAI (2025)' },
    { rotulo: 'Foco', valor: 'Frontend & Acessibilidade' },
    { rotulo: 'Base', valor: 'Automação Industrial & IoT' },
    { rotulo: 'Cidade', valor: 'Fortaleza, Ceará — Brasil' }
  ];
}