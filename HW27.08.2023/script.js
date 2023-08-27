//Задание 1

/*
const url = "https://jsonplaceholder.typicode.com/todos/1";

fetch(url)
  .then(response => response.json())
  .then(data => {
   
    const taskTitle = data.title;

    taskDiv.textContent = taskTitle;
  }) 
  */
  

//Задание 2

/*
const taskList = document.getElementById("taskList");
const url = "https://jsonplaceholder.typicode.com/todos";

fetch(url)
  .then(response => response.json())
  .then(data => {
    const tasksToShow = data.slice(0, 20);
    tasksToShow.forEach(task => {
      const li = document.createElement("li");
      li.textContent = task.title;
      taskList.appendChild(li);
    });
  })
  */

//Задание 3


function addInfo(tag, content, className) {
    const element = document.createElement(tag);
    element.textContent = content;
    element.classList.add(className);
    return element;
  }

  const commentsUrl = "https://jsonplaceholder.typicode.com/comments";

const xhr = new XMLHttpRequest();
xhr.open("GET", commentsUrl, true);

xhr.onload = function () {
  if (xhr.status === 200) {
    const comments = JSON.parse(xhr.responseText);
    renderComments(comments.slice(0, 10));
  } else {
    console.error("Ошибка при загрузке данных:", xhr.statusText);
  }
};

xhr.onerror = function () {
  console.error("Ошибка сети");
};

xhr.send();

function renderComments(comments) {
    const commentsBlock = document.getElementById("commentsBlock");
  
    comments.forEach(comment => {
      const commentDiv = document.createElement("div");
      commentDiv.classList.add("result");
  
      const name = addInfo("h3", comment.name, "name");
      const email = addInfo("p", comment.email, "email");
      const body = addInfo("p", comment.body, "body");
  
      commentDiv.appendChild(name);
      commentDiv.appendChild(email);
      commentDiv.appendChild(body);
  
      commentsBlock.appendChild(commentDiv);
    });
  }