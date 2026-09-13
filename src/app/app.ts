import { Component, signal, computed, HostListener, AfterViewInit } from '@angular/core';
import { HeroComponent } from './components/hero/hero';
import { SobreComponent } from './components/sobre/sobre';
import { ProjetosComponent } from './components/projetos/projetos';
import { SkillsComponent } from './components/skills/skills';
import { ExperienciaComponent } from './components/experiencia/experiencia';
import { ContatoComponent } from './components/contato/contato';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    SobreComponent,
    ProjetosComponent,
    SkillsComponent,
    ExperienciaComponent,
    ContatoComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  private scroll = signal(0);
  private projetosTop = 1200;
  protected parallaxEsq = computed(() => `translateY(${this.scroll() * -0.07}px)`);
  protected parallaxDir = computed(() => `translateY(${this.scroll() * -0.07}px)`);
  protected circuitBg = `url("${new URL('circuit.svg', document.baseURI).href}")`;
  protected ladoOpacity = computed(() => {
    const progresso = (this.scroll() - this.projetosTop) / 1000;
    return Math.min(Math.max(progresso, 0), 1).toFixed(3);
  });

  ngAfterViewInit(): void {
    const el = document.querySelector('app-projetos');
    if (el) {
      this.projetosTop = el.getBoundingClientRect().top + window.scrollY;
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scroll.set(window.scrollY);
  }
}
