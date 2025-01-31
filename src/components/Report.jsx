import React, { useState, useRef } from 'react';
import { FaFilter, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import Filter from './Filter';
import FollowupCard from './Followupcard';
import FollowupPage from './followuppage';

// Import all card components
import BloodTestsCard from './BloodTestsCard';
import PastMedicalHistoryCard from './PastMedicalHistoryCard';
import RadiologyCard from './RadiologyCard';
import PhysicalExamCard from './PhysicalExamCard';
import FamilyHistoryCard from './FamilyHistoryCard';
import AllergiesCard from './AllergiesCard';
import MedicationsCard from './MedicationsCard';
import VaccinationCard from './VaccinationCard';
import LifestyleCard from './LifestyleCard';
import MentalHealthCard from './MentalHealthCard';
import FollowUpPlanCard from './FollowUpPlanCard';
import SummaryCard from './SummaryCard';

const patientReport = {
    "PatientName": "Johnathan Marcus",
    "PatientAge": 52,
    "PatientGender": "Male",
    "ConsultationDate": "25/11/2024",
    "PrimaryComplaint": "Persistent lower back pain for the last three months",
    "HistoryOfPresentIllness": "Patient reports intermittent pain radiating to the right leg, worsening with physical activity and relieved slightly with rest.",
    "BloodTestResults": {
        "Hemoglobin": 12.8,
        "PlateletCount": 210,
        "FastingBloodGlucose": 112,
        "TotalCholesterol": 220
    },
    "PastMedicalHistory": {
        "Hypertension": {
            "DiagnosedIn": 2015
        },
        "Hyperlipidemia": {
            "DiagnosedIn": 2018
        },
        "Psoriasis": {
            "DiagnosedIn": "Childhood"
        }
    },
    "RadiologyFindings": {
        "MRISpine": {
            "EvidenceOfLumbarDiscHerniation": {
                "AtL4L5": {
                    "MildNerveRootCompression": true
                }
            }
        }
    },
    "PhysicalExamination": {
        "Vitals": {
            "BloodPressure": "135/85",
            "HeartRate": 78,
            "RespiratoryRate": 16,
            "Weight": 82,
            "Height": 175,
            "BMI": 26.8
        },
        "MusculoskeletalExamination": {
            "PositiveStraightLegRaiseTest": true,
            "ReducedRangeOfMotionInLumbarSpine": true
        }
    },
    "FamilyHistory": {
        "Father": {
            "IschemicHeartDisease": true
        },
        "Mother": {
            "RheumatoidArthritis": true
        }
    },
    "Allergies": {
        "Ibuprofen": {
            "CausesGastrointestinalDistress": true
        }
    },
    "CurrentMedications": {
        "Amlodipine": {
            "DailyDosage": "5mg",
            "NightlyDosage": "20mg"
        },
        "Atorvastatin": {
            "DailyDosage": "20mg",
            "NightlyDosage": "10mg"
        },
        "VitaminDSupplements": {
            "DailyDosage": "2000IU"
        }
    },
    "VaccinationHistory": {
        "InfluenzaVaccine": "10/2024",
        "COVID19Booster": "09/2024",
        "TetanusBooster": "2018"
    },
    "LifestyleFactors": {
        "Occupation": "Sedentary",
        "SmokingStatus": "NonSmoker",
        "AlcoholConsumption": "Occasional",
        "Diet": {
            "HighProcessedFoods": true,
            "LowFiberDiet": true
        }
    },
    "MentalHealthAssessment": {
        "IncreasedIrritability": true,
        "MildAnxiety": true,
        "Recommendations": {
            "StressManagementTechniques": true,
            "ConsiderPsychologistConsult": true
        }
    },
    "FollowUpPlan": {
        "LabTests": {
            "FullBloodPanel": {
                "DateScheduled": "01/02/2025"
            }
        },
        "Consultations": {
            "PhysicalTherapy": true,
            "DietitianReferral": true
        }
    }
};

const Report = ({ onCloseCaseClick, onFollowupScheduled }) => {
  const [activeTab, setActiveTab] = useState('summary');
  const [showFilter, setShowFilter] = useState(false);
  const [collapsedSections, setCollapsedSections] = useState({
    summary: false,
    bloodTests: false,
    pastMedical: false,
    radiology: false,
    physical: false,
    family: false,
    allergies: false,
    medications: false,
    vaccination: false,
    lifestyle: false,
    mental: false,
    followup: false
  });
  const [showFollowup, setShowFollowup] = useState(false);

  // Refs for each section
  const sectionRefs = {
    summary: useRef(null),
    bloodTests: useRef(null),
    pastMedical: useRef(null),
    radiology: useRef(null),
    physical: useRef(null),
    family: useRef(null),
    allergies: useRef(null),
    medications: useRef(null),
    vaccination: useRef(null),
    lifestyle: useRef(null),
    mental: useRef(null),
    followup: useRef(null)
  };

  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId);
    setCollapsedSections(prev => ({
      ...prev,
      [sectionId]: false
    }));
    
    const element = sectionRefs[sectionId].current;
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleSection = (section) => {
    setCollapsedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Card Header Component
  const CardHeader = ({ title, section }) => (
    <div className="flex justify-between items-center mb-3">
      <h3 className="text-gray-800 font-semibold">{title}</h3>
      <button 
        onClick={() => toggleSection(section)}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        {collapsedSections[section] ? (
          <FaChevronDown className="text-gray-400 text-sm" />
        ) : (
          <FaChevronUp className="text-gray-400 text-sm" />
        )}
      </button>
    </div>
  );

  const tabs = [
    { id: 'summary', label: 'Summary' },
    { id: 'bloodTests', label: 'Blood Tests' },
    { id: 'pastMedical', label: 'Past Medical History' },
    { id: 'radiology', label: 'Radiology' },
    { id: 'physical', label: 'Physical Exam' },
    { id: 'family', label: 'Family History' },
    { id: 'allergies', label: 'Allergies' },
    { id: 'medications', label: 'Current Medications' },
    { id: 'vaccination', label: 'Vaccination History' },
    { id: 'lifestyle', label: 'Lifestyle Factors' },
    { id: 'mental', label: 'Mental Health' },
    { id: 'followup', label: 'Follow Up Plan' }
  ];

  const handleFollowupSubmit = (data) => {
    setShowFollowup(false);
    if (onFollowupScheduled) {
      onFollowupScheduled(data);
    }
  };

  return (
    <div className="px-4">
      {/* Sticky Navigation Container */}
      <div className="sticky top-0 z-10 -mx-4 bg-[#F8FAFC] shadow-sm">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex-1 flex gap-2 overflow-x-auto hide-scrollbar pb-1">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#3973EB] text-white shadow-sm scale-105'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <Filter showFilter={showFilter} setShowFilter={setShowFilter} />
          </div>
        </div>
      </div>

      {/* Content container */}
      <div className="pt-4 overflow-y-auto">
        {/* Summary Section */}
        <div ref={sectionRefs.summary}>
          <SummaryCard 
            data={{
              name: patientReport?.PatientName || 'N/A',
              age: patientReport?.PatientAge || 'N/A',
              gender: patientReport?.PatientGender || 'N/A',
              complaint: patientReport?.PrimaryComplaint || 'N/A',
              history: patientReport?.HistoryOfPresentIllness || 'N/A'
            }}
            isCollapsed={collapsedSections.summary}
            CardHeader={CardHeader}
          />
        </div>

        {/* Blood Tests Section */}
        <div ref={sectionRefs.bloodTests}>
          <BloodTestsCard 
            data={patientReport?.BloodTestResults || {}}
            isCollapsed={collapsedSections.bloodTests}
            CardHeader={CardHeader}
          />
        </div>

        {/* Past Medical History Section */}
        <div ref={sectionRefs.pastMedical}>
          <PastMedicalHistoryCard 
            data={patientReport?.PastMedicalHistory || {}}
            isCollapsed={collapsedSections.pastMedical}
            CardHeader={CardHeader}
          />
        </div>

        {/* Radiology Section */}
        <div ref={sectionRefs.radiology}>
          <RadiologyCard 
            data={patientReport?.RadiologyFindings || {}}
            isCollapsed={collapsedSections.radiology}
            CardHeader={CardHeader}
          />
        </div>

        {/* Physical Examination Section */}
        <div ref={sectionRefs.physical}>
          <PhysicalExamCard 
            data={patientReport?.PhysicalExamination || {}}
            isCollapsed={collapsedSections.physical}
            CardHeader={CardHeader}
          />
        </div>

        {/* Family History Section */}
        <div ref={sectionRefs.family}>
          <FamilyHistoryCard 
            data={patientReport?.FamilyHistory || {}}
            isCollapsed={collapsedSections.family}
            CardHeader={CardHeader}
          />
        </div>

        {/* Allergies Section */}
        <div ref={sectionRefs.allergies}>
          <AllergiesCard 
            data={patientReport?.Allergies || {}}
            isCollapsed={collapsedSections.allergies}
            CardHeader={CardHeader}
          />
        </div>

        {/* Medications Section */}
        <div ref={sectionRefs.medications}>
          <MedicationsCard 
            data={patientReport?.CurrentMedications || {}}
            isCollapsed={collapsedSections.medications}
            CardHeader={CardHeader}
          />
        </div>

        {/* Vaccination History Section */}
        <div ref={sectionRefs.vaccination}>
          <VaccinationCard 
            data={patientReport?.VaccinationHistory || {}}
            isCollapsed={collapsedSections.vaccination}
            CardHeader={CardHeader}
          />
        </div>

        {/* Lifestyle Section */}
        <div ref={sectionRefs.lifestyle}>
          <LifestyleCard 
            data={patientReport?.LifestyleFactors || {}}
            isCollapsed={collapsedSections.lifestyle}
            CardHeader={CardHeader}
          />
        </div>

        {/* Mental Health Section */}
        <div ref={sectionRefs.mental}>
          <MentalHealthCard 
            data={patientReport?.MentalHealthAssessment || {}}
            isCollapsed={collapsedSections.mental}
            CardHeader={CardHeader}
          />
        </div>

        {/* Follow Up Plan Section */}
        <div ref={sectionRefs.followup}>
          <FollowUpPlanCard 
            data={patientReport?.FollowUpPlan || {}}
            isCollapsed={collapsedSections.followup}
            CardHeader={CardHeader}
          />
        </div>

        {/* Action Buttons */}
        <div className="mt-6 mb-20 px-4">
          <div className="flex gap-4">
            <button 
              className="flex-1 py-3 px-6 rounded-xl border-2 border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
              onClick={onCloseCaseClick}
            >
              Close Case
            </button>
            <button 
              className="flex-1 py-3 px-6 rounded-xl bg-[#3973EB] text-white font-medium hover:bg-blue-600 transition-colors"
              onClick={() => setShowFollowup(true)}
            >
              Follow Up
            </button>
          </div>
        </div>

        <FollowupCard 
          isOpen={showFollowup}
          onClose={() => setShowFollowup(false)}
          onSubmit={handleFollowupSubmit}
        />
      </div>
    </div>
  );
};

export default Report; 