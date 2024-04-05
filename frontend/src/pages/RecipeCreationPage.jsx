import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function UploadPage() {
  const [name, setName] = useState('');
  const [instructions, setInstructions] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [ingredients, setIngredients] = useState([{ name: '', amount: '' }]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: '', amount: '' }]);
  };

  const handleIngredientChange = (index, key, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index][key] = value;
    setIngredients(newIngredients);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with selectedFile, name, instructions, and ingredients
    console.log("Name:", name);
    console.log("Instructions:", instructions);
    console.log("File:", selectedFile);
    console.log("Ingredients:", ingredients);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', marginBottom: '80px' }}>
      <h2>Upload Page</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" component="span">
              Upload File
            </Button>
          </label>
          {selectedFile && <span style={{ marginLeft: '10px' }}>{selectedFile.name}</span>}
        </div>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(event) => setName(event.target.value)}
          style={{ marginBottom: '20px' }}
        />
        <h3>Ingredients</h3>
        {ingredients.map((ingredient, index) => (
          <div key={index} style={{ display: 'flex', marginBottom: '10px' }}>
            <TextField
              label="Ingredient Name"
              variant="outlined"
              fullWidth
              value={ingredient.name}
              onChange={(event) => handleIngredientChange(index, 'name', event.target.value)}
              style={{ marginRight: '10px' }}
            />
            <TextField
              label="Amount"
              variant="outlined"
              fullWidth
              value={ingredient.amount}
              onChange={(event) => handleIngredientChange(index, 'amount', event.target.value)}
            />
          </div>
        ))}
        <Button variant="contained" onClick={handleAddIngredient} style={{ marginBottom: '20px' }}>
          Add Ingredient
        </Button>
        <TextField
          label="Instructions"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={instructions}
          onChange={(event) => setInstructions(event.target.value)}
          style={{ marginBottom: '20px' }}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}
