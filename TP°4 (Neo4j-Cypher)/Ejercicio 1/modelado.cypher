CREATE  
    // Empleados
    (jorge:Empleado {nombre: "Jorge"}),
    (ariel:Empleado {nombre: "Ariel"}),
    (carlos:Empleado {nombre: "Carlos"}),

    // Departamentos
    (biologia:Departamento {nombre: "Biologia"}),
    (agronomia:Departamento {nombre: "Agronomia"}),
    (ingenieria:Departamento {nombre: "Ingenieria"}),

    // Proyectos
    (proyectoA:Proyecto {nombre: "Proyecto X"}),
    (proyectoB:Proyecto {nombre: "Proyecto Z"}),

    // Relaciones de pertenencia
    (jorge)-[:PERTENECE_A]->(biologia),
    (ariel)-[:PERTENECE_A]->(agronomia),
    (carlos)-[:PERTENECE_A]->(ingenieria),

    // Asignaciones con horas semanales
    (jorge)-[:TRABAJA_EN {horas_semanales: 30}]->(proyectoX),
    (ariel)-[:TRABAJA_EN {horas_semanales: 35}]->(proyectoZ),
    (carlos)-[:TRABAJA_EN {horas_semanales: 30}]->(proyectoX),
    (carlos)-[:TRABAJA_EN {horas_semanales: 25}]->(proyectoZ),
    
    // Líderes de proyecto
    (jorge)-[:LIDERA]->(proyectoX),
    (ariel)-[:LIDERA]->(proyectoZ);
