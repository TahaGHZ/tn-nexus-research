import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import researchIndexRaw from './data/research-index.json';
import type { ResearchIndex } from './types/research';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { FindingDetailPage } from './pages/FindingDetailPage';
import { ModulesPage } from './pages/ModulesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { SolutionDetailPage } from './pages/SolutionDetailPage';

const researchIndex = researchIndexRaw as unknown as ResearchIndex;

export function App() {
  return (
    <HashRouter>
      <div className="flex min-h-screen flex-col bg-[#FAF8F4] text-slate-900">
        <Navbar
          verifiedCount={researchIndex.stats.verifiedFindings}
          solutionCount={researchIndex.stats.solutionCount}
        />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage data={researchIndex} />} />
            <Route path="/blog" element={<BlogPage data={researchIndex} />} />
            <Route
              path="/blog/:id"
              element={<FindingDetailPage indexData={researchIndex} />}
            />
            <Route path="/solutions" element={<SolutionsPage data={researchIndex} />} />
            <Route
              path="/solutions/:id"
              element={<SolutionDetailPage indexData={researchIndex} />}
            />
            <Route path="/modules" element={<ModulesPage data={researchIndex} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer stats={researchIndex.stats} />
      </div>
    </HashRouter>
  );
}

export default App;
