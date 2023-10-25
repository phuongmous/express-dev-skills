const skills = [
    { id: 123, name: 'Javascript', proficiency: "Beginner" },
    { id: 146, name: 'Node.js', proficiency: "Beginner" },
    { id: 209, name: 'Express.js', proficiency: "Beginner" }
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000;
    skill.proficiency = 'Beginner';
    skills.push(skill);
}

function getAll() {
    return skills;
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};
