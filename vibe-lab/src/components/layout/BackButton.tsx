import { Link } from 'react-router-dom';

interface BackButtonProps {
  to: string;
  label?: string;
}

function BackButton({ to, label = '홈으로 돌아가기' }: BackButtonProps) {
  return (
    <Link
      to={to}
      className="absolute top-8 left-8 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
      aria-label={label}
    >
      <svg
        className="w-5 h-5 text-gray-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </Link>
  );
}

export default BackButton;
