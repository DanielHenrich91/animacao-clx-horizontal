// 1. Selecionamos o elemento de vídeo no HTML usando o ID que criamos
const meuVideo = document.getElementById('meuVideo');

// 2. Adicionamos "Ouvintes de Eventos" (Event Listeners).
// Eles ficam esperando algo acontecer com o vídeo para disparar uma função.

// Evento disparado quando o usuário clica em "Play"
meuVideo.addEventListener('play', function() {
    // Console.log imprime mensagens na aba "Console" do inspecionar elemento (F12) do navegador
    console.log('O vídeo começou a rodar!'); 
});

// Evento disparado quando o usuário clica em "Pause"
meuVideo.addEventListener('pause', function() {
    console.log('O vídeo foi pausado!');
});

// Evento disparado quando o vídeo termina um ciclo (antes de recomeçar pelo loop)
meuVideo.addEventListener('ended', function() {
    console.log('Fim do ciclo do vídeo! Recomeçando...');
});