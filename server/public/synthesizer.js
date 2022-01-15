const vol = new Tone.Volume(+3).toDestination();
const synth = new Tone.PolySynth().connect(vol).toMaster();
synth.set({ detune: -1200 });

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
        let prevNote = data;
        let note = data.substring(6, 8);
        console.log("note: " + note);
        // withApples(note);
        playSynth(note);
        document.getElementById('note').innerHTML = note;
    }); 
    console.log("does it ever go here");
}

function playSynth(note) {
    console.log('NOTE IS PLAYED');
    console.log(note);
    synth.triggerAttackRelease(String(note), "50n");
}

function withApples(signal){
    if(signal === "E4"){
        synth.triggerAttackRelease(['D4', 'A4', 'C5'], "50n");
    }
    if(signal === "C5"){
        synth.triggerAttackRelease(['C4', 'G4', 'B4'], "50n");
    }
}
