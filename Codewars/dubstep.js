/*
The input consists of a single non-empty string, 
consisting only of uppercase English letters, 
the string's length doesn't exceed 200 characters

Return the words of the initial song that Polycarpus used to make a dubsteb remix. 
Separate the words with a space.

Examples:
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
  // =>  WE ARE THE CHAMPIONS MY FRIEND
*/

function songDecoder(song) {
    let decoded = song.replace(/WUB/gi, ' ');
    let trimed = decoded.replace(/\s+/gi, ' ').trim();
    return trimed
    // return song.split('WUB').filter(Boolean).join(' ');
}

const song1 = 'WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB';  // "WE ARE THE CHAMPIONS MY FRIEND"
const song2 = 'AWUBBWUBC';                                          // "A B C", WUB should be replaced by 1 space                                       
const song3 = 'AWUBWUBWUBBWUBWUBWUBC';                              // "A B C", multiples WUB should be replaced by only 1 space
const song4 = 'WUBAWUBBWUBCWUB';                                    // "A B C"
console.log(songDecoder(song1));
console.log(songDecoder(song2));
console.log(songDecoder(song3));
console.log(songDecoder(song4));