const students = [
    {id:21, Name:'Omor Sani'},
    {id:31, Name:'Manna'},
    {id:41, Name:'Moiori'},
    {id:71, Name:'Dip Jol'},
];

const names = students.map(x=>x.Name);
const bigger = students.filter(s=>s.id>40);
console.log(bigger);