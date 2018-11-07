export function collisionDetection(mousePosition) {
  // Check if any selectable item is overlaping with mouse selection box
  const rectancle1 = reCalcWithoutPixelString(mousePosition);
  const elements = document.getElementsByName('selectableElement'); // Check collisions with selectable elements
  let collisions = [];
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const rectancle2 = element.getBoundingClientRect();
    const imgid = element.getAttribute('imgid');
    const collisionDetected = collisionWithRectancle(rectancle1, rectancle2);
    if (collisionDetected) {
      collisions.push(imgid);
    }
  }
  return collisions;
}

export function reCalc(mousePosition) {
  // Calculate rectangle positon
  let x3 = Math.min(mousePosition.x1, mousePosition.x2); //Smaller X
  let x4 = Math.max(mousePosition.x1, mousePosition.x2); //Larger X
  let y3 = Math.min(mousePosition.y1, mousePosition.y2); //Smaller Y
  let y4 = Math.max(mousePosition.y1, mousePosition.y2); //Larger Y
  let left = x3 + 'px';
  let top = y3 + 'px';
  let width = x4 - x3 + 'px';
  let height = y4 - y3 + 'px';
  return { left: left, top: top, width: width, height: height };
}

export function reCalcWithoutPixelString(mousePosition) {
  let x3 = Math.min(mousePosition.x1, mousePosition.x2); //Smaller X
  let x4 = Math.max(mousePosition.x1, mousePosition.x2); //Larger X
  let y3 = Math.min(mousePosition.y1, mousePosition.y2); //Smaller Y
  let y4 = Math.max(mousePosition.y1, mousePosition.y2); //Larger Y
  let left = x3;
  let top = y3;
  let width = x4 - x3;
  let height = y4 - y3;
  return { x: left, y: top, width: width, height: height };
}

function collisionWithRectancle(rectancle1, rectancle2) {
  // Check if two rectangles overlap
  if (
    rectancle1.x < rectancle2.x + rectancle2.width &&
    rectancle1.x + rectancle1.width > rectancle2.x &&
    rectancle1.y < rectancle2.y + rectancle2.height &&
    rectancle1.y + rectancle1.height > rectancle2.y
  ) {
    return true;
  } else return false;
}
