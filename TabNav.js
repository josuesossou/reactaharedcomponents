import React, { useState } from "react";
import { Button, Line, Column, RectangleCard, Row, SelectInput, TextInput } from ".";

/**
 * @param onSubmit passes the search value as a param
 * @param onFilter passes the search value as a param
 */
const TabNav = ({ 
    actions = [], 
    showSearch,
    searchPlaceholder, 
    showFilter, 
    onSubmit, 
    onFilter,
    filterOptions=[]
}) => {
    const [search, onSearch] = useState('')
    const [filter, onSelect] = useState('')
    const [btnId, setBtnId] = useState(0)

    return (
        <Column styles={{ marginTop: '1em'}}>
            <Row alignHorizontal="start" alignVertically="end" styles={{ }}>
                {actions.map(({ text, callback}, index) => (
                    <Button 
                        key={index}
                        text={text} 
                        onClick={() => {
                            callback()
                            setBtnId(index)
                        }}
                        showBorder 
                        styles={{ 
                            whiteSpace: 'nowrap', 
                            backgroundColor: 'white',
                            borderRadius: 0,
                            marginRight: 2,
                            border: btnId === index ? '2px groove grey': '1px solid grey',
                        }}
                    />
                ))}
                </Row>
                <Line style={{ margin: 0 }}/>
            {/* <TextInput
                hideLabel
                placeholder={searchPlaceholder}
                value={search}
                onChange={(e) => onSearch(e.target.value)}
            />
            <Column>
                <SelectInput
                    hideLabel
                    value={filter}
                    options={filterOptions}
                />
            </Column> */}
        </Column>
    )
}

export default TabNav