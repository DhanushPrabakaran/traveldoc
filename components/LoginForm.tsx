// components/LoginForm.tsx
import { signIn } from 'next-auth/react';

const LoginForm: React.FC = () => {
  const handleGitHubSignIn = () => {
    signIn('github');
  };

  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-md px-3 py-2 mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-md px-3 py-2 mb-3"
        />
        <button
          type="button"
          onClick={handleGitHubSignIn}
          className="w-full bg-gray-900 text-white rounded-md px-3 py-2 hover:bg-gray-800"
        >
          Login with GitHub
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
