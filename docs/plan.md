# План выполнения Sprint 1, Task 4

**Цель**: Создать компонент Dropdown для сортировки задач и расширить TaskEditor для редактирования.

**Подход**: Разбиваем на 6 этапов, от простого к сложному. После каждого этапа — проверка работы.

---

## 🎯 Общая стратегия

1. **Сначала иконки** — без них Dropdown не соберёшь
2. **Потом Dropdown** — изолированно, без интеграции
3. **Затем сортировка** — логика работы с данными
4. **Интеграция Dropdown** — подключаем к списку задач
5. **Расширение TaskEditor** — режим редактирования
6. **Финальная полировка** — стили, анимации, тесты

---

## 📦 ЭТАП 1: Подготовка и иконки (30-60 мин)

### 1.1. Изучение и планирование

- [x] **Прочитать `requirements.md` полностью**

  - Цель: Понять полную картину задачи
  - Обрати внимание на разделы 3, 5, 11

- [x] **Посмотреть на макет (скриншот)**

  - Цель: Запомнить визуальную структуру
  - Обрати внимание на расположение иконок и галочки

- [x] **Создать Git ветку для работы**
  ```bash
  git checkout -b task-4-dropdown-and-edit
  ```
  - Цель: Изолировать изменения от основной ветки
  - Можно будет откатиться, если что-то пойдёт не так

### 1.2. Проверка иконок

- [x] **Проверить, какие иконки уже есть**

  - Открыть `src/components/icon/icons/index.js`
  - Посмотреть экспортируемые компоненты
  - Записать, каких не хватает

- [x] **Определить, какие иконки нужно создать**
  - Нужны: `arrowDown`, `arrowUp`, `check` (галочка)
  - Возможно: `edit` (карандаш) для кнопки редактирования
  - Возможно: `trash` или `delete` для удаления задачи

### 1.3. Создание недостающих иконок

**Для каждой недостающей иконки:**

- [x] **Создать иконку `arrowDown` (стрелка вниз)**

  - Создать файл `src/components/icon/icons/dropdownIcons/ArrowDownIcon.jsx`
  - Скопировать структуру из существующей иконки
  - Вставить SVG код стрелки вниз
  - Пример структуры:
    ```jsx
    export function ArrowDownIcon({ className }) {
      return (
        <svg className={className} viewBox='0 0 24 24' /* другие атрибуты */>
          {/* SVG path */}
        </svg>
      );
    }
    ```

- [x] **Создать иконку `arrowUp` (стрелка вверх)**

  - Аналогично, файл `ArrowUpIcon.jsx`
  - SVG код стрелки вверх

- [x] **Создать иконку `check` (галочка)**

  - Файл `CheckIcon.jsx`
  - SVG код галочки

- [x] **Создать иконку `edit` (карандаш для редактирования)**

  - Файл `src/components/icon/icons/taskItemIcons/EditIcon.jsx`
  - SVG код карандаша или иконки редактирования

- [x] **Экспортировать новые иконки**

  - Открыть `src/components/icon/icons/index.js`
  - Добавить экспорты:
    ```js
    export * from './dropdownIcons/ArrowDownIcon';
    export * from './dropdownIcons/ArrowUpIcon';
    export * from './dropdownIcons/CheckIcon';
    export * from './taskItemIcons/EditIcon';
    ```

- [x] **Добавить иконки в маппинг Icon компонента**
  - Открыть `src/components/icon/Icon.jsx`
  - Добавить новые иконки в объект `iconMap` (если там есть такой объект)
  - Или проверить, как там устроен маппинг

### 1.4. Проверка иконок

- [x] **Временно добавить иконки на страницу для проверки**

  - Открыть `src/pages/incomingTasks/IncomingTasks.jsx`
  - Добавить в JSX:
    ```jsx
    <Icon name="arrowDown" />
    <Icon name="arrowUp" />
    <Icon name="check" />
    <Icon name="edit" />
    ```
  - Запустить `npm run dev`
  - Проверить, что иконки отображаются

- [x] **Удалить временный код после проверки**

**🎉 Чекпоинт 1**: Все иконки созданы и работают

---

## 📦 ЭТАП 2: Создание компонента Dropdown (2-3 часа)

### 2.1. Создание файловой структуры

- [ ] **Создать папку компонента**

  ```bash
  mkdir src/components/dropdown
  ```

- [ ] **Создать файлы компонента**

  - `src/components/dropdown/Dropdown.jsx` — основной компонент
  - `src/components/dropdown/dropdown.module.css` — стили
  - `src/components/dropdown/index.js` — экспорт

- [ ] **Написать экспорт в `index.js`**

  ```js
  export { Dropdown } from './Dropdown';
  ```

- [ ] **Добавить экспорт в общий файл компонентов**
  - Открыть `src/components/index.js`
  - Добавить: `export * from './dropdown';`

### 2.2. Базовая структура компонента

- [ ] **Создать заготовку компонента Dropdown**

  - Открыть `src/components/dropdown/Dropdown.jsx`
  - Написать базовую структуру:

    ```jsx
    import { useState, useRef } from 'react';
    import { Icon } from '@/components';
    import styles from './dropdown.module.css';

    export function Dropdown({ options, defaultValue, onSortChange, disabled = false }) {
      return (
        <div className={styles.dropdown}>
          <button className={styles.dropdownTrigger}>Dropdown</button>
        </div>
      );
    }
    ```

- [ ] **Добавить базовые стили**

  - Открыть `dropdown.module.css`
  - Добавить минимальные стили для видимости:

    ```css
    .dropdown {
      position: relative;
    }

    .dropdownTrigger {
      padding: 8px 16px;
      border: 1px solid #ccc;
      background: white;
      cursor: pointer;
    }
    ```

### 2.3. Добавление состояния

- [ ] **Добавить состояние открыт/закрыт**

  ```jsx
  const [isOpen, setIsOpen] = useState(false);
  ```

- [ ] **Добавить состояние выбранной сортировки**

  ```jsx
  const [selectedSort, setSelectedSort] = useState(() => {
    // Находим опцию по defaultValue
    return options.find((opt) => opt.value === defaultValue) || options[0];
  });
  ```

- [ ] **Добавить ref для контейнера**
  ```jsx
  const dropdownRef = useRef(null);
  ```

### 2.4. Реализация функций-обработчиков

- [ ] **Написать функцию переключения открыт/закрыт**

  ```jsx
  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  };
  ```

- [ ] **Написать функцию выбора варианта**
  ```jsx
  const handleSelect = (option) => {
    setSelectedSort(option);
    setIsOpen(false);
    onSortChange(option.value);
  };
  ```

### 2.5. Создание JSX-разметки

- [ ] **Обновить разметку кнопки-триггера**

  ```jsx
  <button className={styles.dropdownTrigger} onClick={toggleDropdown} disabled={disabled}>
    <Icon name={selectedSort.icon} />
    <span>{selectedSort.label}</span>
  </button>
  ```

- [ ] **Добавить выпадающее меню**
  ```jsx
  <div className={`${styles.dropdownMenu} ${isOpen ? styles.dropdownMenuOpen : ''}`}>
    {options.map((option) => (
      <button
        key={option.value}
        className={styles.dropdownItem}
        onClick={() => handleSelect(option)}>
        <Icon name={option.icon} />
        <span>{option.label}</span>
        {selectedSort.value === option.value && <Icon name='check' />}
      </button>
    ))}
  </div>
  ```

### 2.6. Стилизация компонента

- [ ] **Добавить стили для dropdownMenu**

  ```css
  .dropdownMenu {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
    z-index: 10;
  }

  .dropdownMenuOpen {
    opacity: 1;
    pointer-events: auto;
  }
  ```

- [ ] **Добавить стили для элементов списка**

  ```css
  .dropdownItem {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border: none;
    background: none;
    cursor: pointer;
    width: 100%;
    text-align: left;
  }

  .dropdownItem:hover {
    background-color: #f0f0f0;
  }
  ```

- [ ] **Добавить стили для переполнения**
  ```css
  .dropdownMenu {
    max-height: 300px;
    overflow-y: auto;
  }
  ```

### 2.7. Добавление закрытия при клике вне

- [ ] **Добавить хук useClickOutside**

  - Проверить, есть ли уже `src/hooks/useClickOutside.js`
  - Если есть — использовать его
  - Добавить в компонент:

    ```jsx
    import { useClickOutside } from '@/hooks/useClickOutside';

    useClickOutside(
      dropdownRef,
      () => {
        if (isOpen) setIsOpen(false);
      },
      isOpen,
    );
    ```

### 2.8. Тестирование Dropdown изолированно

- [ ] **Временно добавить Dropdown на страницу**

  - Открыть `src/pages/incomingTasks/IncomingTasks.jsx`
  - Создать тестовые данные:
    ```jsx
    const testOptions = [
      { value: 'test1', label: 'Вариант 1', icon: 'arrowDown', field: 'test', order: 'desc' },
      { value: 'test2', label: 'Вариант 2', icon: 'arrowUp', field: 'test', order: 'asc' },
    ];
    ```
  - Добавить компонент:
    ```jsx
    <Dropdown
      options={testOptions}
      defaultValue='test1'
      onSortChange={(value) => console.log('Выбрано:', value)}
    />
    ```

- [ ] **Проверить работу Dropdown**

  - Клик открывает/закрывает ✓
  - Выбор варианта работает ✓
  - Иконки отображаются ✓
  - Галочка показывается у выбранного ✓
  - Клик вне закрывает ✓

- [ ] **Удалить тестовый код после проверки**

**🎉 Чекпоинт 2**: Компонент Dropdown работает изолированно

---

## 📦 ЭТАП 3: Функция сортировки (30-60 мин)

### 3.1. Создание файла с функцией

- [ ] **Создать файл утилиты**

  - Создать `src/utils/sortTasks.js`

- [ ] **Написать функцию сортировки**

  ```js
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
  ```

### 3.2. Создание данных для вариантов сортировки

- [ ] **Создать файл с данными сортировки**

  - Создать `src/data/sortOptions.js` (или похожую папку)

- [ ] **Экспортировать массив вариантов**
  ```js
  export const sortOptions = [
    {
      value: 'priority-desc',
      label: 'Приоритету',
      icon: 'arrowDown',
      field: 'priority',
      order: 'desc',
    },
    {
      value: 'priority-asc',
      label: 'Приоритету',
      icon: 'arrowUp',
      field: 'priority',
      order: 'asc',
    },
    {
      value: 'title-desc',
      label: 'Алфавиту',
      icon: 'arrowDown',
      field: 'title',
      order: 'desc',
    },
    {
      value: 'title-asc',
      label: 'Алфавиту',
      icon: 'arrowUp',
      field: 'title',
      order: 'asc',
    },
    {
      value: 'createdAt-desc',
      label: 'Дате создания',
      icon: 'arrowDown',
      field: 'createdAt',
      order: 'desc',
    },
    {
      value: 'createdAt-asc',
      label: 'Дате создания',
      icon: 'arrowUp',
      field: 'createdAt',
      order: 'asc',
    },
    {
      value: 'updatedAt-desc',
      label: 'Дате обновления',
      icon: 'arrowDown',
      field: 'updatedAt',
      order: 'desc',
    },
    {
      value: 'updatedAt-asc',
      label: 'Дате обновления',
      icon: 'arrowUp',
      field: 'updatedAt',
      order: 'asc',
    },
  ];
  ```

### 3.3. Тестирование функции сортировки

- [ ] **Создать тестовые данные**

  - В консоли браузера или временно в коде
  - Создать массив тестовых задач с разными датами и приоритетами

- [ ] **Проверить все варианты сортировки**
  - `sortTasksBy(tasks, 'priority-desc')` — высокий приоритет сверху
  - `sortTasksBy(tasks, 'priority-asc')` — низкий приоритет сверху
  - `sortTasksBy(tasks, 'title-asc')` — по алфавиту А→Я
  - `sortTasksBy(tasks, 'createdAt-desc')` — новые сверху
  - И так далее

**🎉 Чекпоинт 3**: Функция сортировки работает корректно

---

## 📦 ЭТАП 4: Интеграция Dropdown со списком задач (1-2 часа)

**Примечание**: Dropdown уже создан и интегрирован в ContainerHeader, но нужно исправить интеграцию с сортировкой задач.

### 4.1. Анализ текущего состояния

- [x] **Dropdown уже интегрирован в ContainerHeader**
- [x] **TaskContext содержит задачи**
- [ ] **🚨 КРИТИЧНО: Исправить баг в Dropdown (открыт по умолчанию)**
- [ ] **🚨 КРИТИЧНО: Исправить несоответствие иконок в sortOptions.js**
- [ ] **🚨 КРИТИЧНО: Исправить несоответствие значений сортировки**
- [ ] **Добавить состояние сортировки в правильное место**
- [ ] **Применить сортировку к TaskList**

**ПРИОРИТЕТ ВЫПОЛНЕНИЯ:** Сначала исправляем критические проблемы, потом архитектуру!

### 4.2. Исправление критических проблем

**🚨 КРИТИЧЕСКИЕ ПРОБЛЕМЫ НАЙДЕНЫ:**

1. **Несоответствие иконок**: `sortOptions.js` использует `'arrowDown'`, но в `Icon.jsx` нет таких иконок
2. **Несоответствие значений**: `sortOptions.js` использует `'priority-desc'`, а `ContainerHeader.jsx` использует `'priorityDesc'`
3. **Баг в Dropdown**: открыт по умолчанию (`useState(true)`)

- [ ] **Исправить данные в sortOptions.js**

  - Открыть `src/components/data/sortOptions.js`
  - Заменить иконки на существующие:
    ```js
    export const sortOptions = [
      {
        value: 'priority-desc',
        label: 'Приоритету',
        icon: 'priorityDesc', // было 'arrowDown'
        field: 'priority',
        order: 'desc',
      },
      {
        value: 'priority-asc',
        label: 'Приоритету',
        icon: 'priorityAsc', // было 'arrowUp'
        field: 'priority',
        order: 'asc',
      },
      // ... остальные аналогично
    ];
    ```

- [ ] **Исправить баг в Dropdown.jsx**

  - Открыть `src/components/dropdown/Dropdown.jsx`
  - Изменить строку 6:
    ```jsx
    const [open, setOpen] = useState(false); // было true
    ```

- [ ] **Обновить ContainerHeader для использования правильных данных**

  - Открыть `src/components/containerHeader/ContainerHeader.jsx`
  - Заменить локальные `options` на импорт из `sortOptions.js`:
    ```jsx
    import { sortOptions } from '@/components/data/sortOptions';
    ```
  - Убрать локальный массив `options`
  - Исправить значение по умолчанию:
    ```jsx
    const [sort, setSort] = useState('createdAt-desc'); // вместо 'createdAtDesc'
    ```

### 4.3. Перемещение состояния сортировки в правильное место

- [ ] **Переместить состояние из ContainerHeader в MainContainer**

  - **Почему MainContainer?** Потому что он содержит и заголовок с Dropdown, и TaskList
  - ContainerHeader не должен управлять состоянием сортировки — это ответственность родительского компонента

- [ ] **Обновить MainContainer.jsx**

  ```jsx
  import { useState, useMemo, useContext } from 'react';
  import { TaskContext } from '@/context/TaskContext';
  import { sortTasksBy } from '@/utils/sortTasks';
  import { sortOptions } from '@/components/data/sortOptions';

  export function MainContainer() {
    const [sortBy, setSortBy] = useState('createdAt-desc');
    const { tasks } = useContext(TaskContext);

    const sortedTasks = useMemo(() => {
      return sortTasksBy(tasks, sortBy);
    }, [tasks, sortBy]);

    return (
      <main className={styles.mainContainer}>
        <ContainerHeader sortBy={sortBy} onSortChange={setSortBy} sortOptions={sortOptions} />
        <TaskList tasks={sortedTasks} />
      </main>
    );
  }
  ```

### 4.4. Обновление ContainerHeader

- [ ] **Убрать локальное состояние из ContainerHeader**
  ```jsx
  export function ContainerHeader({ sortBy, onSortChange, sortOptions }) {
    return (
      <div className={`${styles.containerHeader} flex justify-between items-center`}>
        <h1 className='heading-h1'>Входящие</h1>
        <Dropdown options={sortOptions} value={sortBy} onChange={onSortChange} />
      </div>
    );
  }
  ```

### 4.5. Обновление TaskList

- [ ] **Принимать отсортированные задачи как prop**

  ```jsx
  export function TaskList({ tasks }) {
    // Убрать получение tasks из контекста
    // const { tasks } = useContext(TaskContext); // удалить эту строку

    const hasTasks = Array.isArray(tasks) && tasks.length > 0;
    // остальной код остаётся тот же
  }
  ```

### 4.6. Тестирование интеграции

- [ ] **Проверить работу сортировки**

  - Запустить приложение
  - Выбрать разные варианты сортировки в Dropdown
  - Убедиться, что список задач пересортировывается
  - Проверить все 8 вариантов сортировки

- [ ] **Проверить edge cases**

  - Пустой список задач (должен показывать EmptyTask)
  - Одна задача
  - Задачи с одинаковыми значениями

- [ ] **Проверить производительность**
  - При большом количестве задач сортировка должна работать быстро
  - useMemo предотвращает ненужные пересортировки

### 4.7. Проверка соответствия данных

- [ ] **Проверить соответствие всех компонентов**

  **sortOptions.js должен содержать:**

  ```js
  { value: 'priority-desc', icon: 'priorityDesc' },
  { value: 'priority-asc', icon: 'priorityAsc' },
  { value: 'title-desc', icon: 'alphabeticalDesc' },
  { value: 'title-asc', icon: 'alphabeticalAsc' },
  { value: 'createdAt-desc', icon: 'createdAtDesc' },
  { value: 'createdAt-asc', icon: 'createdAtAsc' },
  { value: 'updatedAt-desc', icon: 'updatedAtDesc' },
  { value: 'updatedAt-asc', icon: 'updatedAtAsc' },
  ```

  **sortTasksBy должен понимать:**

  - `'priority-desc'`, `'priority-asc'`
  - `'title-desc'`, `'title-asc'`
  - `'createdAt-desc'`, `'createdAt-asc'`
  - `'updatedAt-desc'`, `'updatedAt-asc'`

- [ ] **Проверить, что все иконки существуют в Icon.jsx**
  - `priorityDesc`, `priorityAsc`
  - `alphabeticalDesc`, `alphabeticalAsc`
  - `createdAtDesc`, `createdAtAsc`
  - `updatedAtDesc`, `updatedAtAsc`
  - `checkDropdown`, `chevronDropdown`, `filterDropdown`

### 4.8. Отладка (если нужно)

- [ ] **Добавить временные console.log для проверки**

  ```jsx
  console.log('Текущая сортировка:', sortBy);
  console.log('Отсортированные задачи:', sortedTasks);
  console.log('Доступные опции:', sortOptions);
  ```

- [ ] **Проверить работу Dropdown**
  - Dropdown закрыт по умолчанию ✓
  - Клик открывает/закрывает ✓
  - Иконки отображаются ✓
  - Выбор варианта работает ✓

**🎉 Чекпоинт 4**: Dropdown интегрирован, сортировка работает корректно

---

## 📦 ЭТАП 5: Расширение TaskEditor для редактирования (3-4 часа)

### 5.1. Анализ текущего TaskEditor

- [x] **Изучить компонент TaskEditor**

  - ✅ Открыт `src/components/taskEditor/TaskEditor/TaskEditor.jsx`
  - ✅ Текущая структура: компонент без props, использует только контекст
  - ✅ Текущие props: отсутствуют

- [ ] **Определить, что нужно добавить**
  - ❌ Prop `type` (create/edit) - отсутствует
  - ❌ Prop `task` (данные задачи для редактирования) - отсутствует
  - ❌ Кнопка "Удалить" - отсутствует
  - ❌ Логика проверки изменений - упрощенная версия есть

### 5.2. Добавление новых props

- [ ] **Обновить сигнатуру компонента**

  ```jsx
  // БЫЛО:
  export const TaskEditor = () => {

  // ДОЛЖНО БЫТЬ:
  export const TaskEditor = ({ type = 'create', task = null }) => {
  ```

- [ ] **Добавить состояние для исходных данных (при редактировании)**
  ```jsx
  const [originalTask, setOriginalTask] = useState(task);
  ```

### 5.3. Логика инициализации полей

- [ ] **Обновить инициализацию состояния title**

  ```jsx
  const [title, setTitle] = useState(task?.title || '');
  ```

- [ ] **Обновить инициализацию состояния priority**

  ```jsx
  const [priority, setPriority] = useState(task?.priority || 1);
  ```

- [ ] **Добавить useEffect для обновления полей при смене task**
  ```jsx
  useEffect(() => {
    if (type === 'edit' && task) {
      setTitle(task.title);
      setPriority(task.priority);
      setOriginalTask(task);
    } else {
      setTitle('');
      setPriority(1);
      setOriginalTask(null);
    }
  }, [type, task]);
  ```
  - **Зачем?** Чтобы поля обновлялись при переключении между режимами

### 5.4. Функция проверки изменений

- [ ] **Написать функцию hasChanges**

  ```jsx
  const hasChanges = () => {
    if (type === 'create') return false;
    if (!originalTask) return false;

    return title.trim() !== originalTask.title || priority !== originalTask.priority;
  };
  ```

### 5.5. Обновление логики кнопки "Сохранить"

- [ ] **Обновить функцию handleCreate**

  - Переименовать в `handleSave`
  - Добавить `editTask` в деструктуризацию TaskContext
  - Добавить разветвление по `type`:

    ```jsx
    // В начале компонента:
    const { addTask, editTask } = useContext(TaskContext);

    // Функция handleSave:
    const handleSave = useCallback(() => {
      if (title.trim()) {
        if (type === 'edit' && task) {
          // Обновляем задачу
          editTask(task.id, {
            updatedFields: {
              title: title.trim(),
              priority,
            },
          });
        } else {
          // Создаём задачу
          addTask({ title: title.trim(), priority });
        }
        closeTaskEditor();
        // Очистка полей
        setTimeout(() => {
          setTitle('');
          setPriority(1);
        }, 500);
      }
    }, [title, priority, type, task, addTask, editTask, closeTaskEditor]);
    ```

- [ ] **Обновить условие disabled для кнопки**
  ```jsx
  disabled={
    !isTaskEditorOpen ||
    title.trim() === '' ||
    (type === 'edit' && !hasChanges())
  }
  ```

### 5.6. Добавление кнопки "Удалить"

- [ ] **Добавить функцию удаления**

  ```jsx
  // В начале компонента:
  const { addTask, editTask, deleteTask } = useContext(TaskContext);

  // Функция handleDelete:
  const handleDelete = useCallback(() => {
    if (type === 'edit' && task) {
      deleteTask(task.id);
      closeTaskEditor();
    }
  }, [type, task, deleteTask, closeTaskEditor]);
  ```

- [ ] **Обновить TaskEditorFooter**

  - Открыть `src/components/taskEditor/TaskEditorFooter/TaskEditorFooter.jsx`
  - ✅ Текущие props: `disabled`, `disabledCancel`, `handleCreate`, `handleCancel`
  - ❌ Нужно добавить props: `showDelete`, `onDelete`
  - ❌ Добавить кнопку "Удалить":
    ```jsx
    {
      showDelete && (
        <button className={styles.deleteButton} onClick={onDelete} aria-label='Удалить задачу'>
          Удалить
        </button>
      );
    }
    ```
  - ❌ Добавить стили для кнопки удаления (красная, опасное действие)

- [ ] **Передать props в TaskEditorFooter**
  ```jsx
  <TaskEditorFooter
    disabled={...}
    handleCreate={handleSave}
    handleCancel={handleCancel}
    showDelete={type === 'edit'}
    onDelete={handleDelete}
  />
  ```

### 5.7. Обновление заголовка

- [ ] **Изменить заголовок в зависимости от режима**

  - Открыть `TaskEditorHeader`
  - ✅ Текущий заголовок: жестко задан "Создание задачи"
  - ❌ Нужно добавить prop `title` или `mode`
  - ❌ Показывать "Создать задачу" или "Редактировать задачу"

- [ ] **Обновить TaskEditorHeader компонент**

  ```jsx
  // БЫЛО в TaskEditorHeader.jsx:
  export const TaskEditorHeader = forwardRef(
    ({ value, handleChange, onSubmit, disabled = false }, ref) => {
      // ...
      <h2 className={styles.taskFormHeader}>Создание задачи</h2>

  // ДОЛЖНО БЫТЬ:
  export const TaskEditorHeader = forwardRef(
    ({ value, handleChange, onSubmit, disabled = false, mode = 'create' }, ref) => {
      // ...
      <h2 className={styles.taskFormHeader}>
        {mode === 'edit' ? 'Редактирование задачи' : 'Создание задачи'}
      </h2>
  ```

- [ ] **Передать prop mode в TaskEditorHeader в TaskEditor.jsx**

  ```jsx
  <TaskEditorHeader
    value={title}
    handleChange={handleChange}
    onSubmit={handleSave}
    ref={inputRef}
    disabled={!isTaskEditorOpen}
    mode={type}
  />
  ```

### 5.8. Обновление TaskContext

- [ ] **Открыть TaskContext**

  - Файл `src/context/TaskContext.jsx`
  - ✅ Функция `editTask` уже существует с правильной сигнатурой
  - ❌ Функция `deleteTask` отсутствует

- [ ] **Добавить функцию deleteTask**

  ```jsx
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  ```

- [ ] **Обновить экспорт в value**

  ```jsx
  // БЫЛО:
  <TaskContext.Provider value={{ tasks, addTask, editTask }}>

  // ДОЛЖНО БЫТЬ:
  <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask }}>
  ```

### 5.9. Расширение TaskEditorContext

- [ ] **Открыть TaskEditorContext**

  - Файл `src/context/TaskEditorContext.jsx`
  - ✅ Текущее состояние: только `isTaskEditorOpen`, `openTaskEditor`, `closeTaskEditor`
  - ❌ Отсутствуют режимы редактирования

- [ ] **Добавить состояние для режима и задачи**

  ```jsx
  const [editorMode, setEditorMode] = useState('create');
  const [editingTask, setEditingTask] = useState(null);
  ```

- [ ] **Добавить функцию открытия для редактирования**

  ```jsx
  const openTaskEditorForEdit = (task) => {
    setEditingTask(task);
    setEditorMode('edit');
    setIsTaskEditorOpen(true);
  };
  ```

- [ ] **Обновить функцию открытия для создания**

  ```jsx
  const openTaskEditorForCreate = () => {
    setEditingTask(null);
    setEditorMode('create');
    setIsTaskEditorOpen(true);
  };
  ```

- [ ] **Обновить экспорт в value**

  ```jsx
  // БЫЛО:
  <TaskEditorContext.Provider value={{ isTaskEditorOpen, openTaskEditor, closeTaskEditor }}>

  // ДОЛЖНО БЫТЬ:
  <TaskEditorContext.Provider value={{
    isTaskEditorOpen,
    closeTaskEditor,
    openTaskEditorForEdit,
    openTaskEditorForCreate,
    editorMode,
    editingTask,
  }}>
  ```

- [ ] **Обновить использование в Content.jsx**

  ```jsx
  // В Content.jsx
  const { editorMode, editingTask } = useTaskEditor();

  <TaskEditor type={editorMode} task={editingTask} />;
  ```

### 5.10. Обновление Header.jsx

- [ ] **Обновить использование openTaskEditor в Header**

  ```jsx
  // БЫЛО:
  const { openTaskEditor, isTaskEditorOpen } = useTaskEditor();
  onClick={() => { openTaskEditor(); }}

  // ДОЛЖНО БЫТЬ:
  const { openTaskEditorForCreate, isTaskEditorOpen } = useTaskEditor();
  onClick={() => { openTaskEditorForCreate(); }}
  ```

**🎉 Чекпоинт 5**: TaskEditor поддерживает редактирование

---

## 📦 ЭТАП 6: Кнопка редактирования в TaskItem (1-2 часа)

### 6.1. Обновление TaskItem

- [ ] **Открыть компонент TaskItem**

  - Файл `src/components/taskList/TaskItem.jsx`
  - ✅ Текущие props: `title`, `priority`
  - ❌ Нужен весь объект `task` для получения `id`

- [ ] **Обновить сигнатуру компонента**

  ```jsx
  // БЫЛО:
  export function TaskItem({ title, priority }) {

  // ДОЛЖНО БЫТЬ:
  export function TaskItem({ task }) {
    const { title, priority, id } = task;
  ```

- [ ] **Импортировать необходимое**

  ```jsx
  import { Icon } from '@/components';
  import { useTaskEditor } from '@/context';
  ```

- [ ] **Получить функцию открытия редактора**
  ```jsx
  const { openTaskEditorForEdit } = useTaskEditor();
  ```

### 6.2. Добавление кнопки редактирования

- [ ] **Добавить обработчик клика**

  ```jsx
  const handleEdit = (e) => {
    e.stopPropagation(); // Чтобы не сработал клик на всей задаче
    openTaskEditorForEdit(task);
  };
  ```

- [ ] **Добавить кнопку в разметку**
  ```jsx
  <button className={styles.editButton} onClick={handleEdit} aria-label='Редактировать задачу'>
    <Icon name='taskEdit' />
  </button>
  ```
  - ⚠️ Важно: имя иконки `taskEdit`, а не `edit`

### 6.3. Стилизация кнопки

- [ ] **Добавить стили в taskItem.module.css**

  ```css
  .editButton {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.2s;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
  }

  .taskItem:hover .editButton {
    opacity: 1;
  }

  .editButton:hover {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .editButton:focus {
    opacity: 1;
    outline: 2px solid blue;
  }
  ```

### 6.4. Обновление TaskList

- [ ] **Открыть компонент TaskList**

  - Файл `src/components/taskList/TaskList.jsx`

- [ ] **Обновить передачу props в TaskItem**

  ```jsx
  // БЫЛО:
  <TaskItem key={task.id} title={task.title} priority={task.priority} />

  // ДОЛЖНО БЫТЬ:
  <TaskItem key={task.id} task={task} />
  ```

### 6.5. Обновление кнопки "Создать" в Header (уже сделано в 5.10)

- [x] **Обновление выполнено в разделе 5.10**

**🎉 Чекпоинт 6**: Кнопка редактирования работает

---

## 📦 ЭТАП 7: Финальная полировка (1-2 часа)

### 7.1. Стилизация и эффекты

- [ ] **Проверить все :hover эффекты**

  - Dropdown кнопка
  - Элементы списка Dropdown
  - Кнопка редактирования
  - Кнопки в TaskEditor

- [ ] **Проверить все :focus эффекты**

  - Должна быть видимая рамка фокуса
  - Проверить навигацию с клавиатуры (Tab)

- [ ] **Проверить :active эффекты**

  - Визуальная обратная связь при клике

- [ ] **Проверить стиль выбранного элемента в Dropdown**
  - Должен отличаться от других
  - Галочка должна быть видна

### 7.2. Анимации

- [ ] **Проверить анимацию открытия Dropdown**

  - Плавное появление (opacity 0 → 1)
  - Длительность 0.2s

- [ ] **Проверить анимацию TaskEditor**
  - Выезжание справа
  - Переключение между режимами

### 7.3. Переполнение контентом

- [ ] **Проверить Dropdown с длинным списком**

  - Должна появиться прокрутка
  - max-height должен работать

- [ ] **Проверить TaskEditor с длинным текстом**

  - Текст не должен вылезать за границы

- [ ] **Проверить список задач с большим количеством**
  - Прокрутка работает
  - Производительность не страдает

### 7.4. Тестирование сценариев

- [ ] **Сценарий 1: Создание → Редактирование**

  - Открыть TaskEditor для создания
  - Начать вводить текст
  - Кликнуть на кнопку редактирования задачи
  - Проверить: TaskEditor переключился в режим редактирования
  - Проверить: Поля заполнились данными задачи
  - Проверить: Несохранённые данные создания потерялись (это нормально)

- [ ] **Сценарий 2: Редактирование → Создание**

  - Открыть TaskEditor для редактирования
  - Изменить что-то
  - Кликнуть на кнопку "Создать" в Header
  - Проверить: TaskEditor переключился в режим создания
  - Проверить: Поля очистились
  - Проверить: Кнопка "Удалить" исчезла

- [ ] **Сценарий 3: Сохранение редактирования**

  - Отредактировать задачу
  - Нажать "Сохранить"
  - Проверить: Задача обновилась в списке
  - Проверить: updatedAt изменился
  - Проверить: id и createdAt не изменились

- [ ] **Сценарий 4: Отмена редактирования**

  - Отредактировать задачу
  - Нажать "Отмена"
  - Проверить: Изменения не применились
  - Проверить: TaskEditor закрылся

- [ ] **Сценарий 5: Удаление задачи**

  - Открыть задачу для редактирования
  - Нажать "Удалить"
  - Проверить: Задача удалилась из списка
  - Проверить: TaskEditor закрылся

- [ ] **Сценарий 6: Сортировка**
  - Создать несколько задач
  - Выбрать разные варианты сортировки
  - Проверить: Список пересортировывается корректно

### 7.5. Проверка edge cases

- [ ] **Пустой список задач**

  - Dropdown должен работать
  - Не должно быть ошибок

- [ ] **Задача с пустым title (не должно быть возможности)**

  - Кнопка "Сохранить" disabled

- [ ] **Редактирование без изменений**

  - Кнопка "Сохранить" disabled

- [ ] **Быстрое переключение между задачами**
  - Не должно быть "гонки" состояний

### 7.6. Доступность (a11y)

- [ ] **Добавить aria-атрибуты в Dropdown**

  ```jsx
  <button
    aria-expanded={isOpen}
    aria-haspopup="listbox"
  >

  <div role="listbox">
    <button role="option" aria-selected={...}>
  ```

- [ ] **Проверить навигацию с клавиатуры**
  - Tab переходит между элементами
  - Enter активирует кнопки
  - Escape закрывает Dropdown

### 7.7. Финальная проверка по макету

- [ ] **Открыть макет рядом с приложением**
- [ ] **Проверить расположение всех элементов**
- [ ] **Проверить размеры, отступы, шрифты**
- [ ] **Проверить цвета**
- [ ] **Проверить поведение интерактивных элементов**

**🎉 Чекпоинт 7**: Всё работает и выглядит как в макете!

---

## 📦 ЭТАП 8: Коммит и завершение

### 8.1. Проверка кода

- [ ] **Удалить все console.log**
- [ ] **Удалить закомментированный код**
- [ ] **Проверить, что нет неиспользуемых импортов**
- [ ] **Проверить форматирование кода**

### 8.2. Проверка работы приложения

- [ ] **Перезапустить dev-сервер**
- [ ] **Пройтись по всем функциям ещё раз**
- [ ] **Убедиться, что нет ошибок в консоли**

### 8.3. Коммит изменений

- [ ] **Посмотреть изменённые файлы**

  ```bash
  git status
  ```

- [ ] **Добавить файлы в staging**

  ```bash
  git add .
  ```

- [ ] **Сделать коммит**

  ```bash
  git commit -m "feat: add Dropdown component and TaskEditor edit mode

  - Add Dropdown component with sorting functionality
  - Add arrow icons (up/down) and check icon
  - Implement sortTasksBy utility function
  - Integrate Dropdown with task list
  - Extend TaskEditor to support edit mode
  - Add edit button to TaskItem (shows on hover)
  - Add delete functionality for tasks
  - Update TaskContext with updateTask and deleteTask
  - Add animations and hover effects
  "
  ```

### 8.4. Слияние с основной веткой

- [ ] **Проверить, на какой ветке ты находишься**

  ```bash
  git branch
  ```

  - Должно показать `* task-4-dropdown-and-edit` (звёздочка = текущая ветка)

- [ ] **Переключиться на основную ветку**

  ```bash
  git checkout main
  ```

  - Или `git checkout master` (зависит от названия основной ветки)
  - **Важно**: Убедись, что знаешь название основной ветки!

- [ ] **Обновить основную ветку (если работаешь в команде)**

  ```bash
  git pull origin main
  ```

  - Это получит последние изменения от других разработчиков
  - Если работаешь один — можно пропустить

- [ ] **Слить ветку task-4 в основную ветку**

  ```bash
  git merge task-4-dropdown-and-edit
  ```

  - Это применит все изменения из твоей ветки к основной

- [ ] **Проверить, что слияние прошло успешно**

  - Если Git пишет "Fast-forward" или "Already up to date" — отлично! ✅
  - Если появились конфликты — см. раздел "Решение конфликтов" ниже

- [ ] **Запустить приложение и проверить, что всё работает**

  ```bash
  npm run dev
  ```

  - Убедись, что ничего не сломалось после слияния

- [ ] **Отправить изменения на удалённый репозиторий (если используешь)**

  ```bash
  git push origin main
  ```

  - Это загрузит изменения на GitHub/GitLab

- [ ] **Удалить ветку task-4 (опционально)**
  ```bash
  git branch -d task-4-dropdown-and-edit
  ```
  - Ветка больше не нужна, задача выполнена
  - Можно оставить, если хочешь сохранить историю

**📝 Решение конфликтов (если появились):**

Если при слиянии Git сообщает о конфликтах:

1. **Посмотреть, какие файлы конфликтуют**

   ```bash
   git status
   ```

2. **Открыть конфликтующий файл**

   - Увидишь метки:
     ```
     <<<<<<< HEAD
     (код из основной ветки)
     =======
     (твой код из ветки task-4)
     >>>>>>> task-4-dropdown-and-edit
     ```

3. **Выбрать нужный вариант**

   - Удали метки и оставь правильный код
   - Сохрани файл

4. **Добавить разрешённый конфликт**

   ```bash
   git add <имя_файла>
   ```

5. **Завершить слияние**
   ```bash
   git commit
   ```

### 8.5. Обновление документации

- [ ] **Обновить README.md (если нужно)**

  - Добавить информацию о новых компонентах

- [ ] **Отметить выполненные задачи в requirements.md**

### 8.6. Финальная проверка

- [ ] **Прочитать задание ещё раз**
- [ ] **Убедиться, что всё реализовано**
- [ ] **Если есть что-то дополнительное — отметить**
- [ ] **Убедиться, что находишься на основной ветке (`main`)**
  ```bash
  git branch
  ```
  - Должно показать `* main` (не task-4)

---

## ✅ Готово!

Поздравляю! Ты реализовал сложную задачу:

- ✅ Компонент Dropdown с 8 вариантами сортировки
- ✅ Функцию сортировки с учётом направления
- ✅ Режим редактирования для TaskEditor
- ✅ Кнопку редактирования в списке задач
- ✅ Функции обновления и удаления задач

**Что дальше?**

- Можно перейти к следующей задаче
- Или добавить адаптивную вёрстку для Dropdown

---

## 📝 Заметки в процессе работы

(Здесь ты можешь записывать возникшие вопросы, проблемы или идеи)

-
-
- ***

## 🐛 Найденные баги или проблемы

(Если что-то не работает — запиши здесь для исправления)

-
-
- ***

  **Удачи в реализации! Помни: работай последовательно, проверяй каждый этап, задавай вопросы! 🚀**
