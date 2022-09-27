const sentence = "hello there from lighthouse labs";

let count = 1;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char); //Same as writing console.log but avoids putting each letter on a new line. 
  }, count * 200);//I think this line at line below are saying, print first letter after 500 miliseconds, then move on to second letter and print and so on.
  count++
}


// console.log will add a new line character (\n) to the end of the 
// string. However, in Node we can use process.stdout.write instead to have more 
// control and avoid automatically adding an extra "newline character" at the end each time.