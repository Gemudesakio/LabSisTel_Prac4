//de mp3 a gsm.
const SoxCommand = require('sox-audio');

const convertirAudio = () => {

  return new Promise((resolve, reject) => {

    const command = SoxCommand()
      .input('certificados/audios/mp3/audio.mp3')     //Ruta audio Convertido
      .output('certificados/audios/gsm/audio.gsm');   //Ruta donde se guarda

    command.on('prepare', function (args) {
      console.log('Preparing sox command with args ' + args.join(' '));
    });

    command.on('start', function (commandLine) {
      console.log('Spawned sox with command ' + commandLine);
    });

    command.on('progress', function (progress) {
      console.log('Processing progress: ', progress);
    });

    command.on('error', function (err, stdout, stderr) {
      console.log('Cannot process audio: ' + err.message);
      console.log('Sox Command Stdout: ', stdout);
      console.log('Sox Command Stderr: ', stderr);

    });

    command.on('end', function () {
      resolve('Sox command succeeded!');
    });

    command.run();
  })
  
}

module.exports = convertirAudio;