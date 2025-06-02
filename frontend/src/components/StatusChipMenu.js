import { useState } from "react";
import { Chip, Menu, MenuItem } from "@mui/material";
import { statuses } from "../utils/Constants";
import { statusColor } from "../utils/ColorChip";
import ApiServices from "../services/ApiServices";
import { useDispatch } from "react-redux";
import { updatedTask } from "../store/slices/taskSlice";

export default function StatusChipMenu({ task, onStatusUpdated }) {
  const dispatch = useDispatch();
  const { updateStatusTask } = ApiServices();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChipClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleStatusChange = async (status) => {
    await updateStatusTask(task.id, { status: status.name });

    dispatch(updatedTask({ ...task, status: status.name }));

    handleMenuClose();
    if (onStatusUpdated) onStatusUpdated(status.name);
  };

  return (
    <>
      <Chip
        label={task.status}
        size="small"
        sx={{ width: "80%" }}
        color={statusColor(task.status)}
        onClick={handleChipClick}
        clickable
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        onClick={(e) => e.stopPropagation()}
      >
        {statuses.map((status) => (
          <MenuItem
            key={status.id}
            selected={task.status === status.name}
            onClick={() => handleStatusChange(status)}
          >
            {status.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
