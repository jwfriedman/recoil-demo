import { Box, CircularProgress, Grid, Paper } from "@mui/material";
import { Suspense } from "react";
import { ContentGridItem } from "./ContentGridItem";

export const ContentGridSuspenseWrapper = ({ item }: { item: Record<string, any> }) =>
  <Grid item xs={4}>
    <Paper
      elevation={6}
      sx={{ borderRadius: (theme) => theme.spacing(2) }}
    >
      <Box
        sx={{
          height: "200px",
          padding: (theme) => theme.spacing(2),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
      </Box>
    </Paper>
  </Grid>