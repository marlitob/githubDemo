class RepoApiServices {
    getContributors = () =>
        new Promise((resolve, reject) => {
            fetch(`https://api.github.com/repos/facebook/react/contributors`, {
                method: "get",
                mode: "cors", // no-cors, *cors, same-origin
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(async (res) => {
                    return res.json()
                })
                .then((res) => {
                    resolve(res);
                });
        });
}

const repoApiServices = new RepoApiServices();

export default repoApiServices;
