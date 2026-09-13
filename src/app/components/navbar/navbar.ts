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

  lendo = signal(false);

  toggle(): void {
    this.aberto.update(v => !v);
  }

  ler(): void {
    const synth = window.speechSynthesis;
    if (!synth) {
      alert('Seu navegador não suporta leitura em voz alta. Tente no Chrome.');
      return;
    }

    if (this.lendo()) {
      synth.cancel();
      this.lendo.set(false);
      return;
    }

    const raiz = document.querySelector('app-root');
    const texto = raiz?.textContent?.replace(/\s+/g, ' ').trim();
    if (!texto) {
      return;
    }

    synth.cancel();

    const partes = this.dividir(texto, 1600);
    partes.forEach((parte, i) => {
      const fala = new SpeechSynthesisUtterance(parte);
      fala.lang = 'pt-BR';
      fala.rate = 0.95;
      if (i === partes.length - 1) {
        fala.onend = () => this.lendo.set(false);
      }
      synth.speak(fala);
    });

    // Alguns celulares pausam a fala até o browser "acordar" o áudio
    setTimeout(() => {
      if (synth.paused) synth.resume();
    }, 300);

    this.lendo.set(true);
  }

  private dividir(texto: string, tamanho: number): string[] {
    const partes: string[] = [];
    for (let i = 0; i < texto.length; i += tamanho) {
      partes.push(texto.slice(i, i + tamanho));
    }
    return partes;
  }
}