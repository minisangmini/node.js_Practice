"use strict";


const id = document.getElementById("id"),
  psword = document.getElementById("password"),
  loginbtn = document.querySelector("#button");


loginbtn.addEventListener("click", login);

function login() {
  // 서버에 전달해줄 객체 !!
  const req = {
    id: id.value,
    psword: psword.value
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req)
  })
    .then((res) => res.json())
    .then((res) => {
      if(res.success) {
        location.href = "/";
        alert(res.msg);
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("로그인 중 에러 발생"));
    });
}