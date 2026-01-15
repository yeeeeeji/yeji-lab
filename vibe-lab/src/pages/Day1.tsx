import { Link } from 'react-router-dom';

function Day1() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 p-8">
      <div className="bg-white/95 rounded-3xl p-12 shadow-2xl text-center max-w-2xl w-full">
        <h1 className="text-5xl text-purple-600 mb-6 font-bold">🎁 Day 1</h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          첫 번째 날입니다!
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          ← 홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}

export default Day1;
