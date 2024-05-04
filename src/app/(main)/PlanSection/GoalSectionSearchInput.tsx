"use client"
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

type Props = {}

function GoalSectionSearchInput({}: Props) {
  return (
    <div className="w-56 relative flex items-center">
    <Search className="absolute ml-2 p-0.5 text-gray-500" />
    <Input placeholder="Search" className="pl-9 bg-white rounded-lg" />
  </div>
  )
}

export default GoalSectionSearchInput