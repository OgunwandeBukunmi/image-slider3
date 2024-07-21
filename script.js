const wrapper = document.querySelector(".wrapper");

let isDragStart = false,
  prevpageX,
  prevscrollLeft;

function dragstart(e) {
  isDragStart = true;
  e.preventDefault();
  prevpageX = e.pageX;
  prevscrollLeft = wrapper.scrollLeft;
}
function dragMove(e) {
  if (!isDragStart) {
    return;
  }
  e.preventDefault();
  let positionDiff = prevpageX - e.pageX;
  wrapper.scrollLeft = prevscrollLeft + positionDiff;
}
function dragend(e) {
  isDragStart = false;
}
wrapper.addEventListener("mousedown", dragstart);
wrapper.addEventListener("mousemove", dragMove);
wrapper.addEventListener("mouseleave", dragend);
wrapper.addEventListener("mouseup", dragend);
