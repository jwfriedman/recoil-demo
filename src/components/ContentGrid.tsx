import { Box, Grid } from "@mui/material";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { GridItemsState } from "../state/GridState";
import { ContentGridSuspenseWrapper } from "./ContentGridSuspenseWrapper";
import { AddItemForm } from "./ItemForm";

export const ContentGrid = () => {
  const [gridItems, setGridItems] = useRecoilState(GridItemsState);

  const handleItemAdd = useCallback((title: string, timeToResolve: number) => {
    setGridItems((prevGridItems) => [
      ...prevGridItems,
      { title, timeToResolve }
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
            <ContentGridSuspenseWrapper key={item.title} index={idx} />
          )
        }
      </Grid>
      <AddItemForm onAddItem={handleItemAdd} />
    </Box>
  );
}