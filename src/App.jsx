import CourseList from './components/CourseList.jsx';

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <div><p className="topline">OSS · WEEK 11</p><h1>22300618 임규민</h1><p className="subtitle">Course Manager</p></div>
        <span className="tag">STUDENT STARTER</span>
      </header>
      <CourseList />
      <footer className="bottom"><span>OSS Week 11 · React</span><span>Local state only · Refresh resets data</span></footer>
    </main>
  );
}
