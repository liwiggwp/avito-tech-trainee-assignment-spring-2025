export const statuses = [
  { id: 1, name: "Backlog" },
  { id: 2, name: "ToDo" },
  { id: 3, name: "InProgress" },
  { id: 4, name: "Done" },
];

export const priorities = [
  { id: 1, name: "Low" },
  { id: 2, name: "Medium" },
  { id: 3, name: "High" },
];

export const nameColumn = [
  { id: 1, name: "Backlog" },
  { id: 2, name: "To do" },
  { id: 3, name: "In progress" },
  { id: 4, name: "Done" },
];

export function getColumnNameById(id) {
  return nameColumn.find((item) => item.id === id).name;
}
