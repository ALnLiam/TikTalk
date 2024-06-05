
//MASONRY LAYOUT
// number of columns
let numCols = 3;


// for responsiveness, get the the width of the device
function pageWidth() {  return window.innerWidth != null? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body != null ? document.body.clientWidth : null; }

width = pageWidth()
console.log(width);
// Change the number of columns depending on the breakpoint 

if (width < 400) {
  numCols = 2;
  // change the variable in numCols 
}
console.log(numCols);



// The masonry container/ parentDiv 
const masonryCon = document.querySelector('.boxes-con');

// The masonry container elements/ childDivs are assigned to this variable 
const list = document.querySelectorAll('.boxes')


// The number of columns will be used to create HTML div elements that are appended to the masonry container / the boxes will be divided up into the 3 columns that are then added to the mansory container 
for (var i = 1; i < numCols + 1; i++) {
  let elem = document.createElement('div');
  elem.classList.add('sub');
  elem.classList.add('box' + i);
  masonryCon.append(elem);
} // loop 3 times, with loop variable i increasing by 1 every loop. during each loop a div is created, the class sub and box+i is added. the created div is then added to the parent, masonryCon. 

// An array ranging from 0 to number of columns is created
thearray = [...Array(numCols).keys()];

// An array that would contain the list of main elements would be created
themainarray = [];

// A variable is defined
let timesBy;

// The variable is assigned to a number that will determine the length of the mainarray
if (list.length % numCols == 0) {
  timesBy = Math.floor(list.length / numCols)
} else {
  timesBy = Math.ceil(list.length / numCols)
}

// The main array will contain would contain positions that the list would be assigned to
for (var j = 0; j < timesBy; j++) {
  themainarray.push(...thearray)
}

// The div elements that created based on the number of columns are assigned to variable
subs = document.querySelectorAll('.sub')

// The elements are assigned to their position based on the number of columns
for (var b = 0; b < themainarray.length; b++) {
  subs[themainarray[b]].appendChild(list[b]) //subs[0].appendChild(list[0])
}

//Load more function on the TikTalk home page 
$(function(){
    $("div").slice(0, 10).show(); // select the first ten
    $("#load").click(function(e){ // click event for load more
        e.preventDefault();
        $("div:hidden").slice(0, 10).show(); // select next 10 hidden divs and show them
        if($("div:hidden").length == 0){ // check if any hidden divs still exist
            alert("End of Newsletters"); // alert if there are none left
        }
    });
});