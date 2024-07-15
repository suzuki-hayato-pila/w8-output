const localSave = () => {
  const myContent = document.getElementsByClassName("storage").value;
  localStorage.setItem("key", myContent);
  console.log(myContent);
};

// // emailとpasswordを保存
// const storageInput = document.querySelector(".storage");

// const submit = document.querySelector(".submit");
// const storedInput = localStorage.getItem("textinput");

// if (storageInput) {
//   text.textContent = storedInput;
// }

// storageInput.addEventListener("input", (event) => {
//   text.textContent = event.target.value;
// });

// const saveToLocalStorage = () => {
//   localStorage.setItem("textinput", text.textContent);
// };

// button.addEventListener("click", saveToLocalStorage);
