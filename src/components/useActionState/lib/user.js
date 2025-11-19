const users = [
    {
        userName: "ujjal",
        role: "user",
    },
    {
        userName: "bob",
        role: "user",
    },
    {
        userName: "carl",
        role: "admin",
    },
    {
        userName: "david",
        role: "user",
    },
];

export function isUserFoundInRole(userName, role) {
    const foundUser = users.find(
        (user) => user?.userName?.toUpperCase() === userName?.toUpperCase()
    );

    return foundUser ?? users?.foundUser?.role === role;
}

export function addUser(userName, role) {
    const obj = { userName, role };
    users.push(obj);
}