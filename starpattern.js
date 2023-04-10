for (var i=1; i<=10; i++){
    console.log("*".repeat(i));
}



for (let i =1; i<=10; i++) {
    for (let j=1; j<=i; j++) {
        process.stdout.write('*');
    }
    process.stdout.write('n');
}

