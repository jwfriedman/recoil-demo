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
      sx={{
        borderRadius: (theme) => theme.spacing(1),
        backgroundImage: `url('${URL.createObjectURL(value.catImage)}')`,
        backgroundSize: "cover",
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        bgcolor="rgba(0,0,0,0.25)"
        marginTop={1}
      >
        <Typography variant="h6" color="white">
          <strong>{value.title}</strong>
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        bgcolor="rgba(0,0,0,0.25)"
        marginBottom={1}
      >
        <Typography color="white">Resolved in {value.timeToResolve}ms</Typography>
      </Box>
    </Box>
  );
}