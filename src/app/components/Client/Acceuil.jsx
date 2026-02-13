import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import QuickActions from "./QuickActions";
import { useState } from "react";


export default function Acceuil({tickets,isModalOpen, setIsModalOpen}) {

  return (
    <div>
      <div className="min-h-screen bg-gray-50">
        {/* Contenu principal */}
        <HeroSection tickets={tickets} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        <StatsSection tickets={tickets} />
        <QuickActions />
      </div>
    </div>
  );
}