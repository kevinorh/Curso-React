import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onChangeHandler = ({ target }) => {
        // console.log(event.target.value)
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        // console.log('Hola Mundo desde submit')
        event.preventDefault();

        if( inputValue.trim().length <= 1) return;
        
        // setCategories(categories => [...categories, inputValue])
        onNewCategory(inputValue)
        setInputValue('')
        // console.log('Hola Mundo desde submit fin')
    }



    return (
        // <form onSubmit={(event) => onSubmit(event)}>
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placehoder="buscar gifs"
                value={inputValue}
                // onChange={ (event) => onChangeHandler(event)}
                onChange={onChangeHandler}
            />
        </form>
    )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}