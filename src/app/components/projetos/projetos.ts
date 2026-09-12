import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

export interface Projeto {
  nome: string;
  descricao: string;
  tecnologias: string[];
  status: 'Em andamento' | 'Concluído';
  destaque?: boolean;
}

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [],
  templateUrl: './projetos.html',
  styleUrl: './projetos.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjetosComponent {
  projetos = signal<Projeto[]>([
    {
      nome: 'Currículo Digital',
      descricao: 'Este site: currículo interativo em SPA com filtro de habilidades, linha do tempo e design responsivo.',
      tecnologias: ['Angular 22', 'SCSS', 'TypeScript'],
      status: 'Em andamento',
      destaque: true
    },
    {
      nome: 'Hackathon Proenergia Summit',
      descricao: 'Aplicação web SPA unindo a sensibilidade de hardware e energia com interfaces modernas.',
      tecnologias: ['Angular 22', 'SCSS'],
      status: 'Em andamento'
    },
    {
      nome: 'Circuitos & Sensores com Arduino',
      descricao: 'Projetos de automação: leitura de sensores analógicos (LDR, potenciômetro), controle de LEDs e displays LCD. Simulações no Tinkercad.',
      tecnologias: ['Arduino', 'C/C++', 'Tinkercad'],
      status: 'Concluído'
    }
  ]);
}