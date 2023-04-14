import { Box, Grid } from "@mui/material";
import { useCallback, useState } from "react";
import { GridItem } from "../state/GridState";
import { ContentGridSuspenseWrapper } from "./ContentGridSuspenseWrapper";
import { AddItemForm } from "./ItemForm";

const defaultGridItems = [
  { title: 'Item #1', timeToResolve: 1000 },
  { title: 'Item #2', timeToResolve: 10000 },
  { title: 'Item #3', timeToResolve: 2000 },
  { title: 'Item #4', timeToResolve: 6000 },
  { title: 'Item #5', timeToResolve: 4000 },
  { title: 'Item #6', timeToResolve: 6000 },
  { title: 'Item #7', timeToResolve: 7000 },
];

export const ContentGrid = () => {
  const [gridItems, setGridItems] = useState<GridItem[]>(defaultGridItems);

  const handleItemAdd = useCallback((title: string, timeToResolve: number) => {
    setGridItems((prevGridItems) => [
      ...prevGridItems,
      { title: `${title}-${gridItems.length + 1}`, timeToResolve }
    ]);
  }, [gridItems.length, setGridItems]);

  return (
    <Box
      sx={{
        width: "800px",
        marginTop: (theme) => theme.spacing(2),
      }}
    >
      <Grid container spacing={2}>
        {
          gridItems.map((item, idx) =>
            <ContentGridSuspenseWrapper item={item} key={`${item.title}-${idx}`} />
          )
        }
      </Grid>
      <AddItemForm onAddItem={handleItemAdd} />
    </Box>
  );
}