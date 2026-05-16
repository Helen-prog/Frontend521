import { useState, useEffect } from "react";

function Text(){
    let [visible, setVisible] = useState(true);

    useEffect(() => {
        setInterval(() => setVisible(!visible), 2000);
    }, [visible]);

    return (
        <div>
            {
                visible && <p style={{background: "yellow"}}>Hello</p>
            }
           
        </div>
    )
}

export default Text;