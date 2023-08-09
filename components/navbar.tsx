import React from 'react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'

const Navbar = () => {
    return (
        <div>
            <Button>
                Upgrade
            </Button>
            <ModeToggle />
        </div>
    )
}

export default Navbar