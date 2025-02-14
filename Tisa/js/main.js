
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Malam-malam beli es kul-kul, selamat hari valentine botol yakult😍').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 75); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};