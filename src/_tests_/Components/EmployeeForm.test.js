
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import custom render to connect component to redux
import { render } from '../../utils/helpersForTesting/render'
// import component
import EmployeeForm from '../../components/EmployeeForm'

// references used for tests: 
// https://testing-library.com/docs/example-input-event/
// https://testing-library.com/docs/ecosystem-user-event/

// test setup

const setup = (label) => {
  const utils = render(<EmployeeForm />)
  const input = screen.getByLabelText(label)
  return {
    input,
     ...utils,
  }
}

// tests

describe('EmployeeForm', () => {

  it('should allow user to enter a first name', async () => {
    const {input} = setup(/First Name/i)
    userEvent.type(input, 'John')
    expect(input).toHaveValue('John')
    expect(screen.getByDisplayValue('John')).toBeInTheDocument();
  })

  it('should allow user to enter a last name', async () => {
    const {input} = setup(/Last Name/i)
    userEvent.type(input, 'Doe')
    expect(input).toHaveValue('Doe')
  })

  // date of birth: date picker input: full functionality already checked in pickDate component

  // start date: date picker input: full functionality already checked in pickDate component

  it('should allow user to enter a street', async () => {
    const {input} = setup(/Street/i)
    userEvent.type(input, '123 Fake Street')
    expect(input).toHaveValue('123 Fake Street')
  })

  it('should allow user to enter a city', async () => {
    const {input} = setup(/City/i)
    userEvent.type(input, 'Fake City')
    expect(input).toHaveValue('Fake City')
  })

  // state select input: full functionality already checked in select component
 
  it('should allow user to enter a zip code', async () => {
    const {input} = setup(/Zip Code/i)
    userEvent.type(input, '12345')
    expect(input.value).toBe('12345')
  })

  // department select input: full select functionality already checked in select component

})