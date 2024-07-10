// ページが読み込まれたときに実行される関数
document.addEventListener("DOMContentLoaded", (event) => {
  // localStorageから保存されたメールアドレスとパスワードを取得
  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  // もしメールアドレスが保存されていれば、入力欄に表示
  if (storedEmail) {
    document.getElementById("email").value = storedEmail;
  }

  // もしパスワードが保存されていれば、入力欄に表示
  if (storedPassword) {
    document.getElementById("password").value = storedPassword;
  }
});

// フォームが送信されるときに実行される関数
document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault(); // デフォルトの送信動作をキャンセル

  // フォームからメールアドレスとパスワードを取得
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // メールアドレスとパスワードをlocalStorageに保存
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  // 通常はここでログイン処理を行う
  alert("ログイン情報を保存しました！");

  // デモのためにフォームをリセット
  document.getElementById("login-form").reset();
});
