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
    (proyectoA:Proyecto {nombre: "Proyecto A"}),
    (proyectoB:Proyecto {nombre: "Proyecto B"}),

    // Relaciones de pertenencia
    (jorge)-[:PERTENECE_A]->(biologia),
    (ariel)-[:PERTENECE_A]->(agronomia),
    (carlos)-[:PERTENECE_A]->(ingenieria),

    // Asignaciones con horas semanales
    (jorge)-[:TRABAJA_EN {horas_semanales: 30}]->(proyectoA),
    (ariel)-[:TRABAJA_EN {horas_semanales: 35}]->(proyectoB),
    (carlos)-[:TRABAJA_EN {horas_semanales: 30}]->(proyectoA),
    (carlos)-[:TRABAJA_EN {horas_semanales: 25}]->(proyectoB),
    
    // Líderes de proyecto
    (jorge)-[:LIDERA]->(proyectoA),
    (ana)-[:LIDERA]->(proyectoB);
