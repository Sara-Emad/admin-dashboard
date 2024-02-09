import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./Data";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const Team = () => {
  const theme = useTheme();

  const columns = [
    { field: "id", headerName: "ID", align: "center", headerAlign: "center" },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",

              p: "5px",
              textAlign: "center",
              width: "99px",
              borderRadius: "3px",
              display: "flex",
              justifyContent: "space-evenly",
              
            }}
          >
            {access==="Admin" && (<AdminPanelSettingsOutlinedIcon  sx={{color:"#fff"}} />)}
            {access==="Manager" && (<SecurityOutlinedIcon  sx={{color:"#fff"}}  />)}
            {access==="User" && (<LockOpenOutlinedIcon  sx={{color:"#fff"}} />)}


            <Typography variant="body1" sx={{color:"#fff" , fontSize:"15px"}}>{access}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
  
      <Box sx={{ height: 600, width: "98%" , mx:"auto"}}>
        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    
  );
};

export default Team;
