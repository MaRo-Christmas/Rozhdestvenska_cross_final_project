# 📱 Культурний мобільний застосунок

## Опис проєкту

Це мобільний застосунок для відвідувачів культурних подій у місті. Проєкт розроблений у межах навчального курсу та є вдосконаленою версією початкового застосунку з розширеним функціоналом і покращеним інтерфейсом.

---

## Аналіз наявного застосунку

У початковій версії (\_cross_assignment_7) застосунок мав базову навігацію та екран перегляду подій. Основна функціональність:

- Перегляд усіх івентів.
- Детальна сторінка події.
- Можливість додати подію в обране.

### Виявлені зони для розширення:

- Відсутність можливості фільтрувати події за категоріями.
- Відсутній розділ для перегляду минулих подій.
- Відсутній екран реєстрації для участі у подіях.
- Недостатньо інформації про локацію та контакти.

---

## Внесені покращення

## Скріншоти

- Головний екран

  ![Головний екран](./presentation/presentation-1.png)

- Сторінка Explore з фільтрацією

![Сторінка Explore з фільтрацією](./presentation/presentation-2.png)

- Сторінка Past Events

![Сторінка Past Events](./presentation/presentation-5.png)

- Сторінка Contacts

![Сторінка Contacts](./presentation/presentation-4.png)

- Сторінка реєстрації

![Сторінка реєстрації](./presentation/presentation-3.png)

### 📌 Нові функції:

- Додано **фільтрацію подій за категоріями**.
- Додано **екран Past Events** для перегляду минулих подій.
- Додано **екран Contacts** з інтерактивною картою та можливістю перейти в Google Maps.
- Реалізовано **екран реєстрації** з формою та переходом на профіль після реєстрації.

### 📌 Управління станом:

- Глобальний стан реалізований за допомогою **Redux**:
  - Збереження обраних подій.
  - Збереження усіх подій.
- Для управління темами використовується **Context API**.

### 📌 Покращення UI/UX:

- Оптимізована навігація між екранами (Drawer, Stack, Tab).
- Фільтрація працює з плавним оновленням списків.
- Відцентровані та адаптивні картки подій.
- Підтримка темної теми на ключових екранах.
- Адаптований вигляд Past Events із гарними відступами та повною шириною карток.

---

## 🔗 Основні екрани застосунку:

- Welcome Screen
- Explore (фільтрація подій)
- Past Events
- Contacts
- Event Details
- Favorites
- Registration
- Profile

---

## Структура проєкту

Проєкт побудований за компонентним підходом:

- **Компоненти:** EventCard, EventListItem, CategoryBadge, SearchBar, PrimaryButton
- **Глобальні контексти:** ThemeContext
- **Сторінки:** ExploreScreen, EventDetailsScreen, PastEventsScreen, ContactsScreen, RegisterScreen, ProfileScreen

---

## Запуск проєкту

```bash
npx expo start
```

---

## Необхідні залежності

Перед запуском проєкту переконайтесь, що встановлені наступні пакети:

```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install @react-navigation/drawer
npm install @react-navigation/bottom-tabs
npm install react-native-screens react-native-safe-area-context
npm install react-native-gesture-handler
npm install react-native-reanimated
npm install react-redux
npm install @reduxjs/toolkit
npm install babel-plugin-module-resolver
npm install expo
npm install expo-status-bar

```
