import './globals.css';
import { TodoProvider } from '@/components/TodoContext';
import { Provider } from '@/components/Provider';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className='w-full min-h-screen bg-gray-100 dark:bg-gray-900 relative'>
        <Provider>
          <TodoProvider>{children}</TodoProvider>
        </Provider>
        <div className='absolute bottom-0 w-full'>
          <Footer />
        </div>
      </body>
    </html>
  );
}
