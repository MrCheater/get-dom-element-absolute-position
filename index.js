export default function getDOMElementAbsolutePosition(el) {
    let width = el.offsetWidth;
    let height = el.offsetHeight;
    for (let lx=0, ly=0;
         el != null;
         lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return {left: lx, top: ly, width, height};
}