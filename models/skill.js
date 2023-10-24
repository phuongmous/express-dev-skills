const skills = [
    { id: 1, name: 'Javascript', proficiency: "Beginner" },
    { id: 2, name: 'Node.js', proficiency: "Beginner" },
    { id: 3, name: 'Express.js', proficiency: "Beginner" }
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};
