import React from 'react';
import chai, { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import Profile from '../../src/components/profile';

chai.use(chaiEnzyme());

describe('Profile' , () => {
	it('exists', () => {

		const onclick = () => {};
		const label = "myprofile";
		const selected = true;

		const wrapper = shallow(<Profile onClick={onclick} label={label} selected={selected}/>)

		//check passed props
        console.log(wrapper.props());
        expect(wrapper.prop('className')).to.equal('bold');
        expect(wrapper.prop("children")).to.equal(label);
        expect(wrapper.prop("onClick")).to.be.a("function");

		//check rendered items
		expect(wrapper.hasClass('bold')).to.equal(true);
        expect(wrapper.find('li').text()).to.equal(label);
	});
});
