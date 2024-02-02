//prints til start af program

console.log("Hello World!");
console.log("Welcome to the legendary land of JavaScript!");
console.log("You are HOT!");

//kommando til at lave en warning i en chrome
window.alert("IT'S GETTIN' HOT IN HERE!");

//Object af programmeringsbogen
let book = {
    topic: "JavaScript",
    edition: 7
};

//tilføjelse til mit object ovenover
book.author = "Flanagan";

//prints af bogen
console.log(book.topic);
console.log(book);

//intialisering af et array
let line = [1,2,4,7,3,9,6,5,8];

//sortering af et array, men kun med 1 digit
line.sort();

//print af arrayet ovenover
console.log(line);

//Print en trekant af hashtag opgave
let n = "";
let i;
for(i = 1; i <= 7; ++i){

    n += "#";
    console.log(n);
};

//Print et skakbord med hashtags og mellemrum
for(i = 0; i < 8; ++i){
    if(i % 2 == 0)
    console.log("# # # #");
    else   
    console.log(" # # # #");
};


//Lav en HTML med titel, heading og demostring
function renderPage(title, heading, demostring){
    return `<!DOCTYPE html>
<html lang="da">
  <head>
    <meta charset="utf-8">
    <title>${title}</title>
  </head>
  <body>
    <!-- page content -->
    <h1>${heading}</h1>
    <script>
      console.log("${demostring}");
    </script>
  </body>
</html>`;
}

// Example usage:
const htmlContent = renderPage("Simpel IWP Demo", "IWP demo", "JS Script er kørt");
console.log(htmlContent);



//average af bogstaver i strings
function avgString(arr, arr, arr){

    let i;
    let length = 0;

    for(i = 0; i <= arr.length; i++){
       
    
    }
    console.log(length/arr.length);
}

avgString("Hejsa", "med", "dig!");

