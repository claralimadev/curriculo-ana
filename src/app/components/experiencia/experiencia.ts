import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

export interface Experiencia {
  ano: string;
  titulo: string;
  instituicao: string;
  descricao: string;
  badge: 'Hackathon' | 'Formação' | 'Projeto' | 'Carreira';
}

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienciaComponent {
  experiencias = signal<Experiencia[]>([
    {
      ano: '2026',
      titulo: 'Hackathon Proenergia Summit',
      instituicao: 'Ecossistema Olimpo & Parceiros',
      descricao: 'Desenvolvimento de aplicação SPA em Angular 22 unindo a sensibilidade de hardware e energia com interfaces web modernas.',
      badge: 'Hackathon'
    },
    {
      ano: '2026 - Presente',
      titulo: 'Bacharelado em Engenharia de Software',
      instituicao: 'UniAteneu — Unidade Harmony',
      descricao: 'Ingresso em agosto de 2026. No meu 1º semestre, aprofundo em desenvolvimento web: HTML semântico, CSS3/SCSS, lógica de programação e Angular 22.',
      badge: 'Formação'
    },
    {
      ano: 'Jan – Jun 2026',
      titulo: 'Aulas Particulares — Iniciação em Robótica',
      instituicao: 'Reforço Escolar',
      descricao: 'Ensinei robótica básica a uma aluna do ensino fundamental (6 meses), adaptando conceitos de montagem e programação para uma linguagem simples e lúdica, desenvolvendo comunicação, didática e paciência.',
      badge: 'Carreira'
    },
    {
      ano: '2023 - 2025',
      titulo: 'Técnico em Mecatrônica',
      instituicao: 'SENAI',
      descricao: 'Formação técnica em automação industrial: programação Ladder para CLPs, IHM e sistemas supervisórios, comandos elétricos e contatores, sensores magnéticos e ópticos, temporizadores, programação de braços robóticos e usinagem CNC em torno industrial com programação de corte via Autodesk Inventor. Projetos práticos integrando CLP ao controle de esteiras, vácuo e acionamento de sensores.',
      badge: 'Formação'
    },
    {
      ano: 'Pré-Faculdade',
      titulo: 'Projetos de Automação & Circuitos com Arduino',
      instituicao: 'Simulações no Tinkercad & C/C++',
      descricao: 'Montagem de circuitos e programação de microcontrolador: leitura de sensores analógicos (LDR, potenciômetro), controle de LEDs e displays LCD.',
      badge: 'Projeto'
    },
    {
      ano: '2026',
      titulo: 'CS50 — Introdução à Ciência da Computação',
      instituicao: 'Harvard (online)',
      descricao: 'Curso gratuito da Universidade de Harvard, aprofundando lógica de programação e algoritmos com Python.',
      badge: 'Formação'
    },
    {
      ano: '2023 - 2025',
      titulo: 'Curso de Inglês',
      instituicao: 'Invictus — Bezerra de Menezes, Fortaleza',
      descricao: 'Curso de inglês realizado em paralelo ao técnico, desenvolvendo comunicação e leitura de documentações técnicas e conteúdos internacionais de tecnologia.',
      badge: 'Formação'
    }
  ]);
}
