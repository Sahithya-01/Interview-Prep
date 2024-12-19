import React, { useState } from 'react'
import './PaymentValidation.css'

const PaymentValidation = () => {
  const currentYear = new Date().getFullYear()
  const maxYear = currentYear + 3
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    month: '',
    year: '',
    cvv: '',
  })
  const [errors, setErrors] = useState({})
const [isTouched, setIsTouched] = useState({
  cardNumber: false,
  cardName: false,
  month: false,
  year: false,
  cvv: false,
})


  const isFormValid =
    !Object.values(errors).some((err) => err) &&
    Object.values(isTouched).every((field) => field)
  console.log(isFormValid)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    validateField(name, value)
  }
  const handleBlur = (e) => {
    const { name } = e.target
    setIsTouched({ ...isTouched, [name]: true })
    validateField(name, formData[name])
  }
  const validateField = (name, value) => {
    let errMessage = ''
    switch (name) {
      case 'cardNumber':
        if (!/^\d{16}$/.test(value)) errMessage = 'Invalid Card Number'
        break
      case 'cardName':
        if (!/^[a-zA-Z\s]+$/.test(value)) errMessage = 'Invalid Card Name'
        break
      case 'month':
        if (!/^(0[1-9]|1[0-2])$/.test(value)) errMessage = 'Invalid Month'
        break
      case 'year':
        if (!/^\d{4}$/.test(value) || value < currentYear || value > maxYear)
          errMessage = 'Invalid Year'
        break
      case 'cvv':
        if (!/^\d{3}$/.test(value)) errMessage = 'Invalid CVV'
        break

      default:
        break
    }
    setErrors({ ...errors, [name]: errMessage })
  }

  return (
    <div className="mt-30 layout-column justify-content-center align-items-center">
      <div className="card outlined" style={{ width: '650px' }}>
        <div data-testid="debit-card">
          <h3 style={{ textAlign: 'center' }}>Card Details</h3>
          <br />
          <div className="debit-card-body">
            <p className="debit-card-bank">Bank Name</p>
            <p className="debit-card-no">XXXXXXXXXXXXXXXX</p>
            <br />
            <div
              style={{ height: '45px', backgroundColor: 'black' }}
              className="debit-card-stripe"
            ></div>
            <p>
              <span className="debit-card-holder-name">HOLDER NAME</span>
              <span className="debit-card-date">MM/YYYY</span>
              <span className="debit-card-cvv">CVV</span>
            </p>
          </div>
        </div>
        <section>
          <div className="pa-50">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="layout-column mb-15">
                <input
                  name="cardNumber"
                  type="text"
                  placeholder="Card Number"
                  data-testid="cardNumberInput"
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                ></input>

                {errors.cardNumber && (
                  <p className="invalid-text" data-testid="numberInputError">
                    {errors.cardNumber}
                  </p>
                )}
              </div>

              <div className="layout-column mb-15">
                <input
                  name="cardName"
                  type="text"
                  placeholder="Name On Card"
                  data-testid="nameInput"
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                />
                {errors.cardName && (
                  <p className="invalid-text" data-testid="nameInputError">
                    {errors.cardName}
                  </p>
                )}
              </div>

              <div className="flex justify-content-around align-items-center">
                <div className="layout-column mb-30">
                  <input
                    name="month"
                    type="number"
                    placeholder="Expiry Month"
                    data-testid="monthInput"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                  {errors.month && (
                    <p className="invalid-text" data-testid="monthInputError">
                      {errors.month}
                    </p>
                  )}
                </div>

                <div className="layout-column mb-30">
                  <input
                    type="number"
                    name="year"
                    placeholder="Expiry Year"
                    data-testid="yearInput"
                    value={formData.year}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                  {errors.year && (
                    <p className="invalid-text" data-testid="yearInputError">
                      {errors.year}
                    </p>
                  )}
                </div>

                <div className="layout-column mb-30">
                  <input
                    type="number"
                    name="cvv"
                    placeholder="CVV"
                    data-testid="cvvInput"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                  {errors.cvv && (
                    <p className="invalid-text" data-testid="cvvInputError">
                      {errors.cvv}
                    </p>
                  )}
                </div>
              </div>

              <div className="layout-column mb-30">
                <button
                  type="submit"
                  className="mx-0"
                  data-testid="submitButton"
                  disabled={!isFormValid}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}
export default PaymentValidation
