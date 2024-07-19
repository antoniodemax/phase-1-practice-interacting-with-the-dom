document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.getElementById("counter");
    const minusButton = document.getElementById("minus");
    const plusButton = document.getElementById("plus");
    const heartButton = document.getElementById("heart");
    const pauseButton = document.getElementById("pause");
    const likesList = document.querySelector(".likes");
    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    const commentList = document.getElementById("list");
    let count = 0;
    let likes = {};
    let isPaused = false;
  
    minusButton.addEventListener("click", () => {
      count--;
      counterElement.innerText = count;
    });
  
    plusButton.addEventListener("click", () => {
      count++;
      counterElement.innerText = count;
    });
  
    heartButton.addEventListener("click", () => {
      if (!likes[count]) {
        likes[count] = 1;
      } else {
        likes[count]++;
      }
  
      const likeItem = document.createElement("li");
      likeItem.innerText = `${count} has been liked ${likes[count]} times`;
      likesList.appendChild(likeItem);
    });
  
    pauseButton.addEventListener("click", () => {
      isPaused = !isPaused;
      if (isPaused) {
        clearInterval(timer);
        pauseButton.innerText = "resume";
        minusButton.disabled = true;
        plusButton.disabled = true;
        heartButton.disabled = true;
      } else {
        timer = setInterval(() => {
          count++;
          counterElement.innerText = count;
        }, 1000);
        pauseButton.innerText = "pause";
        minusButton.disabled = false;
        plusButton.disabled = false;
        heartButton.disabled = false;
      }
    });
  
    commentForm.addEventListener("submit", event => {
      event.preventDefault();
      const commentText = commentInput.value.trim();
      if (commentText !== "") {
        const commentItem = document.createElement("div");
        commentItem.innerText = commentText;
        commentList.appendChild(commentItem);
        commentInput.value = "";
      }
    });
  
    let timer = setInterval(() => {
      if (!isPaused) {
        count++;
        counterElement.innerText = count;
      }
    }, 1000);
  });
  