document.addEventListener('keydown', (e)=>{
  document.getElementById('key').innerText =
    `Key: ${e.key} | Code: ${e.code}`;
});
