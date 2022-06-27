import React from 'react';
import { IFilter } from '../interfaces';

interface Props {
    options: IFilter[],
    value: string,
    onChange(event: string): void;
}

const FilterTodo:React.FC<Props> = ({options, value, onChange}) => {
    return (
        <div className="filter-todo input-field ">
            <select
              defaultValue={value}
              onChange={(event) => onChange(event.target.value)}
            >
                {options.map(option => {
                    return <option key={option.value} value={option.value}>{option.name}</option>
                })}
            </select>
        </div>
    );
}

export default FilterTodo;