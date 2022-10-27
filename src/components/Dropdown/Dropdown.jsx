import '../../css/dropdown.css'
import arrow from "../../assets/arrow.svg"
import { useState } from 'react'

function Dropdown({title, content}) {

    const [isOpen, setOpen] = useState(false)

    return (
        <div className={"dropdown "+(isOpen ? 'dropdown-open' : 'dropdown-close')}>
            <button className='dropdown__header' onClick={() => setOpen(!isOpen)}>
                <h3>{title}</h3>
                <img src={arrow} className={'dropdown__header__arrow'+(isOpen ? '--up' : '--down')} alt='dropdown'/>
            </button>
            <div className={'dropdown__content '}>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Dropdown