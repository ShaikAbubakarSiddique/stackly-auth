import React, { useState } from 'react';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

// ==============================================================================
// VisualBrandingPanel Component
// Full mountain background image covering the entire left panel
// ==============================================================================

export const VisualBrandingPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'secure' | 'scalable' | 'future'>('secure');

  return (
    <div className="relative w-full h-full max-h-screen pl-8 sm:pl-10 pr-2 sm:pr-3 py-6 sm:py-8 flex flex-col justify-between overflow-hidden select-none border-r border-slate-200/70">

      {/* ============================================================
          FULL BACKGROUND IMAGE — covers entire panel
      ============================================================ */}
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/mountains.png')" }}
      />

      {/* Soft overlay so text stays readable */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-white/25" />

      {/* ========== 1. Header with STACKLY Logo ========== */}
      <div className="relative z-20">
        <img
          src="/stackly-logo.png"
          alt="STACKLY"
          className="h-[34px] sm:h-[36px] w-auto object-contain"
        />
      </div>

      {/* ========== 2. Hero + Orbital Diagram ========== */}
      <div className="relative z-10 flex-1 w-full max-w-[620px] xl:max-w-[660px] mx-auto flex items-center justify-between my-auto min-h-[380px] max-h-[460px]">

        <div className="relative w-full h-[380px] flex items-center">

          {/* 2a. Text Content */}
          <div
            className="relative z-10 flex flex-col max-w-[300px] sm:max-w-[330px] xl:max-w-[350px]"
            style={{ transform: 'translateY(-90px)' }}
          >
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-slate-500 uppercase mb-3.5 whitespace-nowrap">
              CLOUD PLATFORM &middot; HRMS &middot; CRM &middot; ERP &middot; FINANCE &middot; AI
            </div>

            <h1 className="text-3xl sm:text-4xl xl:text-[44px] font-extrabold text-[#0f172a] tracking-tight leading-[1.12] mb-4">
  One identity.<br />
  <span className="whitespace-nowrap">
    <span className="text-blue-600">Infinite</span> Potential.
  </span>
</h1>

            <p className="text-slate-600 text-xs sm:text-[13px] xl:text-[14px] leading-relaxed">
              <span className="whitespace-nowrap">
                A unified platform to connect your people, data and
              </span>
              <br />
              <span className="whitespace-nowrap">
                operations &mdash; securely, everywhere.
              </span>
            </p>
          </div>

          {/* 2b. Orbital Diagram System */}
          <div className="absolute right-0 sm:right-2 xl:right-4 top-1/2 -translate-y-1/2 w-[290px] h-[330px] flex-shrink-0">

            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              viewBox="0 0 290 330"
              fill="none"
            >
              <path
                d="M 210,315 C 285,295 285,100 257,50"
                stroke="#60a5fa"
                strokeWidth="1.75"
                strokeLinecap="round"
                className="opacity-80"
              />
              <path
                d="M 185,80 C 177,90 169,98 160,103 C 153,108 148,114 142,118"
                stroke="#60a5fa"
                strokeWidth="1.75"
                strokeLinecap="round"
                className="opacity-80"
              />
              <path
                d="M 88,170 C 70,165 51,182 40,205"
                stroke="#60a5fa"
                strokeWidth="1.75"
                strokeLinecap="round"
                className="opacity-80"
              />
              <path
                d="M 86,255 C 93,260 99,263 105,263 C 111,263 117,260 124,255"
                stroke="#60a5fa"
                strokeWidth="1.75"
                strokeLinecap="round"
                className="opacity-80"
              />
              <path
                d="M 142,226 C 137,244 123,258 105,263"
                stroke="#60a5fa"
                strokeWidth="1.75"
                strokeLinecap="round"
                className="opacity-75"
              />

              <circle cx="160" cy="103" r="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5" />
              <circle cx="160" cy="103" r="1.5" fill="#ffffff" />
              <circle cx="105" cy="263" r="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5" />
              <circle cx="105" cy="263" r="1.5" fill="#ffffff" />
            </svg>

            {/* Center Card: 1E */}
            <div className="absolute left-[88px] top-[118px] z-20">
              <div className="relative w-[108px] h-[108px] rounded-[28px] bg-white/90 backdrop-blur-xl border border-white/90 shadow-[0_12px_36px_rgba(37,99,235,0.12)] flex items-center justify-center group transition-transform duration-300 hover:scale-105">
                <div className="absolute w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-300 via-sky-400 to-indigo-400 blur-lg opacity-85" />
                <span className="relative z-10 text-[34px] font-extrabold text-[#0f244c] tracking-tight">
                  1E
                </span>
              </div>
            </div>

            {/* People */}
            <div className="absolute left-[171px] top-[4px] z-20">
              <div className="relative w-[86px] h-[86px] bg-white/95 backdrop-blur-sm rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-white flex flex-col items-center justify-center p-2.5 group transition-transform duration-300 hover:-translate-y-1">
                <svg className="w-7 h-7 text-blue-500 mb-1" viewBox="0 0 32 32" fill="currentColor">
                  <circle cx="16" cy="9" r="5" />
                  <circle cx="7" cy="11" r="3.5" />
                  <circle cx="25" cy="11" r="3.5" />
                  <path d="M16 15c-5 0-8.5 3.2-8.5 7.4v1.2c0 .9.7 1.6 1.6 1.6h13.8c.9 0 1.6-.7 1.6-1.6v-1.2C24.5 18.2 21 15 16 15z" />
                  <path d="M7 16c-2.9 0-5 2-5 4.7v1.1c0 .7.6 1.2 1.3 1.2h4.4c-.2-.7-.3-1.4-.3-2.1 0-1.9.7-3.5 1.8-4.7C8.6 16.1 7.8 16 7 16z" />
                  <path d="M25 16c-.8 0-1.6.1-2.2.2 1.1 1.2 1.8 2.8 1.8 4.7 0 .7-.1 1.4-.3 2.1h4.4c.7 0 1.3-.5 1.3-1.2v-1.1c0-2.7-2.1-4.7-5-4.7z" />
                </svg>
                <span className="text-xs font-bold text-slate-800 leading-tight">People</span>
                <span className="text-[9px] text-slate-400 font-medium leading-tight mt-0.5">
                  Together
                </span>
              </div>
            </div>

            {/* Process */}
            <div className="absolute left-[0px] top-[205px] z-20">
              <div className="relative w-[86px] h-[86px] bg-white/95 backdrop-blur-sm rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-white flex flex-col items-center justify-center p-2.5 group transition-transform duration-300 hover:-translate-y-1">
                <svg className="w-7 h-7 text-blue-500 mb-1" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M16 5.5L6 10.5l10 5 10-5-10-5z" />
                  <path d="M6 14.5l10 5 10-5v2.8l-10 5-10-5v-2.8z" />
                  <path d="M6 20.2l10 5 10-5v2.8l-10 5-10-5v-2.8z" />
                </svg>
                <span className="text-xs font-bold text-slate-800 leading-tight">Process</span>
                <span className="text-[9px] text-slate-400 font-medium leading-tight mt-0.5">
                  Simpler
                </span>
              </div>
            </div>

            {/* Progress */}
            <div className="absolute left-[124px] top-[243px] z-20">
              <div className="relative w-[86px] h-[86px] bg-white/95 backdrop-blur-sm rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-white flex flex-col items-center justify-center p-2.5 group transition-transform duration-300 hover:-translate-y-1">
                <svg className="w-7 h-7 text-blue-500 mb-1" viewBox="0 0 32 32" fill="currentColor">
                  <rect x="7" y="18" width="4.5" height="8.5" rx="1.5" />
                  <rect x="13.7" y="12" width="4.5" height="14.5" rx="1.5" />
                  <rect x="20.5" y="6.5" width="4.5" height="20" rx="1.5" />
                </svg>
                <span className="text-xs font-bold text-slate-800 leading-tight">Progress</span>
                <span className="text-[9px] text-slate-400 font-medium leading-tight mt-0.5">
                  Faster
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ========== 3. Bottom Tabs ========== */}
      <div className="relative z-20 pt-2 sm:pt-4">

        <div className="flex items-end justify-between pb-2 mb-2">
          <div className="flex items-center gap-7 sm:gap-9 text-xs font-medium">

            <button
              type="button"
              onClick={() => setActiveTab('secure')}
              className="flex flex-col items-center cursor-pointer group focus:outline-none"
            >
              <div
                className={`h-[2.5px] w-9 sm:w-10 rounded-full mb-1.5 transition-all duration-150 ${
                  activeTab === 'secure' ? 'bg-blue-600 opacity-100' : 'bg-transparent opacity-0'
                }`}
              />
              <span
                className={`font-mono text-xs tracking-wider transition ${
                  activeTab === 'secure'
                    ? 'text-slate-900 font-bold'
                    : 'text-slate-500 hover:text-slate-700 font-medium'
                }`}
              >
                Secure
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('scalable')}
              className="flex flex-col items-center cursor-pointer group focus:outline-none"
            >
              <div
                className={`h-[2.5px] w-9 sm:w-10 rounded-full mb-1.5 transition-all duration-150 ${
                  activeTab === 'scalable' ? 'bg-blue-600 opacity-100' : 'bg-transparent opacity-0'
                }`}
              />
              <span
                className={`font-mono text-xs tracking-wider transition ${
                  activeTab === 'scalable'
                    ? 'text-slate-900 font-bold'
                    : 'text-slate-500 hover:text-slate-700 font-medium'
                }`}
              >
                Scalable
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('future')}
              className="flex flex-col items-center cursor-pointer group focus:outline-none"
            >
              <div
                className={`h-[2.5px] w-9 sm:w-10 rounded-full mb-1.5 transition-all duration-150 ${
                  activeTab === 'future' ? 'bg-blue-600 opacity-100' : 'bg-transparent opacity-0'
                }`}
              />
              <span
                className={`font-mono text-xs tracking-wider transition ${
                  activeTab === 'future'
                    ? 'text-slate-900 font-bold'
                    : 'text-slate-500 hover:text-slate-700 font-medium'
                }`}
              >
                Future-Ready
              </span>
            </button>

          </div>

          <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase text-right leading-tight hidden sm:block">
            BUILT FOR<br />
            A BRIGHTER<br />
            TOMORROW
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-5 sm:gap-7 text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-1.5">
            <SecurityOutlinedIcon sx={{ fontSize: 13, color: '#64748b' }} />
            <span>SOC 2 Type II</span>
          </div>
          <div className="flex items-center gap-1.5">
            <LockOutlinedIcon sx={{ fontSize: 13, color: '#64748b' }} />
            <span>ISO 27001</span>
          </div>
          <div className="flex items-center gap-1.5">
            <AccessTimeOutlinedIcon sx={{ fontSize: 13, color: '#64748b' }} />
            <span>99.95% uptime SLA</span>
          </div>
        </div>

      </div>
    </div>
  );
};