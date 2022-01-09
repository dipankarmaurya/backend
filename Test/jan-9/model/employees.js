const employees = [
    { "id": "G1", "name": "abhishek", "team": "backend", "role": "Software Engineer" },
    { "id": "G2", "name": "Arun", "team": "backend", "role": "Software Engineer" },
    { "id": "G3", "name": "Anand", "team": "backend", "role": "Software Engineer" },
    { "id": "G4", "name": "amt", "team": "backend", "role": "Software Engineer" },
    { "id": "G5", "name": "akanksha", "team": "backend", "role": "Software Engineer" },
    { "id": "G6", "name": "divya", "team": "backend", "role": "Software Engineer" },
    { "id": "G7", "name": "kanika", "team": "backend", "role": "Software Engineer" },
    {"id":"G8", "name": "raj", "team":"backend", "role":"Software Engineer"}
]

function getByrole(role) {
   return employees.filter((employee)=>employee.role===role)
}
function getById(id) {
    
    return employees.filter((employee)=>employee.id==id)
}

module.exports={
    employees,
    getByrole, 
    getById
}