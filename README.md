# TaskanaApp

- Имя: Vitaly
- Ник: Vitalga108

## Описание проекта

TaskanaApp1 - это веб-приложение, разработанное с использованием React и Vite. Проект представляет собой современное приложение для управления задачами.

## Установка и настройка

### Предварительные требования

- Node.js (рекомендуется версия 18 или выше)
- npm (поставляется вместе с Node.js)

### Установка зависимостей

npm install

### Запуск в режиме разработки

npm run dev

После запуска приложение будет доступно по адресу: http://localhost:5173

### Сборка проекта

npm run build

Собранная версия будет находиться в директории `dist/`

ThemeToggle.jsx, CreateAndTheme.jsx используются только в хедере,
поэтому размещены в папке header (не в общих компонентах).

///////////////

Поумничал и вынес все стили шрифтов в файл typography.css, теперь приходиться прописывать стили в каждом модуле через шаблонные строки: className={`${styles.button} ${typography.buttonText}`}, className={`heading-h1 ${isActive ? 'active' : ''}`}, className={styles.button + ' heading-h1'}

или вот так:

className={[
typographyStyles.headingH1,
additionalStyles.specialHeading
].join(' ')}.

Подключать typography.css в каждый компонент не надо, т.к. он подключен глобально в App.jsx

А ещё можно сделать утилиту и поместить её в папку utils:

export function cn(...classes: (string | false | null | undefined)[]): string {
return classes.filter(Boolean).join(' ');
}

и писать стили в компонентах вот так:
className={cn(styles.button, typography.buttonText, isPrimary && styles.primary)}.

Но так ведь нельзя, это похоже на стороннюю библиотеку cn и будет расценено как хулиганство).

Statistic.jsx пока никак не задействовал, потом проясниться как его использовать.

EmptyTask.jsx сделал вручную, хотя можно было просто установить картинку и все. Я подозревал какой-то скрытый смысл, типа галочки будут ставиться на выполненных заданиях. Потом, если не понадобиться, уберу лишнюю верстку и вставлю картинку, тем более, что галочек нет красных.
