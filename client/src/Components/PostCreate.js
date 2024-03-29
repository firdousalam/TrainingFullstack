import React, {useState} from 'react';
import axios from 'axios';

export default function PostCreate() {
    const [title,setTitle] = useState();
    const onSubmit = async (event) =>{
        event.preventDefault();
        await axios.post('http://localhost:4000/post',{title});
        setTitle('');
    }
  return (
    <>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label>
                    Title
                </label>
                <input className='form-control' value={title} onChange={e =>setTitle(e.target.value)}/>
            </div>
            <button className='btn btn-primary'>Submit</button>
        </form>
        
    </>
  );
}
