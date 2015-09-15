describe('Movie', function() {
  it("creates a new movie with with a movie name attached", function() {
    var testMovie = new Movie("A League of Their Own");
    expect(testMovie.movieTitle).to.equal("A League of Their Own");
    expect(testMovie.tickets).to.eql([]);
  });
});

describe("Ticket", function() {
  it("creates a new ticket with values", function() {
    var testTicket = new Ticket(2100, 55);
    expect(testTicket.movieTime).to.equal(2100);
    expect(testTicket.age).to.equal(55);
  });
});
//
//   it("adds the fullAddress method to all the addresses", function() {
//     var testAddress = new Address("4043 Camero Ave", "Los Angeles", "Ca");
//     expect(testAddress.fullAddress()).to.equal("4043 Camero Ave, Los Angeles, Ca")
//   });
// });
