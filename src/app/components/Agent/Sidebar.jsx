
import React, { useState } from 'react';
import { 
  Home, 
  Users, 
  Folder, 
  Calendar, 
  FileText, 
  BarChart, 
  CreditCard,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Bell,
  Moon
} from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  const navigationItems = [
    { id: 'dashboard', name: 'Dashboard', icon: <Home className="size-5" /> },
    { id: 'team', name: 'Team', icon: <Users className="size-5" /> },
    { id: 'projects', name: 'Projects', icon: <Folder className="size-5" /> },
    { id: 'calendar', name: 'Calendar', icon: <Calendar className="size-5" /> },
    { id: 'documents', name: 'Documents', icon: <FileText className="size-5" /> },
    { id: 'reports', name: 'Reports', icon: <BarChart className="size-5" /> },
    { id: 'billing', name: 'Billing', icon: <CreditCard className="size-5" /> },
  ];

  const secondaryItems = [
    { id: 'settings', name: 'Settings', icon: <Settings className="size-5" /> },
    { id: 'help', name: 'Help & Support', icon: <HelpCircle className="size-5" /> },
  ];

  return (
    <>
      {/* Sidebar Overlay for mobile */}
      {isCollapsed && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setIsCollapsed(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 z-30 h-screen bg-gray-800 transition-all duration-300 ease-in-out
          ${isCollapsed ? 'translate-x-0' : '-translate-x-full'}
          lg:relative lg:translate-x-0 lg:flex
          ${isCollapsed ? 'w-64' : 'w-16'}
        `}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-16 items-center justify-between border-b border-gray-700 px-4">
            <div className={`flex items-center gap-3 ${isCollapsed ? 'opacity-100' : 'opacity-0 lg:opacity-100'}`}>
              <img 
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" 
                alt="Logo" 
                className="h-8 w-auto"
              />
              {isCollapsed && (
                <span className="text-lg font-semibold text-white">Dashboardib</span>
              )}
            </div>
            
            {/* Toggle button - visible on desktop */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden lg:flex items-center justify-center rounded-md p-1.5 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
            >
              {isCollapsed ? (
                <ChevronLeft className="size-5" />
              ) : (
                <ChevronRight className="size-5" />
              )}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-4">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href="#"
                onClick={() => setActiveItem(item.id)}
                className={`
                  flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors
                  ${activeItem === item.id 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }
                  ${isCollapsed ? 'justify-start gap-3' : 'justify-center'}
                `}
              >
                {item.icon}
                {isCollapsed && <span>{item.name}</span>}
              </a>
            ))}
          </nav>

          {/* Secondary Navigation */}
          <div className="border-t border-gray-700 px-3 py-4">
            {secondaryItems.map((item) => (
              <a
                key={item.id}
                href="#"
                className={`
                  flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300
                  hover:bg-white/5 hover:text-white transition-colors
                  ${isCollapsed ? 'justify-start gap-3' : 'justify-center'}
                `}
              >
                {item.icon}
                {isCollapsed && <span>{item.name}</span>}
              </a>
            ))}
          </div>

          {/* User Profile */}
          <div className="border-t border-gray-700 p-4">
            <div className={`flex items-center ${isCollapsed ? 'gap-3' : 'justify-center'}`}>
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User"
                className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
              />
              {isCollapsed && (
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-white">Tom Cook</p>
                  <p className="truncate text-xs text-gray-400">tom@example.com</p>
                </div>
              )}
            </div>
          </div>

          {/* Mobile toggle button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="lg:hidden absolute -right-3 top-6 rounded-full bg-gray-800 p-1.5 text-gray-400 shadow-lg ring-1 ring-gray-700 hover:text-white"
          >
            {isCollapsed ? (
              <ChevronLeft className="size-4" />
            ) : (
              <ChevronRight className="size-4" />
            )}
          </button>
        </div>
      </aside>

      {/* Main content wrapper */}
      <div className={`
        flex-1 transition-all duration-300 ease-in-out
        ${isCollapsed ? 'lg:ml-64' : 'lg:ml-16'}
      `}>
        {/* Your main content goes here */}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900">Welcome to Dashboard</h1>
          <p className="mt-2 text-gray-600">
            This is the main content area. The sidebar is {isCollapsed ? 'expanded' : 'collapsed'}.
          </p>
        </div>
      </div>
    </>
  );
};

// // Usage example component
// const AppLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       <Sidebar />
//       <div className="flex-1">
//         {/* Your Header component would go here */}
//         <Header />
//         <main>
//           {/* Your page content */}
//         </main>
//       </div>
//     </div>
//   );
// };

// // Modified Header with sidebar toggle
// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <nav className="relative bg-gray-800">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           {/* Sidebar toggle for mobile */}
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
//             >
//               <span className="absolute -inset-0.5"></span>
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 data-slot="icon"
//                 aria-hidden="true"
//                 className="size-6"
//               >
//                 <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </button>
//           </div>
          
//           {/* Rest of your header code remains the same */}
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex shrink-0 items-center">
//               <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" className="h-8 w-auto" />
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 <a href="#" aria-current="page" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Dashboard</a>
//                 <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Team</a>
//                 <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Projects</a>
//                 <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Calendar</a>
//               </div>
//             </div>
//           </div>
          
//           {/* Right side icons - same as before */}
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             <button type="button" className="relative rounded-full p-1 text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
//               <span className="absolute -inset-1.5"></span>
//               <span className="sr-only">View notifications</span>
//               <Bell className="size-6" />
//             </button>

//             <div className="relative ml-3">
//               <button className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
//                 <span className="absolute -inset-1.5"></span>
//                 <span className="sr-only">Open user menu</span>
//                 <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu - same as before */}
//       {mobileMenuOpen && (
//         <div className="block sm:hidden">
//           <div className="space-y-1 px-2 pt-2 pb-3">
//             <a href="#" aria-current="page" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">Dashboard</a>
//             <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Team</a>
//             <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Projects</a>
//             <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Calendar</a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

export default Sidebar;