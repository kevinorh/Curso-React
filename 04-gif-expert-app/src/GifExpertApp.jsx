import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball'])

    const onAddCategory = (newCategory) => {
        // console.log(newCategory)

        const exitingItem = categories.find(category => {
            return category.toLocaleLowerCase().trim() === newCategory.toLocaleLowerCase().trim();
        });
        // console.log(exitingItem);


        if (categories.includes(newCategory) && exitingItem) return;
        //     // setCategories(categories => categories.concat('Rainbow Six Siegue'));
        //     // setCategories(categories.concat('Rainbow Six Siegue'));
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory
                // setCategories = {setCategories}
                // onNewCategory = { (value) => onAddCategory(value) }
                onNewCategory={onAddCategory}
            />
            {/* Gif List */}
            {categories.map((category) =>
            (
                // <div key={category}>
                //     <h3>{category}</h3>
                //     <li>{category}</li>
                // </div>
                <GifGrid
                    key={category}
                    category={category} />
            )
            )
            }
            {/* <li>123</li> */}
            {/* Gif Item */}
        </>
    )
}