import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
export default function Main() {
  const [user, setUser] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputAuthor, setInputAuthor] = useState("");
  const [inputCategory, setInputCategory] = useState('');

  const categoryFunction = (e) => {
    setInputCategory(e.target.value);
  };

  const nameFunction = (e) => {
    setInputName(e.target.value);
  };
  const authorFunction = (e) => {
    setInputAuthor(e.target.value);
  };
  const userFunction = () => {
      if (inputName !== '' && inputAuthor !== '' && inputCategory !== '') {
        setUser([...user, { name: inputName, author: inputAuthor,category:inputCategory }]);
        console.log(user);
        setInputName("");
        setInputAuthor("");
        setInputCategory('')
      }else {}
    
  };
  const deleteFunction = (elem) => {   
        setUser(user.filter((el) => el !== elem));   
  }
  return (
    <div className="main">
      <div className="main-section">       
          {user.map((el) => {
            return (
                <div className="book">
                <div className="text-section">
                    <h2>{el.author}</h2>
                    <h1>{el.name}</h1>
                    <p>{el.category}</p>
                    <div className="btn-block">
                        <button>Comments</button>
                        <button onClick={() => deleteFunction(el)}>Remove</button>
                        <button>Edit</button>
                    </div>
                </div>
  
            </div>
            );
          })}
        
        <div className="input-section">
        <TextField onChange={(e) => nameFunction(e)} value={inputName} id="outlined-basic" label="Book Title" variant="outlined" />
        <TextField onChange={(e) => authorFunction(e)} value={inputAuthor} id="outlined-basic" label="Author" variant="outlined" />
          
          
         
      <FormControl className="category-input">
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={inputCategory}
          label="Category"
          onChange={(e) => categoryFunction(e)}
        >
          <MenuItem value={'Action'}>Action</MenuItem>
          <MenuItem value={'Science Fiction'}>Science Fiction</MenuItem>
          <MenuItem value={'Economy'}>Economy</MenuItem>
          <MenuItem value={'Comedy'}>Comedy</MenuItem>

        </Select>
      </FormControl>
    
          <div>
      
    </div>
          <button className="add-btn" onClick={userFunction}>ADD BOOK</button>
        </div>
      </div>
      
    </div>
  );
}
