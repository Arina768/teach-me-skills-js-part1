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
    if (tree.value) {
      console.log(tree.value);
    }
    if(tree.children) {
      for (let i = 0; i < tree.children.length; i++) {
        if (typeof tree.children[i] === 'object') {
          task1(tree.children[i]);
        }
      }
    }
}

// Нарисовать таблицу. Заполнять таблицу из массива с данными
const table = [
  {
    name: 'Vitalik',
    surName: 'Petrov',
    age: 11,
    phones: [11111],
  }, {
    name: 'Valeriy',
    age: 51,
    phones: [1111, 2222],
  }, {
    name: 'Kate',
    surName: 'Ivanova',
    age: 20,
    phones: [111111, 22222, 333333],
  }, {
    name: 'Lera',
    surName: 'Kuznetsova',
    age: 110,
    phones: [77777777],
  }, {
    name: 'Alex',
    age: 5,
    phones: [555555, 666666],
  }
];

const myTable = document.createElement('table');
  let tr = 0;
  let td = 0;
  let ul = 0;
  let li = 0;
  for (let i = 0; i < table.length; i++) {
    tr = document.createElement('tr');
    for (let j = 0; j < 4; j++) {
      td = document.createElement('td');
      td.style.border = 'solid black 1px';
      if (j === 0) {
        td.innerHTML = table[i].name;
        td.style.width = '200px';
        td.style.textAlign = 'center';
        if (!table[i].surName) {
          td.style.color = 'red';
          tr.style.height = '70px';
        }
      }
      if (j === 1) {
        if (table[i].surName) {
          td.innerHTML = table[i].surName;
          td.style.width = '200px';
        } else {
          td.style.display = 'none';
        }
      }
      if (j === 2) {
        td.innerHTML = table[i].age;
      }
      if (j === 3) {
        if (table[i].phones.length === 1) {
          td.innerHTML = table[i].phones;
          td.style.color = 'yellow';
        } else {
          td.style.color = 'blue';
          ul = document.createElement('ul');
          for (let a = 0; a < table[i].phones.length; a++) {
            li = document.createElement('li');
            li.innerHTML = table[i].phones[a];
            ul.append(li);
          }
          td.append(ul);
        }
      }
      tr.append(td);
    }
    myTable.append(tr);
  }
  tr = document.createElement('tr');
  const tableArray = Object.keys(table[0]);
  for (let i = 0; i < 4; i++) {
    td = document.createElement('td');
    td.style.border = 'solid black 2px';
    td.style.textAlign = 'center';
    td.style.fontWeight = 'bold';
    td.innerHTML = tableArray[i];
    tr.append(td);
  }
  myTable.prepend(tr);

div.append(myTable);
