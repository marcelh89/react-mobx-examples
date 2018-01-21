import { expect } from 'chai';
import store from '../../src/models/userstore';

describe('userstore' , () => {
	it('has something', () => {
		expect(store.users).to.not.be.undefined;
	});
});
