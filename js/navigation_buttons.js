const sections = document.querySelectorAll("section");
const windowHeight = window.innerHeight;
const navigation = document.querySelector(".navigation");
console.log(windowHeight);

function reset() {
  for (var i = 0; i < navigation.children.length; i++) {
    navigation.children[i].classList.remove("selected");
  }
}

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  sections.forEach(function (sections, i) {
    if (
      sections.offsetTop < scrollTop + windowHeight / 2 &&
      scrollTop < sections.offsetTop + windowHeight / 2
    ) {
      reset();
      navigation.children[i].classList.add("selected");
    }
  });
});

document.querySelectorAll(".navigation li").forEach(function (item, i) {
  item.addEventListener("click", function () {
    window.scrollTo({
      top: i * windowHeight,
    });
  });
});
