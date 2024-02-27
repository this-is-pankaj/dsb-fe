import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import AppHeader from './AppHeader.vue'

const selectors = {
  logo: '[data-test="app-header-logo"]',
  navbar: '[data-test="app-header-navbar"]'
}

const wrapper = mount(AppHeader)

describe('AppHeader', () => {
  it('Should render properly', () => {
    expect(wrapper.find(selectors.logo).exists()).toBe(true)
    expect(wrapper.find(selectors.logo).attributes('alt')).toBe('DSB Logo')
    expect(wrapper.findComponent({ name: 'AppNavBar' }).exists()).toBe(true)
  })
})
