/*
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
*/

// have it loop threw the string and at its position have it check if its one of those letters if it is have it return what its complements and save it.

function getDna(dna) {
  let complements = ''
  for (let i = 0: i <dna.length; i++){
    switch (dna[i]){
      case "A":
      complements += "T"
      break;
      case "T":
      complements += "A"
      break;
      case "C":
      complements += "G"
      break;
      case "G":
      complements += "C"
      break
    }
  }
  return complements
}
