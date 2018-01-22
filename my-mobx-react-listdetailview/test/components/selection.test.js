import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import Selection from '../../src/components/selection';

chai.use(chaiEnzyme());

describe('Selection' , () => {
    it('exists', () => {

        const user = {
			"name": "someone",
			"username" : "someonesUsername",
			"phone" : "012345678",
			"email": "someone@something.com"
        }

        const wrapper = shallow(<Selection user={user} />)

        expect(wrapper.find('ul').childAt(0).type()).to.equal('li');
        expect(wrapper.find('ul').childAt(0).text()).to.equal(`Name: ${user.name}`);
        expect(wrapper.find('ul').childAt(0).text()).to.include(user.name);

        expect(wrapper.find('ul').childAt(1).type()).to.equal('li');
        expect(wrapper.find('ul').childAt(1).text()).to.equal(`Username: ${user.username}`);
        expect(wrapper.find('ul').childAt(1).text()).to.include(user.username);

        expect(wrapper.find('ul').childAt(2).type()).to.equal('li');
        expect(wrapper.find('ul').childAt(2).text()).to.equal(`Phone: ${user.phone}`);
        expect(wrapper.find('ul').childAt(2).text()).to.include(user.phone);

        expect(wrapper.find('ul').childAt(3).type()).to.equal('li');
        expect(wrapper.find('ul').childAt(3).html()).to.equal(`<li>Email: <a href="mailto:${user.email}">${user.email}</a></li>`);
        expect(wrapper.find('ul').childAt(3).text()).to.include(user.email);

    });
});
