// Definição da variável "deg" com o valor de 6, que representa a quantidade de graus que cada unidade de tempo deve se deslocar
const deg = 6;

// Seleciona os elementos do HTML que possuem os IDs "hr", "mn" e "sc" e atribui a uma constante correspondente
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

// Função que atualiza o relógio a cada segundo
setInterval(() => {
// Cria um objeto Date com a hora atual
let day = new Date();

// Cálculo do ângulo da barra de horas baseado nas horas do objeto Date, multiplicado por 30 pois cada hora representa 30 graus em um relógio comum
let hh = day.getHours() * 30;

// Cálculo do ângulo da barra de minutos baseado nos minutos do objeto Date, multiplicado pela variável "deg" que representa a quantidade de graus que cada unidade de tempo deve se deslocar
let mm = day.getMinutes() * deg;

// Cálculo do ângulo da barra de segundos baseado nos segundos do objeto Date, multiplicado pela variável "deg" que representa a quantidade de graus que cada unidade de tempo deve se deslocar
let ss = day.getSeconds() * deg;

// Aplica a transformação CSS de rotação na barra de horas com o valor do ângulo calculado, adicionando a fração dos minutos em relação às horas (mm/12) para criar um efeito de movimento mais suave
hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;

// Aplica a transformação CSS de rotação na barra de minutos com o valor do ângulo calculado
mn.style.transform = `rotateZ(${mm}deg)`;

// Aplica a transformação CSS de rotação na barra de segundos com o valor do ângulo calculado
sc.style.transform = `rotateZ(${ss}deg)`;
});

