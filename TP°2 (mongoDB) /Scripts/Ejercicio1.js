use("empresa");

db.createCollection("empleados");

db.empleados.insertMany([
    {nombre:'Jorge', edad: 19, puesto: 'Frontend Developer'},
    {nombre:'Maria', edad: 43, puesto: 'Backend Developer'},
    {nombre:'Milo', edad: 27, puesto: 'Ingeniero en Sistemas'}
]);

db.empleados.updateOne(
    {nombre: 'Maria'},
    {$set: {puesto: 'Backend Senior'}}
);

db.empleados.deleteOne(
    {puesto: 'Frontend Developer'}
);
