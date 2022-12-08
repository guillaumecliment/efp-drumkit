//TODO: create a container div (instruments)

const container = document.createElement('div');
container.setAttribute('class', 'container')

const sounds =
[
    {
        letter: 'A',
        sound: 'Clap',
        url: ''
    },

    {
        letter: "S",
        sound: "Hi Hat",
        url: ''
    },
        
    {
        letter: "D",
        sound: "Kick",
        url: ''
    },

    {
        letter: "F",
        sound: "Open Hat",
        url: ''
    },

    {
        letter: "G",
        sound: "Boom",
        url: ''
    },

    {
        letter: "H",
        sound: "Ride",
        url: ''
    },

    {
        letter: "J",
        sound: "Snare",
        url: ''
    },

    {
        letter: "K",
        sound: "Tom",
        url: ''
    },

    {
        letter: "L",
        sound: "Tink",
        url: ''
    }
]

document.getElementById('drum-holder').appendChild(container)


for (const sound of sounds)
{
    let soundName = sound.letter;

    container.createElement('div');
    container.div.setAttribute('class', soundName))
    
}

console.log("test finish!")



//TODO: use a loop to create 3 lines of 3 div (en utilisant du flexbox et des gap)
//TODO: create an event listener onkey...machin