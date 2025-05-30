export const statuses = [
  { id: 1, name: "Backlog" },
  { id: 2, name: "InProgress" },
  { id: 3, name: "Done" },
];

export const priorities = [
  { id: 1, name: "Low" },
  { id: 2, name: "Medium" },
  { id: 3, name: "High" },
];

export const nameColumn = [
  { id: 1, name: "To do" },
  { id: 2, name: "In progress" },
  { id: 3, name: "Done" },
];

export function getColumnNameById(id) {
  return nameColumn.find((item) => item.id === id).name;
}
