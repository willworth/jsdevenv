import {expect} from 'chai';  //assertion library as mocha doesn't have
import jsdom from 'jsdom';
import fs from 'fs';  //filesystem


describe('Our first test', () =>{
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});


describe('index.html', () =>{
  it('should have h1 that says Users', (done) =>{
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Users");
      done();//for asynchonous tests to return...
      window.close();//free up the memory
    });
  })
})
