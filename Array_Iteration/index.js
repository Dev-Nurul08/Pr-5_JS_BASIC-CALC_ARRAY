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
        ];

        let data = users.map((user) => {
            if (user.id == 2)
                return { ...user, password: "123" };

            return user;
        });
        console.log("Data before map function use.")
        console.log(users);
        console.log("Data update with map function used.")
        console.log(data);
