import { ThumbUp } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { GridItemsQuery } from "../state/GridState";

export const ContentGridItem = ({ item }: { item: Record<string, any> }) => {
  const value = useRecoilValue(GridItemsQuery(item));
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
        <strong>{value.title}</strong>
      </Typography>
      <ThumbUp fontSize="large" />
      <Typography>Resolved in {value.responseTime}</Typography>
    </Box>
  );
}