# Реализация Sprint 1, Task 4

## Обзор

Реализован функционал сортировки задач и редактирования существующих задач.

**Что добавлено:**

- Компонент `Dropdown` для выбора типа сортировки
- Функция `sortTasksBy` для сортировки массива задач
- Расширение `TaskEditor` для поддержки режима редактирования
- Кнопка редактирования в `TaskItem`
- Метод `deleteTask` в контексте задач

---

## Архитектура

### 1. Компонент Dropdown

**Расположение:** `src/components/dropdown/Dropdown.jsx`

**Принцип работы:**

- Контролируемый компонент (получает `value` и `onChange`)
- Отображает список из 8 вариантов сортировки
- Закрывается при клике вне (хук `useClickOutside`)
- Анимация появления через `opacity` за 200ms

**Props:**

```javascript
{
  options: Array,     // Массив вариантов сортировки
  value: string,      // Текущее значение (например: 'createdAtDesc')
  onChange: function, // Callback при выборе варианта
  disabled: boolean   // Отключить компонент
}
```

**Структура варианта сортировки:**

```javascript
{
  value: 'priorityDesc',     // Уникальный ID (формат: fieldOrder)
  label: 'Приоритету',       // Текст для отображения
  icon: 'priorityDesc',      // Иконка для этого варианта
  field: 'priority',         // Поле для сортировки
  order: 'desc'              // Направление: 'asc' или 'desc'
}
```

**Важно:** Формат значений — **camelCase** (priorityDesc, titleAsc), а не kebab-case.

---

### 2. Функция сортировки

**Расположение:** `src/utils/sortTasks.js`

**Сигнатура:**

```javascript
sortTasksBy(tasks: Array, sortValue: string): Array
```

**Принцип работы:**

1. Парсит значение через `.endsWith('Desc')` или `.endsWith('Asc')`
2. Извлекает имя поля: `'priorityDesc'` → `field='priority'`, `order='desc'`
3. Применяет соответствующую логику сортировки
4. Возвращает новый отсортированный массив

**Поддерживаемые поля:**

- `priority` — сортировка по числовому приоритету (1-3)
- `title` — сортировка по алфавиту (с учётом русской локали)
- `createdAt` — сортировка по дате создания
- `updatedAt` — сортировка по дате последнего изменения

**Пример:**

```javascript
const sorted = sortTasksBy(tasks, 'priorityDesc');
// Результат: задачи с priority=3 в начале, priority=1 в конце
```

---

### 3. TaskEditor в режиме редактирования

**Расположение:** `src/components/taskEditor/TaskEditor/TaskEditor.jsx`

**Режимы работы:**

- `create` — создание новой задачи (по умолчанию)
- `edit` — редактирование существующей задачи

**Принцип работы:**

TaskEditor **НЕ принимает props** напрямую. Вместо этого использует контекст `TaskEditorContext`:

```javascript
const { editorMode, editingTask } = useTaskEditor();
```

**Логика инициализации:**

- При `editorMode === 'edit'` — поля заполняются данными из `editingTask`
- При `editorMode === 'create'` — поля очищаются

**Проверка изменений:**

```javascript
const hasChanges = () => {
  if (currentType === 'create') return title.trim() !== '';
  if (!originalTask) return false;

  return title.trim() !== originalTask.title || priority !== originalTask.priority;
};
```

**Кнопка "Сохранить":**

- В режиме `create`: активна, если `title` не пустой
- В режиме `edit`: активна, если есть изменения (`hasChanges()`)

**Кнопка "Удалить":**

- Отображается только в режиме `edit`
- Вызывает `deleteTask(id)` из контекста

---

### 4. TaskEditorContext

**Расположение:** `src/context/TaskEditorContext.jsx`

**Состояние:**

```javascript
{
  isTaskEditorOpen: boolean,
  editorMode: 'create' | 'edit',
  editingTask: Object | null
}
```

**Методы:**

- `openTaskEditor(mode, task)` — универсальный метод открытия
- `openTaskEditorForEdit(task)` — удобная обёртка для редактирования
- `closeTaskEditor()` — закрывает редактор и сбрасывает состояние

---

### 5. TaskContext

**Расположение:** `src/context/TaskContext.jsx`

**Методы:**

```javascript
// Создание задачи
addTask({ title, priority });

// Редактирование задачи
editTask(id, { updatedFields: { title, priority } });

// Удаление задачи
deleteTask(id);
```

**Важно:** При редактировании автоматически обновляется поле `updatedAt`.

---

## Поток данных

### Сортировка задач

```
MainContainer
  ↓
  useState('createdAtDesc') ─→ sortBy
  ↓
  useMemo(() => sortTasksBy(tasks, sortBy))
  ↓
  sortedTasks ─→ TaskList


  sortBy ─→ ContainerHeader ─→ Dropdown
  ↑
  onChange callback
```

**Ключевой момент:** Используется `useMemo` для оптимизации — сортировка происходит только при изменении `tasks` или `sortBy`.

---

### Редактирование задачи

```
TaskItem
  ↓
  handleEdit: openTaskEditorForEdit(task)
  ↓
TaskEditorContext
  - editorMode = 'edit'
  - editingTask = task
  - isTaskEditorOpen = true
  ↓
TaskEditor
  ↓
  useEffect: заполняет поля данными из editingTask
  ↓
  Пользователь изменяет данные
  ↓
  handleSave: editTask(id, { updatedFields })
  ↓
TaskContext
  ↓
  Обновляет задачу в массиве tasks
```

---

## Примеры использования

### 1. Интеграция Dropdown

```jsx
import { Dropdown } from '@/components/dropdown';
import { sortOptions } from '@/components/data/sortOptions';

function MyComponent() {
  const [sortBy, setSortBy] = useState('createdAtDesc');

  return <Dropdown options={sortOptions} value={sortBy} onChange={setSortBy} />;
}
```

### 2. Применение сортировки

```jsx
import { sortTasksBy } from '@/utils/sortTasks';

const sortedTasks = useMemo(() => {
  return sortTasksBy(tasks, sortBy);
}, [tasks, sortBy]);
```

### 3. Открытие редактора для редактирования

```jsx
import { useTaskEditor } from '@/context/TaskEditorContext';

function TaskItem({ task }) {
  const { openTaskEditorForEdit } = useTaskEditor();

  const handleEdit = () => {
    openTaskEditorForEdit(task);
  };

  return <button onClick={handleEdit}>Редактировать</button>;
}
```

### 4. Открытие редактора для создания

```jsx
import { useTaskEditor } from '@/context/TaskEditorContext';

function Header() {
  const { openTaskEditor } = useTaskEditor();

  const handleCreate = () => {
    openTaskEditor('create');
  };

  return <button onClick={handleCreate}>Создать задачу</button>;
}
```

---

## Ключевые архитектурные решения

### 1. Контролируемый Dropdown

**Решение:** Dropdown не управляет своим состоянием сортировки.

**Почему:** Состояние сортировки нужно в `MainContainer` для пересортировки задач. Если Dropdown будет неконтролируемым, синхронизация усложнится.

**Альтернатива:** Хранить состояние в контексте, но это излишне для локальной функциональности.

---

### 2. Формат значений: camelCase вместо kebab-case

**Решение:** Значения сортировки в формате `priorityDesc`, а не `priority-desc`.

**Почему:**

- Проще парсить через `.endsWith('Desc')`
- Меньше операций split/join
- Консистентность с именованием в JavaScript

**Недостаток:** Менее читаемо, но это внутренняя деталь.

---

### 3. TaskEditor через контекст, а не props

**Решение:** TaskEditor получает режим и данные из `TaskEditorContext`, а не через props.

**Почему:**

- Упрощает API компонента (не нужно пробрасывать props через несколько уровней)
- Единая точка управления состоянием редактора
- Любой компонент может открыть редактор без прокидывания callback'ов

**Недостаток:** Контекст сложнее тестировать, но для этого приложения это приемлемо.

---

### 4. useMemo для сортировки

**Решение:** Сортированный массив обёрнут в `useMemo`.

**Почему:**

- Сортировка — дорогая операция для больших списков
- Предотвращает лишние пересортировки при ререндерах
- Сортировка происходит только при изменении `tasks` или `sortBy`

**Важно:** Без `useMemo` сортировка выполнялась бы на каждый рендер родительского компонента.

---

### 5. Проверка изменений перед сохранением

**Решение:** Кнопка "Сохранить" неактивна, если в режиме редактирования нет изменений.

**Почему:**

- Предотвращает лишние обновления `updatedAt`
- Даёт визуальную обратную связь пользователю
- Улучшает UX (понятно, что изменений нет)

**Реализация:** Сравнение текущих значений с `originalTask`.

---

## Структура файлов

```
src/
  components/
    dropdown/
      Dropdown.jsx              # Компонент выпадающего списка
      dropdown.module.css
      index.js

    data/
      sortOptions.js            # Конфигурация вариантов сортировки

    taskEditor/
      TaskEditor/
        TaskEditor.jsx          # Основной компонент (расширен для edit)
      TaskEditorHeader/
        TaskEditorHeader.jsx    # Меняет заголовок по типу
      TaskEditorBody/
        TaskEditorBody.jsx
      TaskEditorFooter/
        TaskEditorFooter.jsx    # Добавлена кнопка "Удалить"

    taskList/
      TaskItem.jsx              # Добавлена кнопка редактирования
      TaskList.jsx

  context/
    TaskContext.jsx             # Добавлены editTask, deleteTask
    TaskEditorContext.jsx       # Добавлены режимы работы

  utils/
    sortTasks.js                # Функция сортировки

  containers/
    mainContainer/
      MainContainer.jsx         # Управляет сортировкой
```

---

## Варианты сортировки

Всего **8 вариантов** (4 поля × 2 направления):

| Value           | Описание                        | Иконка           |
| --------------- | ------------------------------- | ---------------- |
| `priorityDesc`  | Приоритет: высокий → низкий     | priorityDesc     |
| `priorityAsc`   | Приоритет: низкий → высокий     | priorityAsc      |
| `titleDesc`     | Алфавит: Я → А                  | alphabeticalDesc |
| `titleAsc`      | Алфавит: А → Я                  | alphabeticalAsc  |
| `createdAtDesc` | Дата создания: новые → старые   | createdAtDesc    |
| `createdAtAsc`  | Дата создания: старые → новые   | createdAtAsc     |
| `updatedAtDesc` | Дата обновления: новые → старые | updatedAtDesc    |
| `updatedAtAsc`  | Дата обновления: старые → новые | updatedAtAsc     |

**По умолчанию:** `createdAtDesc` (новые задачи сверху)

---

## Особенности реализации

### Анимация Dropdown

Используется двухфазная анимация:

1. Элемент рендерится (`open = true`)
2. Через 10ms добавляется класс для видимости (`isVisible = true`)
3. CSS transition по `opacity` за 200ms

Это создаёт плавное появление.

---

### Кнопка редактирования с загрузкой

В `TaskItem` добавлена имитация задержки (1 секунда) при клике на редактирование:

- Показывается иконка загрузки
- Кнопка становится неактивной
- Создаёт ощущение "серьёзности" действия

Это можно убрать или заменить на реальный запрос к API.

---

### Проверка несохранённых изменений

При попытке закрыть TaskEditor:

- Проверяется `hasChanges()`
- Если есть изменения → показывается модальное окно
- Пользователь выбирает: сохранить, отменить или закрыть без сохранения

Это предотвращает случайную потерю данных.

---

## Возможные улучшения

1. **Сохранение выбранной сортировки:**

   - Хранить `sortBy` в localStorage
   - Восстанавливать при перезагрузке страницы

2. **Групповая сортировка:**

   - Сортировать по нескольким полям (например: приоритет + дата)

3. **Анимация пересортировки:**

   - Плавное перемещение элементов списка при смене сортировки
   - Можно использовать библиотеку типа `react-flip-move`

4. **Keyboard navigation в Dropdown:**

   - Стрелки вверх/вниз для навигации
   - Enter для выбора
   - Escape для закрытия

5. **Undo для удаления:**
   - После удаления задачи показывать snackbar с кнопкой "Отменить"
   - Хранить удалённые задачи во временном буфере

---

## Заключение

Реализация выполнена с соблюдением принципов:

- **Единственная ответственность** — каждый компонент делает одно дело
- **Контролируемые компоненты** — состояние управляется родителем
- **Оптимизация** — useMemo предотвращает лишние вычисления
- **UX** — проверка изменений, анимации, обратная связь

Код готов к расширению и поддержке.
