import React, { useState, useEffect } from 'react'


const useValidation = (initialState, validation, fn) => {

    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [submitForm, setSubmitForm] = useState(false);

    useEffect(() => {
        if (submitForm) {
            const noerrores = Object.keys(errors).length === 0;
            if (noerrores) {
                fn();
            }
            setSubmitForm(false)
        }
    }, [errors])

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const errorValidation = validation(values);
        setErrors(errorValidation);
        setSubmitForm(true);
    }

    const handleBlur = () => {
        const errorValidation = validation(values);
        setErrors(errorValidation);    }
    return {
        values,
        errors,
        handleChange,
        handleSubmit,
        handleBlur
    }

}

export default useValidation;