import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const user = { id: '1', name: 'Rikkei Academy', email: 'ra@rikkei.com' };
        // Kiểm tra username/password tại đây
        if (credentials?.username === 'admin' && credentials?.password === 'admin') {
          return user;
        } else {
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',  // Đường dẫn lỗi
  },
  session: {
    strategy: 'jwt',  // Sử dụng JWT để quản lý session
  },
});
