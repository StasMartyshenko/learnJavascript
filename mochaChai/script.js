describe("pow", function() {

    it("при возведении 2 в 3ю степень результат 8", function() {
        assert.equal(pow(2, 3), 8);
    });

    it("при возведении 3 в 4ю степень равен 81", function() {
        assert(pow(3 == 4), 81);
    });

    it('при возведении в отрицательную степень рез NaN', function() {
        assert(isNaN(pow(2, -1)));
    });

    it('при возведении в дробную степень', function() {
        assert(iaNaN(pow(2, 1.5)));
    });

});

function pow(x, n) {
    var result = 1;
    for (i=0; i<n; i++) {
        result *=x;
    }

    return result;
}
