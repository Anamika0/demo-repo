var pageconunt=1;
var animalcont=document.getElementById('animal_info');
var btn= document.getElementById('btn');

btn.addEventListener("click", function() {
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageconunt + '.json');
ourRequest.onload= function() {
var ourData= JSON.parse(ourRequest.responseText);
renderHTML(ourData);
};
ourRequest.onerror= function(){
  console.log("Connection error");
}
ourRequest.send();
pageconunt++;
if(pageconunt>3){
  //btn.classList.add("hide-me");
  document.getElementById("btn").style.display = "none";
}
});

function renderHTML(data){
  var htmlstr= "";
  for (i=0; i<data.length; i++){
htmlstr+= '<p>' + data[i].name + " is a " + data[i].species + " that likes to eat ";
for(ii=0;ii<data[i].foods.likes.length;ii++){
if(ii==0){
    htmlstr += data[i].foods.likes[ii];
}
else{
    htmlstr += " and " + data[i].foods.likes[ii];
}

}
htmlstr+= ' and dislikes ';

for(ii=0;ii<data[i].foods.dislikes.length;ii++){
if(ii==0){
    htmlstr += data[i].foods.dislikes[ii];
}
else{
    htmlstr += " and " + data[i].foods.dislikes[ii];
}

}
htmlstr+=' .</p </br>';
  }

animalcont.insertAdjacentHTML('beforeend', htmlstr);

}
