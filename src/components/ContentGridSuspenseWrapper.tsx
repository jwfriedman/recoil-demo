import { Box, CircularProgress, Grid, Paper } from "@mui/material";
import { Suspense } from "react";
import { ContentGridItem } from "./ContentGridItem";

export const ContentGridSuspenseWrapper = ({ item }: { item: Record<string, any> }) =>
  <Grid item xs={4}>
    <Paper
      elevation={6}
      sx={{
        height: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: (theme) => theme.spacing(1),
      }}
    >
      <Suspense fallback={
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      }>
        <ContentGridItem
          item={item}
        />
      </Suspense>
    </Paper>
  </Grid>