const zoneTempo = document.getElementById('zoneTempo');
const zoneFrappe1 = document.getElementById('zoneFrappe1');
const zoneFrappe2 = document.getElementById('zoneFrappe2');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


        var tempo = 0
        var timer = 0
        var i = 0
        var tabText1 = new Array()
        tabText1[0] = "Que de temps perdu à gagner du temps !"
        tabText1[1] = "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre."
        tabText1[2] = "Ceux qui ont beaucoup à espérer et rien à perdre seront toujours dangereux."
        tabText1[3] = "Je suis intéressé par votre annonce, merci de me contacter."
        tabText1[4] = "Il tira d’abord doucement, puis durement sur le bras fragile."
        tabText1[5] = "Elle leva la main, prête à le gifler, mais il paralysa cette autre main."
        tabText1[6] = "La vie est plus belle que la prudence."
        tabText1[7] = "La première étape est de dire que tu peux."
        tabText1[8] = "Si tu traverses l’enfer, continue."
        tabText1[9] = "“Impossible” est pour ceux qui ne veulent pas vraiment."
        tabText1[10] = "Essaye encore. Échoue de nouveau. Échoue mieux."
        tabText1[11] = "Celui non occupé à naître est occupé à mourir."
        tabText1[12] = "Les bonnes choses arrivent à ceux qui travaillent fort."
        tabText1[13] = "Si c’est important pour toi, tu trouveras un moyen."
        tabText1[14] = "Quoi que tu fasses, fais-le avec toutes tes forces."
        
        function beginTraining1() {
          i = Math.floor(getRandomInt(14));
          document.getElementById('exo1').innerHTML = "\"" + tabText1[i] + "\""
          tempo = zoneTempo.value * 1000
          zoneFrappe1.value = ""
          zoneFrappe1.focus()
          timer = setTimeout("perdu('Désolé vous avez mis trop de temps, retentez votre chance ;o)')",tempo)
        }
        
        function reset() {
          if (timer != 0) {
            clearTimeout(timer)
            verif()
          }
        }
        
        function verif() {
          if (zoneFrappe1.value!=tabText1[i].substring(0,zoneFrappe1.value.length)) { perdu("Désolé vous vous êtes trompé ;o)") }
          else { 
            if ((zoneFrappe1.value.length==tabText1[i].length) && (zoneFrappe1.value==tabText1[i])) { stop() }
            else { timer = setTimeout("perdu('Désolé vous avez mis trop de temps, retentez votre chance ;o)')",tempo) }
          }
        }
        
        function stop() {
          clearTimeout(timer)
          timer = 0
          alert("Félicitation vous avez réussi, essayez la suivante !")
          zoneFrappe1.value = ""
          i = (i + 1) % tabText1.length
          document.getElementById('exo1').innerHTML = ""
        }
        
        function perdu(msg) {
          clearTimeout(timer)
          timer = 0
          alert(msg)
          zoneFrappe1.value = ""
          document.getElementById('exo1').innerHTML = ""
        }
       
        var j = 0
        var tabText2 = new Array()
        tabText2[0] = "Que de temps perdu à gagner du temps !"
        tabText2[1] = "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre."
        tabText2[2] = "Ceux qui ont beaucoup à espérer et rien à perdre seront toujours dangereux."
        tabText2[3] = "Je suis intéressé par votre annonce, merci de me contacter."
        tabText2[4] = "Il tira d’abord doucement, puis durement sur le bras fragile."
        tabText2[5] = "Elle leva la main, prête à le gifler, mais il paralysa cette autre main."
        tabText2[6] = "La vie est plus belle que la prudence."
        tabText2[7] = "La première étape est de dire que tu peux."
        tabText2[8] = "Si tu traverses l’enfer, continue."
        tabText2[9] = "“Impossible” est pour ceux qui ne veulent pas vraiment."
        tabText2[10] = "Essaye encore. Échoue de nouveau. Échoue mieux."
        tabText2[11] = "Celui non occupé à naître est occupé à mourir."
        tabText2[12] = "Les bonnes choses arrivent à ceux qui travaillent fort."
        tabText2[13] = "Si c’est important pour toi, tu trouveras un moyen."
        tabText2[14] = "Quoi que tu fasses, fais-le avec toutes tes forces."
        var date = new Date()
        var debut = 0
        var fin = 0
        
        function beginTraining2() {
          j = Math.floor(getRandomInt(14));
          document.getElementById('exo2').innerHTML = "\"" + tabText2[j] + "\""
          document.getElementById('res').innerHTML = ""
          zoneFrappe2.value = ""
          zoneFrappe2.focus()
          debut = date.getTime()
        }
        
        function finir() {
          if (zoneFrappe2.value==tabText2[j]) {
            date = new Date()
            fin = date.getTime()
            var temps = Math.floor(fin - debut)
            var secondes = Math.floor(temps/1000)
            var minutes = Math.floor(secondes/60)
            secondes = secondes - minutes * 60
            document.getElementById('res').innerHTML = "Vous avez mis " + minutes + " minute(s) et " + secondes + " seconde(s) pour tapez le texte exact."
            alert("Félicitation vous avez réussi, essayez la suivante !")
            zoneFrappe2.value = ""
            j = (j + 1) % tabText2.length
            document.getElementById('exo2').innerHTML = ""
          }
        }