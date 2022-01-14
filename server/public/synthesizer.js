var socket = io(); 

function playNote(note){
    if(new String('C').valueOf() == new String(note).valueOf()){
        playSynth(note);
    }
}

socket.on('data', function(data){
    let note = data.substring(6, 7);
    console.log("test " + note);
    playNote(note);
    document.getElementById('title').innerHTML = data;
}); 

const vol = new Tone.Volume(+3).toDestination();
const synth = new Tone.PolySynth().connect(vol).toMaster();

function playSynth(note) {
    console.log('NOTE IS PLAYED');
    var pitch = note + "4";
    console.log(pitch);
    synth.triggerAttackRelease("C4", "4n");
}

document.querySelector('Starts Tone')?.addEventListener('Starts Tone', async () => {
	await Tone.start();
	console.log('audio is ready');
})