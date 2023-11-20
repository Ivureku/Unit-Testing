import { render, fireEvent } from '@testing-library/react'
import App from '../src/App'
import Button from '../src/Button'
import Textbox from '../src/Textbox'

describe('App', () => {
    test('should render the App', () => {
        render(<App />)
    })
})

describe('Button', () => {
    test('should render the button', () => {
        render(<Button />)
    })

    test('should be clicked', () => {
        const { getByText } = render(<Button label="Login" />)
        fireEvent.click(getByText('Login'))
    })

    test('should be disabled', () => {
        const { getByText } = render(<Button label="Login" disabled />)
        expect(getByText('Login')).toBeDisabled()
    })


    test('should render the text inside the button correctly', () => {
        const { getByText } = render(<Button label="Login" />)
        expect(getByText('Login')).toBeInTheDocument()
    })
})

describe('Textbox', () => {
    test('should be rendered', () => {
        render(<Textbox />)
    })

    test('should be able to type', () => {
        const { getByLabelText } = render(<Textbox label="Username" />)
        fireEvent.change(getByLabelText('Username:'), { target: { value: 'test' } })
    })


    test('should render the label', () => {
        const { getByText } = render(<Textbox label="Username" />)
        expect(getByText('Username:')).toBeInTheDocument()
    })
})
