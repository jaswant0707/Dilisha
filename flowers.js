
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("ghand");
  
      const titles = ('HAPPY BIRTHDAY MADAM JI ').split('')
      const titleElement = document.getElementById('tle');
      let index = 0;
  
      function appendTitle() {
        if (index < titles.length) {
          titleElement.innerHTML += titles[index];
          index++;
          setTimeout(appendTitle, 300); // 1000ms delay
        }
      }
  
      appendTitle();
  
      clearTimeout(c);
    }, 1000);
  };