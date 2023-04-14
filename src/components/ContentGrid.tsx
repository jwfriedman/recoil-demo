import { Box, Grid } from "@mui/material";
import { useCallback, useState } from "react";
import { GridItem } from "../state/GridState";
import { ContentGridSuspenseWrapper } from "./ContentGridSuspenseWrapper";
import { AddItemForm } from "./ItemForm";

export const ContentGrid = () => {
  const [gridItems, setGridItems] = useState<GridItem[]>(
    Array.from({ length: 9 }, (_, idx) => ({
      title: `Item #${idx + 1}`,
      timeToResolve: Math.floor(Math.random() * 10000),
    }))
  );

  const handleItemAdd = useCallback((title: string, timeToResolve: number) => {
    setGridItems((prevGridItems) => [
      ...prevGridItems,
      { title: `${title}`, timeToResolve }
    ]);
  }, [setGridItems]);

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