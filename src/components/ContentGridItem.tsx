import { Refresh } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import { GridItemsQuery } from "../state/GridState";

export const ContentGridItem = ({ item }: { item: Record<string, any> }) => {
  const value = useRecoilValue(GridItemsQuery(item));
  const refresh = useRecoilRefresher_UNSTABLE(GridItemsQuery(item));

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      padding={1}
      height="100%"
      width="100%"
      sx={{
        borderRadius: (theme) => theme.spacing(1),
        backgroundImage: `url('${URL.createObjectURL(value.catImage)}')`,
        backgroundSize: "cover",
      }}
    >
      <Box
        width="100%"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        padding={1}
        bgcolor="rgba(0,0,0,0.5)"
      >
        <Typography color="white">
          <strong>{value.title}</strong>
        </Typography>
        <IconButton
          onClick={refresh}
          sx={{ padding: 0 }}
        >
          <Refresh sx={{ color: 'white' }} />
        </IconButton>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        bgcolor="rgba(0,0,0,0.25)"
      >
        <Typography
          sx={{ color: 'white', fontSize: '12px' }}
        >Resolved in {value.timeToResolve}ms</Typography>
      </Box>
    </Box>
  );
}