import { useState } from "react";
import './Modal.css';

function Modal(){
    let [open, setOpen] = useState(false);
    let image = "https://image.fonwall.ru/o/az/item-sundown-einkehr-nature.jpeg";

    return (
        <div>
            <img src={image} alt="" className="small" onClick={() => setOpen(true)} style={{ display: open ? "none" : "inline" }} />

            {open && <img src={image} alt="" className="big" onClick={() => setOpen(false)} />}
            
        </div>
    )
}

export default Modal;