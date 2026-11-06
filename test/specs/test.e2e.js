import { browser, expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'


const users = ['standard_user','problem_user','performance_glitch_user','error_user', 'visual_user']
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        for (let i= 0; i< users.length; i++) {
        await LoginPage.open() 
        await LoginPage.login(users[i],'secret_sauce')
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        }
    })
    it('should not login with invalid credentials', async() => {
        for (let i=0; i< users.length; i++){
        await LoginPage.open()
        await LoginPage.login(users[i],'password')
        await expect($('[data-test="error"]')).toBeDisplayed()
        }
    })
    it('should display an error for locked out user', async() => {
        await LoginPage.open()
        await LoginPage.login('locked_out_user','secret_sauce')
        await expect($('[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.')
    })
    it('Should not login with the locked out user using invalid credentials', async() => {
        await LoginPage.open()
        await LoginPage.login('locked_out_user','123')
        await expect($('[data-test="error"]')).toBeDisplayed()
    })

})
