# 🕰️ Relógio Digital Retro - Neon Style

Este projeto é um relógio digital interativo com estética Cyberpunk/Retro, focado em alta personalização visual e manipulação dinâmica do DOM via JavaScript. O objetivo foi criar uma experiência imersiva onde o usuário tem controle total sobre a aparência da aplicação.

---

## 🔗 Visualização do Projeto
### **[➤ Clique aqui para ver o site funcionando](https://felipmz.github.io/Relogio-digital/)**

---

## 🎨 Diferencial: Personalização Persistente
O projeto conta com um sistema inteligente de **memória local (LocalStorage)**. Isso significa que todas as alterações visuais feitas pelo usuário são salvas automaticamente no navegador.
- **Configurações Salvas:** Ao recarregar a página, o relógio volta exatamente com a cor, tamanho, fonte e brilho que você escolheu.
- **Botão Reset Inteligente:** Um botão de reset dinâmico que se adapta à cor do tema atual e restaura todas as configurações padrão com um clique.

## 🛠️ Tecnologias Utilizadas

### **Core**
- **HTML5 Semântico**: Estrutura da aplicação.
- **CSS3 Moderno**: Uso extensivo de **CSS Variables (`:root`)** para troca instantânea de temas, Flexbox/Grid para layout e Keyframes para animações complexas.
- **JavaScript (Vanilla)**: Lógica de tempo real, manipulação de eventos, Fullscreen API e persistência de dados.

### **Recursos Visuais**
- **Google Fonts**: Integração de 4 famílias tipográficas distintas (*IBM Plex Mono, Press Start 2P, Orbitron, Share Tech Mono*).
- **Animações CSS**: Efeitos de *Pulsar*, *Glitch* (falha técnica) e *Flutuação*.

## ✨ Funcionalidades Principais

1.  **Seletor de Cores Neon:** Paleta predefinida e seletor `input type="color"` para liberdade total.
2.  **Troca de Fontes:**
    * *Mono:* Estilo terminal clássico.
    * *Pixel:* Estilo 8-bit / Games antigos.
    * *SciFi:* Futurista e espacial.
    * *Tech:* Estilo monitor CRT / Hacker.
3.  **Controle de Tamanho e Brilho:** Slider para ajuste de intensidade do neon (glow) e botões de escala.
4.  **Modo Tela Cheia:** Duplo clique no relógio para imersão total (esconde o menu automaticamente).

## 📂 Estrutura do Repositório
O projeto mantém uma estrutura limpa e separada por responsabilidades:
- `index.html`: Estrutura principal e importação de fontes.
- `/CSS`:
  - `style.css`: Toda a estilização, variáveis e animações.
- `/JavaScript`:
  - `script.js`: Lógica do relógio, listeners de eventos e gerenciamento do LocalStorage.

## 🚀 Como Rodar Localmente

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/felipmz/Relogio-digital.git](https://github.com/felipmz/Relogio-digital.git)
