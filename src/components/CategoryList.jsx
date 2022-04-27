import { useState } from "react"

export default function CategoryList(props) {

    const [data,setData] = useState(props.data);
    return (
        <div className="list-group">
            {
                data.map((value,key) => (
                    <a href="" key={key} className="list-group-item list-group-item-action">{value.title}</a>
                ))
            }
            
        
        </div>
    )
}   