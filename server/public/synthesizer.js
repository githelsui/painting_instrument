const vol = new Tone.Volume(+3).toDestination();
const synth = new Tone.PolySynth().connect(vol).toMaster();

document.querySelector('button').addEventListener('click', async () => {
    await Tone.start();
    // your page is ready to play sounds
    console.log("STAART");
    readBoard();
})

function readBoard(){
    var socket = io(); 
    socket.on('data', function(data){
        let note = data.substring(6, 7);
        console.log("test " + note);
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
    synth.triggerAttackRelease("C4", "4n");
}

// function startTone(){
//     console.log('audio is ready')
//     if (Tone.context.state !== 'running') {
//         Tone.context.resume();
//         console.log("resumes");
//     } else {
//         console.log("starts");
//         Tone.start();
//     }
// }

// document.querySelector('Starts Tone')?.addEventListener('Starts Tone', async () => {
//     // Tone.context.resume()
// 	// await Tone.start()
//     console.log('audio is ready')
//     if (Tone.context.state !== 'running') {
//         Tone.context.resume();
//         console.log("resumes");
//     } else {
//         console.log("starts");
//         await Tone.start();
//     }
// })