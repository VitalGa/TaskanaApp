const SORT_STRATEGIES = {
  priority: (a, b, isAscending) => {
    return isAscending ? a.task.priority - b.task.priority : b.task.priority - a.task.priority;
  },

  title: (a, b, isAscending) => {
    const result = a.task.title.localeCompare(b.task.title, 'ru');
    return isAscending ? result : -result;
  },

  createdAt: (a, b, isAscending) => {
    const diff = new Date(a.task.createdAt) - new Date(b.task.createdAt);
    return isAscending ? diff : -diff;
  },

  updatedAt: (a, b, isAscending) => {
    const diff = new Date(a.task.updatedAt) - new Date(b.task.updatedAt);
    return isAscending ? -diff : diff;
  },
};

/**
 * @param {Function} sortStrategy
 * @param {boolean} isAscending
 * @returns {Function}
 */

function createComparator(sortStrategy, isAscending) {
  return (a, b) => {
    const sortResult = sortStrategy(a, b, isAscending);
    return sortResult !== 0 ? sortResult : a.originalIndex - b.originalIndex;
  };
}

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

  const sortStrategy = SORT_STRATEGIES[field];

  if (!sortStrategy) {
    console.warn(`Неизвестное поле для сортировки: ${field}`);
    return tasks;
  }

  const isAscending = order === 'asc';
  const comparator = createComparator(sortStrategy, isAscending);

  return tasksWithIndex.sort(comparator).map((item) => item.task);
}
