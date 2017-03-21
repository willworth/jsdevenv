import {expect} from 'chai';  //assertion library as mocha doesn't have

describe('Our first test', () =>{
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});