//WEBPAGE: https://www.miniclip.com/games/8-ball-pool-multiplayer/en/focus/
if (!(window.location.href.includes("miniclip.com/games/8-ball-pool-multiplayer/en/focus"))) {
  if (confirm("This program is made for the 'focus' webpage of the game, would you like to be redirected there?")) {
    window.open("https://www.miniclip.com/games/8-ball-pool-multiplayer/en/focus/");
  }
}

//remove unnecessary, zoom & center
document.getElementsByClassName("sky-wrapper")[0].remove();
document.getElementById("site-header").remove();
document.getElementById("pool-menu-after").remove();
document.getElementsByClassName("tools")[0].remove();
document.getElementsByClassName("tools")[1].remove();

document.getElementById("iframe-game").contentWindow.document.getElementById("container").style.margin="0px";
document.getElementById("game-embed").style.height=window.innerHeight+"px";
document.getElementById("game-embed").style.width=window.innerWidth+"px";
document.getElementsByClassName("expert-game")[0].style="padding-right:0;"
document.body.style.overflow="hidden";
document.getElementById("game-container").style="margin:0 !important; transform-origin:0px 0px; transform:scale("+Math.min(screen.width/document.getElementById("iframe-game").contentWindow.document.getElementById("container").style.width.replace("px",""), (window.outerHeight-100)/document.getElementById("iframe-game").contentWindow.document.getElementById("container").style.height.replace("px",""))+");";

if ((window.outerHeight-100)/document.getElementById("iframe-game").contentWindow.document.getElementById("container").style.height.replace("px","")<window.innerWidth/document.getElementById("iframe-game").contentWindow.document.getElementById("container").style.width.replace("px",""))
	document.getElementById("iframe-game").contentWindow.document.getElementById("container").style.margin="auto";
