import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import AppNavbarVue from './AppNavBar.vue'

const selectors = {
  navLink: '.navbar--link'
}

const data = [
  { text: 'Home', path: '/' },
  { text: 'About', path: '/about' },
  { text: 'Contact', path: '/contact' }
]

const wrapper = mount(AppNavbarVue, {
  props: {
    links: data
  }
})

describe('AppNavBar', () => {
  it('Should render properly', () => {
    expect(wrapper.findAll(selectors.navLink).length).toBe(data.length)
    expect(wrapper.find(selectors.navLink).text()).toBe(data[0].text)
  })
})
