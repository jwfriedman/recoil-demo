import { Box, Button, Paper, TextField } from "@mui/material";
import { useState } from "react";

interface AddItemFormProps {
  onAddItem: (text: string, timeToResolve: number) => void;
}

export const AddItemForm = ({ onAddItem }: AddItemFormProps) => {
  const [itemName, setItemName] = useState<string>('');
  const [time, setTime] = useState<number>(0);

  return (
    <Paper elevation={6}>
      <Box
        padding={2}
        margin={2}
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
      >
        <TextField
          value={itemName}
          fullWidth
          label="Item Title"
          onChange={(e) => setItemName(e.target.value)}
          sx={{ mb: (theme) => theme.spacing(2) }}
        />
        <TextField
          type="number"
          fullWidth
          value={time}
          label="Time to Resolve"
          onChange={(e) => setTime(parseInt(e.target.value))}
          sx={{ mb: (theme) => theme.spacing(2) }}
        />
        <Button
          variant="contained"
          onClick={() => onAddItem(itemName, time)}
        >
          Add Item
        </Button>
      </Box>
    </Paper>
  );
}