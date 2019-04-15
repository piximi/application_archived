const collisionDetection = (mousePosition: { x1: number; x2: number; y1: number; y2: number; }) => {
  // Check if any selectable item is overlapping with mouse selection box
  const rectangle1 = reCalcWithoutPixelString(mousePosition);
  const elements = document.getElementsByName('selectableElement'); // Check collisions with selectable elements
  let collisions = [];
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const rectangle2 = element.getBoundingClientRect();
    const imageId = element.getAttribute('imageId');
    const collisionDetected = collisionWithRectangle(rectangle1, rectangle2);
    if (collisionDetected) {
      collisions.push(imageId);
    }
  }
  return collisions;
};

const reCalc = (mousePosition: { x1: number; x2: number; y1: number; y2: number; }) => {
  // Calculate rectangle position
  let x3 = Math.min(mousePosition.x1, mousePosition.x2); //Smaller X
  let x4 = Math.max(mousePosition.x1, mousePosition.x2); //Larger X
  let y3 = Math.min(mousePosition.y1, mousePosition.y2); //Smaller Y
  let y4 = Math.max(mousePosition.y1, mousePosition.y2); //Larger Y
  let left = x3 + 'px';
  let top = y3 + 'px';
  let width = x4 - x3 + 'px';
  let height = y4 - y3 + 'px';
  return { left: left, top: top, width: width, height: height };
};

function reCalcWithoutPixelString(mousePosition: { x1: any; x2: any; y1: any; y2: any; }) {
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

function collisionWithRectangle(rectangle1: { x: any; y: any; width: any; height: any; }, rectangle2: any) {
  // Check if two rectangles overlap
  return !!(rectangle1.x < rectangle2.x + rectangle2.width &&
      rectangle1.x + rectangle1.width > rectangle2.x &&
      rectangle1.y < rectangle2.y + rectangle2.height &&
      rectangle1.y + rectangle1.height > rectangle2.y);
}

export {
  collisionDetection,
  reCalc,
  reCalcWithoutPixelString
}
