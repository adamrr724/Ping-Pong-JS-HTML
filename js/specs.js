describe("pingpong", function() {

  it("returns all numbers before chosen number", function() {
    expect(pingpong(2)).to.eql('1 2');
  });

  it("returns ping for multiples of 3", function() {
    expect(pingpong(3)).to.eql('1 2  ping');
  });

  it("returns ping for multiples of 5", function() {
    expect(pingpong(5)).to.eql('1 2  ping 4 pong');
  });

  it("returns ping for multiples of 15", function() {
    expect(pingpong(15)).to.eql('1 2  ping 4 pong ping 7 8 ping pong 11 ping 13 14 pingpong');
  });

});
