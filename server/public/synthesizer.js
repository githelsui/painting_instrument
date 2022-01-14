const vol = new Tone.Volume(+3).toDestination();
const synth = new Tone.PolySynth().connect(vol).toMaster();

document.querySelector('button').addEventListener('click', async () => {
    await Tone.start();
    console.log("STAART");
    document.getElementById('button').style.backgroundColor = "#696766";
    document.getElementById('button').innerHTML = "Instrument Is On";
    readBoard();
})

function readBoard(){
    var socket = io(); 
    socket.on('data', function(data){
        let note = data.substring(6, 7);
        console.log("note: " + note);
        playNote(note);
        document.getElementById('note').innerHTML = data;
    }); 
}

function playNote(note){
    if(new String('C').valueOf() == new String(note).valueOf()){
        playSynth(note);
    }
}

function playSynth(note) {
    console.log('NOTE IS PLAYED');
    var pitch = note + "4";
    console.log(pitch);
    synth.triggerAttackRelease(String(pitch), "4n");
}
