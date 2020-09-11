import React, { useState } from 'react';
import { Input, Button } from 'reactstrap';
import { toast } from 'react-toastify';
import './create.scss';

const Create = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length > 0) {
      if (localStorage.getItem('newCampaigns')) {
        const data = localStorage.getItem('newCampaigns');
        localStorage.setItem('newCampaigns', `${data}, ${inputValue}`);
      } else {
        localStorage.setItem('newCampaigns', inputValue);
      }
      toast.success('Your data has been created successfully!');
    }
    setInputValue('');
  };

  return (
    <div className="create-container">
      <label>Name</label>
      <Input
        placeholder="Enter campaigns name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button color="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default Create;
