"use strict";


const id = document.getElementById("id"),
  name = document.getElementById("name"),
  psword = document.getElementById("password"),
  confirmPsword = document.getElementById("confirm-psword"),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
  if(!id.value) return alert("아이디를 입력해주세요.");
  if(psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다!");

  // 서버에 전달해줄 객체 !!  
  const req = {
    id: id.value,
    name: name.value,
    psword: psword.value,
    confirmPsword: confirmPsword.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req)
  })
    .then((res) => res.json())
    .then((res) => {
      if(res.success) {
        location.href = "/login";
        alert(res.msg);
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("회원가입 중 에러 발생"));
    });
}