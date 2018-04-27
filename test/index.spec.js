/* global describe, it, before */

import chai from 'chai';
import {Cat, Dog, Radar} from '../lib/WDT.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my Cat library', () => {
  before(() => {
    lib = new Cat();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Cat');
    });
  });
});

describe('Given an instance of my Dog library', () => {
  before(() => {
    lib = new Dog();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Dog');
    });
  });
});

describe('Given an instance of my Radar library', () => {
  before(() => {
    lib = new Radar();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Radar');
    });
  });
});

