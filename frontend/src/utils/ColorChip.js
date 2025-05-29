export const priorityColor = (priority) => {
  switch (priority) {
    case "High":
      return "error";
    case "Medium":
      return "warning";
    case "Low":
      return "success";
    default:
      return "default";
  }
};

export const statusColor = (status) => {
  switch (status) {
    case "Done":
      return "success";
    case "InProgress":
      return "primary";
    case "Backlog":
      return "default";
    default:
      return "default";
  }
};
