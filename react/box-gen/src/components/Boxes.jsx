import React, {useState} from 'react';

const Boxes = () => {
    let [boxColor, setBoxColor] = useState("");
    let [boxList, setBoxList] = useState([]);

    const submitHandler = (e)=>{
        e.preventDefault();
        if (boxColor==="") return;
        let newBoxObj = {boxColor};
        setBoxColor("");
        setBoxList([...boxList, newBoxObj]);
    }

    return (
        <>
            <form onSubmit = {submitHandler} className="form-inline">
            <div className="form-group">
                <label htmlFor="">Color:</label>
                <input type="text" name="" id="" className="rounded-pill m-2 p-2" 
                onChange={(e)=>{setBoxColor(e.target.value)}} value={boxColor} 
                style={{width:"500px"}}
                />
                <input type="submit" value="Add" className="btn btn-success"/>
            </div>
            </form>
            <div className="d-flex flex-wrap">
            {
                boxList.map((box, key) => {
                    return <div class="m-3" key={key} style={{backgroundColor: box.boxColor, width: "100px", height: "100px"}}>
                    </div>
                }
                )
            }
            </div>
        </>
    )
}
export default Boxes;