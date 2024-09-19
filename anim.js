// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var lyrics1 = document.querySelector("#lyrics-es");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Oh, cariño", time: 2 },
  { text: "No hay mucho que puedas decir", time: 5 },
  { text: "Para evitar que me enamore como lo estoy haciendo", time: 9 },
  { text: "Oh, cariño", time: 17 },
  { text: "Ni siquiera las olas pueden borrar", time: 21 },
  { text: "Nuestros nombres en la arena", time: 25 },
  { text: "Nunca podría, nunca podrá", time: 29 },
  { text: "Tú eres mi todo", time: 32 },
  { text: "Lo he dejado todo", time: 36 },
  {
    text: "Muéstrame las partes más oscuras de tu corazón, no voy a correr",
    time: 42,
  },
  { text: "Cada baile es lento", time: 49 },
  { text: "cada beso es woah", time: 53 },
  { text: "Dicen que sabes cuando lo sabes, bueno yo sé", time: 57 },
  { text: "Sé que eres la única", time: 60 },
  { text: "Algunas personas te traen un millón de bendiciones", time: 65 },
  { text: "Algunas personas te enseñan un millón de lecciones", time: 69 },
  { text: "Todo lo que aprendí es que no era mi turno", time: 73 },
  { text: "No era el momento indicado", time: 77 },
  { text: "Algunas personas vienen a tu vida por una razón", time: 81 },
  { text: "Otras vienen a tu vida por una temporada", time: 84 },
  { text: "Pero cariño, tú eres para toda la vida", time: 89 },
  { text: "Oh, cariño", time: 97 },
  { text: "No hay palabra que pueda describir", time: 100 },
  { text: "La forma en que me siento", time: 106 },
  { text: "esta noche..", time: 109 },
  { text: "Oh, cariño", time: 114 },
  { text: "Yo caminaría por ese camino destrozado", time: 118 },
  { text: "Una y otra vez", time: 120 },
  { text: "Si me llevara a tu hola", time: 124 },
  { text: "Tú eres mi todo", time: 129 },
  { text: "Lo he dejado todo", time: 133 },
  { text: "Muéstrame las partes más oscuras de tu corazón", time: 137 },
  { text: "no voy a correr", time: 141 },
  { text: "Cada baile es lento", time: 145 },
  { text: "cada beso es woah", time: 149 },
  { text: "Dicen que sabes cuando lo sabes, bueno yo sé", time: 152 },
  { text: "Sé que eres la única", time: 156 },
  { text: "Algunas personas te traen un millón de bendicioness", time: 161 },
  { text: "Algunas personas te enseñan un millón de lecciones", time: 165 },
  { text: "Todo lo que aprendí es que no era mi turno", time: 169 },
  { text: "No era el momento indicado", time: 173 },
  { text: "Algunas personas vienen a tu vida por una razón", time: 176 },
  { text: "Otras vienen a tu vida por una temporada", time: 181 },
  { text: "Pero cariño, tú eres para toda la vida", time: 186 },
  { text: "Cariño, tú eres toda una vida", time: 194 },
];

// var lyricsData1 = [
//   { text: "Oh, cariño", time: 2 },
//   { text: "No hay mucho que puedas decir", time: 5 },
//   { text: "Para evitar que me enamore como lo estoy haciendo", time: 9 },
//   { text: "Oh, darling", time: 17 },
//   { text: "Even waves can't wash away", time: 21 },
//   { text: "Our names in the sand", time: 25 },
//   { text: "Never could, never can", time: 29 },
//   { text: "You are my everything", time: 32 },
//   { text: "I'd give up everything", time: 36 },
//   {
//     text: "Show me the darkest parts of your heart, I ain't gonna run",
//     time: 42,
//   },
//   { text: "Every dance is slow", time: 49 },
//   { text: "every kiss is woah", time: 53 },
//   { text: "They say you know when you know, well, I know", time: 57 },
//   { text: "I know you're the one", time: 60 },
//   { text: "Some people bring you a million blessings", time: 65 },
//   { text: "Some people teach you a million lessons", time: 69 },
//   { text: "All that I learned, it wasn't my turn", time: 73 },
//   { text: "It wasn't the right time", time: 77 },
//   { text: "Some people come in your life for a reason", time: 81 },
//   { text: "Others they come in your life for a season", time: 84 },
//   { text: "But, baby, you are a lifetime", time: 89 },
//   { text: "Oh, darling", time: 97 },
//   { text: "There's no word that can describe", time: 100 },
//   { text: "The way that I feel", time: 106 },
//   { text: "Tonight", time: 109 },
//   { text: "Oh, darling", time: 114 },
//   { text: "I would walk that broken road", time: 118 },
//   { text: "Time and time again", time: 120 },
//   { text: "If it led me to your hello", time: 124 },
//   { text: "You are my everything", time: 129 },
//   { text: "I'd give up everything", time: 133 },
//   { text: "Show me the darkest parts of your heart,", time: 137 },
//   { text: "I ain't gonna run", time: 141 },
//   { text: "Every dance is slow,", time: 145 },
//   { text: "every kiss is woah", time: 149 },
//   { text: "They say you know when you know, well, I know", time: 152 },
//   { text: "I know you're the one", time: 156 },
//   { text: "Some people bring you a million blessings", time: 161 },
//   { text: "Some people teach you a million lessons", time: 165 },
//   { text: "All that I learned, it wasn't my turn", time: 169 },
//   { text: "It wasn't the right time", time: 173 },
//   { text: "Some people come in your life for a reason", time: 176 },
//   { text: "Others they come in your life for a season", time: 181 },
//   { text: "But, baby, you are a lifetime", time: 186 },
//   { text: "Baby, you are a lifetime", time: 194 },
// ];

// ?Laburar con la musiquita
// startButton.addEventListener("click", function () {
//   audio.currentTime = 181; // Establece el tiempo de inicio en 30 segundos
//   audio.play(); // Inicia la reproducción
// });

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4.5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// // ! español
// function updateLyrics1() {
//   var time = Math.floor(audio.currentTime);
//   var currentLine = lyricsData1.find(
//     (line) => time >= line.time && time < line.time + 4.5
//   );

//   if (currentLine) {
//     // Calcula la opacidad basada en el tiempo en la línea actual
//     var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
//     var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

//     // Aplica el efecto de aparición
//     lyrics1.style.opacity = opacity;
//     lyrics1.innerHTML = currentLine.text;
//   } else {
//     // Restablece la opacidad y el contenido si no hay una línea actual
//     lyrics1.style.opacity = 0;
//     lyrics1.innerHTML = "";
//   }
// }

setInterval(updateLyrics, 1000);
// setInterval(updateLyrics1, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
