//https://replit.com/@albertynelim/Lesson81GetDataWithAPURestfulCallDiscussionPD8#script.js  
function filterByMultipleCategory(){
  let build = "";
  let ct = 0;

  //QuerySelectorAll returns all the checked boxes in the form of a nodelist
  let checkedBoxes = document.querySelectorAll('input[name=inlineCheckbox1]:checked');
  console.log(checkedBoxes);
  //Using a for loop, we can go through each individual record of nodelist to retrive the value of the checked boxes
  for (let i = 0; i < checkedBoxes.length; i++) {
    //gets the selected category/value of the checked boxes
    let category= checkedBoxes[i].value; 
    console.log("The Category");
    console.log(category);
    for(let i=0; i< NewsletterByCategories.length; i++){
       let NBC = NewsletterByCategories[i];
       let N = Newsletter[i];
        if(NBC.CategoryID == category){
        build += `<div class="card">`;
        build += `  <h3>${N.Title}</h3>`;
        build += `  <p>${N.Content}</p>`;
        build += `  <p class="details"><i>Edition #${N.NewsletterEdition}&nbsp;&nbsp;&nbsp;Week of&nbsp; ${N.PublicationWeek } </i></p>`;
        build += `</div>`;
        ct++;
        }
    }
  }
    console.log(ct);
   result.innerHTML = `${ct} Results found.`
   output.innerHTML = build;
 }

//NOTE TO SELF: FIND A MORE EFFICIENT WAY

function E12(){
  if (document.getElementById("CEI1").src != "Archived/E15(1).png"){
    document.getElementById("CEI1").src = "Archived/E15(1).png";
    document.getElementById("CEI2").src = "Archived/E15(2).png";
  } 
}
function E13(){
  if (document.getElementById("CEI1").src != "Archived/E15(1).png"){
    document.getElementById("CEI1").src = "Archived/E15(1).png";
    document.getElementById("CEI2").src = "Archived/E15(2).png";
  } 
}
function E14(){
  if (document.getElementById("CEI1").src != "Archived/E15(1).png"){
    document.getElementById("CEI1").src = "Archived/E15(1).png";
    document.getElementById("CEI2").src = "Archived/E15(2).png";
  } 
}
function E15(){
  if (document.getElementById("CEI1").src != "Archived/E15(1).png"){
    document.getElementById("CEI1").src = "Archived/E15(1).png";
    document.getElementById("CEI2").src = "Archived/E15(2).png";
  } 
}
function E16(){
  if (document.getElementById("CEI1").src != "Archived/E16(1).png"){
    document.getElementById("CEI1").src = "Archived/E16(1).png";
    document.getElementById("CEI2").src = "Archived/E16(2).png";
  } 
}
//https://stackoverflow.com/questions/6764961/change-an-image-with-onclick

function Search(){
  //Newsletter = data
  output.innerHTML = "";
  

//search the database make a search engine
  let search = document.getElementById("search").value;
  let build = "";
  
  
  for(let i=0; i< data.length; i++){
    let Newsletter= data[i];
    build += `<div class="card">`;
    build += `<h3> ${Newsletter.Title}</h3>`;
    build += `<p> ${Newsletter.Content}</p>`;
    build += `<p>Edition #${Newsletter.NewsletterEdition}&nbsp;&nbsp; Week of ${Newsletter.PublicationWeek}</p>`;
    build += `</div>`;
  }
  output.innerHTML = build;
}


