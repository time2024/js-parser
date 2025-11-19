// Function declarations
function regular() {
    return 1;
}

async function asyncFunc() {
    return 2;
}

// Nested functions
function outer() {
    function inner() {
        return 42;
    }
    return inner();
}