// Obtener nombre del proyecto, líder y empleados asignados
MATCH (p:Proyecto)<-[:LIDERA]-(l:Empleado),(e:Empleado)-[:TRABAJA_EN]->(p)
RETURN p.nombre AS proyecto, l.nombre AS lider, collect(e.nombre) AS empleados;

// Calcular total de horas semanales por proyecto
MATCH (e:Empleado)-[a:TRABAJA_EN]->(p:Proyecto) 
RETURN p.nombre AS proyecto, sum(a.horas_semanales) AS total_horas;

// Listar empleados que trabajan en más de un proyecto
MATCH (e:Empleado)-[:TRABAJA_EN]->(p:Proyecto)
WITH e, COUNT(p) AS cant_proyectos
WHERE cant_proyectos > 1
RETURN e.nombre AS empleado, cant_proyectos;

