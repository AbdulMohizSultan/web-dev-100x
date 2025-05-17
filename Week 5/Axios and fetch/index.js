function main() {
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async response=> {
        const json = response.json();
        console.log(json);
    })
}

main()