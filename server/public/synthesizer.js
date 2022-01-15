const vol = new Tone.Volume(+3).toDestination();
const synth = new Tone.PolySynth().connect(vol).toMaster();

document.querySelector('button').addEventListener('click', async () => {
    await Tone.start();
    console.log("TONE STARTS");
    document.getElementById('button').style.backgroundColor = "#696766";
    document.getElementById('button').innerHTML = "Instrument Is On";
    readBoard();
})

function readBoard(){
    var socket = io(); 
    socket.on('data', function(data){
        let note = data.substring(6, 8);
        console.log("note: " + note);
        playSynth(note);
        document.getElementById('note').innerHTML = note;
    }); 
}

function playSynth(note) {
    console.log('NOTE IS PLAYED');
    console.log(note);
    synth.triggerAttackRelease(String(note), "50n");
}
