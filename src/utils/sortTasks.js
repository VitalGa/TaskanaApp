/**
 
 * @param {Array} tasks  
 * @param {string} sortValue  
 * @returns {Array}  
 */

export function sortTasksBy(tasks, sortValue) {
  const tasksWithIndex = tasks.map((task, index) => ({ task, originalIndex: index }));

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
    return tasks;
  }

  const isAscending = order === 'asc';

  switch (field) {
    case 'priority':
      return tasksWithIndex
        .sort((a, b) => {
          const priorityDiff = isAscending
            ? a.task.priority - b.task.priority
            : b.task.priority - a.task.priority;

          return priorityDiff !== 0 ? priorityDiff : b.originalIndex - a.originalIndex;
        })
        .map((item) => item.task);

    case 'title':
      return tasksWithIndex
        .sort((a, b) => {
          const result = a.task.title.localeCompare(b.task.title, 'ru');
          const titleDiff = isAscending ? result : -result;

          return titleDiff !== 0 ? titleDiff : a.originalIndex - b.originalIndex;
        })
        .map((item) => item.task);

    case 'createdAt':
      return tasksWithIndex
        .sort((a, b) => {
          const diff = new Date(a.task.createdAt) - new Date(b.task.createdAt);
          const dateDiff = isAscending ? diff : -diff;

          return dateDiff !== 0 ? dateDiff : a.originalIndex - b.originalIndex;
        })
        .map((item) => item.task);

    case 'updatedAt':
      return tasksWithIndex
        .sort((a, b) => {
          const diff = new Date(a.task.updatedAt) - new Date(b.task.updatedAt);

          const dateDiff = isAscending ? -diff : diff;

          return dateDiff !== 0 ? dateDiff : a.originalIndex - b.originalIndex;
        })
        .map((item) => item.task);

    default:
      return tasks;
  }
}
