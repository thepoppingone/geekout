const sampleDonations = [
  {
    id: "1",
    unit: "roll",
    quantity: "111",
    division: "simei",
    name: "Toilet Roll",
  },
  {
    id: "2",
    unit: "piece",
    quantity: "2",
    division: "buangkok",
    name: "Prata",
  },
  {
    id: "3",
    unit: "bowls",
    quantity: "2",
    division: "amk",
    name: "noodle",
  },
];

/**
 *  @description
 *  This how an API Route is defined in Next.JS.
 *  It is a function that accepts 2 parameters:
 *  1. Request - A call from the client/browser
 *  2. Response - What we should return to the client/browser
 *  
 *  Learn more about HTTP Status codes here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 * 
 *  @summary
 *  From the folder structure, you can access this API via ---> http://localhost:3000/api/donations
 * 
 *  @requires
 *  Your server to be running ---> Run `npm run dev` in your terminal
 */

function api(req, res) {
  res.statusCode = 200;
  res.json(sampleDonations);
}

export default api;
