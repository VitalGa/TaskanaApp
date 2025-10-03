/**
 * Сортирует массив задач
 * @param {Array} tasks - Массив задач
 * @param {string} sortValue - Значение сортировки (например: "priority-desc")
 * @returns {Array} - Отсортированный массив
 */

export function sortTasksBy(tasks, sortValue) {
  const sortedTasks = [...tasks];

  const [field, order] = sortValue.split('-');
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
