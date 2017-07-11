console.log(process.argv.slice(2).reduce((sum, number) => sum + Number(number), 0));
