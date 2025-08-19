const questions = [
    {
        question: 'Что такое JSX в React?',
        options: [
            'Расширение синтаксиса JavaScript для описания UI',
            'Новый язык программирования',
            'Фреймворк для работы с сервером',
            'Формат сериализации данных',
        ],
        correctAnswer: 0,
    },
    {
        question:
            'Какой хук используется для управления состоянием в функциональных компонентах?',
        options: ['useEffect', 'useContext', 'useState', 'useReducer'],
        correctAnswer: 2,
    },
    {
        question:
            'Какой метод используется для рендера React-приложения в DOM?',
        options: [
            'React.render()',
            'ReactDOM.render()',
            'renderDOM()',
            'createRoot()',
        ],
        correctAnswer: 1,
    },
    {
        question: 'Что делает хук useEffect?',
        options: [
            'Управляет состоянием',
            'Обрабатывает побочные эффекты',
            'Создаёт новый компонент',
            'Управляет контекстом',
        ],
        correctAnswer: 1,
    },
    {
        question: 'Что такое Virtual DOM?',
        options: [
            'Настоящий DOM браузера',
            'Копия DOM, созданная для оптимизации обновлений',
            'Фреймворк для работы с HTML',
            'Инструмент для отладки React',
        ],
        correctAnswer: 1,
    },
]

export { questions }
