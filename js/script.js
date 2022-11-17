(function () {

    var names = ["Mehdi", "El", "Adel", "Paf", "kad", "dolmi", "feddy", "karim", "Zak", "El Mehdi"];
    
    for (var i = 0; i < names.length; i++) {
    
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } 
      else {
        helloSpeaker.speak(names[i]);
      }
    }
    
    })();