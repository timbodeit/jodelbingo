
var headerText = "Jodel Bingo";

var footerText = "<a href='https://github.com/timbodeit/jodelbingo/' target='_blank'>Code available on GitHub</a><br><a href='https://github.com/jeffehobbs/HTML5-bingo/' target='_blank'>Based on HTML5-bingo by jeffehobbs</a>";

var winText = "Winner";

var clickSnd = new Audio("audio/click.mp3");

var winSnd = new Audio("audio/win.mp3");

var data = [
  "Kik?",
  "M oder W?",
  "Jeder, immer",
  "Kontrollörres",
  "Leierkasten",
  "Paulaner",
  "W21, nackt",
  "Müsste ich nackt sehen",
  "Justus",
  "Lörres reinhämmern",
  "Manni",
  "Dumm wie Aachen",
  "Rote Schuhe",
  "Grundschul-mausi",
  "Unglücklicher Single",
  "Ronni",
  "Mimimi",
  "Fotojodel",
  "Gadse",
  "#flirtenkannich",
  "Bellgadse",
  "Sonstige Kadse",
  "Lisa",
  "Laura",
  "#jhj",
  "das/dass seid/seit einzigste",
  "#dankemerkel",
  "memax92"
]

var JSONBingo = {"squares": data.map(function(e){ return {"square": e} })};
