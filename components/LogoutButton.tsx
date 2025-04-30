'use client'

import { useRouter } from 'next/navigation'
import { logoutUser } from '@/lib/actions/auth.action'
import { startTransition } from 'react'
import { LogOut } from 'lucide-react' // <-- icon library

const LogoutButton = () => {
  const router = useRouter()

  const handleLogout = () => {
    startTransition(async () => {
      await logoutUser()
      router.push('/sign-in')
    })
  }

  return (
    <button
    onClick={handleLogout}
    className="flex items-center justify-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold !bg-primary-200 !text-dark-100 hover:!bg-primary-200/80 transition cursor-pointer"
  >
    <LogOut className="h-4 w-4" />
    <span className="hidden sm:block">Logout</span>
  </button>
  )
}

export default LogoutButton
