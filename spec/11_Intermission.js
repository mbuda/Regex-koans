describe("Intermission", function() {

  var ___ = 0;

  // Koans 1 through 10 teach enough about Regular Expressions
  // to handle most common RegEx scenarios. This Koan is a series
  // of puzzles and problems to solve with Regular Expressions
  // to help cement your understanding as well as provide some
  // more Real World examples.

  // Note: The starter patterns (like /___/) will NOT include
  // the ^ $ hints that were used in the earlier Koans. It's up
  // to you to decide whether you want to capture the whole
  // string or just a substring to solve the puzzle.

  it('Find City, State, and Zip code', function() {
    // Assumptions:
    //   * US Addresses (no Canadian provinces, etc.)
    //   * Common American address format: City, ST 12345
    //   * Comma separating City and State was optional - I couldn't make it work so I make it obligatory
    //   * US State will always use two uppercase letter abbreviation

    var fixThisPattern = /^ (([A-Za-z.]+)( [A-Za-z.]+)*), ([A-Z]{2}) ((\d{5})(-\d{4})?)$/;

    var matches1 = fixThisPattern.exec(' Columbus, OH 43215'           );
    var matches2 = fixThisPattern.exec(' San Francisco, CA 94118-4503' );
    var matches3 = fixThisPattern.exec(' APO, AE 09499-0074'            );
    var matches4 = fixThisPattern.exec(' Port St. Lucie, FL 34952'      );

    // Debug:
    //jasmine.log("Debug: " + matches1);
    //jasmine.log("Debug: " + matches2);
    //jasmine.log("Debug: " + matches3);
    //jasmine.log("Debug: " + matches4);

    var city1  = matches1[1];
    var state1 = matches1[4];
    var zip1   = matches1[5];

    var city2  = matches2[1];
    var state2 = matches2[4];
    var zip2   = matches2[5];

    var city3  = matches3[1];
    var state3 = matches3[4];
    var zip3   = matches3[5];

    var city4  = matches4[1];
    var state4 = matches4[4];
    var zip4   = matches4[5];

    expect( city1  ).toEqual('Columbus');
    expect( state1 ).toEqual('OH');
    expect( zip1   ).toEqual('43215');

    expect( city2  ).toEqual('San Francisco');
    expect( state2 ).toEqual('CA');
    expect( zip2   ).toEqual('94118-4503');

    expect( city3  ).toEqual('APO');
    expect( state3 ).toEqual('AE');
    expect( zip3   ).toEqual('09499-0074');

    expect( city4  ).toEqual('Port St. Lucie');
    expect( state4 ).toEqual('FL');
    expect( zip4   ).toEqual('34952');
  });

  it('Parse URL, detect invalid format', function() {
    // Assumptions:
    //   * Only accept these protocols: http, https, ftp, sftp, ssh
    //   * server is required, may be numeric (IPv4) or named
    //   * server name may only be one word (e.g. 'localhost')
    //   * port is optional
    //   * directory and file name are both optional
    //   * directory, if present, will always end in /
    //   * GET parameters are optional
    //   * any missing value will be "" (instead of null)

    var fixThisPattern =
    /^(http|https|ftp|sftp|ssh):\/\/((((\d{1,3}\.){3}\d{1,3}))(:[\d]{4})?|((www\.)?\w+(\.[\w]{2,3})?))\/?((\w+\/)*)?([\w]+(\.[\w]{3})?)?(\?[\w]+\=[\w]+(\+[\w]+)*)?/;
    //what a monstaa

    var getParamsGroup = ___;

    // valid
    var matches1 = fixThisPattern.exec( 'http://www.google.com/'                                );
    var matches2 = fixThisPattern.exec( 'https://mysearch.com/search.jsp?q=regular+expressions' );
    var matches3 = fixThisPattern.exec( 'ftp://192.168.0.100/home/myself/music/'                );
    var matches4 = fixThisPattern.exec( 'ssh://localhost/etc/passwd'                            );
    var matches5 = fixThisPattern.exec( 'http://127.0.0.1:8080/Admin/index.jsp'                 );

    // invalid
    var matches6 = fixThisPattern.exec( 'google.com'                  );
    var matches7 = fixThisPattern.exec( 'gopher://oldserver.arpanet/' );

    // Debug:
    jasmine.log("Debug: " + matches1);
    jasmine.log("Debug: " + matches2);
    jasmine.log("Debug: " + matches3);
    jasmine.log("Debug: " + matches4);
    jasmine.log("Debug: " + matches5);
    jasmine.log("Debug: " + matches6);
    jasmine.log("Debug: " + matches7);

    var protocol1   = matches1.length > 1     ? matches1[1]         : "";
    var server1     = matches1.length > 1     ? matches1[2]         : "";
    var port1       = matches1.length > 100   ? matches1[6]         : "";
    var directory1  = matches1.length > 100   ? matches1[10]        : "";
    var file1       = matches1.length > 100   ? matches1[12]        : "";
    var getParams1  = matches1.length > 100   ? matches1[14]        : "";

    var protocol2   = matches2.length > 1     ? matches2[1]         : "";
    var server2     = matches2.length > 1     ? matches2[2]         : "";
    var port2       = matches2.length > 100   ? matches2[6]         : "";
    var directory2  = matches2.length > 100   ? matches2[10]        : "";
    var file2       = matches2.length > 1     ? matches2[12]        : "";
    var getParams2  = matches2.length > 1     ? matches2[14]        : "";

    var protocol3   = matches3.length > 1     ? matches3[1]         : "";
    var server3     = matches3.length > 1     ? matches3[2]         : "";
    var port3       = matches3.length > 100   ? matches3[6]         : "";
    var directory3  = matches3.length > 1     ? matches3[10]        : "";
    var file3       = matches3.length > 100   ? matches3[12]        : "";
    var getParams3  = matches3.length > 100   ? matches3[14]        : "";

    var protocol4   = matches4.length > 1     ? matches4[1]         : "";
    var server4     = matches4.length > 1     ? matches4[2]         : "";
    var port4       = matches4.length > 100   ? matches4[6]         : "";
    var directory4  = matches4.length > 1     ? matches4[10]        : "";
    var file4       = matches4.length > 1     ? matches4[12]        : "";
    var getParams4  = matches4.length > 100   ? matches4[14]        : "";

    var protocol5   = matches5.length > 1     ? matches5[1]         : "";
    var server5     = matches5.length > 1     ? matches5[3]         : "";
    var port5       = matches5.length > 1     ? matches5[6]         : "";
    var directory5  = matches5.length > 1     ? matches5[10]        : "";
    var file5       = matches5.length > 1     ? matches5[12]        : "";
    var getParams5  = matches5.length > 100   ? matches5[14]        : "";

    // http://www.google.com/
    expect( protocol1  ).toEqual('http');
    expect( server1    ).toEqual('www.google.com');
    expect( port1      ).toEqual('');
    expect( directory1 ).toEqual('');
    expect( file1      ).toEqual('');
    expect( getParams1 ).toEqual('');

    // https://mysearch.com/search.jsp?q=regular+expressions
    expect( protocol2  ).toEqual('https');
    expect( server2    ).toEqual('mysearch.com');
    expect( port2      ).toEqual('');
    expect( directory2 ).toEqual('');
    expect( file2      ).toEqual('search.jsp');
    expect( getParams2 ).toEqual('?q=regular+expressions');

    // ftp://192.168.0.100/home/myself/music/
    expect( protocol3  ).toEqual('ftp');
    expect( server3    ).toEqual('192.168.0.100');
    expect( port3      ).toEqual('');
    expect( directory3 ).toEqual('home/myself/music/');
    expect( file3      ).toEqual('');
    expect( getParams3 ).toEqual('');

    // ftp://192.168.0.100/home/myself/music/
    expect( protocol4  ).toEqual('ssh');
    expect( server4    ).toEqual('localhost');
    expect( port4      ).toEqual('');
    expect( directory4 ).toEqual('etc/');
    expect( file4      ).toEqual('passwd');
    expect( getParams4 ).toEqual('');

    // http://127.0.0.1:8080/Admin/index.jsp
    expect( protocol5  ).toEqual('http');
    expect( server5    ).toEqual('127.0.0.1');
    expect( port5      ).toEqual(':8080');
    expect( directory5 ).toEqual('Admin/');
    expect( file5      ).toEqual('index.jsp');
    expect( getParams5 ).toEqual('');

    // google.com
    expect( matches6 ).toBeNull();

    // gopher://oldserver.arpanet/
    expect( matches7 ).toBeNull();

  });

});
