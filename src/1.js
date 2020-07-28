function getList(list) {

  const originalList = document.createElement('ul');
  let Item = 0;
  for (let i = 0; i < list.length; i++) {
    Item = document.createElement('li');
    Item.innerText = list[i]["title"];
    originalList.append(Item);
  }
  document.body.append(originalList);
}

export default getList;