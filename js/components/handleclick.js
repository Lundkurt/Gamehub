const handleClick = (some) => {
  if (some.className === "on") {
    some.className = "off";
  } else {
    some.className = "on";
  }

  console.log(some);
};
