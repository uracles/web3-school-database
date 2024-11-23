# School Database Application

This is a **React-based** school database management application designed to track and filter student information, including their graduation year, class, and status. The application uses **Tailwind CSS** for styling and provides an interactive user interface for managing and displaying student data.

## Features

- **Dashboard Overview**: Displays total students, current students, and graduates.
- **Filters**: Filter students by graduation year and class.
- **Student Table**: Tabular view of filtered students with details such as name, class, graduation year, and status.
- **Responsive Design**: Built with Tailwind CSS for a modern, mobile-friendly UI.

## Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## File Structure

```plaintext
src/
│
├── components/
│   ├── Dashboard/
│   │   ├── StatCard.jsx
│   │   └── Dashboard.jsx
│   ├── Filters/
│   │   ├── FilterSelect.jsx
│   │   └── Filters.jsx
│   └── StudentTable/
│       ├── StudentRow.jsx
│       └── StudentTable.jsx
│
├── data/
│   └── students.js
│
├── utils/
│   └── studentUtils.js
│
├── App.jsx
└── index.jsx

