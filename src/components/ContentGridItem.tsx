import { Box, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { GridItemsQuery } from "../state/GridState";

export const ContentGridItem = ({ index }: { index: number }) => {
  const item = useRecoilValue(GridItemsQuery(index));
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      height="100%"
      width="100%"
    >
      <Typography variant="h6">
        <strong>{item.title}</strong>
      </Typography>
      <Typography>{item.response}</Typography>
    </Box>
  );
}