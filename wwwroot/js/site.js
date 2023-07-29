// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function navigateToNewNote() {
  window.location.href = '/Home/NewNote';
}

function breakLineEveryXWords(text, wordsPerLine) {
  const words = text.split(' ');
  let newText = '';
  for (let i = 0; i < words.length; i++) {
    newText += words[i] + ' ';
    if ((i + 1) % wordsPerLine === 0) {
      newText += '\n';
    }
  }
  return newText.trim();
}

function generateNote() {
  let counter = parseInt(localStorage.getItem('noteCounter')) || 0;

  const title = document.getElementById('title').value;
  const noteText = document.getElementById('note').value;
  const subject = document.getElementById('subject').value;
  const date = document.getElementById('date').value;

  const selectedDate = new Date(date);
  const day = selectedDate.getDate();
  const month = selectedDate.getMonth() + 1;
  const year = selectedDate.getFullYear();

  const wordsPerLine = 10;
  const formattedNoteText = breakLineEveryXWords(noteText, wordsPerLine);

  const filename = `${subject.toUpperCase()}_${title.toLowerCase().replace(/\s/g, '_')}_${day}-${month}-${year}.txt`;
  counter++;
  localStorage.setItem('noteCounter', counter);

  let dataString = `Date: ${day}-${month}-${year}\n` +
    `Subject: ${subject}\n` +
    `--------------------------------------------------------------------------\n`+
    `${title.toUpperCase()}\n` +
    `${formattedNoteText}\n` +
    `--------------------------------------------------------------------------\n`+
    `Notes: ${counter}\n`;

  const blob = new Blob([dataString], { type: 'text/plain' });

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  setTimeout(() => {
    location.reload();
  }, 1000);
}









