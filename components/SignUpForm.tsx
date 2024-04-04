// components/SignUpForm.tsx
'use client'
// import { signIn } from '@/auth';

const SignUpForm: React.FC = () => {
  const handleGitHubSignIn = () => {
    // signIn();
  };

  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          className="w-full border rounded-md px-3 py-2 mb-3"
        />
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
          className="w-full bg-gray-950 text-white rounded-md px-3 py-2 hover:bg-gray-800"
        >
          Sign Up with GitHub
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
