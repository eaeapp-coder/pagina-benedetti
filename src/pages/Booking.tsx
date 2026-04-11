import React, { useState } from 'react';
import { SPECIALTIES, DOCTORS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, Phone, MessageSquare } from 'lucide-react';

import PageTransition from '../components/PageTransition';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);

  const steps = [
    { id: 1, name: '1. Especialidad' },
    { id: 2, name: '2. Profesional' },
    { id: 3, name: '3. Fecha y Hora' },
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#F8FAFC] py-12">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Stepper */}
        <div className="flex items-center justify-between mb-12 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          {steps.map((s, i) => (
            <React.Fragment key={s.id}>
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  step >= s.id ? 'bg-[#0088CC] text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                  {step > s.id ? <CheckCircle2 className="w-5 h-5" /> : s.id}
                </div>
                <span className={`text-sm font-medium ${step >= s.id ? 'text-[#1A3A5A]' : 'text-gray-400'}`}>
                  {s.name}
                </span>
              </div>
              {i < steps.length - 1 && (
                <ChevronRight className="w-5 h-5 text-gray-200" />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#1A3A5A] mb-3">Reserva tu Turno Online</h1>
          <p className="text-gray-500">Agenda una cita médica en pocos pasos, de manera fácil y segura.</p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {SPECIALTIES.map((spec) => (
                  <button
                    key={spec.id}
                    onClick={() => setSelectedSpecialty(spec.id)}
                    className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center text-center group ${
                      selectedSpecialty === spec.id 
                        ? 'border-[#0088CC] bg-blue-50' 
                        : 'border-gray-100 hover:border-blue-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className={`p-3 rounded-xl mb-4 transition-colors ${
                      selectedSpecialty === spec.id ? 'bg-[#0088CC] text-white' : 'bg-gray-50 text-[#0088CC] group-hover:bg-blue-100'
                    }`}>
                      <spec.icon className="w-8 h-8" />
                    </div>
                    <span className={`text-sm font-bold ${selectedSpecialty === spec.id ? 'text-[#0088CC]' : 'text-[#1A3A5A]'}`}>
                      {spec.name}
                    </span>
                    {selectedSpecialty === spec.id && (
                      <div className="absolute top-2 right-2 bg-[#0088CC] text-white rounded-full p-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    )}
                  </button>
                ))}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-bold text-[#1A3A5A] mb-6">Selecciona un profesional</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {DOCTORS.filter(d => !selectedSpecialty || d.specialties.includes(SPECIALTIES.find(s => s.id === selectedSpecialty)?.name || '')).map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => setSelectedDoctor(doc.id)}
                      className={`flex items-center p-4 rounded-2xl border-2 transition-all text-left ${
                        selectedDoctor === doc.id ? 'border-[#0088CC] bg-blue-50' : 'border-gray-100 hover:border-blue-200'
                      }`}
                    >
                      <img src={doc.image} alt={doc.name} className="w-16 h-16 rounded-xl object-cover mr-4" />
                      <div>
                        <p className="font-bold text-[#1A3A5A]">{doc.name}</p>
                        <p className="text-sm text-[#0088CC]">{doc.specialties.join(', ')}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-center py-12"
              >
                <div className="bg-green-50 text-green-600 p-4 rounded-2xl inline-block mb-6">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A3A5A] mb-4">¡Casi listo!</h3>
                <p className="text-gray-500 mb-8">
                  Has seleccionado a <strong>{DOCTORS.find(d => d.id === selectedDoctor)?.name}</strong> para <strong>{SPECIALTIES.find(s => s.id === selectedSpecialty)?.name}</strong>.
                </p>
                <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
                  {['09:00', '10:30', '11:00', '14:00', '15:30', '17:00'].map(time => (
                    <button key={time} className="py-3 rounded-xl border border-gray-200 hover:border-[#0088CC] hover:text-[#0088CC] font-bold transition-all">
                      {time}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="mt-12 flex flex-col items-center">
            <button
              onClick={handleNext}
              disabled={step === 1 ? !selectedSpecialty : step === 2 ? !selectedDoctor : false}
              className="w-full md:w-64 bg-[#0088CC] text-white py-4 rounded-full font-bold text-lg hover:bg-[#0077B3] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {step === 3 ? 'Confirmar Turno' : 'Continuar'}
            </button>
            {step > 1 && (
              <button 
                onClick={handleBack}
                className="mt-4 text-gray-400 hover:text-[#1A3A5A] font-medium transition-colors"
              >
                Volver al paso anterior
              </button>
            )}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 font-medium mb-4">¿Necesitas ayuda?</p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="tel:08001234567" className="flex items-center text-[#1A3A5A] font-bold hover:text-[#0088CC] transition-colors">
              <Phone className="w-5 h-5 mr-2 text-[#0088CC]" />
              Llámanos al 0800-123-4567
            </a>
            <a href="#" className="flex items-center text-[#1A3A5A] font-bold hover:text-[#0088CC] transition-colors">
              <MessageSquare className="w-5 h-5 mr-2 text-[#0088CC]" />
              Escríbenos por <span className="underline ml-1">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </PageTransition>
);
}
