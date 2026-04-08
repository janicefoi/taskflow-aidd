# TaskFlow AI-Powered Task Management System

TaskFlow is a modern, AI-powered task management application designed to help individuals and teams organize their work, prioritize tasks, and boost productivity. Built with Next.js 14, TypeScript, and Tailwind CSS, TaskFlow combines a seamless user experience with intelligent features to streamline your workflow.

## ✨ Features

- **AI-Powered Task Generation**: Generate tasks automatically using AI based on your goals and projects
- **Smart Task Prioritization**: AI-driven prioritization to help you focus on what matters most
- **Task Management**: Create, edit, delete, and organize tasks with ease
- **Project Organization**: Group tasks into projects for better management
- **User Authentication**: Secure login and user management
- **Responsive Design**: Beautiful, mobile-first interface that works on any device
- **Dark Mode**: Built-in dark mode for comfortable viewing
- **Real-time Updates**: Instant updates across all devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/taskflow-aidd.git
   cd taskflow-aidd
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   DATABASE_URL="postgresql://user:password@host:port/database"
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXTAUTH_URL="http://localhost:3000"
   OPENAI_API_KEY="your-openai-api-key"
   ```

4. Run database migrations:
   ```bash
   npx prisma migrate dev --name init
   ```

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Prisma](https://prisma.io/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **AI Integration**: [OpenAI API](https://openai.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```
taskflow-aidd/
├── app/                    # Next.js App Router pages
├── components/             # Reusable React components
├── lib/                    # Utility functions and helpers
├── prisma/                 # Prisma database configuration
├── public/                 # Static assets
├── styles/                 # Global styles
├── .env.local              # Environment variables (not in git)
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies
└── tsconfig.json           # TypeScript configuration
```

## 🔌 API Integration

TaskFlow uses the OpenAI API for AI-powered features. Ensure you have an OpenAI API key and add it to your `.env.local` file.

## 🎨 Styling

The application uses Tailwind CSS for styling with a modern, clean design system. You can customize the theme in `tailwind.config.ts`.

## 🧪 Testing

To run tests (if configured):

```bash
npm test
# or
yarn test
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For issues or questions, please open an issue on the GitHub repository.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Database powered by [PostgreSQL](https://www.postgresql.org/)
- AI features powered by [OpenAI](https://openai.com/)

---

Made with ❤️ using Next.js and Tailwind CSS
