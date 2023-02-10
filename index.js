const { readFile } = require('fs').promises;

const mostFrequentWord = (text) => {
  const words = text.toLowerCase().match(/[^_\W]+/g);
  const tally = {};
  let mostFrequentWord = null;
  
  words.forEach(word => {
    tally[word] = (tally[word] || 0) + 1 ;
    if(!tally[mostFrequentWord] || tally[word] > tally[mostFrequentWord])
      mostFrequentWord = word;
  });
  return mostFrequentWord;
}

const findPassword = async () => {
  // Your code goes here
  try{
  const poem1 = await readFile("poems/starting-poem.txt", "utf-8")
  const poem2FileName = `poems/${mostFrequentWord(poem1)}.txt`
  const poem2 = await readFile(`${poem2FileName}`, "utf-8")
  const poem3FileName = `poems/${mostFrequentWord(poem2)}.txt`
  const poem3 = await readFile(`${poem3FileName}`, "utf-8")
  const password = `${mostFrequentWord(poem3)}`
  console.log(password)
  }
  catch(error){
    console.error(error)
    return
  }
}

findPassword();
