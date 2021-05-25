const output=[];

const students=[
    {id:21,name:'Omar sani'},
    {id:11,name:'Manna'},
    {id:41,name:'Moyuri'},
    {id:51,name:'Dipjol'},

]
const names=students.map(s=>s.name);
const ids=students.map(s=>s.id);
const biggerList=students.filter(s=> s.id>40);
const bigger=students.find(s=> s.id>40);
console.log(bigger);
