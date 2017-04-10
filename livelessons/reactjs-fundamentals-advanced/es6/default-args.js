function add(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
}

add(1, 2, 3);
add(1, 2);
add(1, 2, 3, 4, 5);

function sub(a, b) {
    b = b || 5;
    console.log(a);
    console.log(b);
}

sub(4);
sub(4, 0); // 0 = false -> b = 5
sub(4, 10);

function mul(x, y = 5) {
    console.log(x);
    console.log(y);
}

mul(4);
mul(4, 0); // y = 0
mul(4, 10);