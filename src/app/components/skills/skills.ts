import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';

export interface Skill {
  nome: string;
  categoria: 'Frontend' | 'Hardware / IoT' | 'Automação Industrial' | 'Python & Lógica' | 'Ferramentas';
  status: 'Praticando' | 'Estudando' | 'Conhecendo' | 'Formação';
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  filtroAtivo = signal<string>('Todos');

  skills = signal<Skill[]>([
    { nome: 'HTML5 Semântico', categoria: 'Frontend', status: 'Estudando' },
    { nome: 'CSS3 & SCSS', categoria: 'Frontend', status: 'Estudando' },
    { nome: 'JavaScript', categoria: 'Frontend', status: 'Conhecendo' },
    { nome: 'Angular 22', categoria: 'Frontend', status: 'Estudando' },
    { nome: 'Python (Lógica & Algoritmos)', categoria: 'Python & Lógica', status: 'Estudando' },
    { nome: 'Arduino & C/C++', categoria: 'Hardware / IoT', status: 'Formação' },
    { nome: 'Sensores & Circuitos (Tinkercad)', categoria: 'Hardware / IoT', status: 'Formação' },
    { nome: 'Programação Ladder & CLP', categoria: 'Automação Industrial', status: 'Formação' },
    { nome: 'IHM & Supervisório (SCADA)', categoria: 'Automação Industrial', status: 'Formação' },
    { nome: 'Comandos Elétricos & Contatores', categoria: 'Automação Industrial', status: 'Formação' },
    { nome: 'Robótica (Braços Robotizados)', categoria: 'Automação Industrial', status: 'Formação' },
    { nome: 'Sistemas com Esteira & Vácuo', categoria: 'Automação Industrial', status: 'Formação' },
    { nome: 'Usinagem CNC (Torno Industrial)', categoria: 'Automação Industrial', status: 'Formação' },
    { nome: 'Autodesk Inventor (CAD/CAM)', categoria: 'Ferramentas', status: 'Formação' },
    { nome: 'Git & GitHub (Versionamento & Portfólio)', categoria: 'Ferramentas', status: 'Conhecendo' },
    { nome: 'VS Code', categoria: 'Ferramentas', status: 'Praticando' }
  ]);

  categorias = computed(() => {
    const cats = [...new Set(this.skills().map(s => s.categoria))];
    return ['Todos', ...cats];
  });

  skillsFiltradas = computed(() => {
    const filtro = this.filtroAtivo();
    if (filtro === 'Todos') return this.skills();
    return this.skills().filter(skill => skill.categoria === filtro);
  });

  setFiltro(cat: string): void {
    this.filtroAtivo.set(cat);
  }
}
