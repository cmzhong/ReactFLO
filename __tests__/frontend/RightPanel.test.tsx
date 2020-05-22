import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer'

import RightPanel from '../../extension/frontend/RightPanel';
import { StateDisplay } from '../../extension/frontend/StateDisplay';
import PropDisplay from '../../extension/frontend/PropDisplay';
import { DisplayNode } from "../../extension/backend/interfaces";

// Newer Enzyme versions require an adapter to a particular version of React
configure({ adapter: new Adapter() });

describe('RightPanel unit tests', () => {
  let wrapper;
  const RightPanelProps = {
    clickedNode: {
      id: 1,
      displayName: 'one',
      displayWeight: 0,
      pathWeight: 0,
      tag: 2,
      type: 'string',
      name: 'name',
      props: null,
      state: null,
      children: null,
      parent: null,
      mediums: null,
    },

    selectProp: () => console.log('selectProp'),
    clearTree: () => console.log('clearTree')
  }

  beforeAll(() => {
    wrapper = shallow(<RightPanel {...RightPanelProps} />)
  })

  // Check for 1 H1 and 2 H2s
  it(`RightPanel should have 1 <h1> and 2 <h2>'s`, () => {
    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('h2')).toHaveLength(2);
  })
  // Find a button that has text of Clear Selection

  // Find StateDisplay and ensure it has title and json as props

  // Find PropDisplay and ensure it has title, propList, and selectProp as props 
})