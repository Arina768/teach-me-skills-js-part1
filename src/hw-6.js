/**
 * Напсиать функцию перебора значений в дереве, каждое значение нужно отобразитьв консоль
 * Пример простого дерева:
 */

const tree = {
  value: 10,
  children: [
    {
      children: [
        {
          value: 2,
          children: [
            { value: 7 },
            {
              value: 10,
              children: [{ value: 9 }]
            }
          ]
        }
      ]
    },
    { children: [{ value: 100 }] },
    { value: 5 }
  ],
};

function task1(tree) {
  for (const key in tree){
    if (key === 'value') {
      console.log(tree.value);
    } else if (key === 'children'){
      for (let i = 0; i < tree.children.length; i++){
       if (typeof tree.children[i] === 'object'){
        task1(tree.children[i]);
       }
      }
    }
  }
}
