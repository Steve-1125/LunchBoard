  let answerElement = document.querySelector("#announce");
  let output = "<ul style='list-style: none;'>";
  for(let i = 0; i < list.length; i++) {
    output += `<li>${list[i].time}<b>${list[i].name}</b>: ${list[i].message} </li>`;
  }
  output += "</ul>";
  answerElement.innerHTML = output;

function All_announce(){
  let answerElement = document.querySelector("#announce");
  let output = "<ul style='list-style: none;'>";
  for(let i = 0; i < list.length; i++) {
    output += `<li>${list[i].time}<b>${list[i].name}</b>: ${list[i].message} </li>`;
  }
  output += "</ul>";
  answerElement.innerHTML = output;
}

function operation(){
  let answerElement = document.querySelector("#announce");
  let output = "<ul style='list-style: none;'>";
  for(let i = 0; i < list.length; i++) {
    if(list[i].name != "運営案内"){
      continue;
    }
    output += `<li>${list[i].time}<b>${list[i].name}</b>: ${list[i].message} </li>`;
  }
  output += "</ul>";
  answerElement.innerHTML = output;
}

function update(){
  let answerElement = document.querySelector("#announce");
  let output = "<ul style='list-style: none;'>";
  for(let i = 0; i < list.length; i++) {
    if(list[i].name != "更新案内"){
      continue;
    }
    output += `<li>${list[i].time}<b>${list[i].name}</b>: ${list[i].message} </li>`;
  }
  output += "</ul>";
  answerElement.innerHTML = output;
}

function new_info(){
  let answerElement = document.querySelector("#announce");
  let output = "<ul style='list-style: none;'>";
  for(let i = 0; i < list.length; i++) {
    if(list[i].name != "最新情報"){
      continue;
    }
    output += `<li>${list[i].time}<b>${list[i].name}</b>: ${list[i].message} </li>`;
  }
  output += "</ul>";
  answerElement.innerHTML = output;
}

function new_func(){
  let answerElement = document.querySelector("#announce");
  let output = "<ul style='list-style: none;'>";
  for(let i = 0; i < list.length; i++) {
    if(list[i].name != "新規機能"){
      continue;
    }
    output += `<li>${list[i].time}<b>${list[i].name}</b>: ${list[i].message} </li>`;
  }
  output += "</ul>";
  answerElement.innerHTML = output;
}