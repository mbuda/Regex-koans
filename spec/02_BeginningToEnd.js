describe("Beginning To End", function() {

  it('^ anchors RegEx to beginning of the string', function() {
    expect( 'dog cat pony' ).not.toMatch(/^cat/);

    expect( 'dog cat pony' ).toMatch(/^dog/);
  });

  it('$ anchors RegEx to the end of the string', function() {
    expect( 'dog cat pony' ).not.toMatch(/cat$/);

    expect( 'dog cat pony' ).toMatch(/pony$/);
  });

  it('use both to match the entire input', function() {
    expect( 'dog cat pony' ).not.toMatch(/^cat$/);

    expect( 'dog cat pony' ).toMatch(/^dog cat pony$/);
  });

  it('a RegEx without any anchors will match a substring anywhere in the input', function() {

    expect( 'abcd' ).toMatch(/bc/);
    expect( 'abcd' ).toMatch(/a/);
    expect( 'abcd' ).toMatch(/cd/);
  });

});
