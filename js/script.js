(function () {

    var names = ["Mehdi", "ELmehdi", "Ean", "Ema", "Zak", "raja", "Madi", "Sha", "rca", "Elsharper"];
    
    for (var i = 0; i < names.length; i++) {
    
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'e') {
        byeSpeaker.speak(names[i]);
      } 
      else {
        helloSpeaker.speak(names[i]);
      }
    }
    
    })();
