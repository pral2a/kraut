document.addEventListener('DOMContentLoaded', function () {
 // DOM element where the Timeline will be attached
  var container = document.getElementById('visualization');

  // Create a DataSet (allows two way data-binding)
  var a = '<img src="http://www.progarchives.com/progressive_rock_discography_covers/675/cover_43432117102008.jpg" style="width: 48px; height: 48px;">';


  var items = new vis.DataSet([
    {id: 1, content: a, start: '1976-04-18'},
    {id: 2, content: '<div style="height: 35px;" id="waveform"></div>', start: '1976-04-16', end: '1977-04-19'},
    {id: 3, content: '<div style="height: 35px;" id="waveform2"></div>', start: '1975-04-17', end: '1979-04-19'},
    {id: 4, content: 'War ends', start: '1945-04-18'},
    {id: 5, content: 'Wall falls', start: '1989-04-18'},

  ]);

  // Configuration for the Timeline
  var options = {
    zoomable: true
  };

  // Create a Timeline
  var timeline = new vis.Timeline(container, items, options);


  // Create an instance
  var wavesurfer = Object.create(WaveSurfer); 

  // Create an instance
  var wavesurfer2 = Object.create(WaveSurfer);  


   
  // Init & load audio file
  var options = {
      container     : document.querySelector('#waveform'),
      waveColor     : '#FF0000',
      progressColor : '#BB0000',
      cursorColor   : '#0000FF',
      height        :  35,
      seekAndPlay   : true,
  };



  // Init
  wavesurfer.init(options);
  // Load audio from URL
  wavesurfer.load('media/2.mp3');

  // Report errors
  wavesurfer.on('error', function (err) {
      console.error(err);
  });

  wavesurfer.on('play', function (err) {
      wavesurfer2.pause();
  });



  // Do something when the clip is over
  wavesurfer.on('finish', function () {
      console.log('Finished playing');
  });

  
  // Init & load audio file
  var options2 = {
      container     : document.querySelector('#waveform2'),
      waveColor     : '#00FF00',
      progressColor : '#00BB00',
      cursorColor   : '#0000FF',
      height        :  35,
      seekAndPlay   : true,
  };



  // Init
  wavesurfer2.init(options2);
  // Load audio from URL
  wavesurfer2.load('media/1.mp3');

  // Report errors
  wavesurfer2.on('error', function (err) {
      console.error(err);
  });

  wavesurfer2.on('play', function (err) {
      wavesurfer.pause();
  });

  // Do something when the clip is over
  wavesurfer2.on('finish', function () {
      console.log('Finished playing');
  });


timeline.on('rangechange', function (properties) { //rangechanged
  wavesurfer.empty();
  wavesurfer.drawBuffer();
  wavesurfer2.empty();
  wavesurfer2.drawBuffer();
});

document.querySelector('#stopall').onclick = function(){
  wavesurfer.pause();
  wavesurfer2.pause();
}

});