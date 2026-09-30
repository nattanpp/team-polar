import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { PageTab } from '../types';
import { CrackLogomark } from './CrackMotif';
import { ScrollProgressBar } from './ScrollAnimation';

interface NavbarProps {
  activeTab: PageTab;
  onSelectTab: (tab: PageTab) => void;
}

interface NavItem {
  id: PageTab;
  label: string;
}

const PRIMARY_NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'story', label: 'Our Story' },
  { id: 'mission', label: 'Our Mission' },
  { id: 'team', label: 'The Team' },
  { id: 'partners', label: 'Partners' },
  { id: 'press', label: 'Press' },
  { id: 'join', label: 'Join' },
  { id: 'contact', label: 'Contact' }
];

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onSelectTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roversDropdownOpen, setRoversDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isRoverActive = activeTab === 'rovers' || activeTab === 'gentoo' || activeTab === 'ice-cube';

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setRoversDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setRoversDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setRoversDropdownOpen(false);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      
      <ScrollProgressBar />

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        <button
          onClick={() => {
            onSelectTab('home');
            setMobileMenuOpen(false);
            setRoversDropdownOpen(false);
          }}
          className="flex items-center gap-3 text-left focus:outline-none cursor-pointer group py-1.5 px-2 -ml-2 hover:bg-slate-50 transition-colors"
          aria-label="Team Polar homepage"
        >
          <div className="py-1 transition-transform group-hover:scale-105 duration-200">
            <CrackLogomark className="w-8 h-5" color="#7CBDE8" />
          </div>
          <div>
            <div className="text-xl font-bold tracking-wider uppercase text-[#0B132B] leading-none">
              TEAM POLAR
            </div>
            <div className="font-mono-data text-[10px] text-slate-600 tracking-tight uppercase font-medium">
              Autonomous Antarctic Expedition
            </div>
          </div>
        </button>

        
        <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
          
          <button
            onClick={() => {
              onSelectTab('home');
              setRoversDropdownOpen(false);
            }}
            className={`px-3 py-1.5 text-xs tracking-wider uppercase transition-all cursor-pointer font-medium ${
              activeTab === 'home'
                ? 'text-[#0B132B] font-bold border-b-2 border-[#7CBDE8] bg-slate-50/80'
                : 'text-slate-700 hover:text-[#0B132B] hover:bg-slate-50'
            }`}
          >
            Home
          </button>

          
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => {
                setRoversDropdownOpen(!roversDropdownOpen);
              }}
              aria-haspopup="true"
              aria-expanded={roversDropdownOpen}
              className={`px-3 py-1.5 text-xs tracking-wider uppercase transition-all cursor-pointer inline-flex items-center gap-1.5 font-medium ${
                isRoverActive
                  ? 'text-[#0B132B] font-bold border-b-2 border-[#7CBDE8] bg-slate-50/80'
                  : 'text-slate-700 hover:text-[#0B132B] hover:bg-slate-50'
              }`}
            >
              <span>Rovers</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  roversDropdownOpen ? 'rotate-180 text-[#0B132B]' : 'text-slate-500'
                }`}
              />
            </button>

            
            {roversDropdownOpen && (
              <div
                className="absolute top-full left-0 w-72 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
              >
                <div className="bg-white shadow-xl border border-slate-200 p-2.5 space-y-1">
                  <div className="px-3 py-1.5 text-[10px] font-mono-data text-slate-500 uppercase tracking-wider font-semibold">
                    POLAR PLATFORMS
                  </div>

                  
                  <button
                    onClick={() => {
                      onSelectTab('gentoo');
                      setRoversDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2.5 transition-all cursor-pointer flex flex-col ${
                      activeTab === 'gentoo'
                        ? 'bg-[#0B132B] text-white shadow-xs'
                        : 'hover:bg-slate-50 text-[#0B132B]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider">Gentoo Rover</span>
                      <span className={`text-[10px] font-mono-data font-semibold ${activeTab === 'gentoo' ? 'text-[#7CBDE8]' : 'text-[#2A74C4]'}`}>
                        2ND GEN
                      </span>
                    </div>
                    <span className={`text-[11px] mt-0.5 ${activeTab === 'gentoo' ? 'text-white/80' : 'text-slate-600'}`}>
                      Active solar Antarctic traverse vehicle
                    </span>
                  </button>

                  
                  <button
                    onClick={() => {
                      onSelectTab('ice-cube');
                      setRoversDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2.5 transition-all cursor-pointer flex flex-col ${
                      activeTab === 'ice-cube'
                        ? 'bg-[#0B132B] text-white shadow-xs'
                        : 'hover:bg-slate-50 text-[#0B132B]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider">Ice Cube Testbed</span>
                      <span className={`text-[10px] font-mono-data font-semibold ${activeTab === 'ice-cube' ? 'text-[#7CBDE8]' : 'text-[#2A74C4]'}`}>
                        1ST GEN
                      </span>
                    </div>
                    <span className={`text-[11px] mt-0.5 ${activeTab === 'ice-cube' ? 'text-white/80' : 'text-slate-600'}`}>
                      Trondheim sub-zero prototype
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>

          
          {PRIMARY_NAV_ITEMS.filter((item) => item.id !== 'home').map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  setRoversDropdownOpen(false);
                }}
                className={`px-3 py-1.5 text-xs tracking-wider uppercase transition-all cursor-pointer font-medium ${
                  isActive
                    ? 'text-[#0B132B] font-bold border-b-2 border-[#7CBDE8] bg-slate-50/80'
                    : 'text-slate-700 hover:text-[#0B132B] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        
        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="px-3.5 py-2 text-xs font-mono-data uppercase tracking-wider text-[#0B132B] bg-slate-100 hover:bg-slate-200 border border-slate-200 focus:outline-none cursor-pointer font-bold transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? 'CLOSE ✕' : 'MENU ☰'}
          </button>
        </div>
      </div>

      
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white px-4 py-4 border-b border-slate-200 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            
            <button
              onClick={() => {
                onSelectTab('home');
                setMobileMenuOpen(false);
              }}
              className={`text-left text-sm font-semibold tracking-wider uppercase transition-colors py-2 px-3 ${
                activeTab === 'home'
                  ? 'text-[#0B132B] font-bold border-l-4 border-[#2A74C4] bg-slate-100'
                  : 'text-slate-800 hover:text-[#0B132B] hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            
            <div className="py-2 px-3 bg-slate-50/80 border border-slate-100">
              <div className="text-xs font-mono-data text-[#2A74C4] uppercase tracking-wider mb-2 font-bold">
                ROVERS
              </div>
              <div className="pl-3 space-y-2 border-l-2 border-[#2A74C4]/40">
                <button
                  onClick={() => {
                    onSelectTab('gentoo');
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left text-sm uppercase tracking-wider transition-colors py-1.5 px-2 font-medium ${
                    activeTab === 'gentoo'
                      ? 'text-[#0B132B] font-bold bg-white shadow-2xs'
                      : 'text-slate-700 hover:text-[#0B132B]'
                  }`}
                >
                  Gentoo Rover (2nd Gen)
                </button>
                <button
                  onClick={() => {
                    onSelectTab('ice-cube');
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left text-sm uppercase tracking-wider transition-colors py-1.5 px-2 font-medium ${
                    activeTab === 'ice-cube'
                      ? 'text-[#0B132B] font-bold bg-white shadow-2xs'
                      : 'text-slate-700 hover:text-[#0B132B]'
                  }`}
                >
                  Ice Cube Testbed (1st Gen)
                </button>
              </div>
            </div>

            
            {PRIMARY_NAV_ITEMS.filter((item) => item.id !== 'home').map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left text-sm tracking-wider uppercase transition-colors py-2 px-3 font-semibold ${
                    isActive
                      ? 'text-[#0B132B] font-bold border-l-4 border-[#2A74C4] bg-slate-100'
                      : 'text-slate-800 hover:text-[#0B132B] hover:bg-slate-50'
                  }`}
                >
                  <div>{item.label}</div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

