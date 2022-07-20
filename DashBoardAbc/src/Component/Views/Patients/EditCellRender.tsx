import React from 'react'
import { ICellRendererParams } from 'ag-grid-community';
import { AiOutlineEdit } from 'react-icons/ai'
const EditCellRender = (props: ICellRendererParams) => {
    return (
        <div>
            <button> <AiOutlineEdit /></button>
        </div>
    )
}

export default EditCellRender