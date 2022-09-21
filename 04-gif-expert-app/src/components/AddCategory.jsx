import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onChangeHandler = ({ target }) => {
        // console.log(event.target.value)
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if( inputValue.trim().length <= 1) return;
        
        // setCategories(categories => [...categories, inputValue])
        onNewCategory(inputValue)
        setInputValue('')
    }



    return (
        // <form onSubmit={(event) => onSubmit(event)}>
        <form onSubmit={onSubmit}>
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
