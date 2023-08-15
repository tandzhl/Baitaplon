window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY;
    var toTop = document.getElementById('to-top');
    var menu = document.getElementsByClassName('menu_item'); //cần phải sửa  
    if (scrollPosition > 0) {
        header.classList.add('black-bg');
        toTop.style.visibility = "visible";
        menu.style.backgroundColor = '#afe0f5'; //cần phải sửa 
        menu.style.color = 'black'; //cần phải sửa 
    } else {
        header.classList.remove('black-bg');
        toTop.style.visibility = "hidden";
        menu.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; //cần phải sửa 
        menu.style.color = '#afe0f5'; //cần phải sửa 
    }
});

let searchIcon = document.getElementById('search-icon');
let searchBar = document.getElementById('search-bar');

searchIcon.addEventListener('click', function (event) {
    event.stopPropagation(); //giải thích chỗ này
    searchBar.style.display = 'block';
});

document.addEventListener('click', function (event) {
    if (event.target !== searchIcon && event.target !== searchBar) {
      searchBar.style.display = 'none';
    }
});

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
  
