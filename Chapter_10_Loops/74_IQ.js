//what is continue  
//for? It is used to skip the current iteration of a loop and move on to the next one.

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i === 5) continue;
    console.log(i);
}