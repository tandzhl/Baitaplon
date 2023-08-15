function addComment() {
  const name = document.getElementById("name").value;
  const commentText = document.getElementById("comment").value;

  if (name.trim() === "" || commentText.trim() === "") {
    alert("Please fill in all fields");
    return;
  }

  const commentList = document.getElementById("comments-list");
  const commentElement = document.createElement("div");
  commentElement.className = "comment";
  const timestamp = new Date().toLocaleString();
  commentElement.innerHTML = `<strong>${name}</strong>: ${commentText}
                               <div class="timestamp">${timestamp}</div>`;
  commentList.appendChild(commentElement);

  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
  rate(0);
}
