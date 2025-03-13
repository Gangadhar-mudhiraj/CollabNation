import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import ApproveProjects from './pages/Professor/ApproveProjects';
import ProjectReviews from './pages/Professor/ProjectReviews';
import MentorDashboard from './pages/Mentor/MentorDashboard';
import TaskMonitoring from './pages/Mentor/TaskMonitoring';
import ProjectGuidance from './pages/Mentor/ProjectGuidance';
import WeeklyReview from './pages/Mentor/WeeklyReview';
import Login from './pages/Authentication/Login';
import SignUp from './pages/Authentication/SignUp';
import EmailVerification from './pages/Authentication/EmailVerification';
import StudentDashboard from './pages/Student/StudentDashBoard';
import CollaborationForm from "./pages/Admin/CollaborationForm"
import CollaborationList from "./pages/Admin/CollaborationList"
import MyProjects from './pages/Student/MyProjects';
import ProjectProposalForm from './pages/Student/ProjectProposalForm';
import ProposalForm from "./pages/Admin/ProposalForm"
import ApprovedProjects from './pages/Student/ApprovedProjects';
import Notifications from './pages/Common/Notifications';
import Portfolio from './pages/Student/Portfolio';
import AdminDashboard from './pages/Admin/AdminDashboard';
import ProposalList from "./pages/Admin/ProposalList"
import ProgressTracker from './pages/Student/ProgressTracker';
import AssignedProjects from './pages/Student/AssignedProjects';
import ProfessorDashboard from './pages/Professor/ProfessorDashboard';
import CreditAllocation from './pages/Professor/CreditAllocation';
import ErrorPage from './pages/Error/ErrorPage';
import ProjectCard from './pages/Student/ProjectCard';
// Context
import { AuthProvider, useAuth } from './pages/context/AuthContext';
import Home from "./pages/Home"
import Navbar from './pages/Common/Navbar';

// Protected Route Component
const ProtectedRoute = ({ element, roles }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to='/login' />;

  if (!roles.includes(user.role)) {
    switch (user.role) {
      case 'admin':
        return <Navigate to='/dashboard/admin' />;
      case 'professor':
        return <Navigate to='/dashboard/professor' />;
      case 'student':
      default:
        return <Navigate to='/dashboard/student' />;
    }
  }

  return element;
};

function App() {
  return (
    <div className="flex min-h-screen">
      <Router>
        <AuthProvider>
          <Navbar className="w-64 bg-gray-800 text-white p-4 fixed top-0 bottom-0" />

          <div className='w-full h-screen overflow-auto'>
            <Routes >
              <Route path='/' element={<Home />} />

              {/* Authentication Routes */}
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/verify-email' element={<EmailVerification />} />

              {/* Student Routes */}
              <Route path='/dashboard/student' element={<ProtectedRoute element={<StudentDashboard />} roles={['student']} />} />
              <Route path='/project-details' element={<ProtectedRoute element={<ProjectCard />} roles={['student']} />} />
              <Route path='/myprojects' element={<ProtectedRoute element={<MyProjects />} roles={['student']} />} />
              <Route path='/progress/:title' element={<ProtectedRoute element={<ProgressTracker />} roles={['student']} />} />
              <Route path='/assignedProjects' element={<ProtectedRoute element={<AssignedProjects />} roles={['student']} />} />


              <Route path='/projects/propose' element={<ProtectedRoute element={<ProjectProposalForm />} roles={['student']} />} />
              <Route path='/projects/approved' element={<ProtectedRoute element={<ApprovedProjects />} roles={['student']} />} />
              <Route path='/notifications' element={<ProtectedRoute element={<Notifications />} roles={['student']} />} />
              <Route path='/portfolio' element={<ProtectedRoute element={<Portfolio />} roles={['student']} />} />

              {/* Admin Routes */}
              <Route path='/dashboard/admin' element={<ProtectedRoute element={<AdminDashboard />} roles={['admin']} />} />
              <Route path='/proposal-form' element={<ProtectedRoute element={<ProposalForm />} roles={['admin']} />} />
              <Route path='/proposal-list' element={<ProtectedRoute element={<ProposalList />} roles={['admin']} />} />
              <Route path='/collaboration-form' element={<ProtectedRoute element={<CollaborationForm />} roles={['admin']} />} />
              <Route path='/collaboration-list' element={<ProtectedRoute element={<CollaborationList />} roles={['admin']} />} />


              {/* Professor Routes */}
              <Route path='/dashboard/professor' element={<ProtectedRoute element={<ProfessorDashboard />} roles={['professor']} />} />
              <Route path='/credits' element={<ProtectedRoute element={<CreditAllocation />} roles={['professor']} />} />

              <Route path='/professor/approveProjects' element={<ProtectedRoute element={<ApproveProjects />} roles={['professor']} />} />
              <Route path='/professor/project-reviews' element={<ProtectedRoute element={<ProjectReviews />} roles={['professor']} />} />

              {/* Mentor routes*/}
              <Route
                path='/dashboard/mentor'
                element={<ProtectedRoute element={<MentorDashboard />} roles={['mentor']} />}
              />
              <Route
                path='/project-guidance'
                element={<ProtectedRoute element={<ProjectGuidance />} roles={['mentor']} />}
              />
              <Route
                path='/task-monitoring'
                element={<ProtectedRoute element={<TaskMonitoring />} roles={['mentor']} />}
              />
              <Route
                path='/weekly-review'
                element={<ProtectedRoute element={<WeeklyReview />} roles={['mentor']} />}
              />

              {/* Fallback Route */}
              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </div>

        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
