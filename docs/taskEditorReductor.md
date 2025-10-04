# Логика работы TaskEditor в режиме редактирования

## 🎯 Цель этапа

Расширить существующий TaskEditor для поддержки двух режимов работы:

- **Режим создания** (`type: 'create'`) - создание новой задачи
- **Режим редактирования** (`type: 'edit'`) - редактирование существующей задачи

## 📋 План реализации

### 1. Анализ текущего состояния

**Что у нас есть сейчас:**

- TaskEditor работает только в режиме создания
- Компонент не принимает props
- Есть базовая логика проверки несохраненных изменений
- TaskContext предоставляет методы `addTask` и `editTask`

**Что нужно добавить:**

- Поддержку props `type` и `task`
- Логику инициализации полей при редактировании
- Улучшенную проверку изменений
- Кнопку "Удалить" для режима редактирования

### 2. Изменения в сигнатуре компонента

**Текущая сигнатура:**

```jsx
export const TaskEditor = () => {
```

**Новая сигнатура:**

```jsx
export const TaskEditor = ({ type = 'create', task = null }) => {
```

**Объяснение:**

- `type` - определяет режим работы ('create' или 'edit')
- `task` - объект задачи для редактирования (null для создания)
- Значения по умолчанию обеспечивают обратную совместимость

### 3. Логика инициализации состояния

**Проблема:** Сейчас поля инициализируются пустыми значениями, но при редактировании нужно заполнить их данными задачи.

**Решение - добавить состояние для исходных данных:**

```jsx
const [originalTask, setOriginalTask] = useState(task);
```

**Обновить инициализацию полей:**

```jsx
const [title, setTitle] = useState(task?.title || '');
const [priority, setPriority] = useState(task?.priority || 1);
```

**Добавить useEffect для синхронизации:**

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

**Зачем это нужно:**

- При переключении между режимами поля автоматически обновляются
- Исходные данные сохраняются для сравнения изменений

### 4. Улучшенная проверка изменений

**Текущая логика:**

```jsx
const hasUnsavedChanges = () => {
  return title.trim() !== '';
};
```

**Новая логика:**

```jsx
const hasChanges = () => {
  if (type === 'create') return title.trim() !== '';
  if (!originalTask) return false;

  return title.trim() !== originalTask.title || priority !== originalTask.priority;
};
```

**Объяснение:**

- В режиме создания: есть изменения, если поле не пустое
- В режиме редактирования: есть изменения, если текущие значения отличаются от исходных
- Сравниваем только title и priority (основные редактируемые поля)

### 5. Универсальная функция сохранения

**Текущая функция:**

```jsx
const handleCreate = useCallback(() => {
  if (title.trim()) {
    addTask({ title: title.trim(), priority });
    // ... закрытие и очистка
  }
}, [title, priority, addTask, closeTaskEditor]);
```

**Новая функция:**

```jsx
const handleSave = useCallback(() => {
  if (title.trim()) {
    if (type === 'edit' && task) {
      // Режим редактирования
      editTask(task.id, {
        updatedFields: {
          title: title.trim(),
          priority,
        },
      });
    } else {
      // Режим создания
      addTask({ title: title.trim(), priority });
    }

    closeTaskEditor();
    // Очистка полей после успешного сохранения
    setTimeout(() => {
      setTitle('');
      setPriority(1);
    }, 500);
  }
}, [title, priority, type, task, addTask, editTask, closeTaskEditor]);
```

**Ключевые изменения:**

- Переименована в `handleSave` (более универсальное название)
- Добавлено разветвление по типу операции
- Для редактирования используется `editTask` с правильной структурой данных
- Логика очистки полей остается общей

### 6. Обновление контекста TaskEditor

**Текущий контекст:**

```jsx
const { isTaskEditorOpen, openTaskEditor, closeTaskEditor } = useTaskEditor();
```

**Нужно расширить для поддержки режимов:**

```jsx
// В TaskEditorContext.jsx
const [editorMode, setEditorMode] = useState('create');
const [editingTask, setEditingTask] = useState(null);

const openTaskEditor = (mode = 'create', task = null) => {
  setEditorMode(mode);
  setEditingTask(task);
  setTaskEditorOpen(true);
};

// В TaskEditor.jsx
const { isTaskEditorOpen, openTaskEditor, closeTaskEditor, editorMode, editingTask } =
  useTaskEditor();
```

**Альтернативный подход (проще):**
Передавать режим и задачу через props при рендере компонента.

### 7. Логика кнопки "Удалить"

**Добавить в TaskContext метод удаления:**

```jsx
const deleteTask = (id) => {
  setTasks((prev) => prev.filter((task) => task.id !== id));
};
```

**Добавить в TaskEditor:**

```jsx
const { addTask, editTask, deleteTask } = useContext(TaskContext);

const handleDelete = useCallback(() => {
  if (type === 'edit' && task) {
    deleteTask(task.id);
    closeTaskEditor();
  }
}, [type, task, deleteTask, closeTaskEditor]);
```

**Передать в TaskEditorFooter:**

```jsx
<TaskEditorFooter
  type={type}
  disabled={title.trim() === '' || !isTaskEditorOpen}
  disabledCancel={!isTaskEditorOpen}
  handleSave={handleSave}
  handleCancel={handleCancel}
  handleDelete={handleDelete}
/>
```

### 8. Обновление компонентов-потомков

**TaskEditorHeader:**

- Обновить текст кнопки в зависимости от режима
- "Создать" для режима создания, "Сохранить" для редактирования

**TaskEditorFooter:**

- Добавить кнопку "Удалить" (только для режима редактирования)
- Обновить обработчики событий

### 9. Интеграция с TaskList

**В TaskItem добавить обработчик редактирования:**

```jsx
const handleEdit = () => {
  openTaskEditor('edit', task);
};
```

**Передать в TaskEditIcon:**

```jsx
<TaskEditIcon onClick={handleEdit} />
```

## 🔄 Алгоритм работы

### Режим создания:

1. Пользователь нажимает кнопку "Создать задачу"
2. Открывается TaskEditor с пустыми полями
3. Пользователь заполняет поля
4. Нажимает "Создать" → вызывается `addTask`
5. Задача добавляется в список, редактор закрывается

### Режим редактирования:

1. Пользователь нажимает иконку редактирования у задачи
2. Открывается TaskEditor с заполненными полями
3. Пользователь изменяет данные
4. Нажимает "Сохранить" → вызывается `editTask`
5. Задача обновляется в списке, редактор закрывается

### Проверка изменений:

- При попытке закрыть редактор проверяется `hasChanges()`
- Если есть изменения → показывается модальное окно подтверждения
- Пользователь может сохранить, отменить или закрыть без сохранения

## 🎯 Ключевые принципы

1. **Обратная совместимость** - существующий код продолжает работать
2. **Единый интерфейс** - один компонент для создания и редактирования
3. **Безопасность данных** - проверка изменений перед закрытием
4. **Консистентность** - одинаковое поведение в обоих режимах
5. **Простота использования** - минимальные изменения в существующем коде

## 🚀 Следующие шаги

1. Реализовать изменения в TaskEditor
2. Обновить TaskEditorContext (если нужно)
3. Добавить метод deleteTask в TaskContext
4. Обновить TaskEditorFooter для поддержки кнопки удаления
5. Интегрировать с TaskList для запуска режима редактирования
6. Протестировать оба режима работы
