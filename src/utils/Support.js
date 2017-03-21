export const initData = () => {
  return {
    title: '',
    isEditMode: true,
    isEditable: true,
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
