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

///////////////

Поумничал и вынес все стили шрифтов в файл typography.css, теперь приходиться подключать стили в каждом модуле через шаблонные строки: className={`${styles.button} ${typography.buttonText}`}

или вот так:

className={[
typographyStyles.headingH1,
additionalStyles.specialHeading
].join(' ')}.

А ещё можно сделать утилиту:

export function cn(...classes: (string | false | null | undefined)[]): string {
return classes.filter(Boolean).join(' ');
}

и писать стили в компонентах вот так:
className={cn(styles.button, typography.buttonText, isPrimary && styles.primary)}.

Но так ведь нельзя, это похоже на стороннюю библиотеку cn)))).
