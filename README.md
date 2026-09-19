# 👩‍💻 Currículo Digital — Ana Clara Lima 

Um **currículo digital interativo** feito com **Angular 22** (TypeScript e SCSS), pensado para apresentar minha trajetória, projetos e habilidades de forma moderna e acessível.

## 🔗 Acesse o currículo

### **https://claralimadev.github.io/curriculo-ana/**

---

## ✨ O que tem no currículo

- **Hero** com nome, papel e bio resumida.
- **Sobre mim** — história, formação e fatos rápidos.
- **Habilidades (Skills)** — stack e competências.
- **Projetos** — cards com status (🚧 Em andamento / ✅ Concluído), descrição e tecnologias.
- **Trajetória & Experiência** — timeline de formação, SENAI, UniAteneu e Hackathon Proenergia Summit 2026.
- **Contato** — botões diretos para **Gmail**, **GitHub** e **LinkedIn**.
- **Podcast flutuante** 🎙️ que lê o currículo em voz alta (acessibilidade).
- **VLibras** para acessibilidade em LIBRAS.
- Layout responsivo, dark theme e scroll suave na navegação.

---

## 🛠️ Tecnologias

- **Angular 22** (standalone components, signals, control flow `@for`)
- TypeScript + SCSS (with CSS variables e mixins responsivos)
- Deploy: **GitHub Pages** via **GitHub Actions**

---

## 🚀 Rodando localmente

```bash
npm install
ng serve
```

Abra `http://localhost:4200/`.

### Build de produção (como o Actions faz)

```bash
npm run build -- --base-href=/curriculo-ana/ --output-path=dist/curriculo-ana
```

### Testes

```bash
ng test
```

---

## 🚀 Deploy

Qualquer `push` na branch `main` publica automaticamente o site (workflow em `.github/workflows/deploy-pages.yml`).

---

**Feito por Ana Clara Lima** — veja também a [Pokédex](https://claralimadev.github.io/pokedex-app/) e outros projetos no [GitHub](https://github.com/claralimadev).
