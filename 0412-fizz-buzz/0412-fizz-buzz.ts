function fizzBuzz(n: number): string[] {
    var ans = [];

    for(let i = 1; i <= n; i++) {
        ans.push(
            (i % 15 === 0) ? "FizzBuzz" :
            (i % 5 === 0) ? "Buzz" :
            (i % 3 === 0) ? "Fizz" :
            i.toString()
        )
    }

    return ans;
};