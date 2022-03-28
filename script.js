// Posições
const imageInput = document.querySelector('#meme-insert');
const inputText = document.getElementById('text-input');
const borderMeme = document.getElementById('meme-image-container');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const imagePosition = document.getElementById('meme-image');
const imageMeme1 = document.getElementById('meme-1');
const imageMeme2 = document.getElementById('meme-2');
const imageMeme3 = document.getElementById('meme-3');
const imageMeme4 = document.getElementById('meme-4');

// Colocar uma função para incluir a informação no input no paragráfo
function paragraphText() {
  const text = document.getElementById('meme-text');
  text.innerText = inputText.value;
}

// Resolução da introdução da imagem no video
// source: https://www.youtube.com/watch?v=lzK8vM_wdoY
// Resolução do problemas com a adicão do event.target na útima linha da função para encontrar o arquivo
// source: https://stackoverflow.com/questions/32508191/uncaught-typeerror-failed-to-execute-readasdataurl-on-filereader-parameter
// function imageBackground(event) {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => {
//     const uploadedImage = reader.result;
//     document.getElementById('meme-image').style.backgroundImage = `url(${uploadedImage})`;
//   });
//   reader.readAsDataURL(event.target.files[0]);
// }

// Solução baseada na resolução do Colega de Sala - Isaac Farias (após olhar a abordagem dele consegui encontrar aonde meu código não estava sendo aceito pelo avaliador - ambas as resoluções são funcionais)
// Resolução da atribuição da url e createObjectURL proveniente de uma informação no Stack Overflow na referência abaixo
// source: https://stackoverflow.com/a/27165977
function imageBackground() {
  imagePosition.src = URL.createObjectURL(imageInput.files[0]);
}

// Mudar a borda ao clicar nos botões
function redBorder() {
  if (borderMeme.className === 'container') {
    borderMeme.classList.remove('container');
    borderMeme.classList.add('fire');
  } else {
    borderMeme.classList.remove('fire');
    borderMeme.classList.add('container');
  }
}
function blueBorder() {
  if (borderMeme.className === 'container') {
    borderMeme.classList.remove('container');
    borderMeme.classList.add('water');
  } else {
    borderMeme.classList.remove('water');
    borderMeme.classList.add('container');
  }
}
function greenBorder() {
  if (borderMeme.className === 'container') {
    borderMeme.classList.remove('container');
    borderMeme.classList.add('earth');
  } else {
    borderMeme.classList.remove('earth');
    borderMeme.classList.add('container');
  }
}

// Colocar as imagens pre-selecionadas
function addImageMeme1() {
  imagePosition.src = document.getElementById('meme-1').src;
}
function addImageMeme2() {
  imagePosition.src = document.getElementById('meme-2').src;
}
function addImageMeme3() {
  imagePosition.src = document.getElementById('meme-3').src;
}
function addImageMeme4() {
  imagePosition.src = document.getElementById('meme-4').src;
}

window.onload = () => {
  inputText.addEventListener('keyup', paragraphText);
  imageInput.addEventListener('change', imageBackground);
  fireButton.addEventListener('click', redBorder);
  waterButton.addEventListener('click', blueBorder);
  earthButton.addEventListener('click', greenBorder);
  imageMeme1.addEventListener('click', addImageMeme1);
  imageMeme2.addEventListener('click', addImageMeme2);
  imageMeme3.addEventListener('click', addImageMeme3);
  imageMeme4.addEventListener('click', addImageMeme4);
};
