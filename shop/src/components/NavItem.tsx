"use client"
import { PRODUCT_CATEGORY } from "@/config"
import { Button } from "./ui/button"
import { ChevronDown } from "lucide-react"
import { cn } from "../../@lib/utils"

type Category = (typeof PRODUCT_CATEGORY)[number]

interface NavItemProps {
    category : Category
    handleOpen : () => void
    isOpen : boolean
    isAnyOpen : boolean
}

const NavItem = ({category, handleOpen, isAnyOpen, isOpen}: NavItemProps) => {
    return (
        <div className='flex '>
            <div className='relative flex items-center'>
                <Button className='gap-1.5'
                    onClick={handleOpen}
                    variant={isOpen  ? 'secondary' : 'ghost'}
                >
                    {category.lable}
                    <ChevronDown className = {
                        cn('h-4 w-4 transition-all text-muted-foreground',
                        {
                            '-rotate-180' : isOpen,
                        })
                    }/>
                </Button>
            </div>
        </div>
    )
}

export default NavItem