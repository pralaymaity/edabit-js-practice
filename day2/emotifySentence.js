// Emotify the Sentence
// Create a function that changes specific words into emoticons. Given a sentence as a string,
// replace the words smile, grin, sad and mad with their corresponding emoticons.

// word	  emoticon
// smile	:D
// grin	    :)
// sad	    :(
// mad	    :P

// Examples
// emotify("Make me smile") ➞ "Make me :D"

// emotify("Make me grin") ➞ "Make me :)"

// emotify("Make me sad") ➞ "Make me :("

let str = "sdssdgsad";

function emotifySentence(str) {
  let result =
    str === "smile"
      ? "Make me smile :D"
      : str === "grin"
      ? "Make me grin :)"
      : str === "sad"
      ? "Make me sad :("
      : str === "mad"
      ? "Make me mad :P"
      : "string not match";

    return result
}

console.log(emotifySentence(str));
