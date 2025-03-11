import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiUser, FiLogOut } from 'react-icons/fi';
import './index.css';
import ApproveProjects from './pages/Professor/ApproveProjects';
import ProjectReviews from './pages/Professor/ProjectReviews';
// Pages
import Login from './pages/Authentication/Login';
import SignUp from './pages/Authentication/SignUp';
import EmailVerification from './pages/Authentication/EmailVerification';
import StudentDashboard from './pages/Student/StudentDashBoard';
import MyProjects from './pages/Student/MyProjects';
import ProjectProposalForm from './pages/Student/ProjectProposalForm';
import ApprovedProjects from './pages/Student/ApprovedProjects';
import ProjectDetails from './pages/Student/ProjectDetails';
import TeamFormation from './pages/Student/TeamFormation';
import Notifications from './pages/Common/Notifications';
import Portfolio from './pages/Student/Portfolio';
import AdminDashboard from './pages/Admin/AdminDashboard';
import EditProject from './pages/Admin/EditProject';
import Deliverables from './pages/Admin/Deliverables';
import ProgressTracker from './pages/Admin/ProgressTracker';
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
              <Route path='/projects/propose' element={<ProtectedRoute element={<ProjectProposalForm />} roles={['student']} />} />
              <Route path='/projects/approved' element={<ProtectedRoute element={<ApprovedProjects />} roles={['student']} />} />
              <Route path='/notifications' element={<ProtectedRoute element={<Notifications />} roles={['student']} />} />
              <Route path='/portfolio' element={<ProtectedRoute element={<Portfolio />} roles={['student']} />} />

              {/* Admin Routes */}
              <Route path='/dashboard/admin' element={<ProtectedRoute element={<AdminDashboard />} roles={['admin']} />} />
              <Route path='/projects/:id/edit' element={<ProtectedRoute element={<EditProject />} roles={['admin']} />} />
              <Route path='/deliverables' element={<ProtectedRoute element={<Deliverables />} roles={['admin']} />} />
              <Route path='/progress-tracker' element={<ProtectedRoute element={<ProgressTracker />} roles={['admin']} />} />

              {/* Professor Routes */}
              <Route path='/dashboard/professor' element={<ProtectedRoute element={<ProfessorDashboard />} roles={['professor']} />} />
              <Route path='/credits' element={<ProtectedRoute element={<CreditAllocation />} roles={['professor']} />} />

              <Route path='/professor/approveProjects' element={<ProtectedRoute element={<ApproveProjects />} roles={['professor']} />} />
              <Route path='/professor/project-reviews' element={<ProtectedRoute element={<ProjectReviews />} roles={['professor']} />} />

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
