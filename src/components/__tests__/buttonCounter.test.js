import { mount } from '@vue/test-utils'
import buttonCounter from '../buttonCounter.vue'

describe('buttonCounter', () => {
    it('Increases count when clicked.', () => {
        const wrapper = mount(buttonCounter);
        expect(wrapper.vm.count).toBe(0);
        const button = wrapper.find('button');
        button.trigger('click');
        expect(wrapper.vm.count).toBe(1);
    })
});