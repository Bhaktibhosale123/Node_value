import "./parentchild.css"
import React , {useState}from 'react'

const ParentChild = () => {

  const [formInput, setFormInput]= useState({
    selectedValue : "",
  })

  const handleSelectedValue=(e)=>{
    const {name, value} = e.target;
    setFormInput({
      ...formInput,
      [name] : value,
    });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formInput)
  }

  return (
    <div>
        <form className='node-form' onSubmit={handleSubmit}>
            <label className='node-type'>Node Type</label>
            <select name="selectedValue" value="formInput.selectedValue" onChange="handleSelectedValue" id="selecttype">  
                             <option id="nodeoption" value="Single Node">Single Node</option>
                            <option id="nodeoption" value="Parent Node">Parent Node</option>
                            <option id="nodeoption" value="Child Node">Child Node</option>
            </select> 
            <label className='node-value'>Node Value</label>
            <input className='value' placeholder='write node value here'/>

            <button type="submit" className='add-value'>Add Value</button>

            <label className='node-name'>Selected Value</label>
            <input className='updatetype'/>
            <div className="btn-sec"><button className='update-value'>Update Value</button>
            <button type="submit" className='add-value'>Delete Value</button></div>
            
            
        </form>
    </div>
  )
}

export default ParentChild