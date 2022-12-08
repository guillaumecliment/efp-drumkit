//TODO: create a container div (instruments)

const container = document.createElement('div');
container.setAttribute('class', container.getAttribute('container'))

document.getElementById('drum-holder').appendChild(instrumentsContainer)

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

for (const sound of sounds)
{
    console.log(letter, sound, url);
}

console.log("test finish!")



//TODO: use a loop to create 3 lines of 3 div (en utilisant du flexbox et des gap)
    // class "instrument"
    // an sound url
    // adding to each of them the htm text (ex: "J<br>Snare")


//TODO: creat an event listener onkeymachin