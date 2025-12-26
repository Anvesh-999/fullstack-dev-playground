import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

function App() {
  let handleClick=()=>{
    console.log("Button Clicked");
  }
  return (
    <>
     <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleClick}>Delete</Button><br></br>
     <br></br>
     <Button variant="contained" startIcon={<SendIcon />} onClick={handleClick}>Send</Button>
    </>
  )
}

export default App
