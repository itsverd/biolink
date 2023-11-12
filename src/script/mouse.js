document.addEventListener("mousemove", function(event) {
    // Mendapatkan posisi x dan y mouse
    var x = event.clientX;
    var y = event.clientY;
  
    // Menampilkan posisi mouse di console
    // console.log("Posisi mouse: (" + x + ", " + y + ")");

    document.querySelector('body').style.setProperty('--x', x + 'px');
    document.querySelector('body').style.setProperty('--y', y + 'px');
  });