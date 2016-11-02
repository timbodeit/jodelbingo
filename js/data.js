
var headerText = "Jodel Bingo";

var footerText = "<a href='https://github.com/timbodeit/jodelbingo/' target='_blank'>Code available on GitHub</a><br><a href='https://github.com/jeffehobbs/HTML5-bingo/' target='_blank'>Based on HTML5-bingo by jeffehobbs</a>";

var winText = "Winner";

var clickSnd = new Audio("audio/click.mp3");

var winSnd = new Audio("audio/win.mp3");

var data = [
  "Kik?",
  "M oder W?",
  "Jeder, immer",
  "Kontrol<wbr>lörres",
  "Leier<wbr>kasten",
  "Paulaner",
  "W21, nackt",
  "Müsste ich nackt sehen",
  "Justus",
  "Lörres rein<wbr>hämmern",
  "Manni",
  "Dumm wie Aachen",
  "Rote Schuhe",
  "Grundschul<wbr>mausi",
  "Unglück<wbr>licher Single",
  "Ronni",
  "Mimimi",
  "Fotojodel",
  "Gadse",
  "#flirten<wbr>kannich",
  "Bell<wbr>gadse",
  "Sonstige Gadse",
  "Lisa",
  "Laura",
  "#jhj",
  "das/dass seid/seit einzigste",
  "#danke<wbr>merkel",
  "memax92",
  "Irgendwas mit Boobies"
]

var JSONBingo = {"squares": data.map(function(e){ return {"square": e} })};
