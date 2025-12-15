import { Routes, Route, Navigate } from 'react-router-dom'
import ResponsiveLayout from './components/layout/ResponsiveLayout'
import WelcomeDetails from './pages/onboarding/WelcomeDetails'
import CreateAccount from './pages/onboarding/CreateAccount'
import HealthProfile from './pages/onboarding/HealthProfile'
import Preferences from './pages/onboarding/Preferences'
import Dashboard from './pages/dashboard/Dashboard'
import MedicationList from './pages/medications/MedicationList'
import AddMedicationOptions from './pages/medications/AddMedicationOptions'
import ManualMedForm from './pages/medications/ManualMedForm'
import MedicationDetail from './pages/medications/MedicationDetail'
import RequestConsult from './pages/consultations/RequestConsult'
import DoctorSelection from './pages/consultations/DoctorSelection'
import WaitingRoom from './pages/consultations/WaitingRoom'
import VideoCall from './pages/consultations/VideoCall'
import ConsultSummary from './pages/consultations/ConsultSummary'
import OrderReview from './pages/orders/OrderReview'
import PharmacySelection from './pages/orders/PharmacySelection'
import DeliveryMethod from './pages/orders/DeliveryMethod'
import OrderConfirmation from './pages/orders/OrderConfirmation'
import ProductCatalog from './pages/orders/ProductCatalog'
import FamilyList from './pages/family/FamilyList'
import AddFamilyMember from './pages/family/AddFamilyMember'
import FamilyMemberDetail from './pages/family/FamilyMemberDetail'

// History
import HistoryList from './pages/history/HistoryList'
import UploadDocument from './pages/history/UploadDocument'
import DocumentViewer from './pages/history/DocumentViewer'

// Health
import HealthPanel from './pages/health/HealthPanel'
import LogVital from './pages/health/LogVital'
import VitalDetail from './pages/health/VitalDetail'

import Menu from './pages/menu/Menu'

// Credentials
import CredentialList from './pages/credentials/CredentialList'
import AddCredential from './pages/credentials/AddCredential'
import CredentialDetail from './pages/credentials/CredentialDetail'

function App() {
  return (
    <ResponsiveLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" replace />} />
        <Route path="/welcome" element={<WelcomeDetails />} />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/profile" element={<HealthProfile />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Medication Routes */}
        <Route path="/medications" element={<MedicationList />} />
        <Route path="/medications/add" element={<AddMedicationOptions />} />
        <Route path="/medications/new" element={<ManualMedForm />} />
        <Route path="/medications/:id" element={<MedicationDetail />} />

        {/* Consultation Routes */}
        <Route path="/consultations/request" element={<RequestConsult />} />
        <Route path="/consultations/doctors" element={<DoctorSelection />} />
        <Route path="/consultations/waiting-room" element={<WaitingRoom />} />
        <Route path="/consultations/video" element={<VideoCall />} />
        <Route path="/consultations/summary" element={<ConsultSummary />} />

        {/* Order Routes */}
        <Route path="/orders/catalog" element={<ProductCatalog />} />
        <Route path="/orders/review" element={<OrderReview />} />
        <Route path="/orders/pharmacies" element={<PharmacySelection />} />
        <Route path="/orders/delivery" element={<DeliveryMethod />} />
        <Route path="/orders/confirmation" element={<OrderConfirmation />} />

        {/* Family Routes */}
        <Route path="/family" element={<FamilyList />} />
        <Route path="/family/add" element={<AddFamilyMember />} />
        <Route path="/family/:id" element={<FamilyMemberDetail />} />

        {/* History Routes */}
        <Route path="/history" element={<HistoryList />} />
        <Route path="/history/upload" element={<UploadDocument />} />
        <Route path="/history/:id" element={<DocumentViewer />} />

        {/* Health Routes */}
        <Route path="/health" element={<HealthPanel />} />
        <Route path="/health/log" element={<LogVital />} />
        <Route path="/health/:id" element={<VitalDetail />} />

        {/* Credentials Routes */}
        <Route path="/credentials" element={<CredentialList />} />
        <Route path="/credentials/add" element={<AddCredential />} />
        <Route path="/credentials/:id" element={<CredentialDetail />} />

        {/* Menu */}
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </ResponsiveLayout>
  )
}

export default App
