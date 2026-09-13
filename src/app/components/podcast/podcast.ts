import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-podcast',
  standalone: true,
  imports: [],
  templateUrl: './podcast.html',
  styleUrl: './podcast.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PodcastComponent {
  tocando = signal(false);

  private roteiro = [
    'Olá! Este é o mini podcast do currículo da Ana Clara. A Ana Clara é desenvolvedora frontend em formação, técnica em Mecatrônica pelo SENAI e estudante de Engenharia de Software na UniAteneu. Hoje ela integra o Squad Proenergia no Hackathon Proenergia Summit de 2026, juntando a base técnica de automação industrial e IoT com as interfaces web modernas.',
    'O que ela mais gosta de fazer é construir interfaces bonitas e acessíveis, porque acredita que a web precisa ser um lugar para todo mundo. Por isso este site tem ferramentas de acessibilidade, como o tradutor de Libras e o botão de leitura em voz alta que você está usando agora.',
    'Entre as habilidades dela estão HTML, CSS, TypeScript e Angular, além do conhecimento em automação, CLP, sensores e robótica. O trabalho que ela leva para o hackathon é um projeto feito em equipe, com foco em energia e tecnologia.',
    'Se quiser trocar uma ideia, é só ir na seção de contato: e-mail, LinkedIn, WhatsApp e telefone. Esse foi o mini podcast. Obrigado por ouvir e até a próxima!'
  ];

  alternar(): void {
    const synth = window.speechSynthesis;
    if (!synth) {
      alert('Seu navegador não suporta leitura em voz alta. Tente no Chrome.');
      return;
    }

    if (this.tocando()) {
      synth.cancel();
      this.tocando.set(false);
      return;
    }

    synth.cancel();

    this.roteiro.forEach((parte, i) => {
      const fala = new SpeechSynthesisUtterance(parte);
      fala.lang = 'pt-BR';
      fala.rate = 0.95;
      if (i === this.roteiro.length - 1) {
        fala.onend = () => this.tocando.set(false);
      }
      synth.speak(fala);
    });

    // Alguns celulares pausam a fala até o browser "acordar" o áudio
    setTimeout(() => {
      if (synth.paused) synth.resume();
    }, 300);

    this.tocando.set(true);
  }
}
