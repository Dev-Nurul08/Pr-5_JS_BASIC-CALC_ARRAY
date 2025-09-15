        let users = [
            {
                id: 1,
                name: "Nurul",
                email: "nurul8132@gmail.com",
                password: "Nuruls@123"
            },
            {
                id: 2,
                name: "Shivam",
                email: "shivam@gmail.com",
                password: "shivam@123"
            },
            {
                id: 3,
                name: "Pratham",
                email: "pratham@gmail.com",
                password: "pratham@123"
            },
            {
                id: 4,
                name: "Jarir",
                email: "jarir@gmail.com",
                password: "jarirm@123"
            },
        ]
        let data = users.filter((user) => {
            if (user.id == 3)
                return user;
        })
        console.log("All data");
        console.log(users);
        console.log("Filter use");
        console.log(data);
