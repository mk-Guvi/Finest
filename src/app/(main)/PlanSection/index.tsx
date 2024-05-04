"use client"
import React from 'react'
import { PlanSectionDesktopView } from './PlanSectionDesktopView'
import { PlanSectionMobileView } from './PlanSectionMobileView'
import GoalSectionDesktopView from './GoalSection'



function PlanSection() {
  return (
    <div className='flex flex-col gap-4'>
    <PlanSectionDesktopView/>
    <PlanSectionMobileView/>
    <GoalSectionDesktopView/>
    </div>
  )
}

export default PlanSection