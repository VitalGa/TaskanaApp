/**
 
 * @param {Array} tasks  
 * @param {string} sortValue  
 * @returns {Array}  
 */

export function sortTasksBy(tasks, sortValue) {
  const sortedTasks = [...tasks];

  let field, order;
  if (sortValue.endsWith('Desc')) {
    field = sortValue.slice(0, -4);
    order = 'desc';
  } else if (sortValue.endsWith('Asc')) {
    field = sortValue.slice(0, -3);
    order = 'asc';
  } else {
    console.warn(
      `Неизвестный формат сортировки: ${sortValue}. Ожидается формат 'fieldOrder' (например: 'priorityDesc')`,
    );
    return sortedTasks;
  }

  const isAscending = order === 'asc';

  switch (field) {
    case 'priority':
      return sortedTasks.sort((a, b) =>
        isAscending ? a.priority - b.priority : b.priority - a.priority,
      );

    case 'title':
      return sortedTasks.sort((a, b) => {
        const result = a.title.localeCompare(b.title, 'ru');
        return isAscending ? result : -result;
      });

    case 'createdAt':
      return sortedTasks.sort((a, b) => {
        const diff = new Date(a.createdAt) - new Date(b.createdAt);
        return isAscending ? diff : -diff;
      });

    case 'updatedAt':
      return sortedTasks.sort((a, b) => {
        const diff = new Date(a.updatedAt) - new Date(b.updatedAt);
        return isAscending ? diff : -diff;
      });

    default:
      return sortedTasks;
  }
}
