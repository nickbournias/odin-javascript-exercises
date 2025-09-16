function camelize(str) {
  let newStr = ""; 
  let caps = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "-") {
      if (caps) {
        newStr += str[i].toUpperCase();
        caps = false;
      } else {
        newStr += str[i];
      }

    } else {
      caps = true;
    }
  }
  console.log(newStr);
}

camelize("nick-beans-is-the-boy");