const insert = document.querySelector(".insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
  <div class="box">
      ${e.key === ' ' ? 'space' : e.key}
      <small>event.key</small>
    </div>
    <div class="box">
      ${e.keyCode}
      <small>event.keycode</small>
    </div>
    <div class="box">
      ${e.code}
      <small>event.code</small>
    </div>
  `;
});
