import React from 'react'

export default props => (
    <div className="form-group">
        <select className="form-control">
            {props.map(seller => <option value={seller.id}>{seller.name}</option>)}
        </select>
    </div>
)
