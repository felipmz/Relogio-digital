function formatarZero(numero) {
    return numero < 10 ? "0" + numero : numero;
}

function atualizarRelogio() {
    const agora = new Date();
    const horas = formatarZero(agora.getHours());
    const minutos = formatarZero(agora.getMinutes());
    const segundos = formatarZero(agora.getSeconds());
    document.getElementById('div_relogio').textContent = `${horas}:${minutos}:${segundos}`;

    const dia = formatarZero(agora.getDate());
    const mes = formatarZero(agora.getMonth() + 1);
    const ano = agora.getFullYear();
    document.getElementById('div_data').textContent = `${dia} / ${mes} / ${ano}`;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();

// --- TELA CHEIA ---
const relogioBox = document.getElementById('relogio-box');
relogioBox.addEventListener('dblclick', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) document.exitFullscreen();
    }
});

document.addEventListener('fullscreenchange', () => {
    const menuContainer = document.getElementById('menu-cores');
    if (document.fullscreenElement) {
        menuContainer.style.display = 'none';
        listaOpcoes.classList.remove('mostrar');
    } else {
        menuContainer.style.display = 'flex';
    }
});

// --- MENU ---
const btnMenu = document.getElementById('btn-menu');
const listaOpcoes = document.getElementById('lista-opcoes');

btnMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    listaOpcoes.classList.toggle('mostrar');
});

document.addEventListener('click', (e) => {
    if (!btnMenu.contains(e.target) && !listaOpcoes.contains(e.target)) {
        listaOpcoes.classList.remove('mostrar');
    }
});

// --- FUNÇÕES DE CONFIGURAÇÃO ---

function mudarCor(corNova) {
    document.documentElement.style.setProperty('--cor-neon', corNova);
    localStorage.setItem('relogio-cor', corNova);
}

function mudarTamanho(escala) {
    document.documentElement.style.setProperty('--escala', escala);
    localStorage.setItem('relogio-tamanho', escala);
}

function mudarFonte(novaFonte) {
    const formatoCSS = `'${novaFonte}', monospace`;
    document.documentElement.style.setProperty('--fonte-relogio', formatoCSS);
    localStorage.setItem('relogio-fonte', novaFonte);

    // Se for a fonte Pixel, diminui um pouco o tamanho
    // As outras fontes (Mono, SciFi, Tech) usam o tamanho padrão 70px
    let tamanhoAjustado = novaFonte === 'Press Start 2P' ? '55px' : '70px';
    document.documentElement.style.setProperty('--tamanho-fonte-hora', tamanhoAjustado);
}

function mudarBrilho(valor) {
    document.documentElement.style.setProperty('--brilho-filtro', valor);
    localStorage.setItem('relogio-brilho', valor);
}

function mudarAnimacao(nomeAnimacao) {
    document.documentElement.style.setProperty('--animacao-atual', nomeAnimacao);
    localStorage.setItem('relogio-animacao', nomeAnimacao);
}

// --- FUNÇÃO DE RESET ---
function resetarPadrao() {
    if(!confirm("Tem certeza que deseja resetar todas as configurações?")) return;

    const padrao = {
        cor: 'rgb(60, 255, 0)',
        tamanho: 1,
        fonte: 'IBM Plex Mono',
        brilho: 1,
        animacao: 'none'
    };

    mudarCor(padrao.cor);
    mudarTamanho(padrao.tamanho);
    mudarFonte(padrao.fonte);
    mudarBrilho(padrao.brilho);
    mudarAnimacao(padrao.animacao);

    document.getElementById('slider-brilho').value = padrao.brilho;
    
    // Reseta o input color invisivel
    const inputCor = document.getElementById('input-cor-personalizada');
    if (inputCor) inputCor.value = "#3cff00";

    localStorage.removeItem('relogio-cor');
    localStorage.removeItem('relogio-tamanho');
    localStorage.removeItem('relogio-fonte');
    localStorage.removeItem('relogio-brilho');
    localStorage.removeItem('relogio-animacao');
}

// --- SELETOR VISUAL ---
const inputCor = document.getElementById('input-cor-personalizada');
function abrirSeletor() { inputCor.click(); }
inputCor.addEventListener('input', (evento) => { mudarCor(evento.target.value); });

// --- CARREGAR PREFERÊNCIAS ---
window.addEventListener('load', () => {
    const corSalva = localStorage.getItem('relogio-cor');
    if (corSalva) mudarCor(corSalva);

    const tamanhoSalvo = localStorage.getItem('relogio-tamanho');
    if (tamanhoSalvo) mudarTamanho(tamanhoSalvo);

    const fonteSalva = localStorage.getItem('relogio-fonte');
    if (fonteSalva) mudarFonte(fonteSalva);
    
    const brilhoSalvo = localStorage.getItem('relogio-brilho');
    if (brilhoSalvo) {
        mudarBrilho(brilhoSalvo);
        document.getElementById('slider-brilho').value = brilhoSalvo;
    }

    const animacaoSalva = localStorage.getItem('relogio-animacao');
    if (animacaoSalva) mudarAnimacao(animacaoSalva);
});