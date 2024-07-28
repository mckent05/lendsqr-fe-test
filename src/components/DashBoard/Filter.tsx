import React, {useCallback, useMemo} from 'react'
import DataListInput, { useComboboxControls } from "react-datalist-input"
import "./filter.scss"

interface demo{
    value: string
}

const Filter = () => {

    const { setValue, value } = useComboboxControls();

    const categories:demo[] = [ {
        value: "popop"
    },
    {
        value: "popop2"
    },

] 
    const onSelect = useCallback((selectedItem:demo) => {
        setValue(selectedItem.value);
      }, []);
    
      const items = useMemo(
        () =>
          categories.map((option, index) => ({
            id: index,
            value: option.value,
          })),
        [value]
      );

  return (
    <div className='filter__cont'>
        <form className='filter__form__cont'>
            <div className='data__list__cont'>
                <DataListInput 
                     label="Organization"
                     placeholder="Select organization"
                     items={items}
                     onSelect={onSelect}
                     value={value}
                     setValue={setValue}
                />
            </div>
            <div className="filter__input">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder='Name' />
                
            </div>
            <div className="filter__input">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" placeholder='Email' />
                
            </div>
            <div className="filter__input">
                <label htmlFor="date">Date</label>
                <input type="date" name="date" id="date" placeholder='Date' />
                
            </div>
            <div className="filter__input">
                <label htmlFor="Phone Number">Phone Number</label>
                <input type="text" name="Phone Number" id="Phone Number" placeholder='Phone Number' />
                
            </div>
            <div className="filter__input">
                <label htmlFor="status">Status</label>
                <input type="text" name="status" id="status" placeholder='Status' />

                
            </div>
            <div className='form__button__control'>
                <button className='reset__control'>reset</button>
                <button type='submit' className='submit__btn__'>filter</button>
            </div>
            

        </form>
      
    </div>
  )
}

export default Filter
