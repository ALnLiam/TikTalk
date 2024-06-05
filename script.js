//Database replit
//https://replit.com/@albertynelim/DataBase-Replit-1
//Google Sheets
//https://docs.google.com/spreadsheets/d/1teDHDRE2dwY-jqkVN3L25OqjEyJ1omibL2xPqqe-87A/edit#gid=1198749199

//https://replit.com/@albertynelim/2122WDT4Lesson55DiscussionOriginalpd10#index.html

let data, output, result;
let NewsletterByCategories,Newsletter,NBCANDNewsletter;
function init(){
  $.ajaxSetup({async: false}); //Tells JS to wait for all data to load before executing the code beneath 
  //Getting the ___ route = link+routeName + the next line being ____ = $.getJSON(link).responseJSON;  + u can check that u r getting the data from the link by doing console.log(____);

//ROUTE: gets all newsletters 
  let link = 'https://e964f4a8-2490-4baf-8c94-026d58bffc94-00-24qmnnytuj3n2.worf.replit.dev';
  let route = "/Newsletter"
  Newsletter = $.getJSON(link+route).responseJSON;
  //console.log(Newsletter);

  //$.getJSON(link).responseJSON; is set equal to a     value, that value is a array thus you can refer to the items of the list with Value[i], where i is the loop variable. table.keyValue
//this is the JOINED table 
  route = "/NBCANDNewsletter"
  NBCANDNewsletter = $.getJSON(link+route).responseJSON;


//ROUTE: Gets NewsletterID and CategoryID 
  route = "/NewsletterByCategories"
  NewsletterByCategories = $.getJSON(link+route).responseJSON;
   console.log(NewsletterByCategories);

  output = document.getElementById("output");
  result = document.getElementById("result");
  let build = "";
  let ct = 0;


//  result.innerHTML = `${ct} Results found.`
 // output.innerHTML = build;

  generateCards(Newsletter);

}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}




//typescript, should avoid -> figure out later 
// function filterBy1Category(event){
//     alert(event.srcElement.id);
//   console.log(event.srcElement.id)
// }




function filterBy1Category(clicked_id){
  window.location.replace("Explore.html#newsletter");
  
  console.log(clicked_id); //already gives value of id
  let category = clicked_id;
  let build = "";
  let ct = 0;

  for(let i=0; i<NewsletterByCategories.length; i++){
     let NBC = NewsletterByCategories[i]
     if(NBC.CategoryID == category){
       build += `<div class="fitted card">`;
       build += `  <h3>${NBCANDNewsletter[i].Title}</h3>`;
       build += `  <p>${NBCANDNewsletter[i].Content}</p>`;
       build += `</div>`;
       
       ct++;
     }
   }


   //result.innerHTML = `${ct} Results found.`
   output.innerHTML = build;
 
 }


//Newsletter = data
function generateCards(data){
  output.innerHTML = "";
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









