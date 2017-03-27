export const initData = () => {
  return {
    title: '',
    isEditMode: true,
    isLocked: false,
    order: 0,
    childNodes: []
  };
};

export const selectData = (data = {}, indexArray = []) => {
  const _hasChildNodes = (data = {}, indexArray = []) => {
    if(indexArray.length > 0) {
      return _hasChildNodes(data.childNodes[indexArray.shift()], indexArray);
    } else {
        return data;
    }
  };

  return _hasChildNodes(data[indexArray.shift()], indexArray);
};

export const deleteData = (data = {}, indexArray = []) => {
  const _hasChildNodes = (data = {}, indexArray = []) => {
    if(indexArray.length > 1) {
      return _hasChildNodes(data.childNodes[indexArray.shift()], indexArray);
    } else {
      data.childNodes.splice(indexArray.shift(), 1);
      return data;
    }
  };

  if(indexArray.length === 1) {
    data.splice(indexArray.shift(), 1);
    return data;
  }

  return _hasChildNodes(data[indexArray.shift()], indexArray);
};


export const closest = (el, t) => {
  let matches = document.querySelectorAll(t),
    i,
    element = el;
  do {
    i = matches.length;
    while(--i >= 0 && matches.item(i) !== element) {};
  } while((i < 0) && (element = element.parentElement));
  return element;
}
